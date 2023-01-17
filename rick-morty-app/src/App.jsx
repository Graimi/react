import { useEffect, useState } from 'react';
import './App.css';

function App() {

  // Esto es la versión desestructurada y más simple
  const [characterList, setCharacters] = useState([]);

  // De esto
  // const myState = useState(charactersMock)
  // const characterList = myState[0];
  // const setCharacters = myState[1];

  useEffect(() => {
    (async () => {
      const data = await fetch("https://rickandmortyapi.com/api/character").then(
        (response) => response.json()
      );
      setCharacters(data.results)
    })(); // Poner estas comillas para que se autoejecute
  }, [])

  return (
    <div className="App">
      {characterList.map((characters) => (
        <div key = {characters.id} >
        
        <h2>{characters.name}</h2>
        <p>id: {characters.id}</p>
        <p>Gender: {characters.gender}</p>
        <img src={characters.image} alt= {characters.name} />
        
        </div>
      ))}
    </div>
  );
}

export default App;
