import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

const useToggle = () => {
  const [state, setState] = useState(false);

  const handler = useCallback(() => {
    setState((prevValue) => !prevValue);
  }, []);

  return [state, handler]
};

export default useToggle;
