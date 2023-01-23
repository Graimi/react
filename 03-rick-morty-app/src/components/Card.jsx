import React from 'react';

const Card = ({props}) => {
    console.log(props)
  return (
    <div>
        <h2>{props.name}</h2>
        <p>id: {props.id}</p>
        <p>Gender: {props.gender}</p>
        <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Card;
