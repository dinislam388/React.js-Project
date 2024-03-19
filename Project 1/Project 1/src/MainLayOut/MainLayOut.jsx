import { Outlet } from "react-router-dom";
import LogInPage from "../Pages/LogInPage/LogInPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import NavBar from "../SharedComponents/NavBar/NavBar";
import Footer from "../SharedComponents/Footer/Footer";

const MainLayOut = () => {
  return (
    <div>
      <NavBar />
      <div style={{ minHeight: "100vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
