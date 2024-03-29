import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AppBar from '../components/AppBar';

// Creamos el layout de un usuario registrado
export const ProtectedLayout = () => {
  const { user } = useAuth();

  // Si no hay usuario lo mandamos a la página login
  if (!user) return <Navigate to="/" />;

  return (
    <>
      <AppBar
        pages={[
          { label: 'Settings 🪚', path: 'settings' },
          { label: 'Profile 🙎', path: 'profile' },
        ]}
      />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
