import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../Pages/HomePage/HomePage";
import LogInPage from "../Pages/LogInPage/LogInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import About from "../Pages/About/About";
import Room from "../Pages/Room/Room";
import Service from "../Pages/Servicess/Service";

const Router =  createBrowserRouter([
    {
        element: <MainLayOut/>,
        children: [{
            path: "/",
            element: <HomePage/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/room",
            element: <Room/>
        },
        {
            path: "/services",
            element: <Service/>
        }
        
    
    ]
    },
    {
        path: '/login',
        element: <LogInPage/>
    },
    {
        path: "/signup",
        element: <SignUpPage/>
    }
])

export default Router 