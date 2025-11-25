import React from 'react';

import NavBar from '../components/NavBar';
import { Link, Outlet } from 'react-router';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import States from '../components/States';

const HomeLayout = () => {
    return (
        <div className=''>
        <div>
            <header>
                <nav>
                    <NavBar></NavBar>
                    <Banner></Banner>
                </nav>
            </header>
            <States></States>
            <Outlet></Outlet>
           <div className="flex justify-center mt-6">
  <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-10 py-4 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition">
    <Link to={'/apps'}>Show All</Link>
  </button>
</div>

            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
        </div>
    );
};

export default HomeLayout;