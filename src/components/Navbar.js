import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className='navbar-containr'>
            <ul className='navbar'>
                <NavLink activeClassName="active" exact to="/">
                <li className="nav-element">
                    About
                </li>
                 </NavLink>

                 <NavLink activeClassName="active" exact to="/Skills">
                <li className="nav-element">
                    Skills
                </li>
                </NavLink>
               
                <NavLink activeClassName="active" exact to="/Projects">
                <li className="nav-element">
                    Projects
                </li>
                </NavLink>
                
                
            </ul>
        </div>
    )
}
