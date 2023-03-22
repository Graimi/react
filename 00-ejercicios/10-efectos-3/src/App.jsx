import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [style, setStyle] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('black');
  const [fontColor, setFontColor] = useState('white');
  const [fontSize, setFontSize] = useState(`20px`);
  const [borderRadius, setBorderRadius] = useState('10px');

  useEffect(() => {
    const newStyles = {
      backgroundColor: backgroundColor,
      color: fontColor,
      fontSize: fontSize,
      borderRadius: borderRadius,
    };
    return () => {
      setStyle(newStyles);
    };
  }, [backgroundColor, fontColor, fontSize, borderRadius]);

  return (
    <div className="App">
      <h2>Editando estilos de forma dinámica</h2>
      <button style={style}>Estilos dinámicos</button>
      <br />
      <label htmlFor="backgroundColor">Selecciona un color de fondo:</label>
      <input
        type="color"
        name="backgroundColor"
        id="backgroundColor"
        onChange={(event) => setBackgroundColor(event.target.value)}
      />
      <br />
      <label htmlFor="fontColor">Selecciona el color de la fuente:</label>
      <input
        type="color"
        name="fontColor"
        id="fontColor"
        onChange={(event) => setFontColor(event.target.value)}
      />
      <br />
      <label htmlFor="fontSize">Selecciona el tamaño de la fuente:</label>
      <input
        type="number"
        name="fontSize"
        id="fontSize"
        onChange={(event) => setFontSize(`${event.target.value}px`)}
      />
      <br />
      <label htmlFor="borderRadius">Selecciona el radio:</label>
      <input
        type="number"
        name="borderRadius"
        id="borderRadius"
        onChange={(event) => setBorderRadius(event.target.value)}
      />
    </div>
  );
}

export default App;
