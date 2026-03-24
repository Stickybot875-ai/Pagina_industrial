import "./Hero.css";

export default function Hero() {
  return (
    <section id="inicio" className="hero-section">
      {/* Imagen del edificio con overlay */}
      <div className="hero-banner">
        <div className="hero-banner-overlay" />
        <div className="hero-banner-contenido">
          <p className="hero-banner-etiqueta">50 ANIVERSARIO</p>
          <h1 className="hero-banner-titulo">Ingeniería Industrial</h1>
          <p className="hero-banner-sub">
            TecNM Campus Aguascalientes — Formando líderes industriales desde 1974
          </p>
          <div className="hero-banner-badges">
            <span className="hero-badge">Acreditación CACEI</span>
            <span className="hero-badge">Categoría Platino ANFEI</span>
          </div>
        </div>
      </div>

      {/* Descripción del departamento */}
      <div className="hero-descripcion-wrapper">
        <div className="hero-descripcion-grid">
          <div className="hero-texto">
            <p className="hero-seccion-etiqueta">DEPARTAMENTO DE INGENIERÍA INDUSTRIAL</p>
            <h2 className="hero-seccion-titulo">¿Qué es la Ingeniería Industrial?</h2>
            <p className="hero-parrafo">
              La Ingeniería Industrial es una disciplina que se ocupa del diseño, mejora e instalación
              de sistemas integrados de personas, materiales, información, equipo y energía. Se basa en
              conocimientos y habilidades de las ciencias matemáticas, físicas y sociales junto con los
              principios y métodos del análisis y diseño de la ingeniería.
            </p>
            <p className="hero-parrafo">
              En el TecNM Campus Aguascalientes, la carrera de Ingeniería Industrial fue fundada hace
              más de 50 años, siendo una de las primeras y más reconocidas del estado. Cuenta con
              acreditación CACEI y ha sido reconocida por ANFEI como parte de la mejor escuela de
              ingeniería del país, obteniendo la <strong>Categoría Platino</strong>.
            </p>
            <p className="hero-parrafo">
              El programa educativo forma profesionales capaces de optimizar procesos productivos,
              gestionar la calidad, aplicar metodologías como <strong>Lean Manufacturing y Six Sigma</strong>,
              y liderar proyectos de innovación tecnológica en la industria.
            </p>
          </div>

          <div className="hero-imagen-lateral">
            <img
              src="/logos/logo_indus.jpg"
              alt="Escudo Ingeniería Industrial ITA"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="hero-img-placeholder">
              <span>🏭</span>
              <p>Ingeniería Industrial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="hero-stats">
        <div className="hero-stat">
          <strong>50</strong>
          <span>Años de excelencia académica</span>
        </div>
        <div className="hero-stat">
          <strong>76</strong>
          <span>Profesores comprometidos</span>
        </div>
        <div className="hero-stat">
          <strong>4,800+</strong>
          <span>Graduados exitosos</span>
        </div>
        <div className="hero-stat">
          <strong>Aguascalientes</strong>
          <span>Corazón de la educación tecnológica</span>
        </div>
      </div>
    </section>
  );
}
