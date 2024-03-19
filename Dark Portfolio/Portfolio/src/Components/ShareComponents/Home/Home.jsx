import "./Home.css";
import homeImg from "../../../assets/Images/HomeImg.jpeg";
const Home = () => {
  return (
    <>
      <section id="home">
      <div className="homeBg">
        <div className="homeContainer">
          <div className="homeImg">
            <img src={homeImg} alt="" />
          </div>
          <div className="homeText">
            <h3>Hello I'm,</h3>
            <h1>MD Din Islam</h1>
            <h2>Front-End Developer</h2>
            <p>As an aspiring web enthusiast, I translate ideas into engaging digital experiences through the magic of HTML, CSS,  JavaScript, React My mission is to craft user-friendly and visually appealing interfaces that leave a lasting impression.</p>
            <div className="homeBtn">
            <button >Download CV</button>
            <button>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;
