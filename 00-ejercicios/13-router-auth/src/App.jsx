import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>React Router Auth</h2>
      <Link to="">Inicio</Link>
      <Link to="login">Login</Link>
      <Link to="private">Private</Link>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
