type LeadFormProps = {
  defaultService?: string;
  locationHint?: string;
};

const omegaQuoterUrl = 'https://app.omegaedi.com/quoter/?folder=impex';

export function LeadForm({ defaultService, locationHint }: LeadFormProps) {
  return (
    <section id="quote" className="lead-form omega-quote-card" aria-labelledby="quote-heading">
      <div className="form-header">
        <span className="eyebrow">Impex Auto Glass Repair</span>
        <h2 id="quote-heading">Get an Instant Quote</h2>
        <p>
          Use the same Impex Auto Glass quote tool customers already use today. The quote stays inside the current Omega
          workflow, so the shop does not need a new API key for launch.
        </p>
        {defaultService ? <p className="form-location-hint">Service page: {defaultService}</p> : null}
        {locationHint ? <p className="form-location-hint">Location page: {locationHint}</p> : null}
      </div>

      <div className="omega-frame-wrap">
        <iframe
          title="Impex Auto Glass instant quote form"
          src={omegaQuoterUrl}
          className="omega-frame"
          width="100%"
          height="800"
          loading="lazy"
          frameBorder="0"
        />
      </div>

      <p className="quote-note">
        This quote form is powered by Impex Auto Glass&apos; existing Omega EDI quote system.
      </p>
    </section>
  );
}
