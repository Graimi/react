import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState('');

  const today = new Date();
  const now = today.toLocaleTimeString();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(now);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="App">
      <h1 className="clock">{time}</h1>
    </div>
  );
}

export default App;
