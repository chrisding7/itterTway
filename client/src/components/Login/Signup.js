import { useHistory } from 'react-router-dom';
import React, { useState } from "react";

function Signup ({ setUser, bio, setBio }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [errors, setErrors] = useState([]);

    const history = useHistory();

    function handleSubmit(e) {
        // post request for User
        // else return error message
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
                display_name: displayName,
                bio: bio
            }),
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

    const errorMessage = errors.map((err) => {
        <li key={err}>{err}</li>
    })

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
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <label htmlFor="displayname">Display Name:</label>
                <input
                    type="text"
                    id="display_name"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <label htmlFor="bio">Profile Bio:</label>
                <input
                    type="text"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            <ul>{errorMessage}</ul>
        </div>
    )
}

export default Signup