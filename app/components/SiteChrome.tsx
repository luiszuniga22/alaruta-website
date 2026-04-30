import { Handshake, MessageCircle, Smartphone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "App", href: "/app" },
  { label: "Partners", href: "/partners" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="AlaRuta home">
        <span className="brand-mark">
          <img src="/er-logo.png" alt="" />
        </span>
        AlaRuta
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="/app">
        Download
      </a>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <span>AlaRuta</span>
      <span>En Ruta app</span>
      <span>Latin America</span>
      <span>Partners</span>
      <span>Powered by Helix</span>
      <a href="https://olympushelix.com/enruta/privacy">Privacy</a>
      <Handshake size={18} aria-hidden="true" />
      <MessageCircle size={18} aria-hidden="true" />
      <Smartphone size={18} aria-hidden="true" />
    </footer>
  );
}
