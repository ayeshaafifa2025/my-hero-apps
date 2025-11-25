import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../utilities/addToDb';
import Installed from './Installed';

const Installation = () => {
    const [installation , setInstallation] = useState([]);

    const data = useLoaderData();
    console.log(data);

    useEffect(()=>{
            const storedAppData = getStoredApp();
            console.log(storedAppData);

            const myInstallation = data.filter(app=>storedAppData.includes(app.id));
            console.log(myInstallation);
            setInstallation(myInstallation);





        },[]
    )


    return (
        <div>
            <NavBar></NavBar>

         <div className='px-10 py-10 mt-10 bg-gray-100 mb-10 rounded-3xl'>
             <h1 className='text-black text-center font-bold text-4xl mb-5'> Your Installed Apps </h1>
             <h1 className='text-gray-700 text-center font-bold text-xl mb-5'>Explore All Trending Apps on the Market developed by us.</h1>
             <div className='mb-10 flex justify-between items-center'>
                <p className='text-black text-2xl'>({installation.length})Apps Found</p>
                <button className='btn'>sort by size</button>
             </div>
            <div className=' mx-auto '>
                 {
                        installation.map(app=><Installed key={app.id} installed ={app} setInstallation={setInstallation}></Installed>)
                    }

               
            
           
           
        </div>

        </div>

            <Footer></Footer>
            
        </div>
    );
};

export default Installation;