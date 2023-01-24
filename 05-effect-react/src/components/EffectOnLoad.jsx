import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const EffectOnLoad = ({ name }) => {
  const [nameState, setNameState] = useState(name);

  useEffect(() => {
    setTimeout(() => {
      setNameState('Julian');
    }, 3000);
  }, []);

  return (
    <div>
      <h4>{nameState}</h4>
      <input
        type="text"
        value={nameState}
        onChange={(event) => setNameState(event.target.value)}
      />
    </div>
  );
};

export default EffectOnLoad;
