import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';

const NavBar = () => {
    return (
        <nav className='mb-10'>
             <div className='flex bg-white justify-between items-center'>
            <div className='flex'>
                <Link to="/">
  <img src={logo} className="w-10 h-10 cursor-pointer" alt="logo" />
</Link>
                <p className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold text-3xl text-center bg-clip-text text-transparent">HERO.IO</p>
                
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3'>
                <NavLink className= 'link text-purple-500 font-bold' to='/'>Home</NavLink>
                <NavLink className= 'link text-black font-bold'  to='/apps'>Apps</NavLink>
                <NavLink className= 'link text-black font-bold' to='/installation'>Installation</NavLink>

            </div>
            <div>
                <button className='btn btn-primary text-white'><a href="https://github.com/ayeshaafifa2025/my-hero-apps">Contribution</a></button>

            </div>

            
        </div>

        </nav>
       
    );
};

export default NavBar;