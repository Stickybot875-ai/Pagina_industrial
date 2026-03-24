import ProductosCientificos from "../sections/ProductosCientificos";
import "./Pagina.css";

export default function Productos() {
  return (
    <main className="pagina-main">
      <div className="pagina-hero pagina-hero-solid">
        <div className="pagina-hero-overlay">
          <p className="pagina-hero-etiqueta">DEPARTAMENTO DE INGENIERÍA INDUSTRIAL</p>
          <h1 className="pagina-hero-titulo">Productos Científicos</h1>
          <p className="pagina-hero-sub">Artículos, libros e informes del cuerpo académico</p>
        </div>
      </div>
      <div className="pagina-contenido">
        <div className="pagina-card">
          <ProductosCientificos />
        </div>
      </div>
    </main>
  );
}
