'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { services } from '@/data/services';

type LeadFormProps = {
  defaultService?: string;
  locationHint?: string;
};

type ZipResult = {
  ok: boolean;
  city?: string;
  state?: string;
  stateCode?: string;
  message?: string;
};

type FormState = {
  serviceType: string;
  zip: string;
  city: string;
  state: string;
  fullName: string;
  email: string;
  phone: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  notes: string;
  consentSms: boolean;
  company: string;
};

const initialState: FormState = {
  serviceType: 'Auto Glass Repair',
  zip: '',
  city: '',
  state: '',
  fullName: '',
  email: '',
  phone: '',
  vehicleYear: '',
  vehicleMake: '',
  vehicleModel: '',
  notes: '',
  consentSms: false,
  company: ''
};

export function LeadForm({ defaultService, locationHint }: LeadFormProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState<FormState>({ ...initialState, serviceType: defaultService || initialState.serviceType });
  const [zipResult, setZipResult] = useState<ZipResult | null>(null);
  const [zipLoading, setZipLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const zipReady = form.zip.replace(/[^0-9]/g, '').length === 5;
  const canGoNext = Boolean(form.serviceType && zipReady);

  const tracking = useMemo(() => {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    return {
      pageUrl: window.location.href,
      referrer: document.referrer,
      utmSource: params.get('utm_source') || '',
      utmMedium: params.get('utm_medium') || '',
      utmCampaign: params.get('utm_campaign') || '',
      utmTerm: params.get('utm_term') || '',
      utmContent: params.get('utm_content') || ''
    };
  }, []);

  useEffect(() => {
    if (!zipReady) {
      setZipResult(null);
      return;
    }

    let active = true;
    setZipLoading(true);

    fetch(`/api/zip?zip=${form.zip}`)
      .then((response) => response.json())
      .then((data: ZipResult) => {
        if (!active) return;
        setZipResult(data);
        if (data.ok) {
          setForm((current) => ({
            ...current,
            city: data.city || current.city,
            state: data.stateCode || data.state || current.state
          }));
        }
      })
      .catch(() => {
        if (active) {
          setZipResult({ ok: false, message: 'ZIP decode is unavailable right now.' });
        }
      })
      .finally(() => {
        if (active) setZipLoading(false);
      });

    return () => {
      active = false;
    };
  }, [form.zip, zipReady]);

  function updateField(field: keyof FormState, value: string | boolean) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleNext() {
    setError('');
    if (!canGoNext) {
      setError('Choose a service and enter a valid 5-digit ZIP code.');
      return;
    }
    setStep(2);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...form, ...tracking })
      });

      const data = (await response.json()) as { ok: boolean; message?: string; errors?: string[] };

      if (!response.ok || !data.ok) {
        throw new Error(data.errors?.join(' ') || data.message || 'Lead could not be submitted.');
      }

      setSuccess('Thanks. Your quote request was received. The shop will follow up with estimate details.');
      setForm({ ...initialState, serviceType: defaultService || initialState.serviceType });
      setStep(1);
      window.setTimeout(() => {
        window.location.href = '/thank-you';
      }, 700);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form id="quote" className="lead-form" onSubmit={handleSubmit} noValidate>
      <div className="form-header">
        <span className="eyebrow">Impex Auto Glass Repair</span>
        <h2>Get a Quote</h2>
        <p>Tell us what glass service you need. Start with your ZIP so the shop can confirm the service area.</p>
        {locationHint ? <p className="form-location-hint">Page target: {locationHint}</p> : null}
      </div>

      <div className="step-indicator" aria-label="Quote form steps">
        <span className={step === 1 ? 'active' : ''}>1. Service + ZIP</span>
        <span className={step === 2 ? 'active' : ''}>2. Contact</span>
      </div>

      {step === 1 ? (
        <div className="form-step">
          <fieldset>
            <legend>What do you need?</legend>
            <div className="service-options">
              {services.map((service) => (
                <label key={service.slug} className={form.serviceType === service.name ? 'selected' : ''}>
                  <input
                    type="radio"
                    name="serviceType"
                    value={service.name}
                    checked={form.serviceType === service.name}
                    onChange={(event) => updateField('serviceType', event.target.value)}
                  />
                  <span>{service.name}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="field-label" htmlFor="zip">
            ZIP code
            <input
              id="zip"
              name="zip"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="Enter ZIP"
              value={form.zip}
              maxLength={5}
              onChange={(event) => updateField('zip', event.target.value.replace(/[^0-9]/g, '').slice(0, 5))}
              required
            />
          </label>

          <div className="zip-status" aria-live="polite">
            {zipLoading ? 'Checking ZIP…' : null}
            {!zipLoading && zipResult?.ok ? `Serving: ${zipResult.city}, ${zipResult.stateCode || zipResult.state}` : null}
            {!zipLoading && zipResult && !zipResult.ok ? zipResult.message : null}
          </div>

          <button type="button" className="button button-yellow button-full" onClick={handleNext} disabled={!canGoNext}>
            Continue to contact details
          </button>
        </div>
      ) : (
        <div className="form-step">
          <div className="selected-summary">
            <strong>{form.serviceType}</strong>
            <span>{form.city ? `${form.city}, ${form.state} ${form.zip}` : `ZIP ${form.zip}`}</span>
            <button type="button" onClick={() => setStep(1)}>
              Edit
            </button>
          </div>

          <div className="field-grid">
            <label className="field-label" htmlFor="fullName">
              Name
              <input
                id="fullName"
                name="fullName"
                autoComplete="name"
                placeholder="Your name"
                value={form.fullName}
                onChange={(event) => updateField('fullName', event.target.value)}
                required
              />
            </label>

            <label className="field-label" htmlFor="phone">
              Phone
              <input
                id="phone"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Phone number"
                value={form.phone}
                onChange={(event) => updateField('phone', event.target.value)}
                required
              />
            </label>

            <label className="field-label" htmlFor="email">
              Email
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                value={form.email}
                onChange={(event) => updateField('email', event.target.value)}
                required
              />
            </label>
          </div>

          <div className="vehicle-fields">
            <p>Vehicle details <span>optional, but helpful</span></p>
            <div className="field-grid three">
              <label className="field-label" htmlFor="vehicleYear">
                Year
                <input
                  id="vehicleYear"
                  name="vehicleYear"
                  inputMode="numeric"
                  placeholder="2022"
                  value={form.vehicleYear}
                  maxLength={4}
                  onChange={(event) => updateField('vehicleYear', event.target.value.replace(/[^0-9]/g, '').slice(0, 4))}
                />
              </label>

              <label className="field-label" htmlFor="vehicleMake">
                Make
                <input
                  id="vehicleMake"
                  name="vehicleMake"
                  placeholder="Toyota"
                  value={form.vehicleMake}
                  onChange={(event) => updateField('vehicleMake', event.target.value)}
                />
              </label>

              <label className="field-label" htmlFor="vehicleModel">
                Model
                <input
                  id="vehicleModel"
                  name="vehicleModel"
                  placeholder="Camry"
                  value={form.vehicleModel}
                  onChange={(event) => updateField('vehicleModel', event.target.value)}
                />
              </label>
            </div>
          </div>

          <label className="field-label" htmlFor="notes">
            Anything the shop should know?
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Chip, crack, side glass, back glass, calibration need, insurance question, etc."
              value={form.notes}
              onChange={(event) => updateField('notes', event.target.value)}
            />
          </label>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={form.consentSms}
              onChange={(event) => updateField('consentSms', event.target.checked)}
            />
            <span>I can receive text messages about this quote request.</span>
          </label>

          <label className="form-hp" htmlFor="company">
            Company
            <input
              id="company"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(event) => updateField('company', event.target.value)}
            />
          </label>

          <button type="submit" className="button button-yellow button-full" disabled={submitting}>
            {submitting ? 'Sending quote request…' : 'Send my quote request'}
          </button>
        </div>
      )}

      {error ? <p className="form-message error" role="alert">{error}</p> : null}
      {success ? <p className="form-message success" role="status">{success}</p> : null}
    </form>
  );
}
