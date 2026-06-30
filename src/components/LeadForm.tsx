type LeadFormProps = {
  defaultService?: string;
  locationHint?: string;
};

const omegaQuoterUrl = 'https://app.omegaedi.com/quoter/?folder=impex';

export function LeadForm({ defaultService, locationHint }: LeadFormProps) {
  return (
    <section id="quote" className="lead-form omega-quote-card" aria-labelledby="quote-heading">
      <div className="form-header">
        <span className="eyebrow">Get a Quote</span>
        <h2 id="quote-heading">Start Your Auto Glass Quote</h2>
        <p>Enter your vehicle, damaged glass, ZIP code, and contact details below.</p>
        {defaultService ? <p className="form-location-hint">Service needed: {defaultService}</p> : null}
        {locationHint ? <p className="form-location-hint">Area: {locationHint}</p> : null}
      </div>

      <div className="omega-frame-wrap">
        <iframe
          title="Impex Auto Glass quote form"
          src={omegaQuoterUrl}
          className="omega-frame"
          width="100%"
          height="860"
          frameBorder="0"
        />
      </div>

      <p className="quote-note">
        Having trouble seeing the form?{' '}
        <a href={omegaQuoterUrl} target="_blank" rel="noreferrer">
          Open the quote form
        </a>
        .
      </p>
    </section>
  );
}
