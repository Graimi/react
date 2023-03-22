import React from 'react';

const FavouriteMovie = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.year}</p>
    </div>
  );
};

export default FavouriteMovie;
