import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import ImageGrid from "./components/ImageGrid";
import SelectorPensamientos from "./components/SelectorPensamientos";
import "./css/App.css"; // Para estilos generales y del menú
import logo from "./assets/logo.png";

const shareUrl = "https://selector-esquelas.vercel.app/"; // asegúrate que sea https
const defaultShareText =
  "Toca la url para ver los fondos y pensamientos disponibles";

function shareViaWhatsApp(customText) {
  const text = customText?.trim() || defaultShareText;
  const payload = encodeURIComponent(`${text} ${shareUrl}`);
  const waUrl = `https://wa.me/?text=${payload}`;
  // En móviles abre la app; en desktop, WhatsApp Web
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <h4>Versión 1.2</h4>
          </div>
          <div className="navbar-links">
            <NavLink
              to="/esquelas"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Selector de Fondos
            </NavLink>
            <NavLink
              to="/pensamientos"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Selector de Pensamientos
            </NavLink>
            <button
              className="share-button"
              onClick={() =>
                shareViaWhatsApp(/* aquí puedes pasar un texto dinámico */"Funerales Guatemala y Parque Memorial el Edén- Servir, Confortar y Acompañar es nuestra misión | Por favor selecciona un fondo y un pensamiento para honrar a tu ser amado")
              }
            >
              Compartir por WhatsApp
            </button>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/esquelas" />} />
          <Route path="/esquelas" element={<ImageGrid />} />
          <Route path="/pensamientos" element={<SelectorPensamientos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
