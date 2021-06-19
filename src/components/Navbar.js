import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <NavLink to="/">
                <li className="nav-element">

                </li>
                 </NavLink>

                 <NavLink to="/">
                <li className="nav-element">

                </li>
                </NavLink>

                <NavLink to="/">
                <li className="nav-element">

                </li>
                </NavLink>
                
                
            </ul>
        </div>
    )
}
