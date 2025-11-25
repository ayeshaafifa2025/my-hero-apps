import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';

const NavBar = () => {
    return (
      <nav className='mb-10'>
    <div className='flex flex-col md:flex-row bg-gray-200 px-5 py-5 md:justify-between md:items-center gap-5'>
        {/* Logo Section */}
        <div className='flex flex-col md:flex-row items-center gap-2 text-center md:text-left'>
            <Link to="/">
                <img src={logo} className="w-10 h-10 cursor-pointer" alt="logo" />
            </Link>
            <p className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold text-3xl bg-clip-text text-transparent">
                AppNexus
            </p>
        </div>
        {/* Route Links */}
        <div className='nav flex flex-col md:flex-row text-center gap-3'>
            <NavLink className='nav-link text-purple-500 font-bold' to='/'>Home</NavLink>
            <NavLink className='nav-link text-black font-bold' to='/apps'>Apps</NavLink>
            <NavLink className='nav-link text-black font-bold' to='/installation'>Installation</NavLink>
        </div>
        {/* Last Button */}
        <div className="flex justify-center md:justify-end">
            <button className='btn btn-primary text-white'>
                <a href="https://github.com/ayeshaafifa2025/my-hero-apps">Contribution</a>
            </button>
        </div>

    </div>
</nav>

    );
};

export default NavBar;






