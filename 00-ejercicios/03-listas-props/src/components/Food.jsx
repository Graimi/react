import React from 'react';

const Food = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Tiene {props.calories} calorías</h3>
      <p>{props.description}</p>
      <br />
    </div>
  );
};

export default Food;
