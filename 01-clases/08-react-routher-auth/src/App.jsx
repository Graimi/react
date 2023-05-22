import { Route, Routes } from 'react-router-dom';
import './App.css';
import { FreeLayout } from './layout/FreeLayout'
import { ProtectedLayout } from './layout/ProtectedLayout'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { Setting } from './pages/Setting';
import React from 'react';

function App() {
  return (
    // En este caso las rutas se van a definir en el app en vez de en el main
    <Routes>
      {/* Declaramos todas las rutas que se encuentran dentro del FreeLayout */}
      <Route element={<FreeLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      {/* Declaramos todas las rutas que se encuentran dentro del ProtectedLayout */}
      <Route path='/dashboard' element={<ProtectedLayout />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default App;