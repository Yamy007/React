import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/">Todo</NavLink>
            <NavLink to="/album">Album</NavLink>
            <NavLink to="/comments">Comments</NavLink>
        </nav>
    )
}

export default Navbar
