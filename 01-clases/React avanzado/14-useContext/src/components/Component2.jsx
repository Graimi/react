import React from 'react';
import Component3 from './Component3';

// Sin usar Context
// const Component2 = ({ user }) => {
//   return (
//     <div>
//       <h2>Soy el componente 2 y no uso el state</h2>
//       <Component3 user={user} />
//     </div>
//   );
// };

// Usando Context
const Component2 = () => {
  return (
    <div>
      <h2>Soy el componente 2 y no uso el state</h2>
      <Component3 />
    </div>
  );
};

export default Component2;
