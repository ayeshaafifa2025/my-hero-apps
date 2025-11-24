import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import TrendingApps from './TrendingApps';

const Home = () => {
     const data= useLoaderData();
    console.log(data);
    return (
        <div className='px-10 py-10 mt-10 bg-gray-100 mb-10 rounded-3xl'>
             <h1 className='text-black text-center font-bold text-4xl mb-5'>Trending Apps</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto '>
           
            <Suspense fallback={<span>loading...</span>}>
                {
                    data.map(single=><TrendingApps key={single.id} single={single}></TrendingApps>)
                }
            </Suspense>
        </div>

        </div>
        
       
    );
};

export default Home;