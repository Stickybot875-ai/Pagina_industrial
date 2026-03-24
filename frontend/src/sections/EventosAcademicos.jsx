// Los eventos reales provienen de los ponentes del 50 Aniversario
const eventos = [
  {
    nombre: "Panel: Mujeres Industriales: Legado y Futuro",
    fecha: "Martes 14 de octubre, 19:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Panel",
  },
  {
    nombre: "Conferencias Virtuales: Egresados en la Modalidad a Distancia",
    fecha: "Lunes 13 al Viernes 17 de octubre, 12:00 hrs",
    lugar: "Plataforma Virtual",
    tipo: "Virtual",
  },
  {
    nombre: "Innovación y Valor en la Logística",
    fecha: "Miércoles 15 de octubre, 16:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Conferencia",
    ponente: "Abraham Hernández — Gerente Regional Ing. Industrial NPW Nissan North America",
  },
  {
    nombre: "Kikubari Kaizen: el detalle invisible que transforma la manufactura",
    fecha: "Jueves 16 de octubre, 13:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Conferencia",
    ponente: "Romeo Muñoz — Consultor CX 6 Sigma y NPS",
  },
  {
    nombre: "Innovación, Liderazgo y Disciplina: Claves de un Camino Profesional",
    fecha: "Jueves 16 de octubre, 16:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Conferencia",
    ponente: "Alejandro Lara — Director de Control de Producción y Cadena de Suministro, COMPAS",
  },
  {
    nombre: "Del caos al control: estrategias para transformar la crisis en éxito",
    fecha: "Viernes 17 de octubre, 13:00 hrs",
    lugar: "Auditorio Principal — ITA Aguascalientes",
    tipo: "Conferencia",
    ponente: "Rodrigo Magallanes del Rio — Head of Operations (Continental)",
  },
];

const colorTipo = {
  Panel: "#9B1C21",
  Virtual: "#2196F3",
  Conferencia: "#4CAF50",
};

export function abrirVentanaEventos() {
  const tarjetas = eventos
    .map(
      (ev) => `
      <div style="
        background:#fff;
        border-radius:10px;
        box-shadow:0 3px 12px rgba(0,0,0,0.1);
        padding:1.5rem;
        border-left:5px solid ${colorTipo[ev.tipo] || "#C1272D"};
      ">
        <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.75rem;">
          <span style="
            background:${colorTipo[ev.tipo] || "#C1272D"};
            color:#fff;
            font-size:0.72rem;
            font-weight:700;
            padding:3px 10px;
            border-radius:20px;
            text-transform:uppercase;
            letter-spacing:0.5px;
          ">${ev.tipo}</span>
        </div>
        <h3 style="font-size:1.05rem;color:#333;margin:0 0 0.5rem;line-height:1.4;">${ev.nombre}</h3>
        ${ev.ponente ? `<p style="color:#C1272D;font-size:0.85rem;font-weight:600;margin:0 0 0.5rem;">👤 ${ev.ponente}</p>` : ""}
        <p style="color:#555;font-size:0.875rem;margin:0 0 0.25rem;">📅 ${ev.fecha}</p>
        <p style="color:#555;font-size:0.875rem;margin:0;">📍 ${ev.lugar}</p>
      </div>`
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Eventos Académicos — Departamento de Ingeniería Industrial</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #F5F5F5; color: #333; }
    .topbar { background:#9B1C21; color:#fff; text-align:center; padding:6px; font-size:0.8rem; }
    .header { background:#C1272D; color:#fff; padding:1.5rem 2rem; }
    .header h1 { font-size:1.4rem; font-weight:700; }
    .header p { font-size:0.9rem; opacity:0.9; margin-top:0.25rem; }
    .contenido { max-width:900px; margin:0 auto; padding:2rem; }
    .grid { display:grid; grid-template-columns:1fr; gap:1.25rem; }
    .btn-cerrar {
      display:block;
      margin:2rem auto;
      background:#C1272D;
      color:#fff;
      border:none;
      padding:10px 32px;
      border-radius:8px;
      font-size:1rem;
      cursor:pointer;
      font-family:Arial,sans-serif;
      font-weight:600;
    }
    .btn-cerrar:hover { background:#9B1C21; }
    @media(min-width:640px) { .grid { grid-template-columns: 1fr 1fr; } }
  </style>
</head>
<body>
  <div class="topbar">TecNM Campus Aguascalientes</div>
  <div class="header">
    <h1>📅 Eventos Académicos — 50 Aniversario Ingeniería Industrial</h1>
    <p>Semana Tecnológica Industrial · Del 13 al 17 de octubre de 2025</p>
  </div>
  <div class="contenido">
    <div class="grid">${tarjetas}</div>
    <button class="btn-cerrar" onclick="window.close()">Cerrar ventana</button>
  </div>
</body>
</html>`;

  const win = window.open("", "_blank", "width=960,height=700,scrollbars=yes,resizable=yes");
  if (win) {
    win.document.write(html);
    win.document.close();
  }
}
