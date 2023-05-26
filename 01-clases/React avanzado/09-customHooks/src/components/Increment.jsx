import React from 'react'
import useCounter from '../hooks/useCounter';

const Increment = () => {
    const { count, handleIncrement} = useCounter(0);
    return (
      <div className="App">
        <p>Count: {count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
  )
}

export default Increment