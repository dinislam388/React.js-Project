import Calender from "./Calender";
import "./HomePage.css";
import homeBgc from "./Resort.jpg";
const HomePage = () => {
  return (
    <>
      <div>
        <div className="backgroundImg">
          <h1 className="heading">
            Nature's Embrace <br /> Retreats
          </h1> 
          <p className="headingPatext">
            Reconnect with your soul, where barefoot steps trace stories on
            dew-kissed grass, <br /> and nature's embrace cradles your spirit.
          </p>
          {/* <Calender/> */}
          <img src={homeBgc} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
