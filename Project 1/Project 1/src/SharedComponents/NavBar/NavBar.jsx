import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <div className="header">
          <div className="logo">Bokking</div>
          <div className="navBar">
            <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/room">Room</NavLink>
              <NavLink to="/services">Service</NavLink>
            </ul>
          </div>
          <div className="navBar">
            <ul>
              <NavLink to="/login">LogIn</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
