import type { ZipInfo } from './zip';

export type LeadSubmission = {
  serviceType: string;
  zip: string;
  city?: string;
  state?: string;
  fullName: string;
  email: string;
  phone: string;
  vehicleYear?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  notes?: string;
  consentSms?: boolean;
  company?: string;
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
};

type ValidationResult =
  | { success: true; data: LeadSubmission }
  | { success: false; errors: string[] };

function cleanString(value: unknown, maxLength = 500) {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function cleanPhone(value: unknown) {
  return cleanString(value, 30).replace(/[^0-9+().\-\s]/g, '');
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function validateLeadSubmission(payload: unknown): ValidationResult {
  const body = payload as Record<string, unknown>;
  const data: LeadSubmission = {
    serviceType: cleanString(body.serviceType, 80),
    zip: cleanString(body.zip, 10).replace(/[^0-9]/g, '').slice(0, 5),
    city: cleanString(body.city, 80),
    state: cleanString(body.state, 40),
    fullName: cleanString(body.fullName, 120),
    email: cleanString(body.email, 120).toLowerCase(),
    phone: cleanPhone(body.phone),
    vehicleYear: cleanString(body.vehicleYear, 4).replace(/[^0-9]/g, ''),
    vehicleMake: cleanString(body.vehicleMake, 80),
    vehicleModel: cleanString(body.vehicleModel, 80),
    notes: cleanString(body.notes, 1200),
    consentSms: Boolean(body.consentSms),
    company: cleanString(body.company, 120),
    pageUrl: cleanString(body.pageUrl, 500),
    referrer: cleanString(body.referrer, 500),
    utmSource: cleanString(body.utmSource, 120),
    utmMedium: cleanString(body.utmMedium, 120),
    utmCampaign: cleanString(body.utmCampaign, 120),
    utmTerm: cleanString(body.utmTerm, 120),
    utmContent: cleanString(body.utmContent, 120)
  };

  const errors: string[] = [];

  if (!data.serviceType) errors.push('Choose the service you need.');
  if (data.zip.length !== 5) errors.push('Enter a valid 5-digit ZIP code.');
  if (!data.fullName) errors.push('Enter your name.');
  if (!data.email || !isEmail(data.email)) errors.push('Enter a valid email address.');
  if (!data.phone || data.phone.replace(/[^0-9]/g, '').length < 10) {
    errors.push('Enter a valid phone number.');
  }

  if (errors.length) {
    return { success: false, errors };
  }

  return { success: true, data };
}

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts.shift() || fullName;
  const lastName = parts.join(' ');
  return { firstName, lastName };
}

function stripUndefined<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, item]) => item !== undefined && item !== '')
  ) as T;
}

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not configured.`);
  }
  return value;
}

function requiredNumberEnv(name: string) {
  const value = Number(requireEnv(name));
  if (!Number.isFinite(value)) {
    throw new Error(`${name} must be a number.`);
  }
  return value;
}

export function buildLeadNote(lead: LeadSubmission, zipInfo: ZipInfo | null) {
  return [
    'Website lead: Impex Auto Glass Repair quote request',
    `Requested service: ${lead.serviceType}`,
    `ZIP: ${lead.zip}`,
    zipInfo ? `Decoded location: ${zipInfo.city}, ${zipInfo.stateCode}` : null,
    lead.vehicleYear || lead.vehicleMake || lead.vehicleModel
      ? `Vehicle: ${[lead.vehicleYear, lead.vehicleMake, lead.vehicleModel].filter(Boolean).join(' ')}`
      : null,
    lead.notes ? `Customer notes: ${lead.notes}` : null,
    lead.pageUrl ? `Page URL: ${lead.pageUrl}` : null,
    lead.referrer ? `Referrer: ${lead.referrer}` : null,
    lead.utmSource ? `UTM source: ${lead.utmSource}` : null,
    lead.utmMedium ? `UTM medium: ${lead.utmMedium}` : null,
    lead.utmCampaign ? `UTM campaign: ${lead.utmCampaign}` : null,
    lead.utmTerm ? `UTM term: ${lead.utmTerm}` : null,
    lead.utmContent ? `UTM content: ${lead.utmContent}` : null
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildOmegaInvoicePayload(lead: LeadSubmission, zipInfo: ZipInfo | null) {
  const { firstName, lastName } = splitName(lead.fullName);
  const serviceLocation = zipInfo
    ? `${zipInfo.city}, ${zipInfo.stateCode} ${lead.zip}`
    : `${lead.city || ''} ${lead.state || ''} ${lead.zip}`.trim();
  const note = buildLeadNote(lead, zipInfo);
  const vehicleYear = lead.vehicleYear ? Number(lead.vehicleYear) : undefined;

  return stripUndefined({
    salesman_1_id: requireEnv('OMEGA_SALESMAN_1_ID'),
    location_id: requiredNumberEnv('OMEGA_LOCATION_ID'),
    account_company_id: requiredNumberEnv('OMEGA_ACCOUNT_COMPANY_ID'),
    pricing_profile_id: requiredNumberEnv('OMEGA_PRICING_PROFILE_ID'),
    customer_email: lead.email,
    customer_fname: firstName,
    customer_surname: lastName,
    customer_phone: lead.phone,
    customer_city: zipInfo?.city || lead.city,
    customer_state: zipInfo?.stateCode || lead.state,
    customer_sms: Boolean(lead.consentSms),
    customer_email_opt_out: false,
    vehicle_year: vehicleYear,
    vehicle_make: lead.vehicleMake,
    vehicle_model: lead.vehicleModel,
    vehicle_description: [lead.serviceType, serviceLocation, lead.notes].filter(Boolean).join(' | '),
    invoice_status: 'NS',
    job_status: 'LE',
    medium: lead.utmMedium || 'website',
    campaign: lead.utmCampaign || process.env.LEAD_DEFAULT_CAMPAIGN || 'auto-glass-repair',
    referrer: lead.referrer || lead.utmSource || 'website',
    term: lead.utmTerm || process.env.LEAD_DEFAULT_TERM || 'auto glass repair',
    content: [lead.utmContent, lead.serviceType, `zip:${lead.zip}`].filter(Boolean).join(' | '),
    warranty_reason: lead.serviceType,
    ...(process.env.OMEGA_INCLUDE_NOTES === 'false'
      ? {}
      : {
          Notes: [
            {
              note,
              customer_visible: false,
              is_tech_note: false,
              deleted: false
            }
          ]
        })
  });
}

export async function submitLeadToOmega(lead: LeadSubmission, zipInfo: ZipInfo | null) {
  const apiKey = requireEnv('OMEGA_API_KEY');
  const baseUrl = process.env.OMEGA_API_BASE_URL || 'https://app.omegaedi.com/api/2.0';
  const invoiceUrl = `${baseUrl.replace(/\/$/, '')}/Invoices`;
  const payload = buildOmegaInvoicePayload(lead, zipInfo);

  const response = await fetch(invoiceUrl, {
    method: 'POST',
    headers: {
      api_key: apiKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const responseText = await response.text();
  let responseBody: unknown = responseText;

  try {
    responseBody = responseText ? JSON.parse(responseText) : null;
  } catch {
    responseBody = responseText;
  }

  if (!response.ok) {
    throw new Error(
      `Omega EDI returned ${response.status}: ${
        typeof responseBody === 'string' ? responseBody : JSON.stringify(responseBody)
      }`
    );
  }

  const invoiceId = typeof responseBody === 'number' || typeof responseBody === 'string' ? responseBody : null;

  if (process.env.OMEGA_CREATE_INTERACTION === 'true' && invoiceId) {
    const params = new URLSearchParams({
      email: lead.email,
      source: lead.utmSource || 'website',
      campaign: lead.utmCampaign || process.env.LEAD_DEFAULT_CAMPAIGN || 'auto-glass-repair',
      medium: lead.utmMedium || 'website',
      content: lead.utmContent || lead.serviceType,
      term: lead.utmTerm || process.env.LEAD_DEFAULT_TERM || 'auto glass repair',
      invoice_id: String(invoiceId),
      source_id: `impex-web-${Date.now()}`,
      note: buildLeadNote(lead, zipInfo)
    });

    await fetch(`${baseUrl.replace(/\/$/, '')}/Interactions?${params.toString()}`, {
      method: 'POST',
      headers: {
        api_key: apiKey
      }
    });
  }

  return {
    invoiceId,
    payload
  };
}
