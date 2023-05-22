import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Private from './components/Private'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
      <Routes>
        <Route path="" element={<App />}>
          <Route path="login" element={<Login />} />
          <Route path="private" element={<Private />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
