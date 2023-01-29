import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  // const [superhero, setSuperhero] = useState('');
  // const [superpower, setSuperpower] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (!superhero) {
  //     alert('El campo es requerido');
  //     return;
  //   }

  //   console.log({ name: superhero, power: superpower });

  //   sendSuperhero({ name: superhero, power: superpower });
  //   // Este send es un ej, no se está enviando a ninguna API
  // };

  // const handleChangeSuperhero = (event) => {
  //   setSuperhero(event.target.value);
  // };

  // const handleChangeSuperpower = (event) => {
  //   setSuperpower(event.target.value);
  // };

  return (
    <div className="App">
      < Form />

      {/* <h1>React Forms!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="superhero">Nombre del superhéroe:</label>
        <input
          value={superhero}
          onChange={handleChangeSuperhero}
          type="text"
          name="superhero"
          id="superhero"
        />

        <br />

        <label htmlFor="superpower">Escribe un superpoder:</label>
        <input
          value={superpower}
          onChange={handleChangeSuperpower}
          type="text"
          name="superpower"
          id="superpower"
        />

        <br />

        <button type="submit">Enviar!</button>
      </form> */}
    </div>
  );
}

export default App;
