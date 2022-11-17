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


  const pigLatinize = (string) => {
    const stringArray = string.split(/\s*\b\s*/)
    console.log(stringArray)
    
    function isVowel(char){
        return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U' || false;
    }
    const newStringArray = stringArray.map(element => {
        if(element.match(/\W/)){
            console.log(`punctuation: ${element}`)
            return element
        }

        else if(isVowel(element[0])){
            console.log(`first position vowel: ${element}`)
            element = element.concat("way")
            console.log(element)
            return element


        }
        else if(isVowel(element[1]) && !isVowel(element[0])){
            console.log(`second position vowel: ${element}`)
            element = element.concat(element.at(0))
            element = element.replace(element.at(0), "")
            element = element.concat("ay")
            console.log(element)
            return element

        }
        else if(!isVowel(element[0]) && !isVowel(element[1])){
            console.log(`neither first or second position vowel: ${element}`)
            element = element.concat(element.at(0))
            element = element.concat(element.at(1))
            element = element.replace(element.at(0), "")
            element = element.replace(element.at(0), "")
            element = element.concat("ay")
            console.log(element)
            return element
        
        }

    });
    const newString = newStringArray.join(" ")
    console.log(newString)
    return newString

}



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
            <Home user={user} pigLatinize = {pigLatinize}/>
          </Route>

          <Route exact path="/profile">
            <Profile user={user}/>
          </Route>

          <Route exact path="/login">
            <Login setUser={setUser}/>
          </Route>

          <Route exact path="/signup">
            <Signup setUser={setUser} pigLatinize = {pigLatinize}/>
          </Route>

        </Switch>
    </div>
  );
}

export default App;
