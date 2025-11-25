// import React, { Suspense, useState } from 'react';
// import { useLoaderData } from 'react-router';
// import App from './App';
// import NavBar from './NavBar';
// import Footer from './Footer';

// const Apps = () => {
//     const data = useLoaderData();
//     console.log(data);

//         const [searchTerm, setSearchTerm] = useState(""); 
           

//     const filteredApps = data.filter(app =>
//         app.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     return (
//         <div>
//             <NavBar></NavBar>
// <div className='px-10 py-10 mt-10 bg-gray-100 mb-10 rounded-3xl'>
//              <h1 className='text-black text-center font-bold text-4xl mb-5'> Our All Applications </h1>
//              <h1 className='text-gray-700 text-center font-bold text-xl mb-5'>Explore All Apps on the Market developed by us. We code for Millions</h1>
//              <div className='mb-10 flex justify-between items-center'>
//                 <p className='text-black text-2xl'>({filteredApps.length})Apps Found</p>
//                   <input
//                         type="text"
//                         placeholder="Search by title..."
//                         className="input input-bordered input-primary w-full max-w-xs"
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//              </div>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto '>
           
//             <Suspense fallback={<span>loading...</span>}>
//                  {filteredApps.length > 0 ? (
//                             filteredApps.map(single => <App key={single.id} single={single} />)
//                         ) : (
//                             <p className="text-center text-xl text-red-500 col-span-full mt-10">
//                                 No App Found
//                             </p>
//                         )}
//             </Suspense>
//         </div>

//         </div>
//         <Footer></Footer>
//         </div>
        
//     );
// };

// export default Apps;

import React, { Suspense, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import App from './App';
import NavBar from './NavBar';
import Footer from './Footer';

const Apps = () => {
    const data = useLoaderData();
    const [searchTerm, setSearchTerm] = useState(""); 
    const [filteredApps, setFilteredApps] = useState(data);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => {
            const filtered = data.filter(app =>
                app.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredApps(filtered);
            setLoading(false);
        }, 300); 
        return () => clearTimeout(timeout);
    }, [searchTerm, data]);

    return (
        <div>
            <NavBar />
            <div className='px-10 py-10 mt-10 bg-gray-100 mb-10 rounded-3xl'>
                <h1 className='text-black text-center font-bold text-4xl mb-5'>Our All Applications</h1>
                <h1 className='text-gray-700 text-center font-bold text-xl mb-5'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </h1>
                <div className='mb-10 flex justify-between items-center flex-col sm:flex-row gap-4'>
                    <p className='text-black text-2xl'>({filteredApps.length}) Apps Found</p>
                    <input
                        type="text"
                        placeholder="Search by title..."
                        className="input input-bordered input-primary w-full max-w-xs"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {loading ? (
                    <div className="flex justify-center items-center mt-10">
                        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-4'>
                        {filteredApps.length > 0 ? (
                            filteredApps.map(single => <App key={single.id} single={single} />)
                        ) : (
                            <p className="text-center text-xl text-red-500 col-span-full mt-10">
                                No App Found
                            </p>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Apps;




