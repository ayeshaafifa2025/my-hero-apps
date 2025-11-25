import React from 'react';

const States = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  px-10 py-10'>
            <h1 className='text-white text-xl md:text-3xl font-bold text-center mb-10'>Trusted By Millions,Built For You</h1>
            <section className='flex justify-between items-center '>
                <div >
                    <p className='text-white mb-2 md:font-bold text-xs md:text-xl '>Total Downloads</p>
                    <p className='text-white mb-2 md:font-bold text-xs md:text-3xl'>29.6M</p>
                    <p className='text-white mb-2 md:font-bold text-xs md:text-xl '>21% More Than Last Month</p>


                </div>



                <div>
                    <p className='text-white mb-2 md:font-bold text-xs md:text-xl '>
                        Total Reviews
                    </p>
                    <p className='text-white mb-2  md:font-bold text-xs md:text-3xl'>
                        906K

                    </p>
                    <p className='text-white mb-2 md:font-bold text-xs md:text-xl '>
                        46% More Than Last Month

                    </p>


                </div>


                <div>
                    <p className='text-white mb-2 md:font-bold text-xs md:text-xl '>Active Apps</p>
                    <p className='text-white mb-2 md:font-bold text-xs md:text-3xl'>132+</p>
                    <p className='text-white mb-2 md:font-bold text-xs md:text-xl '>31 More Will Launch</p>


                </div>
            </section>
            
        </div>
    );
};

export default States;