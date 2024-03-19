import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayout/MainLayOut";
import App from "../App";
import Home from "../Components/ShareComponents/Home/Home";
import About from "../Components/About/About";
import Skils from "../Components/Skils/Skils";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact/Contact";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/skils",
                element: <Skils/>
            },
            {
                path: "/project",
                element: <Project/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    }
])
export default routes