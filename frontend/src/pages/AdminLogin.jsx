import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:5001";

export default function AdminLogin() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);
    try {
      const res = await fetch(`${API}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ correo, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.mensaje || "Credenciales inválidas");
        return;
      }
      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("admin_nombre", data.nombre);
      navigate("/admin");
    } catch {
      setError("Error de conexión con el servidor");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="admin-login-bg">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h1>Panel de Administración</h1>
          <p>Ingeniería Industrial — ITA</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="admin-field">
            <label>Correo</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="encargado@ita.edu.mx"
              required
            />
          </div>
          <div className="admin-field">
            <label>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error && <p className="admin-login-error">{error}</p>}
          <button type="submit" disabled={cargando} className="admin-login-btn">
            {cargando ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}
