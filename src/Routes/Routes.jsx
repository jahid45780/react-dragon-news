import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import Home from "../Peges/Home/Home";
import Login from "../Peges/Login/Login";
import Register from "../Peges/Shared/Register/Register";


const router = createBrowserRouter([

     {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
            
        ]
     }

])

export default router