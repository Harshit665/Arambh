import "./Navbar.css";
import { Link } from "react-router-dom";
const logo = "/aagaaz-logo.png";

const defaultLinks = [
  { label: "About", href: "#about" },
  { label: "Sports", href: "#sports" },
  { label: "Schedule", href: "#schedule" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ links = defaultLinks }) {
  return (
    <header className="navShell">
      <nav className="navPill" aria-label="Primary">
        <div className="navInner">
          <Link className="brand" to="/" aria-label="AAGAAZ">
            <img className="brandLogo" src={logo} alt="" aria-hidden="true" />
            <span className="brandText" aria-hidden="true">
              AAGAAZ
            </span>
          </Link>

          <div className="navLinks">
            {links.map((item) =>
              item.to ? (
                <Link key={item.label} className="navLink" to={item.to}>
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} className="navLink" href={item.href}>
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
