import { Routes, Route, NavLink, Outlet } from 'react-router-dom';
import './App.css';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Horario from './components/Horario';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="">Inicio</NavLink>
        <NavLink to="horario">Horario</NavLink>
        <NavLink to="contacto">Contacto</NavLink>
      </nav>
      {/* Versión 1 */}
      <Routes>
        <Route path="" element={<Inicio />} />
        <Route path="horario" element={<Horario />} />
        <Route path="contacto" element={<Contacto />} />
      </Routes>
      {/* Versión 2, es necesario usar el outlet para que funcione*/}
      {/* <main>
        <Outlet />
      </main> */}
      <footer>Footer</footer>
    </div>
  );
}

export default App;
