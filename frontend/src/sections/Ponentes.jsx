import React, { useState } from "react";
export default function Ponentes  () {
  const [ponenteSeleccionado, setPonenteSeleccionado] = useState(null);

  const ponentes = [
    {
      nombre: "ROMEO MUÑOZ",
      imagen: "./ponentes/RomMuñozpng.png",
      titulo: "Kikubari Kaizen: el detalle invisible que transforma la manufactura",
      carrera: "Consultor CX 6 sigma y NPS",
      descripcion:
        "Visión amplia sobre colaboración entre áreas en proyectos industriales.",
      fecha: "Jueves 16 de octubre, 13:00 hrs"
    },
    {
      nombre: "ABRAHAM HERNÁNDEZ",
      imagen: "./ponentes/AbraHern.jpg",
      titulo: "Innovación y Valor en la Logística",
      carrera: "Gerente Regional de Ing. Industrial NPW Nissan North America",
      descripcion:
        "Una introducción práctica a la inteligencia artificial en la ingeniería industrial.",
      fecha: "Miércoles 15 de octubre, 16:00 hrs"
    },
    {
      nombre: "ALEJANDRO LARA",
      imagen: "./ponentes/AleLara.png",
      titulo:
        "Innovación, Liderazgo y Disciplina: Claves de un Camino Profesional",
      carrera:
        "Director de control de producción y Cadena de Suministro - COMPAS",
      descripcion:
        "Análisis de estudios de caso donde convergen distintas disciplinas en la industria.",
      fecha: "Jueves 16 de octubre, 16:00 hrs"
    },
    {
      nombre: "RODRIGO MAGALLANES DEL RIO",
      imagen: "./ponentes/RodMaga.png",
      titulo:
        "Del caos al control: estrategias para transformar la crisis en éxito",
      carrera: "Head of Operations (Continental)",
      descripcion:
        "Otra perspectiva sobre integración de conocimientos en ingeniería.",
      fecha: "Viernes 17 de octubre, 13:00 hrs"
    },

    {
      nombre: "PANEL",
      imagen: "https://i.imgur.com/xqwJrQ9.png",
      titulo: "Mujeres Industriales: Legado y Futuro",
      carrera: "",
      descripcion:
        "Visión amplia sobre colaboración entre áreas en proyectos industriales.",
      fecha: "Martes 14 de octubre, 19:00 hrs"
    },
    {
      nombre: "CONFERENCIAS VIRTUALES",
      imagen: "https://i.imgur.com/xqwJrQ9.png",
      titulo: "Egresados en la Modalidad a Distancia",
      carrera: "Consultor CX 6 sigma y NPS",
      descripcion:
        "Visión amplia sobre colaboración entre áreas en proyectos industriales.",
      fecha: "Lunes 13 al Viernes 17 de octubre, 12:00 hrs"
    }
  ];

  const abrirModal = (ponente) => setPonenteSeleccionado(ponente);
  const cerrarModal = () => setPonenteSeleccionado(null);

  return (
    <section id="ponentes" className="section section-ponentes">
      <div className="cartas-container">
        {ponentes.map((ponente, index) => (
          <section
            key={index}
            className="carta"
            tabIndex="0"
            onClick={() => abrirModal(ponente)}
          >
            <div className="tooltip">{ponente.nombre}</div>
            <img src={ponente.imagen} alt={ponente.nombre} className="txt-image" />
            <div className="txt-body">
              <p className="txt-titulo">{ponente.titulo}</p>
            </div>
          </section>
        ))}
      </div>

      {ponenteSeleccionado && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={cerrarModal}>
              &times;
            </span>
            <p className="modal-date">{ponenteSeleccionado.fecha}</p>
            <h2 id="modal-title">{ponenteSeleccionado.titulo}</h2>
            <p id="modal-description">{ponenteSeleccionado.descripcion}</p>
            <p>
              <strong>Ponente:</strong> {ponenteSeleccionado.nombre}
            </p>
            <p>{ponenteSeleccionado.carrera}</p>
          </div>
        </div>
      )}
    </section>
  );
};