import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import logo from "../assets/images/avantetek_logo.png";

function Header({ activeSection, menuOpen, onNavigate, onToggleMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const links = [
    ["services", "What we do"],
    ["about", "About us"],
    ["process", "Our process"],
    ["contact", "Contact"],
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <a
        className="brand"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("/");
        }}
        aria-label="Avante Tek home"
      >
        <img src={logo} alt="Avante Tek" />
        <span>
          Avante<span>Tek</span>
        </span>
      </a>
      <nav
        className={menuOpen ? "main-nav is-open" : "main-nav"}
        aria-label="Main navigation"
      >
        {links.map(([path, label]) => (
          <a
            className={activeSection === path ? "is-active" : ""}
            href={`/${path}`}
            key={path}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(`/${path}`);
            }}
          >
            {label}
          </a>
        ))}
        <a
          className={`nav-cta ${activeSection === "contact" ? "is-active" : ""}`}
          href="/contact"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("/contact");
          }}
        >
          Start a conversation <ArrowUpRight size={16} />
        </a>
      </nav>
      <button
        className="menu-toggle"
        onClick={onToggleMenu}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>
    </header>
  );
}

export default Header;
