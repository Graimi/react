import React from 'react';
import { useEffect } from 'react';

const MessageComponent = () => {
  useEffect(() => {
    console.log('Me monto en el DOM');
  }, []);

  return (
    <div>
      <h4>I'm Ironman</h4>
    </div>
  );
};

export default MessageComponent;
