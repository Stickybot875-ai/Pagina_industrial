import { useEffect, useState } from "react";
import "./SemanaTecnologica.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5001";

export default function SemanaTecnologica() {
  const [semanas, setSemanas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/semanas`)
      .then((r) => r.json())
      .then((data) => setSemanas(data))
      .catch(() => setSemanas([]))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) {
    return <p style={{ textAlign: "center", color: "#888" }}>Cargando semanas...</p>;
  }

  if (semanas.length === 0) {
    return <p style={{ textAlign: "center", color: "#888" }}>No hay semanas registradas aún.</p>;
  }

  return (
    <div className="semana-grid">
      {semanas.map((s) => (
        <div className="semana-card" key={s.id}>
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
                <li key={j}>{act}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
