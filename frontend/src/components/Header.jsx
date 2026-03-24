import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Departamento", href: "/departamento" },
  { label: "Docentes", href: "/docentes" },
  { label: "Eventos", href: "/eventos" },
  { label: "Semanas Tecnológicas", href: "/semanas" },
  { label: "Productos Científicos", href: "/productos" },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header-wrapper">
      {/* Barra superior */}
      <div className="header-topbar">
        <span>TecNM Campus Aguascalientes</span>
      </div>

      {/* Barra de logos */}
      <div className="header-logos">
        <img
          src="https://aguascalientes.tecnm.mx/wp-content/uploads/2023/09/logoheader.png"
          alt="TecNM Campus Aguascalientes"
          className="header-logo-main"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <img
          src="https://aguascalientes.tecnm.mx/wp-content/uploads/2023/09/pleca-gob1.png"
          alt="Gobierno de México"
          className="header-logo-pleca"
          onError={(e) => { e.target.style.display = "none"; }}
        />
        <img
          src="https://aguascalientes.tecnm.mx/wp-content/uploads/2023/09/pleca_tecnm.jpg"
          alt="TecNM"
          className="header-logo-tecnm"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>

      {/* Navbar */}
      <nav className="header-nav">
        <div className="header-nav-inner">
          <button
            className="header-hamburger"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú"
          >
            ☰
          </button>
          <ul className={`header-nav-links ${menuAbierto ? "open" : ""}`}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMenuAbierto(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
