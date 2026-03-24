import "./Historia.css";

const eventos = [
  {
    titulo: "Fundación del ITA",
    año: "1967",
    descripcion:
      "Se crea el Instituto Tecnológico de Aguascalientes, ofreciendo la carrera de Ingeniería Industrial como una de sus primeras disciplinas.",
    icono: "🏛️",
  },
  {
    titulo: "Primera Generación de Egresados",
    año: "1974",
    descripcion:
      "Se gradúan los primeros ingenieros industriales del ITA, marcando el inicio de un legado de excelencia profesional.",
    icono: "🎓",
  },
  {
    titulo: "Formación de la Academia",
    año: "1975",
    descripcion:
      "Se establece formalmente la academia de Ingeniería Industrial, consolidando el cuerpo docente y los programas de estudio.",
    icono: "📚",
  },
  {
    titulo: "Construcción de Laboratorios",
    año: "1980",
    descripcion:
      "Se inaugura el Laboratorio de Ingeniería de Métodos, dotando a los estudiantes de instalaciones de vanguardia.",
    icono: "🔬",
  },
  {
    titulo: "Reconocimiento Nacional",
    año: "2024",
    descripcion:
      "El ITA es nombrado Mejor Escuela de Ingeniería del país por ANFEI, obteniendo la Categoría Platino.",
    icono: "🏆",
  },
];

export default function Historia() {
  return (
    <section id="historia" className="historia-seccion">
      <div className="historia-encabezado">
        <p className="historia-etiqueta">NUESTRA TRAYECTORIA</p>
        <h2 className="historia-titulo">Historia a través del tiempo</h2>
        <p className="historia-descripcion">
          Más de 50 años de formación de ingenieros líderes en Aguascalientes y en todo México.
        </p>
      </div>

      <div className="historia-timeline">
        {/* Línea central */}
        <div className="historia-linea-central" />

        {eventos.map((ev, i) => {
          const esDerecha = i % 2 === 0;
          return (
            <div
              key={i}
              className={`historia-fila ${esDerecha ? "derecha" : "izquierda"}`}
            >
              {/* Card izquierda o vacío */}
              <div className={`historia-lado ${esDerecha ? "vacio" : "con-card"}`}>
                {!esDerecha && (
                  <div className="historia-card">
                    <div className="historia-card-icono">{ev.icono}</div>
                    <h3 className="historia-card-titulo">{ev.titulo}</h3>
                    <p className="historia-card-desc">{ev.descripcion}</p>
                  </div>
                )}
              </div>

              {/* Nodo central con año */}
              <div className="historia-nodo">
                <div className="historia-circulo-anio">
                  <span>{ev.año}</span>
                </div>
              </div>

              {/* Card derecha o vacío */}
              <div className={`historia-lado ${esDerecha ? "con-card" : "vacio"}`}>
                {esDerecha && (
                  <div className="historia-card">
                    <div className="historia-card-icono">{ev.icono}</div>
                    <h3 className="historia-card-titulo">{ev.titulo}</h3>
                    <p className="historia-card-desc">{ev.descripcion}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
