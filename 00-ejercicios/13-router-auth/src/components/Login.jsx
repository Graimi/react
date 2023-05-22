import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  // Comprobamos la info y declaramos el valor
  const handleSubmit = () => {
    if (user === 'student' && password === '1234abc') {
      localStorage.setItem('authenticated', 'true');
    }
  };

  // Una vez se identifique como valido lo redirigimos a su private
  if (localStorage.getItem('authenticated') === 'true') {
    return <Navigate to="/private" replace={true} />;
  }

  return (
    <div>
      <h2>Esta es la página de login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input
            type="text"
            name="text"
            id="text"
            required
            // Seteamos el valor del user
            onChange={(ev) => setUser(ev.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            required
            // Seteamos el valor de la password
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </label>
        <button type="submit">Log in!</button>
      </form>
    </div>
  );
};

export default Login;
