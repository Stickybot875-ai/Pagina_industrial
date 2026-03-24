export default function Inicio({
  titulo = "Ingeniería Industrial ITA",
  descripcion = "Bienvenido al evento académico",
  dataAos = "fade-up"
}) {
  return (
    <section id="inicio" className="section inicio" data-aos={dataAos}>
      <h1>{titulo}</h1>
      <p>{descripcion}</p>
    </section>
  );
}