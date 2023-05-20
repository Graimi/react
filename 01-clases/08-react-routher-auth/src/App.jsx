import { NavLink, Outlet } from "react-router-dom";
import './App.css'
import AppBar from "./components/AppBar";

function App() {

  return (
    <div className="App">
      <AppBar/>
      <main>
        <Outlet />
      </main>
      <footer>Created by RockTheCode with 💖</footer>
    </div>
  )
}

export default App
