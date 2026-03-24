import { useState } from "react";
import "./ProductosCientificos.css";

const publicaciones = {
  articulos: [
    {
      icono: "📄",
      titulo: "Optimización de procesos mediante Lean Six Sigma en la industria automotriz",
      autores: "Dr. Juan Pérez García",
      año: 2024,
      resumen:
        "Estudio de caso aplicado en empresa del sector automotriz de Aguascalientes, logrando reducción del 23% en desperdicios.",
    },
    {
      icono: "📄",
      titulo: "Implementación de IoT en sistemas de manufactura flexible",
      autores: "Dra. María López Ruiz",
      año: 2023,
      resumen:
        "Propuesta de arquitectura IoT para monitoreo en tiempo real de líneas de producción.",
    },
  ],
  libros: [
    {
      icono: "📚",
      titulo: "Fundamentos de Ingeniería Industrial: Enfoque Práctico",
      autores: "M.C. Carlos Rodríguez",
      año: 2022,
      resumen:
        "Texto guía para estudiantes de ingeniería con casos prácticos de la industria mexicana.",
    },
  ],
  informes: [
    {
      icono: "📊",
      titulo: "Informe de Vinculación Industrial 2023-2024",
      autores: "Departamento de Ingeniería Industrial",
      año: 2024,
      resumen:
        "Resultados de proyectos de residencia profesional y estadísticas de inserción laboral de egresados.",
    },
  ],
};

const pestañas = [
  { key: "articulos", label: "Artículos Científicos" },
  { key: "libros", label: "Libros" },
  { key: "informes", label: "Informes" },
];

export default function ProductosCientificos() {
  const [activa, setActiva] = useState("articulos");

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
        {publicaciones[activa].map((pub, i) => (
          <div className="producto-card" key={i}>
            <div className="producto-icono">{pub.icono}</div>
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
                onClick={() =>
                  alert("PDF no disponible en modo simulación")
                }
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
