import { createContext, useMemo } from 'react';
import { Navigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Cuando un usuario se conecte por primera vez creará el perfil user con un valor null
  const [user, setUser] = useLocalStorage('user', null);

  // Creamos la función de login para dirigir al usuario a su pág privada
  const login = async (data) => {
    setUser(data);
    // Con el replace true cambiamos el path que hubiera
    Navigate('private/route', { replace: true });
  };

  // Aquí creamos la función para hacer logout, borrar el user y redireccionar a inicio
  const logout = () => {
    setUser(null);
    // Con el replace true cambiamos el path que hubiera
    Navigate('/', { replace: true });
  };

  // Creamos la siguiente función para memorizar los siguientes datos cuando haya un cambio en el user
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
