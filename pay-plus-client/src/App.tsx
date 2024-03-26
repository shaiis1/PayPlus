import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Register } from './Components/Register';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
