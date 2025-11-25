
import { useLoaderData } from 'react-router';
import AppDetailsCard from './AppDetailsCard';
import NavBar from './NavBar';
import Footer from './Footer';

const AppDetails = () => {
     const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <NavBar></NavBar>

             <div className='px-10 py-10 mt-10 bg-gray-100 mb-10 rounded-3xl'>
             <h1 className='text-black text-center font-bold text-4xl mb-5'>Movie Details Here</h1>
            <div className='mx-auto '>
           <AppDetailsCard data={data}></AppDetailsCard>
         
        </div>

        </div>
        <Footer></Footer>

        </div>
       
    );
};

export default AppDetails;