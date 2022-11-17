import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import LoginContainer from './components/Login/LoginContainer';
import { Route, Switch } from 'react-router-dom'
import { useEffect, useState } from "react";
import React from 'react';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((userData) => setUser(userData));
      }
    });
  }, []);

  if (!user) {
    return <LoginContainer setUser={setUser}/>
  }

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} className="navbar"/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/profile">
            <Profile user={user} setUser={setUser}/>
          </Route>

          <Route exact path="/login">
            <Login setUser={setUser}/>
          </Route>

          <Route exact path="/signup">
            <Signup setUser={setUser}/>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
