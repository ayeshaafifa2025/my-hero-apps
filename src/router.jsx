import { createBrowserRouter, redirect } from "react-router";
import HomeLayout from "./LAYOUT/HomeLayout";
import Home from "./components/Home";
import TrendingApps from "./components/TrendingApps";
import Apps from "./components/Apps";
import AppDetails from "./components/AppDetails";
import Installation from "./components/Installation";
import Error from "./components/Error";
import ErrorApp from "./components/ErrorApp";

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
        
    },
     
 

{
  path: "/apps/:id",
  loader: async ({ params }) => {
    const res = await fetch("/apps.json");
    const data = await res.json();
    const app = data.find(a => a.id == params.id);

    if (!app) {
      return redirect("/app-not-found");
    }

    return app;
  },
  element: <AppDetails></AppDetails>,
},{
  path: "/app-not-found",
  element: <ErrorApp></ErrorApp>

}



    ,
     {
        path: "/*",
        element: <Error></Error>
    },
    {
        loader:()=>fetch('/apps.json'),
      path: "/installation",
      element :<Installation></Installation>
    }
    
    
]);
export default router;