import { NextResponse } from 'next/server';
import { resolveZipInfo } from '@/lib/zip';
import { submitLeadToOmega, validateLeadSubmission } from '@/lib/omega';

export const dynamic = 'force-dynamic';

type LeadResponse = {
  ok: boolean;
  message: string;
  mode?: 'demo' | 'omega';
  leadId?: string | number | null;
  errors?: string[];
};

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json<LeadResponse>(
      { ok: false, message: 'Invalid request body.', errors: ['Invalid JSON.'] },
      { status: 400 }
    );
  }

  const validation = validateLeadSubmission(body);

  if (!validation.success) {
    return NextResponse.json<LeadResponse>(
      { ok: false, message: 'Please check the form.', errors: validation.errors },
      { status: 400 }
    );
  }

  const lead = validation.data;

  // Honeypot field for basic bot protection. Return success without sending spam.
  if (lead.company) {
    return NextResponse.json<LeadResponse>({
      ok: true,
      message: 'Thanks. Your request was received.',
      mode: 'demo',
      leadId: 'filtered'
    });
  }

  const zipInfo = await resolveZipInfo(lead.zip);
  const mode = process.env.LEAD_CAPTURE_MODE || (process.env.OMEGA_API_KEY ? 'omega' : 'demo');

  if (mode !== 'omega') {
    const demoId = `demo-${Date.now()}`;
    console.info('Demo lead captured. Set LEAD_CAPTURE_MODE=omega to send to POS.', {
      demoId,
      lead,
      zipInfo
    });

    return NextResponse.json<LeadResponse>({
      ok: true,
      message: 'Thanks. Your request was received.',
      mode: 'demo',
      leadId: demoId
    });
  }

  try {
    const result = await submitLeadToOmega(lead, zipInfo);

    return NextResponse.json<LeadResponse>({
      ok: true,
      message: 'Thanks. Your request was received.',
      mode: 'omega',
      leadId: result.invoiceId
    });
  } catch (error) {
    console.error('Omega EDI lead submission failed:', error);

    return NextResponse.json<LeadResponse>(
      {
        ok: false,
        message: 'The quote request could not be sent right now. Please try again or contact the shop.',
        errors: [error instanceof Error ? error.message : 'Unknown integration error.']
      },
      { status: 502 }
    );
  }
}
