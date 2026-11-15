import BrandMark from "./BrandMark";

const COLUMNS = [
  {
    header: "Levedge",
    links: [
      { label: "Who we help", href: "#who" },
      { label: "How we work", href: "#how" },
      { label: "Offers", href: "#offers" },
    ],
  },
  {
    header: "More",
    links: [
      { label: "Levedge Marketing", href: "#marketing" },
      { label: "Pulse", href: "#pulse" },
    ],
  },
  {
    header: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">
          <BrandMark size={22} />
          <span className="footer-brand-name">Levedge</span>
        </div>
        <div className="footer-tagline">
          Leverage AI to create an edge. AI-native engines for growth and operations.
        </div>
        <div className="footer-legal">© {new Date().getFullYear()} Levedge LLC</div>
      </div>
      {COLUMNS.map((col) => (
        <div key={col.header} className="footer-col">
          <div className="footer-col-header">{col.header}</div>
          <ul>
            {col.links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
