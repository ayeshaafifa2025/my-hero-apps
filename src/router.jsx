import { createBrowserRouter } from "react-router";
import HomeLayout from "./LAYOUT/HomeLayout";
import Home from "./components/Home";
import TrendingApps from "./components/TrendingApps";
import Apps from "./components/Apps";
import AppDetails from "./components/AppDetails";
import Installation from "./components/Installation";

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
        loader:()=>fetch('/apps.json'),
        path:'/apps',
        element: <Apps></Apps>
        
    }, {
  path: "/apps/:id",
  loader: ({ params }) => {
    return fetch("/apps.json")
      .then(res => res.json())
      .then(data => data.find(app => app.id == params.id));
  },
  element: <AppDetails></AppDetails>
}

    ,
     {
        path: "/*",
        element: <h3>Error404</h3>
    },
    {
        loader:()=>fetch('/apps.json'),
      path: "/installation",
      element :<Installation></Installation>
    }
    
    
]);
export default router;