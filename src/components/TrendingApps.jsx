import React from 'react';
import { Link } from 'react-router';

const TrendingApps = ({single}) => {
    console.log(single);
    const{image,id,title,companyName,ratingAvg} = single;

    return (
        <div>
            <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg m-4 bg-gray-300 px-10 py-10">
      <img
        className="w-full h-70 rounded-4xl "
        src={single.image
}
        alt={single.title
}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">App Name:  {single.title
}</div>
        <p className=" font-bold text-xl mb-2">Company:{single.companyName
}</p>
        <p className="font-bold text-xl mb-2">Rating:   {single.ratingAvg}</p>
        
        <button
        
          className="btn btn-primary text-white"
        >
            <Link to={`/movies/${single.id}`}>View Details</Link> 
          
        </button>
      </div>
    </div>
           
            
        </div>
    );
};

export default TrendingApps;