import React, { useCallback, useState } from 'react';
import DeleteUser from './DeleteUser';

const CodeUserCallback = () => {
  const [user, setUser] = useState({
    name: 'Alberto',
    surname: 'Rivera',
    age: 35,
  });
  const deleteUserCallback = useCallback(() => {
    setUser({ name: '', apellido: '', age: 0 });
  }, []);
  return (
    <>
      <h3>
        {user.name} || {user.surname} || {user.age}
      </h3>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="text"
        value={user.surname}
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
      />
      <DeleteUser deleteUser={deleteUserCallback} name='Reset user'/>
    </>
  );
};

export default CodeUserCallback;
