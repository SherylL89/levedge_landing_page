import { CLIENT_LOGOS, PARTNERS, type Logo } from "@/lib/site";

function Group({ label, logos }: { label: string; logos: Logo[] }) {
  return (
    <div className="logobar-group">
      <div className="logobar-label">{label}</div>
      <ul className="logobar-list">
        {logos.map((l) => {
          const mark = l.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={l.src} alt={l.name} />
          ) : (
            <span className="logobar-text">{l.name}</span>
          );
          return <li key={l.name}>{l.href ? <a href={l.href}>{mark}</a> : mark}</li>;
        })}
      </ul>
    </div>
  );
}

// Renders nothing until CLIENT_LOGOS or PARTNERS has entries (lib/site.ts).
export default function LogoBar() {
  if (CLIENT_LOGOS.length === 0 && PARTNERS.length === 0) return null;
  return (
    <section className="logobar" aria-label="Clients and partners">
      {CLIENT_LOGOS.length > 0 && <Group label="Trusted by teams at" logos={CLIENT_LOGOS} />}
      {PARTNERS.length > 0 && <Group label="Partners" logos={PARTNERS} />}
    </section>
  );
}
