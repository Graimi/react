import React from 'react';
import { memo } from 'react';

const DeleteUser = memo(({ deleteUser, name }) => {
    console.log('deleteUser on render')
  return <button onClick={deleteUser}>{name}</button>
});

export default DeleteUser;
