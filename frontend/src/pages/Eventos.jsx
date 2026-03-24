import "./Pagina.css";

const eventos = [
  {
    nombre: "Panel: Mujeres Industriales: Legado y Futuro",
    fecha: "Martes 14 de octubre, 19:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Panel",
    color: "#800020",
  },
  {
    nombre: "Conferencias Virtuales: Egresados en la Modalidad a Distancia",
    fecha: "Lunes 13 al Viernes 17 de octubre, 12:00 hrs",
    lugar: "Plataforma Virtual",
    tipo: "Virtual",
    color: "#1565C0",
  },
  {
    nombre: "Innovación y Valor en la Logística",
    fecha: "Miércoles 15 de octubre, 16:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Conferencia",
    color: "#2E7D32",
    ponente: "Abraham Hernández — Gerente Regional Ing. Industrial NPW Nissan North America",
  },
  {
    nombre: "Kikubari Kaizen: el detalle invisible que transforma la manufactura",
    fecha: "Jueves 16 de octubre, 13:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Conferencia",
    color: "#2E7D32",
    ponente: "Romeo Muñoz — Consultor CX 6 Sigma y NPS",
  },
  {
    nombre: "Innovación, Liderazgo y Disciplina: Claves de un Camino Profesional",
    fecha: "Jueves 16 de octubre, 16:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Conferencia",
    color: "#2E7D32",
    ponente: "Alejandro Lara — Director de Control de Producción y Cadena de Suministro, COMPAS",
  },
  {
    nombre: "Del caos al control: estrategias para transformar la crisis en éxito",
    fecha: "Viernes 17 de octubre, 13:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Conferencia",
    color: "#2E7D32",
    ponente: "Rodrigo Magallanes del Rio — Head of Operations (Continental)",
  },
];

export default function Eventos() {
  return (
    <main className="pagina-main">
      <div className="pagina-hero pagina-hero-solid">
        <div className="pagina-hero-overlay">
          <p className="pagina-hero-etiqueta">50 ANIVERSARIO — INGENIERÍA INDUSTRIAL</p>
          <h1 className="pagina-hero-titulo">Eventos Académicos</h1>
          <p className="pagina-hero-sub">Semana Tecnológica Industrial · Del 13 al 17 de octubre de 2025</p>
        </div>
      </div>
      <div className="pagina-contenido">
        <div className="eventos-grid">
          {eventos.map((ev, i) => (
            <div className="evento-tarjeta" key={i} style={{ borderLeftColor: ev.color }}>
              <span className="evento-tipo" style={{ backgroundColor: ev.color }}>{ev.tipo}</span>
              <h3 className="evento-nombre">{ev.nombre}</h3>
              {ev.ponente && <p className="evento-ponente">👤 {ev.ponente}</p>}
              <p className="evento-meta">📅 {ev.fecha}</p>
              <p className="evento-meta">📍 {ev.lugar}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
