import './App.css';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="App">
      <button onClick={(event) => setActive(!active)}>
        Click me
        {console.log(active)}
      </button>
      <p className={active ? 'on' : 'off'}>{active ? 'Encendido' : 'Apagado'}</p>
    </div>
  );
}

export default App;
