import React from 'react';

const States = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  px-10 py-10'>
            <h1 className='text-white text-5xl font-bold text-center mb-5'>Trusted By Millions,Built For You</h1>
            <section className='flex justify-between items-center px-10'>
                <div >
                    <p className='text-white font-bold text-xl '>Total Downloads</p>
                    <p className='text-white font-bold text-6xl'>29.6M</p>
                    <p className='text-white font-bold text-xl '>21% More Than Last Month</p>


                </div>



                <div>
                    <p className='text-white font-bold text-xl '>
                        Total Reviews
                    </p>
                    <p className='text-white font-bold text-6xl'>
                        906K

                    </p>
                    <p className='text-white font-bold text-xl '>
                        46% More Than Last Month

                    </p>


                </div>


                <div>
                    <p className='text-white font-bold text-xl '>Active Apps</p>
                    <p className='text-white font-bold text-6xl'>132+</p>
                    <p className='text-white font-bold text-xl '>31 More Will Launch</p>


                </div>
            </section>
            
        </div>
    );
};

export default States;