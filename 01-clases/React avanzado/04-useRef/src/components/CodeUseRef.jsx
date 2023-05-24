import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

// Con esta función, el nombre no se actualizará hasta que hagamos click en el botón
const CodeUseRef = () => {
  const [name, setName] = useState('Alberto');

  const textInput = useRef(null);

  // Con esta función indicamos que si textInput ha dejado de ser null seteamos el valor de name con el del input
  const printValue = () => {
    const inputValue = textInput.current?.value;
    if (inputValue) setName(inputValue);
    console.log('Imprime nombre', textInput);
  };

  return (
    <div>
      <h3>Hola soy {name}</h3>
      {/* Declaramos el como referencia al useRef el valor de input */}
      <input type="text" placeholder="name" ref={textInput} />
      {/* Lanzamos la función al pinchar en el botón */}
      <button onClick={printValue}>Mostrar</button>
    </div>
  );
};

export default CodeUseRef;
