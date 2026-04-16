import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5001";

const COLORES = ["#800020", "#C1272D", "#2E7D32", "#1565C0", "#6A1B9A", "#E65100", "#37474F"];

function authHeaders() {
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
  };
}

// ─── Formulario reutilizable ───────────────────────────────────────────────
function FormSemana({ inicial, onGuardar, onCancelar }) {
  const [form, setForm] = useState(
    inicial || { titulo: "", fecha: "", tema: "", color: "#800020", actividades: "" }
  );

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const actividades = form.actividades
      .split("\n")
      .map((a) => a.trim())
      .filter(Boolean);
    onGuardar({ ...form, actividades });
  };

  return (
    <form className="ap-form" onSubmit={submit}>
      <div className="ap-form-grid">
        <div className="ap-field">
          <label>Título</label>
          <input value={form.titulo} onChange={(e) => set("titulo", e.target.value)} required />
        </div>
        <div className="ap-field">
          <label>Fecha (ej: Febrero 2024)</label>
          <input value={form.fecha} onChange={(e) => set("fecha", e.target.value)} required />
        </div>
        <div className="ap-field">
          <label>Tema</label>
          <input value={form.tema} onChange={(e) => set("tema", e.target.value)} required />
        </div>
        <div className="ap-field">
          <label>Color</label>
          <div className="ap-colores">
            {COLORES.map((c) => (
              <button
                type="button"
                key={c}
                className={`ap-color-dot${form.color === c ? " selected" : ""}`}
                style={{ background: c }}
                onClick={() => set("color", c)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="ap-field">
        <label>Actividades (una por línea)</label>
        <textarea
          rows={4}
          value={
            Array.isArray(form.actividades)
              ? form.actividades.join("\n")
              : form.actividades
          }
          onChange={(e) => set("actividades", e.target.value)}
          required
        />
      </div>
      <div className="ap-form-actions">
        <button type="submit" className="ap-btn ap-btn-primary">Guardar</button>
        <button type="button" className="ap-btn ap-btn-ghost" onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  );
}

function FormVisita({ inicial, onGuardar, onCancelar }) {
  const [form, setForm] = useState(
    inicial || { titulo: "", empresa: "", fecha: "", descripcion: "", actividades: "", color: "#800020" }
  );

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const actividades = form.actividades
      .split("\n")
      .map((a) => a.trim())
      .filter(Boolean);
    onGuardar({ ...form, actividades });
  };

  return (
    <form className="ap-form" onSubmit={submit}>
      <div className="ap-form-grid">
        <div className="ap-field">
          <label>Título de la visita</label>
          <input value={form.titulo} onChange={(e) => set("titulo", e.target.value)} required />
        </div>
        <div className="ap-field">
          <label>Empresa</label>
          <input value={form.empresa} onChange={(e) => set("empresa", e.target.value)} required />
        </div>
        <div className="ap-field">
          <label>Fecha (ej: Marzo 2025)</label>
          <input value={form.fecha} onChange={(e) => set("fecha", e.target.value)} required />
        </div>
        <div className="ap-field">
          <label>Color</label>
          <div className="ap-colores">
            {COLORES.map((c) => (
              <button
                type="button"
                key={c}
                className={`ap-color-dot${form.color === c ? " selected" : ""}`}
                style={{ background: c }}
                onClick={() => set("color", c)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="ap-field">
        <label>Descripción</label>
        <textarea
          rows={2}
          value={form.descripcion}
          onChange={(e) => set("descripcion", e.target.value)}
          required
        />
      </div>
      <div className="ap-field">
        <label>Actividades realizadas (una por línea)</label>
        <textarea
          rows={4}
          value={
            Array.isArray(form.actividades)
              ? form.actividades.join("\n")
              : form.actividades
          }
          onChange={(e) => set("actividades", e.target.value)}
          required
        />
      </div>
      <div className="ap-form-actions">
        <button type="submit" className="ap-btn ap-btn-primary">Guardar</button>
        <button type="button" className="ap-btn ap-btn-ghost" onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  );
}

// ─── Panel principal ───────────────────────────────────────────────────────
export default function AdminPanel() {
  const navigate = useNavigate();
  const nombre = localStorage.getItem("admin_nombre") || "Encargado";

  const [seccion, setSeccion] = useState("semanas"); // "semanas" | "visitas"
  const [semanas, setSemanas] = useState([]);
  const [visitas, setVisitas] = useState([]);
  const [modo, setModo] = useState(null); // null | "crear" | { editar: item }
  const [msg, setMsg] = useState("");
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    cargarSemanas();
    cargarVisitas();
  }, []);

  const cargarSemanas = () =>
    fetch(`${API}/api/semanas`)
      .then((r) => r.json())
      .then(setSemanas)
      .catch(() => {});

  const cargarVisitas = () =>
    fetch(`${API}/api/visitas`)
      .then((r) => r.json())
      .then(setVisitas)
      .catch(() => {});

  const cerrarSesion = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_nombre");
    navigate("/admin/login");
  };

  const mostrarMsg = (texto) => {
    setMsg(texto);
    setTimeout(() => setMsg(""), 3000);
  };

  // ── CRUD Semanas ──
  const guardarSemana = async (data) => {
    setCargando(true);
    const esEdicion = modo?.editar;
    const url = esEdicion
      ? `${API}/api/admin/semanas/${esEdicion.id}`
      : `${API}/api/admin/semanas`;
    const method = esEdicion ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, headers: authHeaders(), body: JSON.stringify(data) });
      const d = await res.json();
      mostrarMsg(d.mensaje);
      setModo(null);
      cargarSemanas();
    } catch {
      mostrarMsg("Error al guardar");
    } finally {
      setCargando(false);
    }
  };

  const eliminarSemana = async (id) => {
    if (!confirm("¿Eliminar esta semana tecnológica?")) return;
    await fetch(`${API}/api/admin/semanas/${id}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    mostrarMsg("Semana eliminada");
    cargarSemanas();
  };

  // ── CRUD Visitas ──
  const guardarVisita = async (data) => {
    setCargando(true);
    const esEdicion = modo?.editar;
    const url = esEdicion
      ? `${API}/api/admin/visitas/${esEdicion.id}`
      : `${API}/api/admin/visitas`;
    const method = esEdicion ? "PUT" : "POST";
    try {
      const res = await fetch(url, { method, headers: authHeaders(), body: JSON.stringify(data) });
      const d = await res.json();
      mostrarMsg(d.mensaje);
      setModo(null);
      cargarVisitas();
    } catch {
      mostrarMsg("Error al guardar");
    } finally {
      setCargando(false);
    }
  };

  const eliminarVisita = async (id) => {
    if (!confirm("¿Eliminar esta visita industrial?")) return;
    await fetch(`${API}/api/admin/visitas/${id}`, {
      method: "DELETE",
      headers: authHeaders(),
    });
    mostrarMsg("Visita eliminada");
    cargarVisitas();
  };

  return (
    <div className="ap-layout">
      {/* Sidebar */}
      <aside className="ap-sidebar">
        <div className="ap-sidebar-logo">
          <span>🏭</span>
          <p>Panel Admin</p>
        </div>
        <nav className="ap-nav">
          <button
            className={`ap-nav-item${seccion === "semanas" ? " active" : ""}`}
            onClick={() => { setSeccion("semanas"); setModo(null); }}
          >
            📅 Semanas Tecnológicas
          </button>
          <button
            className={`ap-nav-item${seccion === "visitas" ? " active" : ""}`}
            onClick={() => { setSeccion("visitas"); setModo(null); }}
          >
            🏗️ Visitas Industriales
          </button>
        </nav>
        <div className="ap-sidebar-footer">
          <p className="ap-user">{nombre}</p>
          <button className="ap-logout" onClick={cerrarSesion}>Cerrar sesión</button>
        </div>
      </aside>

      {/* Contenido */}
      <main className="ap-main">
        {/* Notificación */}
        {msg && <div className="ap-toast">{msg}</div>}

        {/* ── SEMANAS ── */}
        {seccion === "semanas" && (
          <>
            <div className="ap-section-header">
              <h2>Semanas Tecnológicas</h2>
              {!modo && (
                <button className="ap-btn ap-btn-primary" onClick={() => setModo("crear")}>
                  + Nueva semana
                </button>
              )}
            </div>

            {modo === "crear" && (
              <div className="ap-form-box">
                <h3>Nueva Semana Tecnológica</h3>
                <FormSemana onGuardar={guardarSemana} onCancelar={() => setModo(null)} />
              </div>
            )}

            {modo?.editar && seccion === "semanas" && (
              <div className="ap-form-box">
                <h3>Editar Semana Tecnológica</h3>
                <FormSemana
                  inicial={{
                    ...modo.editar,
                    actividades: modo.editar.actividades.join("\n"),
                  }}
                  onGuardar={guardarSemana}
                  onCancelar={() => setModo(null)}
                />
              </div>
            )}

            <div className="ap-list">
              {semanas.length === 0 && (
                <p className="ap-empty">No hay semanas registradas. Agrega la primera.</p>
              )}
              {semanas.map((s) => (
                <div className="ap-item" key={s.id}>
                  <div className="ap-item-color" style={{ background: s.color }} />
                  <div className="ap-item-info">
                    <strong>{s.titulo}</strong>
                    <span>{s.fecha} · {s.tema}</span>
                    <ul>
                      {s.actividades.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </div>
                  <div className="ap-item-actions">
                    <button
                      className="ap-btn ap-btn-edit"
                      onClick={() => setModo({ editar: s })}
                    >
                      Editar
                    </button>
                    <button
                      className="ap-btn ap-btn-danger"
                      onClick={() => eliminarSemana(s.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ── VISITAS ── */}
        {seccion === "visitas" && (
          <>
            <div className="ap-section-header">
              <h2>Visitas Industriales</h2>
              {!modo && (
                <button className="ap-btn ap-btn-primary" onClick={() => setModo("crear")}>
                  + Nueva visita
                </button>
              )}
            </div>

            {modo === "crear" && (
              <div className="ap-form-box">
                <h3>Nueva Visita Industrial</h3>
                <FormVisita onGuardar={guardarVisita} onCancelar={() => setModo(null)} />
              </div>
            )}

            {modo?.editar && seccion === "visitas" && (
              <div className="ap-form-box">
                <h3>Editar Visita Industrial</h3>
                <FormVisita
                  inicial={{
                    ...modo.editar,
                    actividades: modo.editar.actividades.join("\n"),
                  }}
                  onGuardar={guardarVisita}
                  onCancelar={() => setModo(null)}
                />
              </div>
            )}

            <div className="ap-list">
              {visitas.length === 0 && (
                <p className="ap-empty">No hay visitas registradas. Agrega la primera.</p>
              )}
              {visitas.map((v) => (
                <div className="ap-item" key={v.id}>
                  <div className="ap-item-color" style={{ background: v.color }} />
                  <div className="ap-item-info">
                    <strong>{v.titulo}</strong>
                    <span>{v.empresa} · {v.fecha}</span>
                    <p className="ap-item-desc">{v.descripcion}</p>
                    <ul>
                      {v.actividades.map((a, i) => <li key={i}>{a}</li>)}
                    </ul>
                  </div>
                  <div className="ap-item-actions">
                    <button
                      className="ap-btn ap-btn-edit"
                      onClick={() => setModo({ editar: v })}
                    >
                      Editar
                    </button>
                    <button
                      className="ap-btn ap-btn-danger"
                      onClick={() => eliminarVisita(v.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
