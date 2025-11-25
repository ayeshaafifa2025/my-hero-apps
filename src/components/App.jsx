import React from 'react';
import { Link } from 'react-router';
import ratIcon from '../assets/icon-ratings.png';
import downIcon from '../assets/icon-downloads.png'

const App = ({single}) => {
    console.log(single);
    const{image,id,title,ratingAvg,downloads} = single;
    return (


<div className="flex justify-center">

  <Link to={`/apps/${id}`}>
    <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg m-4 bg-gray-300 
                    px-6 py-6 md:px-10 md:py-10">
      <img
        className="w-full h-60 md:h-70 rounded-4xl"
        src={single.image}
        alt={single.title}
      />
      <div className="font-bold text-lg md:text-xl mb-3 md:mb-5 mt-3 md:mt-5">
        App Name: {single.title}
      </div>
      <div className="flex justify-between items-center">

        <button className="btn font-bold rounded-xl text-blue-600 
                           text-sm md:text-xl mb-2 px-2 md:px-4">
          <img src={downIcon} className='w-4 h-4' alt="" />{single.downloads}
        </button>

        <button className="btn font-bold rounded-xl text-yellow-600 
                           text-sm md:text-xl mb-2 px-2 md:px-4">
          <img src={ratIcon} className='w-4 h-4' alt="" />{single.ratingAvg}
        </button>

      </div>

    </div>
  </Link>

</div>


    );
};

export default App;