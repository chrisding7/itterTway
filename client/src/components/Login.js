import React from 'react';
import { NavLink } from 'react-router-dom';

function Login () {
    function handleSubmit(e) {
        // get request for User
    }

    return (
        <div className="login-container">
            <form>
                <input className="login-username" placeholder="Username"></input>
                <input className="login-password" placeholder="Password"></input>
                <button onClick={handleSubmit}>Login</button>
            </form>
            <p>Need an account?
                <NavLink to="/signup">Signup</NavLink>
            </p>
        </div>
    )
}

export default Login