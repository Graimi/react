import React from 'react'
import useCounter from '../hooks/useCounter';

const Decrement = () => {
    const { count, handleDecrement} = useCounter(0);
    return (
      <div className="App">
        <p>Count: {count}</p>
        <button onClick={handleDecrement}>-</button>
      </div>
  )
}

export default Decrement