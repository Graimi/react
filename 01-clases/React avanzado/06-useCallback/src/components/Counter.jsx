import React, { useState } from 'react';
import Button from './Button';
import { useCallback } from 'react';

const Counter = () => {
  console.log('Counter rendered');
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const memorizedSetCountOne = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memorizedSetCountTwo = useCallback(
    () => setCountTwo(countTwo + 2),
    [countTwo]
  );
  return (
    <>
      <h3>
        {countOne} || {countTwo}
      </h3>
      <p>Counter con callback</p>
      <Button handleClick={memorizedSetCountOne} name="button+1" />
      <Button handleClick={memorizedSetCountTwo} name="button+2" />
    </>
  );
};

export default Counter;
