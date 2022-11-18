import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar ({ user, setUser }) {
    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        });
    }

    return (
        <div className='nav'>
            <h1>itterTway</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <span>Welcome, {user.username}!</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default NavBar