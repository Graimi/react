import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Horario from './components/Horario';
import Contacto from './components/Contacto';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/">
      {/* Versión 1 */}
      <App />
      {/* Versión 2 */}
      {/* <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="horario" element={<Horario />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes> */}
    </Router>
  </React.StrictMode>
);
