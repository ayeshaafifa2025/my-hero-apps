import { createBrowserRouter } from "react-router";
import HomeLayout from "./LAYOUT/HomeLayout";
import Home from "./components/Home";
import TrendingApps from "./components/TrendingApps";
import Apps from "./components/Apps";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
          children:[{
            index: true,
            loader:()=>fetch('/trending-apps.json'),
             path:"/",
            element: <Home></Home>
        }
        
        ]
    },
    {
        path:'/apps',
        element: <Apps></Apps>
        
    },
     {
        path: "/*",
        element: <h3>Error404</h3>
    }
    
    
]);
export default router;