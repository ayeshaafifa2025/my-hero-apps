import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import appError from '../assets/App-Error.png'
import { useNavigate } from 'react-router';

const ErrorApp = () => {
    const navigate = useNavigate();
    return (
        <div>
              <div>
            <NavBar></NavBar>

                  <div className="flex flex-col justify-center items-center flex-grow px-4">
        <img
          src={appError}
          alt="Error 404"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-6"
        />
        <h1 className="text-black text-3xl md:text-4xl font-bold mb-2 text-center">
          OOPS, APP NOT FOUND!
        </h1>
        <p className="text-gray-500 text-base md:text-lg mb-6 text-center">
          The App you are requesting is not found on our system. please try another apps
        </p>
        <button
          onClick={() => navigate(-1)}
          className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors text-base md:text-lg"
        >
          Go Back!
        </button>
      </div>
            
            <Footer></Footer>
        </div>
        </div>
    );
};

export default ErrorApp;