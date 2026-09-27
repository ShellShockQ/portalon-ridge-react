import { offeringTerms } from "../data/content";

export function OfferingTerms() {
  return (
    <section id="terms">
      <div className="wrap">
        <div className="section-head">
          <h2>Offering terms</h2>
          <span className="section-num mono">07 / STRUCTURE</span>
        </div>
        <div className="terms-grid">
          {offeringTerms.map((term) => (
            <div className="term-row" key={term.key}>
              <span className="term-key">{term.key}</span>
              <span className="term-val">{term.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
