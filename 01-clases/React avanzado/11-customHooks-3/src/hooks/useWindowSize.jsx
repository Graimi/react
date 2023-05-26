import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
  }));

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(windowSize);

  return windowSize;
};

export default useWindowSize;
