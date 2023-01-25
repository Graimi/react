import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    () => {};
    console.log(counter);
  }, [counter]);

  return (
    <div className="App">
      <p>El valor actual de Counter es: {counter} </p>
      <button onClick={() => setCounter(counter + 1)}>Suma</button>
    </div>
  );
}

export default App;
