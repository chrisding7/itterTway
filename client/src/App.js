import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
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
          </Routes>
        </div>
    </div>
  );
}

export default App;
