import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListaEventos() {
  const navigate = useNavigate();

  return (
    <section id="programas" className="programas-section">
      <p className="programas-subtitulo">NUESTROS PROGRAMAS</p>
      <h2 className="programas-titulo">
        Llevando tu educación al siguiente nivel
      </h2>

      <div className="programas-grid">
        <div className="programa-item">
          <div className="icono icono-circulos"></div>
          <h3>Programas Académicos</h3>
          <p>
            Explora nuevas ideas, comparte conocimientos y aprende de los
            mejores.
          </p>
        </div>

        <div className="programa-item">
          <div className="icono icono-paloma"></div>
          <h3>Orientación Profesional</h3>
          <p>
            Descubre tu camino con charlas inspiradoras y asesoría personalizada.
          </p>
        </div>

        <div className="programa-item">
          <div className="icono icono-cuadros"></div>
          <h3>Desarrollo Social</h3>
          <p>
            Participa en torneos, eventos recreativos y actividades formativas.
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/talleres-industrial")}
          className="ver-programas-button"
        >
          Ver Talleres
        </button>
      </div>
    </section>
  );
}