import { useState } from "react";
import "./Acordeon.css";

export default function AcordeonItem({ id, titulo, children, onHeaderClick }) {
  const [abierto, setAbierto] = useState(false);

  const handleClick = () => {
    if (onHeaderClick) {
      onHeaderClick();
    } else {
      setAbierto((prev) => !prev);
    }
  };

  return (
    <div className="acordeon-item" id={id}>
      <button
        className={`acordeon-header ${abierto ? "abierto" : ""}`}
        onClick={handleClick}
        aria-expanded={abierto}
      >
        <span>{titulo}</span>
        {!onHeaderClick && (
          <span className={`acordeon-flecha ${abierto ? "girada" : ""}`}>▼</span>
        )}
        {onHeaderClick && (
          <span className="acordeon-externo">↗ Abrir</span>
        )}
      </button>

      {!onHeaderClick && (
        <div className={`acordeon-body ${abierto ? "visible" : ""}`}>
          <div className="acordeon-contenido">{children}</div>
        </div>
      )}
    </div>
  );
}
