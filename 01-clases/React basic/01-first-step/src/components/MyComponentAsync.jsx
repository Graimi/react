import React from 'react';

const MyComponentAsync = () => {
  const [name, setName] = React.useState('Alberto');

  React.useEffect(() => {
    console.log('1', name); // Alberto
    setName('Cristian');
    console.log('2', name); // Cristian NO -> Alberto por el momento
  }, []);

  return <div>Hello my name is {name}</div>;
};

export default MyComponentAsync;
