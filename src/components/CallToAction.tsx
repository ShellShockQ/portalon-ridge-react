import { cta } from "../data/content";

export function CallToAction() {
  return (
    <section className="cta alt">
      <div className="wrap">
        <h2>{cta.heading}</h2>
        <p className="body-text">{cta.body}</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href={cta.primaryHref}>
            {cta.primaryLabel}
          </a>
          <a className="btn btn-ghost" href="#terms">
            Review offering terms
          </a>
        </div>
      </div>
    </section>
  );
}
