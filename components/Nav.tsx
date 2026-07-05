import BrandMark from "./BrandMark";
import Button from "./Button";

const NAV_ITEMS = [
  { label: "Pulse", href: "#pulse" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#numbers" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#journal" },
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#" className="nav-brand" aria-label="Levedge AI — home">
        <BrandMark size={22} />
        <span className="nav-brand-name">Levedge</span>
        <span className="nav-brand-tag">AI</span>
      </a>
      <nav className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <Button href="#contact" variant="outline-dark" size="sm" arrow>
        Book a call
      </Button>
    </header>
  );
}
