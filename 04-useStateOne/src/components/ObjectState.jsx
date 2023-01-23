import React, { useState } from 'react';

const ObjectState = () => {
  const [avenger, setAvenger] = useState({
    name: 'Tony Stark',
    superHeroName: 'Ironman',
    age: 45,
  });
  return (
    <div>
      <h4>
        {avenger.name} || {avenger.superHeroName} || {avenger.age} years
      </h4>

      <input
        type="text"
        value={avenger.name}
        onChange={(event) =>
          setAvenger({ ...avenger, name: event.target.value })
        }
      />

      <input
        type="text"
        value={avenger.superHeroName}
        onChange={(event) =>
          setAvenger({ ...avenger, superHeroName: event.target.value })
        }
      />

      <input
        type="numbers"
        value={avenger.age}
        onChange={(event) =>
          setAvenger({ ...avenger, age: event.target.value })
        }
      />
    </div>
  );
};

export default ObjectState;
