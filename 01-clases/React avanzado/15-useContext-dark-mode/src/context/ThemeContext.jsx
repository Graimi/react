import React, { createContext, useState, useCallback, useEffect } from 'react';

// Creamos el contexto con el tema por defecto dark
export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => null,
});

// Creamos el provider del contexto con el prop children que serán los diferentes componentes, pages...
export const ThemeContextProvider = ({ children }) => {
  // Almacenamos el color del tema con un useState
  const [theme, setTheme] = useState(
    // Obtenemos el tema almacenado y si no hay por defecto será dark
    () => localStorage.getItem('theme') || 'dark'
  );

  //   Damos funcionalidad al toggle y usamos el callback para que cuando se produzcan re-render dentro de la app no se pierda la referencia
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  //   Con el useEffect siguiente seteamos el valor del tema, actualizándolo cuando este cambie
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  //   Actualizamos el provider y le asignamos las funciones siguientes para poder hacer uso de ellas
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
