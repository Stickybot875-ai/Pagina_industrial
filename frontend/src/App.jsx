import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Talleres from "./pages/talleres";
import Departamento from "./pages/Departamento";
import Docentes from "./pages/Docentes";
import Eventos from "./pages/Eventos";
import Semanas from "./pages/Semanas";
import Productos from "./pages/Productos";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talleres-industrial" element={<Talleres />} />
        <Route path="/departamento" element={<Departamento />} />
        <Route path="/docentes" element={<Docentes />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/semanas" element={<Semanas />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
