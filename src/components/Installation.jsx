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

     const handleSort = (type) => {
        let sorted = [...installation];

        if (type === "high-low") {
            sorted.sort((a, b) => b.downloads - a.downloads);
        }
        if (type === "low-high") {
            sorted.sort((a, b) => a.downloads - b.downloads);
        }

        setInstallation(sorted);  
    };


    return (
        <div>
            <NavBar></NavBar>

         <div className='px-10 py-10 mt-10 bg-gray-100 mb-10 rounded-3xl'>
             <h1 className='text-black text-center font-bold text-4xl mb-5'> Your Installed Apps </h1>
             <h1 className='text-gray-700 text-center font-bold text-xl mb-5'>Explore All Trending Apps on the Market developed by us.</h1>
             <div className='mb-10 flex justify-between items-center'>
                <p className='text-black text-2xl'>({installation.length})Apps Found</p>
                {/* Sort functionality  */}
                <div>
                    <details className="dropdown">
  <summary className="btn m-1">Sort by downloads</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><button onClick={() => handleSort("high-low")}>High-Low</button></li>
 <li>   <button onClick={() => handleSort("low-high")}>Low-High</button></li>
  </ul>
</details>

                </div>
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