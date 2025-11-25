import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { addToStoredDb, getStoredApp} from '../utilities/addToDb';
import { toast } from 'react-toastify';

const AppDetailsCard = ({data}) => {
    console.log(data);

    const{id,image,title,companyName,description,size,reviews,ratingAvg, downloads,ratings} = data;
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
  const stored = getStoredApp();
  setIsInstalled(stored.includes(id));
}, [id]);


    const handleInstallation = (id)=>{
      console.log('handle pressed', id);
      addToStoredDb(id);
      setIsInstalled(true);
      toast(' You have successfully installed the app');
     

    }
    return (
        <div>
{/* parent */}
<div>
{/* varity */}
    <section className='flex flex-col md:flex-row gap-20 px-20  items-center mb-10'>
        {/* photo */}
        <div>
            <img src={data.image} alt={data.title} className='w-full h-100 rounded-3xl' />
        </div>
        {/* All */}
        <div>
           <p className='text-black font-bold text-3xl mb-5'>{data.title}</p> 
           <p className='mb-5'>Developed by <span className='text-purple-500'>{data.companyName}</span></p>
           <div className='flex justify-evenly items-center gap-5 mb-5'>
            <p >⬇️ <br />Downloads <br /><span className='text-black text-4xl font-bold'>{data.downloads}</span></p>
            <p>⭐ <br />Average Ratings <br /><span className='text-black text-4xl font-bold'>{data.ratingAvg}</span></p>
            <p>💜 <br />Total Reviews <br /><span className='text-black text-4xl font-bold'>{data.reviews}</span></p>

           </div>

           <button
  onClick={() => handleInstallation(id)}
  disabled={isInstalled}
  className={`btn text-white text-xl px-5 py-2 ${
    isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-400'
  }`}
>
  {isInstalled ? 'Installed' : `Install Now (${data.size})`}
</button>


          

        </div>

        </section>
{/* RECHART */}


<section className="w-full mt-10 mb-10">
  <h2 className="text-2xl font-bold mb-4 text-purple-600">Ratings:</h2>
  <div className="min-w-0 w-full h-72 bg-white shadow-md rounded-2xl p-5">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={ratings}
        layout="vertical"   
        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
      >
        <XAxis type="number" hide />
        <YAxis
          dataKey="name"
          type="category"
          width={60}
          tick={{ fontSize: 13 }}
        />
        <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
        <Bar
          dataKey="count"
          fill="#FF8A00"      
          barSize={30}
        
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
</section>

{/* description */}
        <section className='text-black text-2xl'>
           <h1 className='text-black text-2xl font-bold'>Description:</h1>
           <p>{data.description}</p>
            
        </section>

</div>
        


        </div>
       

      



    );
};

export default AppDetailsCard;