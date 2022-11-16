import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import {Route, Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Profile" element={<Profile/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Signup" element={<Signup/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
