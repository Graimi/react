import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

// Con esta función / componente conseguimos que siempre que se recargue la página o el componente, la casilla de user estará focus, por lo tanto se podrá escribir directamente
const CodeRefFocus = () => {
  const focusInputRef = useRef(null);

  useEffect(() => {
    if (focusInputRef.current) focusInputRef.current.focus();
  }, []);

  return (
    <div>
        <h3>Componente User focus</h3>
      <form>
        <fieldset>
          <label htmlFor="user">
            <input
              type="text"
              name="user"
              id="user"
              ref={focusInputRef}
              placeholder="User"
            />
          </label>
          <label htmlFor="pass">
            <input
              type="password"
              name="pass"
              id="pass"
              placeholder="Password"
            />
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default CodeRefFocus;
