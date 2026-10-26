import logo from "../assets/images/avantetek_logo.png";

function Footer({ onNavigate }) {
  const links = [
    ["services", "Services"],
    ["about", "About"],
    ["process", "Process"],
    ["contact", "Contact"],
  ];
  const navigate = (event, path) => {
    event.preventDefault();
    onNavigate(`/${path}`);
  };

  return (
    <footer className="site-footer">
      <a
        className="brand footer-brand"
        href="/"
        onClick={(event) => navigate(event, "")}
      >
        <img src={logo} alt="Avante Tek" />
        <span>
          Avante<span>Tek</span>
        </span>
      </a>
      <p>Helping good businesses find great people.</p>
      <div className="footer-links">
        {links.map(([path, label]) => (
          <a
            href={`/${path}`}
            key={path}
            onClick={(event) => navigate(event, path)}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© 2026 Avante Tek. All rights reserved.</span>
        <span>Made for what&apos;s next</span>
      </div>
    </footer>
  );
}

export default Footer;
