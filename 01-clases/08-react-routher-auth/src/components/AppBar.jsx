import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const AppBar = ({ pages }) => {
  const { user, logout } = useAuth();

  const handleNavigate = (path) => {
    if (path) Navigate(path);
  };

  return (
    <>
      <header>
        <h1>React Router Auth 🚀</h1>
      </header>
      <nav>
        {
          // Lo siguiente mapea todas las pages que haya y crea un boton con su direccion para cada una
          pages?.map((page) => (
            <button key={page.label} onClick={() => handleNavigate(page.path)}>
              {page.label}
            </button>
          ))
        }
        {!!user && (
          // Con este botón haces mención a la función de logout por lo que eliminamos el usuario y nos vamos a la home
          <button key={logout} onClick={logout}>
            Logout 🔴
          </button>
        )}
      </nav>
    </>
  );
};

export default AppBar;
