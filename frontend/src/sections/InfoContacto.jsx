export default function InfoContacto({ titulo, subtitulo, direccion, email, telefono, dataAos }) {
  return (
    <div className="info-contacto" data-aos={dataAos}>
      <h5>{titulo}</h5>
      <h2>{subtitulo}</h2>
      <p>{direccion}</p>
      <p>{email}</p>
      <p>{telefono}</p>

      <div className="social-icons">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
      </div>

      <div className="mapa-container">
        <iframe
          title="Ubicación ITA Aguascalientes"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3731.366132914335!2d-102.26259533885168!3d21.87844867056218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1717621234567!5m2!1ses!2smx"
          width="100%"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}