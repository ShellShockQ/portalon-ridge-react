import { opportunity } from "../data/content";

export function Opportunity() {
  return (
    <section id="opportunity">
      <div className="wrap">
        <div className="section-head">
          <h2>The opportunity</h2>
          <span className="section-num mono">01 / OVERVIEW</span>
        </div>
        <div className="opp-grid">
          <div>
            <p className="lede">{opportunity.lede}</p>
            <p className="pull">{opportunity.pullQuote}</p>
          </div>
          <ul className="thesis-list">
            {opportunity.thesisPoints.map((point) => (
              <li key={point.key}>
                <span className="k mono">{point.key}</span>
                <span className="v">{point.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
