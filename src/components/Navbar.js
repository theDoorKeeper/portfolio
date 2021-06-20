import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className='navbar-containr'>
            <ul className='navbar'>
                <NavLink to="/">
                <li className="nav-element">
                    about
                </li>
                 </NavLink>

                 <NavLink to="/Skills">
                <li className="nav-element">
                    Skills
                </li>
                </NavLink>
               
                <NavLink to="/Projects">
                <li className="nav-element">
                    Projects
                </li>
                </NavLink>
                
                
            </ul>
        </div>
    )
}
