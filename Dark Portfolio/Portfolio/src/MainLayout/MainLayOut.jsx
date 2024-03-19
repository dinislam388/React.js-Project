import { Outlet } from "react-router-dom";
import Footer from "../Components/ShareComponents/Footer/Footer";
import NavBar from "../Components/ShareComponents/NavBar/NavBar";

const MainLayOut = () => {
    return (
        <div>
            {/* <h1 className="text-red-700  text-2xl">Main</h1> */}
            <NavBar/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default MainLayOut;