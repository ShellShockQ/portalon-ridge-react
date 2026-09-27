import { teamMembers } from "../data/content";

export function Team() {
  return (
    <section id="team" className="alt">
      <div className="wrap">
        <div className="section-head">
          <h2>Sponsor &amp; team</h2>
          <span className="section-num mono">06 / WHO'S BEHIND IT</span>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.role}>
              <div className="person-mark">{member.initials}</div>
              <p className="person-name">{member.name}</p>
              <p className="person-role">{member.role}</p>
              <p className="person-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
