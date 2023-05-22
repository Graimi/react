import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AppBar from '../components/AppBar';

// Creamos el layout de un usuario no  registrado
export const FreeLayout = () => {
  const { user } = useAuth();

  // Si hay usuario lo mandamos a su dashboard
  if (user) return <Navigate to="/dashboard/profile" replace />;

  return (
    <>
      <AppBar
        pages={[
          { label: 'Home', path: '/' },
          { label: 'Login 📤', path: '/login' },
        ]}
      />
      <Outlet />
    </>
  );
};
