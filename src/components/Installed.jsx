import React from 'react';
import {  removeFromStoredDb } from '../utilities/addToDb';
import { toast } from 'react-toastify';
import ratIcon from '../assets/icon-ratings.png';
import downIcon from '../assets/icon-downloads.png'

const Installed = ({installed,setInstallation}) => {
    console.log(installed);
    const{image,title,downloads, ratingAvg,size}= installed;

    

  

    const handleDeleteInstalled =()=>{
        removeFromStoredDb(installed.id);

        setInstallation(prev => prev.filter(app => app.id !== installed.id));
        toast(' You have successfully uninstalled the app');

    }

    return (


<div className='bg-white rounded-2xl shadow mb-3 px-3 py-3
                flex flex-col md:flex-row justify-between items-center 
                gap-5'>
    <div className='flex flex-col md:flex-row gap-5 w-full md:w-auto'>
        <section className='flex justify-center md:justify-start'>
            <img 
                src={installed.image} 
                alt={installed.title} 
                className='w-20 h-20 rounded-3xl md:w-20 md:h-20'
            />
        </section>

        <section className='text-center md:text-left'>
            <p className='text-black font-bold text-xl md:text-2xl mb-3'>
                {installed.title}
            </p>

            <div className='flex flex-col md:flex-row items-center gap-3 md:gap-5 mb-3'>

                <p className='text-sm md:text-xl'>
                    <img src={downIcon} className='w-4 h-4' alt="" /><span className='text-black font-bold'>{installed.downloads}</span>
                </p>

                <p className='text-sm md:text-xl'>
                    <img src={ratIcon} className='w-4 h-4' alt="" /><span className='text-black font-bold'>{installed.ratingAvg}</span>
                </p>

                <p className='text-sm md:text-xl'>
                    <span className='text-black font-bold'>{installed.size} MB</span>
                </p>

            </div>
        </section>
    </div>
    <button 
        onClick={() => handleDeleteInstalled()}
        className='btn bg-green-400 text-white 
                   text-sm md:text-xl px-4 md:px-5 py-2 md:py-2 w-full md:w-auto'>
        Uninstall
    </button>

</div>


    );
};

export default Installed;