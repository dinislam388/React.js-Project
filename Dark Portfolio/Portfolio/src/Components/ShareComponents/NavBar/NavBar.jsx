// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./NavBar.css"
import logo from "../../../assets/Images/D logo.png"
import { IoIosMenu } from "react-icons/io";
const NavBar = () => {
    return (
        <div>
            <header 
            // className=" flex items-center justify-between bg-transparent z-10 w-full px-1  bg-amber-100"
            >
                <div className="logo">
                    {/* <img src={logo} alt="" /> */}
                    <h1>Di</h1>
                </div>
                <div className="navBar">
                    <ul>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/skils">Skils</NavLink>
                        <NavLink to="/project">Project</NavLink>
                        <NavLink to="/contact">Contact</NavLink>

                    </ul>
                    <div className="darkMood">
                        {/* <i>{<IoIosMenu />}</i> */}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavBar;