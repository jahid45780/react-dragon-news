import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOuts/Root";
import Home from "../Peges/Home/Home";
import Login from "../Peges/Login/Login";
import Register from "../Peges/Shared/Register/Register";
import News from "../Peges/News/News";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([

     {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/news.json') 
            },
            {
                path:'/news/:id',
                element: <PrivateRoute> <News></News> </PrivateRoute>,
                loader: () => fetch('/news.json') 
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