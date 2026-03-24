import Hero from "../sections/Hero";
import Historia from "../sections/Historia";
import ContadorRegresivo from "../sections/ContadorRegresivo";
import Legado from "../sections/Legado";
import ListaEventos from "../sections/ListaEventos";
import Ponentes from "../sections/Ponentes";
import Registro from "../sections/Registro";
import Contacto from "../sections/Contacto";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-main">
      {/* 1. Hero — banner edificio + descripción II */}
      <Hero />

      {/* 2. Contador regresivo */}
      <ContadorRegresivo fechaObjetivo="2025-10-13T00:00:00" />

      {/* 3. Historia (línea del tiempo vertical) */}
      <Historia />

      {/* 4. Estadísticas legado */}
      <Legado />

      {/* 5. Talleres */}
      <ListaEventos />

      {/* 6. Ponentes */}
      <section id="ponentes" className="ponentes-seccion">
        <div className="home-seccion-header">
          <p className="home-seccion-etiqueta">50 ANIVERSARIO</p>
          <h2 className="home-seccion-titulo">Ponentes Invitados</h2>
        </div>
        <Ponentes />
      </section>

      {/* 7. Registro */}
      <Registro />

      {/* 8. Contacto */}
      <Contacto
        titulo="CONTÁCTANOS"
        subtitulo="¡Platícanos tus dudas!"
        direccion="Av. Adolfo López Mateos #1801 Ote., Fracc. Bona Gens, C.P. 20255, Aguascalientes, Ags."
        email="comunicacion@aguascalientes.tecnm.mx"
        telefono="+52 (449) 910 50 02"
      />
    </main>
  );
}
