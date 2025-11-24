import React from 'react';

import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
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
            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
        </div>
    );
};

export default HomeLayout;