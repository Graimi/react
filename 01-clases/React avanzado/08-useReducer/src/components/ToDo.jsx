import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    name: 'Studie React',
    isCompleted: false,
  },
];

// Creamos todo fuera de la función/componente principal
const reducer = (state, action) => {
  if (action.type === 'ADD_TODO') {
    console.log('ADD REDUCER')
    const { name } = action.payload;
    return [
      ...state,
      {
        id: uuidv4(),
        name,
        isCompleted: false,
      },
    ];
  }
  if (action.type === 'TOGGLE_IS_COMPLETED') {
    console.log('TOGGLE REDUCER')
    const { id } = action.payload;
    const newState = state.map((singleToDo) => {
      if (singleToDo.id === id) {
        return { ...singleToDo, isCompleted: !singleToDo.isCompleted };
      }
      return singleToDo;
    });
    return newState;
  }
  return state;
};

const ToDo = () => {
  const [toDoText, setToDoText] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => setToDoText(e.target.value);
  const handleClick = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: { name: toDoText },
    });
  };
  const handleToggle = (id) => {
    dispatch({
      type: 'TOGGLE_IS_COMPLETED',
      payload: { id },
    });
  };

  return (
    <>
      <h3>Add New ToDo:</h3>
      <div>
        <input type="text" value={toDoText} onChange={handleChange} />
        <button onClick={handleClick}>Add toDo</button>
      </div>
      <h3>List ToDo:</h3>
      <ul>
        {state.map(({ name, isCompleted, id }) => {
            const style = {textDecoration: isCompleted ? 'line-through' : 'inherit'};
          return (
            <li key={id} style={style} onClick={() => handleToggle(id)}>
              {name} || {isCompleted}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDo;
