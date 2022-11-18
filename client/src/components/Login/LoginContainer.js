import React from "react"; 
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";


function LoginContainer ({ setUser, bio, setBio }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="login-container">
            <h1>Welcome to itterTway</h1>
            {showLogin? (
                <div className="login-form">
                    <Login setUser={setUser}/>
                    <p className="login-p">Need an account?</p>
                    <Link to='/signup' onClick={() => setShowLogin(false)}>
                        Sign Up
                    </Link>
                </div>
            ):(
                <div className="login-form">
                    <Signup setUser={setUser} bio={bio} setBio={setBio}/>
                    <p className="login-p">Have an account?</p>
                    <Link to='/login' onClick={() => setShowLogin(true)}>
                        Login
                    </Link>
                </div>
            )}
        </div>
      )
    }
    
export default LoginContainer