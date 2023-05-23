import { useState } from 'react';

export const useLocalStorage = (key, value) => {
  const [user, setUser] = useState(() => {
    try {
      // Con lo siguiente veremos si el usuario ya se ha logueado previamente y si hay alguna clave guardada
      const user = window.localStorage.getItem(key);
      if (user) {
        return JSON.parse(user);
      } else {
        // En el caso de que no haya ningún usuario guardamos el usuario nuevo
        setLocalStorageUser(value);
        return value;
      }
    } catch (error) {
      return value;
    }
  });

  // Esta función guarda el user en el localStorage si no hay usuario
  const setLocalStorageUser = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setUser(value);
    } catch (error) {
      return value;
    }
  };

  return [user, setLocalStorageUser];
};
