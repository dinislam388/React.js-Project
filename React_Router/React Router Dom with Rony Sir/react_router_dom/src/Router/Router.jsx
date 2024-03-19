import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";

const Router = () => {
    const Router = createBrowserRouter([
        {
            path: '/',
            element: <App/>
        },
        {
            path: '/home',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/contact',
            element: <Login/>
        }

    ])
    return (
        <>
            
        </>
    );
};

export default Router;