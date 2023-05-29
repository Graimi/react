import React, { createContext, useState } from 'react';
import Component2 from './Component2';

export const UserContext = createContext();

const Component1 = () => {
  const [user, setUser] = useState('Alberto Rivera');

  //   Sin usar Context
  //   return (
  //     <div>

  //       <h2>Bienvenido {user}</h2>
  //       <Component2 user={user} />
  //     </div>
  //   );

  //   Usando Context
  return (
    <div>
      <UserContext.Provider value={user}>
        <h2>Bienvenido {user}</h2>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default Component1;
