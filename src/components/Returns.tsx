import { returnRows, returnsFootnote } from "../data/content";

export function Returns() {
  return (
    <section id="returns">
      <div className="wrap">
        <div className="section-head">
          <h2>Return summary</h2>
          <span className="section-num mono">05 / PROJECTED PERFORMANCE</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Target</th>
                <th>Basis</th>
              </tr>
            </thead>
            <tbody>
              {returnRows.map((row) => (
                <tr key={row.metric} className={row.highlight ? "highlight" : undefined}>
                  <td>{row.metric}</td>
                  <td className="mono">{row.target}</td>
                  <td>{row.basis}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="returns-footnote">{returnsFootnote}</p>
      </div>
    </section>
  );
}
