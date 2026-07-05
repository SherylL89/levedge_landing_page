import BrandMark from "./BrandMark";

const COLUMNS = [
  { header: "Practice", links: ["Approach", "Engagements", "Case studies", "Pricing"] },
  { header: "Pulse", links: ["Overview", "Pricing", "Changelog", "Status"] },
  { header: "Company", links: ["About", "Journal", "Contact", "Careers"] },
];

export default function Footer() {
  return (
    <footer className="footer" id="about">
      <div>
        <div className="footer-brand">
          <BrandMark size={22} />
          <span className="footer-brand-name">Levedge AI</span>
        </div>
        <div className="footer-tagline">
          AI consulting. Pulse: our growth engine for social.
        </div>
      </div>
      {COLUMNS.map((col) => (
        <div key={col.header} className="footer-col">
          <div className="footer-col-header">{col.header}</div>
          <ul>
            {col.links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
