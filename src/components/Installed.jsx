import React from 'react';
import {  removeFromStoredDb } from '../utilities/addToDb';
import { toast } from 'react-toastify';

const Installed = ({installed,setInstallation}) => {
    console.log(installed);
    const{image,title,downloads, ratingAvg,size}= installed;

    

  

    const handleDeleteInstalled =()=>{
        removeFromStoredDb(installed.id);

        setInstallation(prev => prev.filter(app => app.id !== installed.id));
        toast(' You have successfully uninstalled the app');

    }




    return (
        <div className='bg-white rounded-2xl shadow mb-3 px-3 py-3 flex justify-between items-center'>
        <div className='  flex gap-5 '>
            <section>
                <img src={installed.image} alt={installed.title} className='w-20 h-20 rounded-3xl' />
            </section>
             <section className=''>
           <p className='text-black font-bold text-2xl mb-5'>{installed.title}</p> 
           <div className='flex  items-center gap-5 mb-5'>
            <p >⬇️<span className='text-black text-xl font-bold'>{installed.downloads}</span></p>
            <p>⭐ <span className='text-black text-xl font-bold'>{installed.ratingAvg}</span></p>
            <p><span className='text-black text-xl font-bold'>{installed.size} MB</span></p>

           </div>
            </section>
                </div>

<button onClick={()=>handleDeleteInstalled()} className='btn bg-green-400 text-white text-xl px-5 py-2'>
                Uninstall
            </button>

                </div>

    );
};

export default Installed;