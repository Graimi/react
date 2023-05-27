import React, { Suspense, lazy, useState } from 'react';
import './App.css';

// Forma clásica de llamar a un componente de manera síncrona
// import ProfileData from './components/ProfileData';
// Usando react lazy para hacerlo en diferido, es decir, cuando se use y no antes
const ProfileData = lazy(() => import('./components/ProfileData'));

function App() {
  const [toggleData, setToggleData] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setToggleData(!toggleData)}>Toggle data</button>
      {toggleData ? (
        <React.Suspense fallback={<h2>Cargando...</h2>}>
          <ProfileData />
        </React.Suspense>
      ) : null}
    </div>
  );
}

export default App;
