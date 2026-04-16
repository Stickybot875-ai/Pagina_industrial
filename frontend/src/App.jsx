import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Talleres from "./pages/talleres";
import Departamento from "./pages/Departamento";
import Docentes from "./pages/Docentes";
import Eventos from "./pages/Eventos";
import Semanas from "./pages/Semanas";
import Productos from "./pages/Productos";
import VisitasIndustriales from "./pages/VisitasIndustriales";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function PublicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function ProtectedAdmin({ children }) {
  const token = localStorage.getItem("admin_token");
  if (!token) return <Navigate to="/admin/login" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas con Header y Footer */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/talleres-industrial" element={<Talleres />} />
          <Route path="/departamento" element={<Departamento />} />
          <Route path="/docentes" element={<Docentes />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/semanas" element={<Semanas />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/visitas-industriales" element={<VisitasIndustriales />} />
        </Route>

        {/* Rutas de administración (sin Header ni Footer) */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminPanel />
            </ProtectedAdmin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
