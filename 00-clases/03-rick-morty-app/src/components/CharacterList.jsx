import React, { useEffect, useState } from 'react';
import Card from './Card';

const CharacterList = () => {
  // Esto es la versión desestructurada y más simple
  const [characterList, setCharacters] = useState([]);

  // De esto
  // const myState = useState(charactersMock)
  // const characterList = myState[0];
  // const setCharacters = myState[1];

  useEffect(() => {
    (async () => {
      const data = await fetch(
        'https://rickandmortyapi.com/api/character'
      ).then((response) => response.json());
      setCharacters(data.results);
    })(); // Poner estas comillas para que se autoejecute
  }, []);

  return (
    <>
      {characterList.map((characters) => (
        <Card key={characters.id} props={characters} />
      ))}
    </>
  );
};

export default CharacterList;
