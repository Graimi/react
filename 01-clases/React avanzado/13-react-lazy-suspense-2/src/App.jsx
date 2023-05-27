import { Link, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import './App.css';

// import HomePage from './pages/Home'
// import ProfilePage from './pages/Profile'
const HomePage = lazy(() => import('./pages/Home'));
const ProfilePage = lazy(() => import('./pages/Profile'));

function App() {
  return (
    <div className="App">
      <header>
        <h2>Ejemplos React Lazy y Suspense</h2>
        <nav>
          <Link to="/">Home</Link> <Link to="/profile">Profile</Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<h2>Cargando página</h2>}>
              <HomePage />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <React.Suspense fallback={<h2>Cargando página</h2>}>
              <ProfilePage />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
