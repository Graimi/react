import React, { Suspense, lazy, useState } from 'react';

// import ProfileData from '../components/ProfileData';
const ProfileData = lazy(() => import('../components/ProfileData'));

const ProfilePage = () => {
  const [toggleData, setToggleData] = useState(false);
  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={() => setToggleData(!toggleData)}>Toggle Data</button>
      {toggleData ? (
        <React.Suspense fallback={<h2>Cargando página</h2>}>
          <ProfileData />
        </React.Suspense>
      ) : null}
    </>
  );
};

export default ProfilePage;