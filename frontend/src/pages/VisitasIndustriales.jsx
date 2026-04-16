import { useEffect, useState } from "react";
import "./VisitasIndustriales.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5001";

export default function VisitasIndustriales() {
  const [visitas, setVisitas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/visitas`)
      .then((r) => r.json())
      .then(setVisitas)
      .catch(() => setVisitas([]))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div className="vi-page">
      <div className="vi-hero">
        <h1>Visitas Industriales</h1>
        <p>Conoce las empresas e instalaciones que han abierto sus puertas a nuestra comunidad</p>
      </div>

      <div className="vi-content">
        {cargando && (
          <p className="vi-msg">Cargando visitas...</p>
        )}

        {!cargando && visitas.length === 0 && (
          <div className="vi-empty">
            <span>🏗️</span>
            <p>Próximamente se publicarán las visitas industriales.</p>
          </div>
        )}

        <div className="vi-grid">
          {visitas.map((v) => (
            <div className="vi-card" key={v.id}>
              <div className="vi-card-header" style={{ backgroundColor: v.color }}>
                <span className="vi-icon">🏭</span>
                <div>
                  <h3>{v.titulo}</h3>
                  <p className="vi-empresa">{v.empresa}</p>
                </div>
              </div>
              <div className="vi-card-body">
                <div className="vi-meta">
                  <span className="vi-fecha">📅 {v.fecha}</span>
                  <span className="vi-badge" style={{ backgroundColor: v.color }}>
                    {v.empresa}
                  </span>
                </div>
                <p className="vi-descripcion">{v.descripcion}</p>
                {v.actividades.length > 0 && (
                  <>
                    <h4>Actividades realizadas</h4>
                    <ul className="vi-actividades">
                      {v.actividades.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
