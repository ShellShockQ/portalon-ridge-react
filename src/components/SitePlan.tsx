import { sitePlanNote } from "../data/content";

export function SitePlan() {
  return (
    <section id="map">
      <div className="wrap">
        <div className="section-head">
          <h2>Site plan</h2>
          <span className="section-num mono">03 / CONCEPTUAL LAYOUT</span>
        </div>
        <p className="body-text" style={{ marginBottom: 26 }}>
          {sitePlanNote}
        </p>
        <div className="map-frame">
          <svg viewBox="0 0 900 460" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="0" width="900" height="460" fill="#16283b" />
            <g stroke="#3a5878" strokeWidth={1} opacity={0.5}>
              <path
                d="M0,60 h900 M0,140 h900 M0,220 h900 M0,300 h900 M0,380 h900"
                strokeDasharray="2 6"
              />
              <path
                d="M90,0 v460 M270,0 v460 M450,0 v460 M630,0 v460 M810,0 v460"
                strokeDasharray="2 6"
              />
            </g>
            <polygon
              points="120,90 500,60 800,130 780,380 380,410 130,340"
              fill="none"
              stroke="#eee7d8"
              strokeWidth={1.6}
            />
            <g fill="#5c7a5e" opacity={0.35}>
              <ellipse cx={200} cy={200} rx={60} ry={90} />
              <ellipse cx={720} cy={230} rx={55} ry={100} />
            </g>
            <g fill="none" stroke="#eee7d8" strokeWidth={1.4}>
              <rect x={380} y={180} width={140} height={90} />
              <rect x={400} y={280} width={70} height={55} />
              <circle cx={530} cy={300} r={30} />
            </g>
            <path d="M780,380 L520,360" stroke="#3a92b5" strokeWidth={2.4} opacity={0.8} />
            <text x={560} y={410} fill="#3a92b5" fontFamily="IBM Plex Mono" fontSize={12}>
              OCEAN VIEW CORRIDOR (S)
            </text>
            <text x={430} y={205} fill="#c9bfa8" fontFamily="IBM Plex Mono" fontSize={11}>
              MAIN RESIDENCE
            </text>
            <text x={415} y={310} fill="#c9bfa8" fontFamily="IBM Plex Mono" fontSize={10}>
              GUEST HOUSE
            </text>
            <text x={500} y={295} fill="#c9bfa8" fontFamily="IBM Plex Mono" fontSize={10}>
              POOL
            </text>
            <text x={150} y={195} fill="#c9bfa8" fontFamily="IBM Plex Mono" fontSize={10}>
              FOREST BUFFER
            </text>
            <text x={660} y={220} fill="#c9bfa8" fontFamily="IBM Plex Mono" fontSize={10}>
              FOREST BUFFER
            </text>
            <text x={20} y={20} fill="#eee7d8" fontFamily="IBM Plex Mono" fontSize={10}>
              N ↑
            </text>
          </svg>
          <div className="map-caption">
            <span>SOURCE: CONCEPTUAL, [ARCHITECT/SURVEYOR NAME] PENDING</span>
            <span>SCALE: NOT TO SCALE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
