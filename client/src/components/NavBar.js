import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <div className='nav'>
                <h1>itterTway</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
        </div>
    )
}

export default NavBar