import "./HorarioDocentes.css";

const docentes = [
  {
    nombre: "Dr. Juan Pérez García",
    iniciales: "JP",
    color: "#C1272D",
    horario: {
      Lunes: "8-10, 12-14",
      Martes: "10-12",
      Miércoles: "8-10",
      Jueves: "10-12, 14-16",
      Viernes: "8-10",
    },
  },
  {
    nombre: "Dra. María López Ruiz",
    iniciales: "ML",
    color: "#1565C0",
    horario: {
      Lunes: "10-12",
      Martes: "8-10, 14-16",
      Miércoles: "10-14",
      Jueves: "8-10",
      Viernes: "10-12",
    },
  },
  {
    nombre: "M.C. Carlos Rodríguez",
    iniciales: "CR",
    color: "#2E7D32",
    horario: {
      Lunes: "14-18",
      Martes: "12-14",
      Miércoles: "14-16",
      Jueves: "12-16",
      Viernes: "14-16",
    },
  },
  {
    nombre: "Ing. Ana Martínez",
    iniciales: "AM",
    color: "#6A1B9A",
    horario: {
      Lunes: "8-10",
      Martes: "10-12",
      Miércoles: "8-12",
      Jueves: "10-12",
      Viernes: "8-10",
    },
  },
];

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

export default function HorarioDocentes() {
  return (
    <div className="horario-wrapper">
      <div className="horario-table-container">
        <table className="horario-table">
          <thead>
            <tr>
              <th>Docente</th>
              {dias.map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {docentes.map((doc, i) => (
              <tr key={i} className={i % 2 === 0 ? "fila-par" : "fila-impar"}>
                <td className="docente-celda">
                  <div
                    className="docente-avatar"
                    style={{ backgroundColor: doc.color }}
                  >
                    {doc.iniciales}
                  </div>
                  <span className="docente-nombre">{doc.nombre}</span>
                </td>
                {dias.map((d) => (
                  <td key={d} className="horario-celda">
                    {doc.horario[d] ? (
                      <span className="horario-slot">{doc.horario[d]}</span>
                    ) : (
                      <span className="horario-libre">—</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="horario-nota">
        * Horarios en formato de 24 horas. Consulta con el departamento para confirmar disponibilidad.
      </p>
    </div>
  );
}
