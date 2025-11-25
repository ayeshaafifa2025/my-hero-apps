import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { addToStoredDb, getStoredApp} from '../utilities/addToDb';
import { toast } from 'react-toastify';
import ratIcon from '../assets/icon-ratings.png';
import downIcon from '../assets/icon-downloads.png'
import likeIcon from '../assets/icon-review.png'

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


<div className="overflow-x-hidden w-full">
  <div className="w-full">
    <section className="flex flex-col md:flex-row gap-10 md:gap-20 px-5 md:px-20 items-center mb-10 w-full">
      <div className="w-full md:w-auto flex justify-center">
        <img
          src={data.image}
          alt={data.title}
          className="w-full max-w-sm md:max-w-none h-auto rounded-3xl"
        />
      </div>

      
      <div className="w-full md:w-auto text-center md:text-left">

        <p className="text-black font-bold text-2xl md:text-3xl mb-3 md:mb-5">
          {data.title}
        </p>

        <p className="mb-3 md:mb-5 text-sm md:text-base">
          Developed by <span className="text-purple-500">{data.companyName}</span>
        </p>
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-5 mb-5">

          <p className="text-sm md:text-base">
            <img src={downIcon} className='w-4 h-4' alt="" /><br /> Downloads <br />
            <span className="text-black text-2xl md:text-4xl font-bold">
              {data.downloads}M
            </span>
          </p>

          <p className="text-sm md:text-base">
            <img src={ratIcon} className='w-4 h-4' alt="" /><br /> Average Ratings <br />
            <span className="text-black text-2xl md:text-4xl font-bold">
              {data.ratingAvg}
            </span>
          </p>

          <p className="text-sm md:text-base">
            <img src={likeIcon} className='w-4 h-4' alt="" /><br /> Total Reviews <br />
            <span className="text-black text-2xl md:text-4xl font-bold">
              {data.reviews}
            </span>
          </p>
        </div>
        <button
          onClick={() => handleInstallation(id)}
          disabled={isInstalled}
          className={`btn text-white text-base md:text-xl px-4 py-2 md:px-5 md:py-2 ${
            isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-green-400"
          }`}
        >
          {isInstalled ? "Installed" : `Install Now (${data.size})`}
        </button>

      </div>
    </section>

    <section className="w-full mt-10 mb-10 px-3 md:px-0">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-600">
        Ratings:
      </h2>

      <div className="w-full h-64 md:h-72 bg-white shadow-md rounded-2xl p-3 md:p-5 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="name"
              type="category"
              width={40}
              tick={{ fontSize: 10 }}
            />
            <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
            <Bar dataKey="count" fill="#FF8A00" barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>

    <section className="text-black px-4 md:px-0 mb-10 text-sm md:text-xl leading-relaxed">
      <h1 className="text-black font-bold text-lg md:text-2xl mb-3">
        Description:
      </h1>
      <p className="break-words">
        {data.description}
      </p>
    </section>

  </div>
</div>


       

      



    );
};

export default AppDetailsCard;