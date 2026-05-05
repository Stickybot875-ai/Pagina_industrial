import React, { useState, useEffect } from "react";
import "./ProductosCientificos.css";


const pestañas = [
  { key: "articulo", label: "Artículos Científicos" },
  { key: "libro", label: "Libros" },
  { key: "informe", label: "Informes" },
];

export default function ProductosCientificos() {
  const [activa, setActiva] = useState("articulo");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/productos")
      .then(res => res.json())
      .then(data => setProductos(data));
  }, []);

  return (
    <div className="productos-wrapper">
      {/* Pestañas */}
      <div className="productos-tabs">
        {pestañas.map((tab) => (
          <button
            key={tab.key}
            className={`productos-tab ${activa === tab.key ? "activa" : ""}`}
            onClick={() => setActiva(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tarjetas */}
      <div className="productos-grid">
        {productos
          .filter(pub => pub.tipo === activa)
          .map((pub, i) => (
            <div className="producto-card" key={i}>
              <div className="producto-icono">
                {pub.pdf ? "📄" : "❌"}
              </div>
              <div className="producto-body">
                <h3 className="producto-titulo">{pub.titulo}</h3>
                <p className="producto-autores">
                  <strong>Autor(es):</strong> {pub.autores}
                </p>
                <p className="producto-año">
                  <strong>Año:</strong> {pub.año}
                </p>
                <p className="producto-resumen">{pub.resumen}</p>
                <button
                  className="producto-btn"
                  onClick={() => window.open(`http://localhost:5001/uploads/${pub.pdf}`, "_blank")}
                >
                  Ver PDF
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
