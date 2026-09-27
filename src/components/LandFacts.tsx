import { siteFacts } from "../data/content";

export function LandFacts() {
  return (
    <section id="land" className="alt">
      <div className="wrap">
        <div className="section-head">
          <h2>The land</h2>
          <span className="section-num mono">02 / SITE FACTS</span>
        </div>
        <div className="facts-grid">
          {siteFacts.map((fact) => (
            <div className="fact" key={fact.label}>
              <div className="fact-label">{fact.label}</div>
              <div className="fact-value">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
