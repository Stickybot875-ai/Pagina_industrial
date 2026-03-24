import "./SemanaTecnologica.css";

const semanas = [
  {
    titulo: "Semana Tecnológica 2024-1",
    fecha: "Febrero 2024",
    tema: "Manufactura Inteligente",
    color: "#C1272D",
    actividades: [
      "Conferencia magistral sobre Automatización Industrial",
      "Taller de robótica colaborativa",
      "Concurso de proyectos estudiantiles",
      "Visita virtual a planta Toyota",
    ],
  },
  {
    titulo: "Semana Tecnológica 2023-2",
    fecha: "Noviembre 2023",
    tema: "Sustentabilidad en la Industria",
    color: "#2E7D32",
    actividades: [
      "Panel de expertos en energías renovables",
      "Exposición de proyectos de eficiencia energética",
      "Conferencia sobre certificaciones ISO 14001",
    ],
  },
  {
    titulo: "Semana Tecnológica 2023-1",
    fecha: "Marzo 2023",
    tema: "Calidad e Innovación",
    color: "#1565C0",
    actividades: [
      "Taller Six Sigma",
      "Conferencia de mejora continua",
      "Presentación de tesis destacadas",
    ],
  },
];

export default function SemanaTecnologica() {
  return (
    <div className="semana-grid">
      {semanas.map((s, i) => (
        <div className="semana-card" key={i}>
          {/* Imagen placeholder */}
          <div
            className="semana-img-placeholder"
            style={{ backgroundColor: s.color }}
          >
            <span>🏭</span>
            <p>{s.titulo}</p>
          </div>

          <div className="semana-body">
            <div className="semana-meta">
              <span className="semana-fecha">📅 {s.fecha}</span>
              <span
                className="semana-badge"
                style={{ backgroundColor: s.color }}
              >
                {s.tema}
              </span>
            </div>

            <h3 className="semana-titulo">{s.titulo}</h3>

            <ul className="semana-actividades">
              {s.actividades.map((act, j) => (
                <li key={j}>✓ {act}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
