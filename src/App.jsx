import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import ImageGrid from './components/ImageGrid';
import SelectorPensamientos from './components/SelectorPensamientos';
import './css/App.css'; // Para estilos generales y del menú

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <nav className="navbar">
          <NavLink to="/esquelas" className={({ isActive }) => isActive ? "active-link" : ""}>
            Selector de Esquelas
          </NavLink>
          <NavLink to="/pensamientos" className={({ isActive }) => isActive ? "active-link" : ""}>
            Selector de Pensamientos
          </NavLink>
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
