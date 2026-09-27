import { footer } from "../data/content";

export function SiteFooter() {
  return (
    <footer>
      <div className="wrap footer-row">
        <span>{footer.left}</span>
        <span>{footer.right}</span>
      </div>
    </footer>
  );
}
