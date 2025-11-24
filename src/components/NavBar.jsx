import React from 'react';
import { NavLink } from 'react-router';

const NavBar = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div>
                <img src="" alt="" />
                <p></p>
                
            </div>

            <div>
                <NavLink>Home</NavLink>
                <NavLink>Apps</NavLink>
                <NavLink>Installation</NavLink>

            </div>
            <div>
                <button></button>

            </div>

            
        </div>
    );
};

export default NavBar;