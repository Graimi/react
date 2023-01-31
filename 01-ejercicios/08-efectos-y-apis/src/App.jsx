import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        'https://rickandmortyapi.com/api/character'
      ).then((response) => response.json());
      setCharacters(data.results);
    })(); // Poner estas comillas para que se autoejecute
  }, []);

  return (
    <div className="App">
      <>
        {characters.map((character) => (
          <div key={character.id}>
            <h1>{character.name}</h1>
            <p>Location: {character.location.name}</p>
            <p>Gender: {character.gender}</p>
            <img src={character.image} alt="" />
            <br />
          </div>
        ))}
      </>
    </div>
  );
}

export default App;
