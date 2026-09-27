import heroPhoto from "../assets/hero.jpg";
import { hero } from "../data/content";

export function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-photo"
        src={heroPhoto}
        alt="Ocean view from the Portalón hills toward the southern Pacific coast"
      />
      <div className="hero-scrim" />
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="sep" />
          {hero.eyebrow}
        </div>
        <h1 className="title">{hero.title}</h1>
        <p className="hero-sub">{hero.subtitle}</p>
        <div className="hero-stats">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <span className="stat-num">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
