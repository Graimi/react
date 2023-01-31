import React from 'react';
import FavouriteMovie from './FavouriteMovie';
import NormalMovie from './NormalMovie';

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.movie.map((event) => (
          <li>
            {event.isFavorite ? (
              <FavouriteMovie title={event.title} year={event.year} />
            ) : (
              <NormalMovie title={event.title} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
