import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Careers from './components/Careers';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
            <li style={{ margin: '0 10px' }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              {isLoggedIn ? (
                <Link to="/careers">Carrers</Link>
              ) : (
                <span style={{ color: 'gray', cursor: 'not-allowed' }}>Carrers</span>
              )}
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/register">Sign Up</Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              {!isLoggedIn ? (
                <Link to="/login">Login</Link>
              ) : (
                <button onClick={handleLogout}>Logout</button>
              )}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/login" 
            element={<Login onLogin={handleLogin} />} 
          />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/careers" 
            element={
              isLoggedIn ? (
                <Careers />
              ) : (
                <Navigate to="/login" replace />
              )
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;