import { useState } from 'react';
import './App.css';

function App() {
  const characters = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },

    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      origin: 'Earth (C-137)',
      location: 'Citadel of Ricks',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    },

    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      origin: 'Earth (Replacement Dimension)',
      location: 'Earth (Replacement Dimension)',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    },
  ];

  const [character, setCharacter] = useState(characters);
  
  function handleAddCharacter() {
    const newCharacter = {
      id: Date.now(),
      name: 'Mr. Meeseeks',
      status: 'dead',
      species: 'Humanoid',
      type: 'Meeseeks',
      origin: 'Mr. Meeseeks Box',
      location: 'Earth',
      image:
        'https://rickandmortyapi.com/api/character/avatar/242.jpeg',
    };
    setCharacter([...characters, newCharacter])
  }

  function handleDeleteCharacter(id) {
    const newlist = character.filter((item) => item.id !== id)
    setCharacter(newlist)
  }

  return (
    <div className="App">
      {character.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>Estado: {event.status}</p>
          <p>Vive en: {event.location}</p>
          <img src={event.image} alt="imagen" width="150px, 50vw"/>
          <br />
          <button onClick={() => handleDeleteCharacter(event.id)}>Bórrame</button>
          <br />
        </div>
      ))}
      <br />
      <button onClick={handleAddCharacter}>Pinchameee</button>
    </div>
  );
}

export default App;
