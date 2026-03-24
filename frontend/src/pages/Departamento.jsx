import "../App.css";
import "./Pagina.css";

export default function Departamento() {
  return (
    <main className="pagina-main">
      <div className="pagina-hero" style={{ background: "url('/logos/P_a_aguascalientes2.jpg') center center / cover no-repeat" }}>
        <div className="pagina-hero-overlay">
          <p className="pagina-hero-etiqueta">DEPARTAMENTO</p>
          <h1 className="pagina-hero-titulo">Ingeniería Industrial</h1>
          <p className="pagina-hero-sub">TecNM Campus Aguascalientes — 50 años formando líderes industriales</p>
        </div>
      </div>

      <div className="pagina-contenido">
        <div className="pagina-card">
          <div className="pagina-badges">
            <span className="pagina-badge">Acreditación CACEI</span>
            <span className="pagina-badge">Categoría Platino ANFEI</span>
            <span className="pagina-badge">+50 años de excelencia</span>
          </div>

          <h2 className="pagina-subtitulo">¿Qué es la Ingeniería Industrial?</h2>
          <p className="pagina-texto">
            La Ingeniería Industrial es una disciplina que se ocupa del diseño, mejora e instalación
            de sistemas integrados de personas, materiales, información, equipo y energía. Se basa en
            conocimientos y habilidades de las ciencias matemáticas, físicas y sociales junto con los
            principios y métodos del análisis y diseño de la ingeniería para especificar, predecir y
            evaluar los resultados obtenidos de dichos sistemas.
          </p>
          <p className="pagina-texto">
            En el TecNM Campus Aguascalientes, la carrera de Ingeniería Industrial fue fundada hace
            más de 50 años, siendo una de las primeras y más reconocidas del estado. Cuenta con
            acreditación CACEI y ha sido reconocida por ANFEI como parte de la mejor escuela de
            ingeniería del país, obteniendo la Categoría Platino.
          </p>
          <p className="pagina-texto">
            El programa educativo forma profesionales capaces de optimizar procesos productivos,
            gestionar la calidad, aplicar metodologías de mejora continua como Lean Manufacturing y
            Six Sigma, y liderar proyectos de innovación tecnológica en la industria.
          </p>
        </div>

        <div className="pagina-stats">
          <div className="pagina-stat"><strong>50</strong><span>Años de excelencia</span></div>
          <div className="pagina-stat"><strong>76</strong><span>Profesores comprometidos</span></div>
          <div className="pagina-stat"><strong>4,800+</strong><span>Graduados exitosos</span></div>
          <div className="pagina-stat"><strong>Aguascalientes</strong><span>Corazón del TecNM</span></div>
        </div>
      </div>
    </main>
  );
}
