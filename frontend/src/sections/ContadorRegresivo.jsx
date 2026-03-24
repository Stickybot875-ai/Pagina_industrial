import { useState, useEffect, useCallback } from "react";

export default function ContadorRegresivo({ fechaObjetivo }) {
  const calcularTiempoRestante = useCallback(() => {
    const ahora = new Date().getTime();
    const destino = new Date(fechaObjetivo).getTime();
    const diferencia = destino - ahora;

    const segundos = Math.floor((diferencia / 1000) % 60);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    return { dias, horas, minutos, segundos };
  }, [fechaObjetivo]);

  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempoRestante());
    }, 1000);

    return () => clearInterval(intervalo);
  }, [calcularTiempoRestante]);

  return (
    <section className="contador-contenedor">
      <h2 className="contador-titulo">Cuenta regresiva al evento principal</h2>
      <div className="contador-tiempo-contenedor">
        {["dias", "horas", "minutos", "segundos"].map((unidad) => (
          <div key={unidad} className="contador-unidad-contenedor">
            <div className="contador-numero">
              {tiempoRestante[unidad].toString().padStart(2, "0")}
            </div>
            <div className="contador-etiqueta">{unidad.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
