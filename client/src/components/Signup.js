import React from 'react';

function Signup () {
    function handleSubmit(e) {
        // if password and confirm password match
        // post request for User
        // else return error message
    }

    return (
        <div className="login-container">
            <form>
                <input className="login-username" placeholder="Username"></input>
                <input className="login-password" placeholder="Password"></input>
                <input className="login-password" placeholder="Confirm Password"></input>
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
    )
}

export default Signup