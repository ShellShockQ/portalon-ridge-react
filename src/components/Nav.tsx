import { navLinks } from "../data/content";

export function Nav() {
  return (
    <header className="nav">
      <div className="nav-row">
        <div className="brand">
          <span className="mark">§</span>Portalón&nbsp;Ridge&nbsp;Prospectus
        </div>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
