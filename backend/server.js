import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import fetch from "node-fetch"; // En Node 18+ ya existe fetch nativo
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "pa_industrial_secret_2025";
const app = express();
const PORT = process.env.PORT || 5001;
// ======================
// 📌 Pool de MySQL
// ======================
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "industrialsql",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
app.use(cors());
app.use(express.json());
// ======================
// 📌 Test conexión MySQL
// ======================
const testConexion = async () => {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("✅ Conexión MySQL exitosa");
  } catch (error) {
    console.error("❌ Error de conexión MySQL:", error);
  }
};
import ExcelJS from "exceljs";

// ======================
// 📌 Middleware Admin JWT
// ======================
function verifyAdmin(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Bearer ")) {
    return res.status(401).json({ mensaje: "No autorizado" });
  }
  try {
    const decoded = jwt.verify(auth.split(" ")[1], JWT_SECRET);
    req.admin = decoded;
    next();
  } catch {
    return res.status(401).json({ mensaje: "Token inválido o expirado" });
  }
}

// ======================
// 📌 Login Admin
// ======================
app.post("/api/admin/login", async (req, res) => {
  const { correo, password } = req.body;
  if (!correo || !password) {
    return res.status(400).json({ mensaje: "Correo y contraseña son obligatorios" });
  }
  try {
    const [rows] = await pool.query("SELECT * FROM admins WHERE correo = ?", [correo]);
    if (rows.length === 0) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }
    const admin = rows[0];
    const match = await bcrypt.compare(password, admin.password);
    if (!match) {
      return res.status(401).json({ mensaje: "Credenciales inválidas" });
    }
    const token = jwt.sign(
      { id: admin.id, nombre: admin.nombre, correo: admin.correo },
      JWT_SECRET,
      { expiresIn: "8h" }
    );
    res.json({ token, nombre: admin.nombre });
  } catch (error) {
    console.error("Error en /api/admin/login:", error);
    res.status(500).json({ mensaje: "Error en el servidor" });
  }
});

// ======================
// 📌 Semanas Tecnológicas (público)
// ======================
app.get("/api/semanas", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM semanas_tecnologicas ORDER BY created_at DESC"
    );
    const semanas = rows.map((s) => ({
      ...s,
      actividades: JSON.parse(s.actividades),
    }));
    res.json(semanas);
  } catch (error) {
    console.error("Error en /api/semanas:", error);
    res.status(500).json({ mensaje: "Error al obtener semanas" });
  }
});

// Crear semana (admin)
app.post("/api/admin/semanas", verifyAdmin, async (req, res) => {
  const { titulo, fecha, tema, color, actividades } = req.body;
  if (!titulo || !fecha || !tema || !actividades) {
    return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
  }
  try {
    const actJson = JSON.stringify(
      Array.isArray(actividades) ? actividades : [actividades]
    );
    const [result] = await pool.query(
      "INSERT INTO semanas_tecnologicas (titulo, fecha, tema, color, actividades) VALUES (?, ?, ?, ?, ?)",
      [titulo, fecha, tema, color || "#800020", actJson]
    );
    res.json({ mensaje: "Semana creada", id: result.insertId });
  } catch (error) {
    console.error("Error al crear semana:", error);
    res.status(500).json({ mensaje: "Error al crear semana" });
  }
});

// Editar semana (admin)
app.put("/api/admin/semanas/:id", verifyAdmin, async (req, res) => {
  const { titulo, fecha, tema, color, actividades } = req.body;
  try {
    const actJson = JSON.stringify(
      Array.isArray(actividades) ? actividades : [actividades]
    );
    await pool.query(
      "UPDATE semanas_tecnologicas SET titulo=?, fecha=?, tema=?, color=?, actividades=? WHERE id=?",
      [titulo, fecha, tema, color || "#800020", actJson, req.params.id]
    );
    res.json({ mensaje: "Semana actualizada" });
  } catch (error) {
    console.error("Error al editar semana:", error);
    res.status(500).json({ mensaje: "Error al editar semana" });
  }
});

// Eliminar semana (admin)
app.delete("/api/admin/semanas/:id", verifyAdmin, async (req, res) => {
  try {
    await pool.query("DELETE FROM semanas_tecnologicas WHERE id=?", [req.params.id]);
    res.json({ mensaje: "Semana eliminada" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar semana" });
  }
});

// ======================
// 📌 Visitas Industriales (público)
// ======================
app.get("/api/visitas", async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM visitas_industriales ORDER BY created_at DESC"
    );
    const visitas = rows.map((v) => ({
      ...v,
      actividades: JSON.parse(v.actividades),
    }));
    res.json(visitas);
  } catch (error) {
    console.error("Error en /api/visitas:", error);
    res.status(500).json({ mensaje: "Error al obtener visitas" });
  }
});

// Crear visita (admin)
app.post("/api/admin/visitas", verifyAdmin, async (req, res) => {
  const { titulo, empresa, fecha, descripcion, actividades, color } = req.body;
  if (!titulo || !empresa || !fecha || !descripcion || !actividades) {
    return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
  }
  try {
    const actJson = JSON.stringify(
      Array.isArray(actividades) ? actividades : [actividades]
    );
    const [result] = await pool.query(
      "INSERT INTO visitas_industriales (titulo, empresa, fecha, descripcion, actividades, color) VALUES (?, ?, ?, ?, ?, ?)",
      [titulo, empresa, fecha, descripcion, actJson, color || "#800020"]
    );
    res.json({ mensaje: "Visita creada", id: result.insertId });
  } catch (error) {
    console.error("Error al crear visita:", error);
    res.status(500).json({ mensaje: "Error al crear visita" });
  }
});

// Editar visita (admin)
app.put("/api/admin/visitas/:id", verifyAdmin, async (req, res) => {
  const { titulo, empresa, fecha, descripcion, actividades, color } = req.body;
  try {
    const actJson = JSON.stringify(
      Array.isArray(actividades) ? actividades : [actividades]
    );
    await pool.query(
      "UPDATE visitas_industriales SET titulo=?, empresa=?, fecha=?, descripcion=?, actividades=?, color=? WHERE id=?",
      [titulo, empresa, fecha, descripcion, actJson, color || "#800020", req.params.id]
    );
    res.json({ mensaje: "Visita actualizada" });
  } catch (error) {
    console.error("Error al editar visita:", error);
    res.status(500).json({ mensaje: "Error al editar visita" });
  }
});

// Eliminar visita (admin)
app.delete("/api/admin/visitas/:id", verifyAdmin, async (req, res) => {
  try {
    await pool.query("DELETE FROM visitas_industriales WHERE id=?", [req.params.id]);
    res.json({ mensaje: "Visita eliminada" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar visita" });
  }
});

// ======================
// 📌 Descargar Excel 
// ======================
app.get("/api/exportar-excel", async (req, res) => {
  try {
    const [estudiantes] = await pool.query("SELECT * FROM estudiante");
    const [externos] = await pool.query("SELECT * FROM externo");

    const workbook = new ExcelJS.Workbook();

    const sheet1 = workbook.addWorksheet("Estudiantes");
    sheet1.columns = Object.keys(estudiantes[0] || {}).map((col) => ({
      header: col,
      key: col,
      width: 20,
    }));
    estudiantes.forEach((row) => sheet1.addRow(row));

    const sheet2 = workbook.addWorksheet("Externos");
    sheet2.columns = Object.keys(externos[0] || {}).map((col) => ({
      header: col,
      key: col,
      width: 20,
    }));
    externos.forEach((row) => sheet2.addRow(row));

    // ✅ Convertir a buffer
    const buffer = await workbook.xlsx.writeBuffer();

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=alumnos_validacion.xlsx"
    );

    res.send(buffer); // enviar el buffer limpio
  } catch (error) {
    console.error("❌ Error al generar Excel:", error);
    res.status(500).json({ mensaje: "Error al generar el archivo Excel" });
  }
});


// ======================
// 📌 Registro de EXTERNOS
// ======================
app.post("/api/externo", async (req, res) => {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    numeroControl,
    generacion,
    telefono,
    correo,
    tallaPlayera,
    tallaChaleco,
  } = req.body;

  try {
    const sql = `
      INSERT INTO externo
      (Nombre, ApellidoPaterno, ApellidoMaterno, Generacion, NumeroControl, Telefono, Correo, TallaPlayera, TallaChaleco)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.query(sql, [
      nombre.toUpperCase(),
      apellidoPaterno.toUpperCase(),
      apellidoMaterno.toUpperCase(),
      generacion.toUpperCase() || null,
      numeroControl,
      telefono,
      correo.toUpperCase(),
      tallaPlayera,
      tallaChaleco,
    ]);

    const validacion = `
      INSERT INTO validacion (numeroControl, validado)
      VALUES (?, ?)
    `;
    await pool.query(validacion, [numeroControl, true]);

    res.json({ mensaje: "Registro de externo guardado correctamente" });
  } catch (error) {
    res.json({ mensaje: "Error al registrar información, favor de intentarlo de nuevo" });
  }
});
// ======================
// 📌 Registro de ALUMNOS
// ======================
app.post("/api/alumno", async (req, res) => {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    numeroControl,
    semestre,
    tallerElegir,
    nss,
    correo,
    nombreEme,
    apellidoPaternoEme,
    apellidoMaternoEme,
    telefonoEme,
    tallaPlayera,
    tallaChaleco,
  } = req.body;

  try {
    const sql = `
      INSERT INTO estudiante
      (Nombre, ApellidoPaterno, ApellidoMaterno, NumeroControl, Semestre, Taller, Nss, Correo,
       NombreEme, ApellidoPaternoEme, ApellidoMaternoEme, TelefonoEme, TallaPlayera, TallaChaleco)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await pool.query(sql, [
      nombre.toUpperCase(),
      apellidoPaterno.toUpperCase(),
      apellidoMaterno.toUpperCase(),
      numeroControl.toUpperCase(),
      semestre.toUpperCase(),
      tallerElegir,
      nss.toUpperCase(),
      correo.toUpperCase(),
      nombreEme.toUpperCase(),
      apellidoPaternoEme.toUpperCase(),
      apellidoMaternoEme.toUpperCase(),
      telefonoEme,
      tallaPlayera,
      tallaChaleco,
    ]);
        await pool.query(
      "UPDATE talleres SET cupo = cupo + 1 WHERE Nombre = ? AND cupo < 25",
      [tallerElegir]
    );
    const validacion = `
      INSERT INTO validacion (numeroControl, validado)
      VALUES (?, ?)
    `;
    await pool.query(validacion, [numeroControl, true]);
  



    res.json({ mensaje: "Registro de alumno guardado correctamente" });
  } catch (error) {
    res.json({ mensaje: "Error al registrar información, favor de intentarlo de nuevo" });
  }
});
// ======================
// 📌 Login Alumno
// ======================
app.get("/api/loginAlumno", async (req, res) => {
  const { numeroControl } = req.query;

  if (!numeroControl) {
    return res.json({ mensaje: "⚠️ Número de control es obligatorio" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE numeroControl = ?",
      [numeroControl]
    );

    if (rows.length !== 0) {
      return res.json({
        mensaje: "Número de control corresponde a un externo. Intenta en el otro botón.",
      });
    }
    const [cursos] = await pool.query(
      "SELECT * FROM talleres WHERE cupo < 25"
    );


    const [validacion] = await pool.query(
      "SELECT validado FROM validacion WHERE numeroControl = ?",
      [numeroControl]
    );

    const formulario_completado = validacion.length > 0;

    const externoResp = await fetch(
      `https://ciapagos.aguascalientes.tecnm.mx/api/industrial/consultar-pago.php?ncontrol=${numeroControl}`
    );

    if (!externoResp.ok) {
      return res.json({ mensaje: "Número de control no asignado a un pago" });
    }

    const externoData = await externoResp.json();

    return res.json({
      data: {
        talleres: cursos,
        estado_pago: externoData.estado_pago,
        fecha_validacion: externoData.fecha_validacion,
        formulario_completado,
        orden_externo: externoData.orden_externo,
        pdf_url: externoData.pdf_url,
        orden_caja: externoData.orden_caja,
      },
    });
  } catch (error) {
    console.error("Error en /api/loginAlumno:", error);
    return res.status(500).json({
      mensaje: "❌ Error en loginAlumno, por favor vuelve a intentar",
    });
  }
});
// ======================
// 📌 Login Externo
// ======================
app.get("/api/login", async (req, res) => {
  const { correo, password, numeroControl } = req.query;

  if (!correo || !password || !numeroControl) {
    return res.json({
      mensaje: "⚠️ Correo, contraseña y número de control son obligatorios",
    });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE correo = ? AND password = ? AND numeroControl = ?",
      [correo.toUpperCase(), password.toUpperCase(), numeroControl]
    );

    if (rows.length === 0) {
      return res.json({ mensaje: "Credenciales inválidas" });
    }
        const [cursos] = await pool.query(
      "SELECT * FROM talleres WHERE cupo < 25"
    );
    const [validacion] = await pool.query(
      "SELECT validado FROM validacion WHERE numeroControl = ?",
      [numeroControl]
    );

    const formulario_completado = validacion.length > 0;

    const externoResp = await fetch(
      `https://ciapagos.aguascalientes.tecnm.mx/api/industrial/consultar-pago.php?ncontrol=${numeroControl}`
    );

    if (!externoResp.ok) {
      return res.json({ mensaje: "⚠️ Error, por favor vuelve a intentar" });
    }

    const externoData = await externoResp.json();

    res.json({
      data: {
        talleres: cursos,
        estado_pago: externoData.estado_pago,
        fecha_validacion: externoData.fecha_validacion,
        formulario_completado,
        orden_externo: externoData.orden_externo,
        pdf_url: externoData.pdf_url,
        orden_caja: externoData.orden_caja,
      },
    });
  } catch (error) {
    res.json({ mensaje: "❌ Error en login, por favor vuelve a intentar" });
  }
});
// ======================
// 📌 Registro Usuario y API externa
// ======================
app.post("/api/enviar", async (req, res) => {
  const { nombre, curp, correo, password } = req.body;

  if (!nombre || !correo || !password) {
    return res.json({
      mensaje: "Nombre, correo y contraseña son obligatorios",
    });
  }

  try {
    // Enviar datos a API externa
    const externoResp = await fetch(
      "https://ciapagos.aguascalientes.tecnm.mx/api/industrial/registro.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email: correo }),
      }
    );

    const externoData = await externoResp.json();
    const numeroControl = externoData.data.orden_externo.ncontrol;

    // Guardar en BD
    const sql = `
      INSERT INTO usuarios
      (nombre, curp, correo, password, numeroControl)
      VALUES (?, ?, ?, ?, ?)
    `;

    await pool.query(sql, [
      nombre.toUpperCase(),
      curp.toUpperCase(),
      correo.toUpperCase(),
      password.toUpperCase(),
      numeroControl,
    ]);

    res.json({
      mensaje: "Usuario registrado satisfactoriamente, favor de iniciar sesión",
      apiExterna: externoData,
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.json({
      mensaje: "Error al crear un nuevo registro, inténtalo de nuevo",
    });
  }
});
// ======================
// 📌 Iniciar servidor
// ======================
app.listen(PORT, async () => {
  console.log(`🚀 Servidor backend corriendo en puerto ${PORT}`);
  await testConexion();
});
