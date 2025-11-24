import React from 'react';
import app from '../assets/app store.png'
import play from '../assets/paly store.png'
import hero from '../assets/hero.png'

const Banner = () => {
    return (
        <div className='' >
           <h1 className='text-5xl mb-5 text-black font-bold text-center'> We Build <br /> <span className='text-purple-500 '>Productive</span>
 Apps</h1>
            <p className='text-center mb-5 font-bold text-xl text-gray-600'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='flex justify-center gap-4 mt-6'> 
                <button className="btn text-white">
  <a 
    href="https://play.google.com/store/apps?hl=en" 
    className="flex items-center gap-2"
  >
    <img src={play} className="w-5 h-5" alt="" />
    <span className='text-black'>Google Play</span>
  </a>
</button>

<button className="btn text-white">
  <a 
    href="https://www.apple.com/ca/app-store/" 
    className="flex items-center gap-2"
  >
    <img src={app} className="w-5 h-5" alt="" />
    <span className='text-black'>App Store</span>
  </a>
</button>



            </div>
            <div className='flex justify-center mt-10'>
                <img src={hero} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;