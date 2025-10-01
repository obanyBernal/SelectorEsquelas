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
              onClick={() => {
                const shareUrl = "http://selector-esquelas.vercel.app/";
                navigator.clipboard.writeText(shareUrl);
                alert("¡Enlace copiado para compartir!");
              }}
              className="share-button"
            >
              Compartir App
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
