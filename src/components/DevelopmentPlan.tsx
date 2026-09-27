import { developmentPhases } from "../data/content";

export function DevelopmentPlan() {
  return (
    <section id="plan" className="alt">
      <div className="wrap">
        <div className="section-head">
          <h2>Development plan</h2>
          <span className="section-num mono">04 / PHASING</span>
        </div>
        <div className="phases">
          {developmentPhases.map((phase) => (
            <div className="phase" key={phase.number}>
              <div className="phase-num mono">{phase.number}</div>
              <div>
                <p className="phase-name">{phase.name}</p>
                <p className="phase-desc">{phase.description}</p>
              </div>
              <div className="phase-timing">{phase.timing}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
