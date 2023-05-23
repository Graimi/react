import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import Review from './components/Review';

function App() {

  const [score, setScore] = useState(0)
  return (
    <div className="App">
      <Movie
        title="Guardianes de la galaxia"
        poster="https://i0.wp.com/www.universomarvel.com/wp-content/uploads/2023/02/unnamed.jpg?ssl=1"
      />

      <hr />

      <label htmlFor="score">
        <input type="number" name="score" id="score" value={score} onChange={(ev) => setScore(ev.target.valueAsNumber)} />
      </label>
      <Review title="Guardianes de la galaxia" score={score} />
    </div>
  );
}

export default App;
