import React, { useContext } from 'react';
import { UserContext } from './Component1';

// Sin usar Context
// const Component3 = ({ user }) => {
//   return (
//     <div>
//       <h2>Soy el componente 3 - Hola {user}</h2>
//     </div>
//   );
// };

// Usando Context
const Component3 = () => {

    const user = useContext(UserContext)

    return (
      <div>
        <h2>Soy el componente 3 - Hola {user}</h2>
      </div>
    );
  };

export default Component3;
