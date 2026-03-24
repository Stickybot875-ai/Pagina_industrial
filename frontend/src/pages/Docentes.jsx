import HorarioDocentes from "../sections/HorarioDocentes";
import "./Pagina.css";

export default function Docentes() {
  return (
    <main className="pagina-main">
      <div className="pagina-hero pagina-hero-solid">
        <div className="pagina-hero-overlay">
          <p className="pagina-hero-etiqueta">DEPARTAMENTO DE INGENIERÍA INDUSTRIAL</p>
          <h1 className="pagina-hero-titulo">Horario de Docentes</h1>
          <p className="pagina-hero-sub">Consulta la disponibilidad del cuerpo académico</p>
        </div>
      </div>
      <div className="pagina-contenido">
        <div className="pagina-card">
          <HorarioDocentes />
        </div>
      </div>
    </main>
  );
}
