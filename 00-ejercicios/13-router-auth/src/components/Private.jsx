import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Private = () => {
  // Almacenamos la info en un state para gestionar mejor los logeos
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('authenticated') === 'true'
  );

  // Función para el logout
  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    setIsAuthenticated(false);
  };

  // Una vez se produzca el logout redirigimos a su login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <div>Esta es tu área privada</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Private;
