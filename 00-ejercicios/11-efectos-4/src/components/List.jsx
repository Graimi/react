import React, { useState } from 'react';
import { useEffect } from 'react';

const movies = [
  { id: 1, title: 'The Shawshank Redemption', genre: 'Drama' },
  { id: 2, title: 'The Godfather', genre: 'Drama' },
  { id: 3, title: 'The Godfather: Part II', genre: 'Drama' },
  { id: 4, title: 'The Dark Knight', genre: 'Action' },
  { id: 5, title: 'Pulp Fiction', genre: 'Thriller' },
];

const genres = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Drama' },
  { id: 3, name: 'Action' },
  { id: 4, name: 'Thriller' },
];

const List = () => {
  // Crear un useState con los valores de movies y genres
  // Usar el useEffect como filtro para las películas una vez seleccionado el género
  // Crear un select con sus respetivas option para los dif géneros
  // Probar con un map para los options, en este ej se tuvo que seleccionar el genre
  // dentro de las opciones en vez del wantedGenre que es el que fue cambiando de fondo
  // para seleccionar las películas
  const [newListOfMovies, setNewListOfMovies] = useState(movies);

  const [wantedGenres, setWantedGenres] = useState(genres);

  useEffect(() => {
    const desiredMovies =
      wantedGenres.name === 'All'
        ? movies
        : movies.filter((movie) => movie.genre === wantedGenres.name);
    setNewListOfMovies(desiredMovies);
  }, [wantedGenres, movies]);

  return (
    <>
      <h3>Por favor, seleccione el género</h3>
      <select
        value={wantedGenres.id}
        onChange={(event) =>
          setWantedGenres(
            genres.find((genre) => genre.id == event.target.value)
          )
        }
      >
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      <ul>
        {newListOfMovies.map((movie) => (
          <li key={movie.id} value={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
