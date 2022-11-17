import React from "react"; 
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";


function LoginContainer ({ setUser }) {
    const [showLogin, setShowLogin] = useState(true);
    return (
        <div className="login-container">
            <h1>Welcome to itterTway</h1>
            {showLogin? (
                <div>
                    <Login setUser={setUser}/>
                    <p>Need an account?</p>
                    <Link to='/signup' onClick={() => setShowLogin(false)}>
                        Sign Up
                    </Link>
                </div>
            ):(
                <div>
                    <Signup setUser={setUser}/>
                    <p>Have an account?</p>
                    <Link to='/login' onClick={() => setShowLogin(true)}>
                        Login
                    </Link>
                </div>
            )}
        </div>
      )
    }
    
export default LoginContainer