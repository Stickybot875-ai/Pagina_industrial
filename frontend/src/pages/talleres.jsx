import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/talleres.css";
import "../styles/boton_ver_talleres.css";
const talleres = [
  {
    id: 1,
    nombre: "Gestión de Proyectos con enfoque PMBOK y Liderazgo Profesional",
    Contacto: "fernandoortegagtz@gmail.com",
    instructor: "Juan Fernando Ortega Gutiérrez",
    horario: "15:00 - 19:00",
    aula: "Aula 63",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 2,
    nombre: "Evaluación de proyectos y proyectos de inversión",
    Contacto: "betocollazo96@gmail.com",
    instructor: "Octavio Alberto Collazo Zamores",
    horario: "15:00 - 19:00",
    aula: "Aula 75",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 3,
    nombre:
      "Kit de herramientas del profesional: de la teoria a la trazabilidad de materiales",
    Contacto: "Karla.ruvalcaba.luna@gmail.com",
    instructor: "Karla Alejandra Ruvalcaba Luna",
    horario: "15:00 - 19:00",
    aula: "Aula 64",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 4,
    nombre: "Control De Calidad",
    Contacto: "cristoy_macias@hotmail.com",
    instructor: "Christopher Macias Estrada",
    horario: "15:00 - 19:00",
    aula: "Aula 65",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 5,
    nombre: "Lean Manufacturing",
    Contacto: "Kevin.a.huerta.77@gmail.com",
    instructor: "Kevin Alexis Huerta González",
    horario: "15:00 - 19:00",
    aula: "Aula 66",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },

  {
    id: 6,
    nombre: "Cadena de suministro; planeacion de producción y materiales",
    Contacto: "diego_.aquino@hotmail.com.",
    instructor: "Diego Aquino Araiza",
    horario: "15:00 - 19:00",
    aula: "Aula 67",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 7,
    nombre: "Lean manufacturing en taller de mantenimiento automotriz",
    Contacto: "jona.hdz.rmz02@gmail.com",
    instructor: "Jonathan Eduardo Hernandez Ramirez",
    horario: "15:00 - 19:00",
    aula: "Aula 68",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 8,
    nombre: "Mejora continua y gestion de project management",
    Contacto: "ing.cruz1101@gmail.com",
    instructor: "Antonio Cruz López",
    horario: "15:00 - 19:00",
    aula: "Aula 69",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 9,
    nombre: "Calidad en la industria automotriz",
    Contacto: "christiangabri.herreraponce@stellantis.com",
    instructor: "Christian Gabriel Herrera Ponce",
    horario: "15:00 - 19:00",
    aula: "Aula 70",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 10,
    nombre:
      "Primer día: Los nuevos productos en la industria, Segundo día: Configuración y datos maestros en un ERP",
    Contacto: "mapilargtzo@yahoo.com",
    instructor: "Ma. Pilar Gutiérrez Olivares",
    horario: "15:00 - 19:00",
    aula: "Aula 71",
    requerimiento: "ALUMNOS DE 4 SEMESTRE EN ADELANTE",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 11,
    nombre: "7 herramientas de calidad",
    Contacto: "Ximenamoreno6406@gmail.com",
    instructor: "Ximena Moreno Valenzuela",
    horario: "15:00 - 19:00",
    aula: "Aula 72",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 12,
    nombre:
      "Cadena de suministros: la logística como clave en la eficiencia de la industria actual",
    Contacto: "venegas.olivares.sebastian@gmail.com",
    instructor: "Sebastián Venegas Olivares",
    horario: "15:00 - 19:00",
    aula: "Sala de maestros",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 13,
    nombre: "Mejora continua en la industria textil",
    Contacto: "diegoviveroita@gmail.com",
    instructor: "Diego Alberto Vivero Ibarra",
    horario: "15:00 - 19:00",
    aula: "Aula 73",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 14,
    nombre:
      "Google apps para ingenieros industriales: Automatiza, optimiza y aplica lean manufacturing",
    Contacto: "marcoponce607@gmail.com",
    instructor: "Marco Antonio Ponce Marentes",
    horario: "15:00 - 19:00",
    aula: "Sala de Computo",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 15,
    nombre:
      "Calidad en Acción: Estrategias para la Competitividad en Servicios",
    Contacto: "liliana.esqueda@aguascalientes.gob.mx ",
    instructor: "Liliana Esqueda Tagle",
    horario: "15:00 - 19:00",
    aula: "Aula 74",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 16,
    nombre:
      "Core Tools: Desarrollo de Procesos y Productos asegurando la excelencia en calidad",
    Contacto: "emmiliomacias@gmail.com ",
    instructor: "Amauri Emilio Macías Castillo",
    horario: "15:00 - 19:00",
    aula: "Aula 76",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 17,
    nombre:
      "Estandarización e Impacto de Partes Eléctricas en la Industria Actualy R-FMEA & Hazard Map",
    Contacto: "mike_alvaradog@hotmail.com",
    instructor: "Miguel Angel Alvarado Guzmán",
    horario: "15:00 - 19:00",
    aula: "Aula 77",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 18,
    nombre: "Educación Financiera",
    Contacto: "tel. 4491004119",
    instructor: "María del Refugio Lara Herrera",
    horario: "9:00 - 13:00",
    aula: "Aula 63",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 19,
    nombre: "Liderazgo Al",
    Contacto: "maciasfloriano@gmail.com",
    instructor: "Raúl Macías Floriano ",
    horario: "9:00 - 13:00",
    aula: "Aula 64",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 20,
    nombre: "Resolución de problemas por medio de la metodología QC story",
    Contacto: "ccastilloluevano@gmail.com",
    instructor: "Claudia Castillo Luévano",
    horario: "9:00 - 13:00",
    aula: "Aula 65",
    requerimiento: "ALUMNOS DE ULTIMO SEMESTRE",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 21,
    nombre: "Resistencia al cambio",
    Contacto: "david.silma@hotmail.com",
    instructor: "Josue David Silva maldonado",
    horario: "9:00 - 13:00",
    aula: "Aula 66",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 22,
    nombre: "Los nuevos retos y paradigmas del ingeniero industrial",
    Contacto: "alanruizeduardogonzalez@hotmail.com",
    instructor: "Alan Eduardo Ruiz González",
    horario: "9:00 - 13:00",
    aula: "Aula 67",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 23,
    nombre: "AMEF & CP AIAG-VDA primera edición",
    Contacto: "delunaesparza@gmail.com",
    instructor: "Anhul Isai De Luna Esparza",
    horario: "9:00 - 13:00",
    aula: "Aula 68",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 24,
    nombre: "Innovacion y cultura de mejora",
    Contacto: "andrealopezch@outlook.com",
    instructor: "Andrea Itzel Lopez Chavez",
    horario: "9:00 - 13:00",
    aula: "Aula 69",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 25,
    nombre: "Monozukuri y Kaizen: El arte de crear valor con eficiencia",
    Contacto: "re-camacho@tachi-s.mx",
    instructor: "Rodrigo Enrique Camacho Pedroza",
    horario: "9:00 - 13:00",
    aula: "Aula 70",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 26,
    nombre:
      "Procesos Clave en la Industria Automotriz con Enfoque en la Aplicación de ISO45001 y Gestión de Riesgos Laborales",
    Contacto: "Isaac.JaimeDeLaTorre1@nissan.com.mx",
    instructor: "Isaac Benjamín Jaime de la Torre",
    horario: "9:00 - 13:00",
    aula: "Aula 71",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 27,
    nombre: "Planeación y supervisión de proyectos",
    Contacto: "daniel.lpz.ing@gmail.com",
    instructor: "Daniel López Sosa",
    horario: "9:00 - 13:00",
    aula: "Aula 76",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 28,
    nombre:
      "Procesos que transforman ¿Cómo el ingeniero industrial puede cambiar el mundo?",
    Contacto: "esperanza.vela@rolcar.com.mx",
    instructor: "Esperanza Adriana Vela Macías",
    horario: "9:00 - 13:00",
    aula: "Aula ",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 29,
    nombre: "Logística 4.0: La Ingeniería detrás de Amazon",
    Contacto: "Correo: burgosjalberto@gmail.com",
    instructor: "José Alberto Burgos González ",
    horario: "9:00 - 13:00",
    aula: "Aula 73",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 30,
    nombre: "Mejora en la Cadena de Valor en los Productos y Servicios",
    Contacto: "filemon.munoz@soin3.com",
    instructor: "Filemón Muñoz Martínez",
    horario: "9:00 - 13:00",
    aula: "Aula 74",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 31,
    nombre: "El rol de Ingeniero Industrial en la industria 4.0",
    Contacto: "ylutiere@yluca.com",
    instructor: "Ylutiere Reyes Campos",
    horario: "9:00 - 13:00",
    aula: "Aula 75",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
  {
    id: 32,
    nombre: "Falta Nombre",
    Contacto: "lauraangieq@gmail.com",
    instructor: "Laura Angélica Quezada Chávez",
    horario: "9:00 - 13:00",
    aula: "Aula 72",
    imagen: "https://i.imgur.com/xqwJrQ9.png",
  },
];

const Talleres = () => {
  const navigate = useNavigate();
  const [tallerSeleccionado, setTallerSeleccionado] = useState(null);

  // Carrusel
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./logos/C1.png",
    "./logos/c2.jpg",
    "./logos/c3.jpg"
  ];

  // Cambio automático cada 4 segundos
  

  // Filtrar talleres por día
  const talleresLunes = talleres.filter((t) =>
    t.horario.startsWith("15:00 - 19:00")
  );
  const talleresMartes = talleres.filter((t) =>
    t.horario.startsWith("9:00 - 13:00")
  );

  const renderTalleres = (lista) => (
    <div className="talleres-grid">
      {lista.map((taller) => (
        <div
          key={taller.id}
          className="taller-card"
          onClick={() => setTallerSeleccionado(taller)}
        >
          <img src={taller.imagen} alt={taller.nombre} className="taller-img" />
          <h2 className="taller-nombre">{taller.nombre}</h2>
        </div>
      ))}
    </div>
  );

  return (
    <div className="nueva-pagina-container">
      <h1 className="nueva-pagina-title">Talleres de Ingeniería Industrial</h1>
      <p className="nueva-pagina-text">
        Explora los talleres que tenemos para ti
      </p>

      {/* Sección Lunes */}
      <h2 className="dia-title">Talleres 15:00 - 19:00</h2>
      {renderTalleres(talleresLunes)}

      {/* Sección Martes */}
      <h2 className="dia-title">Talleres 9:00 - 13:00</h2>
      {renderTalleres(talleresMartes)}

      {/* Apartado de Calendario (Carrusel) */}
      <div className="calendario-container">
        <h2 className="dia-title"> Calendario Semanal de Eventos</h2>

        <div className="carousel">
          {/* Botón anterior */}
          <button
            className="carousel-btn prev"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? images.length - 1 : prev - 1
              )
            }
          >
            ❮
          </button>

          {/* Imagen */}
          <img
            src={images[currentIndex]}
            alt={`Calendario ${currentIndex + 1}`}
            className="calendario-img"
          />

          {/* Botón siguiente */}
          <button
            className="carousel-btn next"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
              )
            }
          >
            ❯
          </button>
        </div>

        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>

      {/* Apartado de Kit */}
      <div className="calendario-container">
        <h2 className="dia-title">Kit Industrial - $650</h2>
        <p>
          Esto puedes conseguir asistiendo al 50 ANIVERSARIO DE LA CARRERA DE
          INDUSTRIAL
        </p>

        <div className="kit-container">
          <img src="./logos/kit1.png" alt="Kit parte 1" className="kit-img" />
          <img src="./logos/kit2.png" alt="Kit parte 2" className="kit-img" />
          <img src="./logos/kit3.png" alt="Kit parte 3" className="kit-img" />
        </div>
      </div>

      {/* Modal de Taller */}
      {tallerSeleccionado && (
        <div
          className="modal-overlay"
          onClick={() => setTallerSeleccionado(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{tallerSeleccionado.nombre}</h2>
            <p>
              <strong>Instructor:</strong> {tallerSeleccionado.instructor}
            </p>
            <p>
              <strong>Horario:</strong> {tallerSeleccionado.horario}
            </p>
            <p>
              <strong>Aula:</strong> {tallerSeleccionado.aula}
            </p>
            <p>
              <strong>Contacto:</strong> {tallerSeleccionado.Contacto}
            </p>
            <button
              onClick={() => setTallerSeleccionado(null)}
              className="modal-button"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Botón para regresar */}
      <button onClick={() => navigate("/")} className="nueva-pagina-button">
        ← Regresar
      </button>
    </div>
  );
};

export default Talleres;

