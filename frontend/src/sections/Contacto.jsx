import InfoContacto from "./InfoContacto";
import FormularioContacto from "./FormularioContacto";

export default function Contacto({ titulo, subtitulo, direccion, email, telefono, dataAosInfo, dataAosForm }) {
  return (
    <>
      <section id="contacto" className="contacto-section">
        <div className="contacto-grid">
          <InfoContacto
            titulo={titulo}
            subtitulo={subtitulo}
            direccion={direccion}
            email={email}
            telefono={telefono}
            dataAos={dataAosInfo}
          />

          <FormularioContacto dataAos={dataAosForm} />
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-container">
          <p>
            Descubre las últimas noticias y artículos sobre el
            <span> Instituto Tecnológico de Aguascalientes</span>.
          </p>
          <a href="https://ita40.blogspot.com/2024/09/" className="blog-btn">
            Visítanos en →
          </a>
        </div>
      </section>
    </>
  );
}