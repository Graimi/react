import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const FetchingInput = () => {
  const [filter, setFilter] = useState('charmander');
  const [debouncedFilter] = useDebounce(filter, 1000);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemonFiltered = async () => {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${filter}`
      );
      const pokemonJson = await pokemon.json();
      return {
        ...pokemonJson,
        name: pokemonJson.name,
        id: pokemonJson.id,
        image: pokemonJson.sprites.front_shiny,
      };
    };
    getPokemonFiltered().then((result) => setPokemon([result]));
  }, [debouncedFilter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
      <div>
        {pokemon.map((p) => (
          <div key={p.id}>
            <h1>
              {p.name} {console.log(p.id)}{' '}
            </h1>
            <img src={p.image} alt={p.name} width="500px" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchingInput;
