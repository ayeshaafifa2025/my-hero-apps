import { createBrowserRouter } from "react-router";
import HomeLayout from "./LAYOUT/HomeLayout";
import Home from "./components/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        
        
    }
    
    
]);
export default router;