import { riskDisclosure } from "../data/content";

export function RiskDisclosure() {
  return (
    <section>
      <div className="wrap risk">
        <p>
          <strong style={{ color: "var(--text-on-ink)" }}>
            Risk factors &amp; disclosures (placeholder).
          </strong>{" "}
          {riskDisclosure}
        </p>
      </div>
    </section>
  );
}
