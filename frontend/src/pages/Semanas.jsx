import SemanaTecnologica from "../sections/SemanaTecnologica";
import "./Pagina.css";

export default function Semanas() {
  return (
    <main className="pagina-main">
      <div className="pagina-hero pagina-hero-solid">
        <div className="pagina-hero-overlay">
          <p className="pagina-hero-etiqueta">DEPARTAMENTO DE INGENIERÍA INDUSTRIAL</p>
          <h1 className="pagina-hero-titulo">Semanas Tecnológicas</h1>
          <p className="pagina-hero-sub">Historial de eventos académicos por semestre</p>
        </div>
      </div>
      <div className="pagina-contenido">
        <div className="pagina-card">
          <SemanaTecnologica />
        </div>
      </div>
    </main>
  );
}
