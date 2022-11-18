import { useHistory } from 'react-router-dom';
import React, { useState } from "react";

function Login ({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const history = useHistory(); 

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((userData) => {
                    setUser(userData)
                    history.push("/")
                  })
                } else {
                  res.json().then((err) => setErrors(err.errors))
                }
            });
        }

    // const errorMessage = errors.map((err) => {
    //     <li key={err}>{err}</li>
    // })

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

            {/* <ul>{errorMessage}</ul> */}
        </div>
    )
}

export default Login