import React from 'react';
import { Link } from 'react-router';

const App = ({single}) => {
    console.log(single);
    const{image,id,title,ratingAvg,downloads} = single;
    return (
         <div>

            <Link to={`/apps/${id}`} >
{/* card */}
            <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg m-4 bg-gray-300 px-10 py-10">
                {/* photo */}
      <img
        className="w-full h-70 rounded-4xl "
        src={single.image
}
        alt={single.title
}
      />
      {/* title */}

      <div className="font-bold text-xl mb-5 mt-5">App Name:  {single.title
}</div>
{/* Downloads and rating division */}
      <div className="flex justify-between items-center">
        
        <button className="btn font-bold text-blue-600 rounded-xl text-xl mb-2">⬇️{single.downloads}</button>
        <button className="btn font-bold rounded-xl text-yellow-600 text-xl mb-2">⭐{single.ratingAvg}</button>
        
      </div>
    </div>
            
            </Link> 


            
           
            
        </div>
    );
};

export default App;