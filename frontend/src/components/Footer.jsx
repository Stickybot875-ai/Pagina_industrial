import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* Columna 1: Logo + dirección */}
        <div className="footer-col">
          <img
            src="https://aguascalientes.tecnm.mx/wp-content/uploads/2023/09/logoheader.png"
            alt="TecNM Campus Aguascalientes"
            className="footer-logo"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <p className="footer-direccion">
            Av. Adolfo López Mateos #1801 Ote., Fracc. Bona Gens,<br />
            C.P. 20255, Aguascalientes, Ags., México
          </p>
        </div>

        {/* Columna 2: Links rápidos */}
        <div className="footer-col">
          <h4 className="footer-heading">Links Rápidos</h4>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#hero">Departamento</a></li>
            <li><a href="#docentes">Docentes</a></li>
            <li><a href="#ponentes">Ponentes</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-col">
          <h4 className="footer-heading">Contacto</h4>
          <p>📧 comunicacion@aguascalientes.tecnm.mx</p>
          <p>📞 +52 (449) 910 50 02</p>
          <p>🌐 <a href="https://aguascalientes.tecnm.mx" target="_blank" rel="noreferrer">aguascalientes.tecnm.mx</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 TecNM Campus Aguascalientes — Departamento de Ingeniería Industrial — Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
