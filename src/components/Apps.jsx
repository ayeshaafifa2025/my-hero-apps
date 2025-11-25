import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';
import NavBar from './NavBar';
import Footer from './Footer';

const Apps = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <NavBar></NavBar>
<div className='px-10 py-10 mt-10 bg-gray-100 mb-10 rounded-3xl'>
             <h1 className='text-black text-center font-bold text-4xl mb-5'> Our All Applications </h1>
             <h1 className='text-gray-700 text-center font-bold text-xl mb-5'>Explore All Apps on the Market developed by us. We code for Millions</h1>
             <div className='mb-10 flex justify-between items-center'>
                <p className='text-black text-2xl'>({data.length})Apps Found</p>
                <button className='btn'>Search</button>
             </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto '>
           
            <Suspense fallback={<span>loading...</span>}>
                {
                    data.map(single=><App  key={single.id} single={single}></App>)
                }
            </Suspense>
        </div>

        </div>
        <Footer></Footer>
        </div>
        
    );
};

export default Apps;