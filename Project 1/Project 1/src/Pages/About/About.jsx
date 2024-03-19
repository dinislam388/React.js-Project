import "./About.css";
import aboutPhoto from "../../assets/about.jpg";
import best1 from "../../assets/gallery-1.jpg";
import best2 from "../../assets/gallery-2.jpg";
import best3 from "../../assets/gallery-3.jpg";
import best4 from "../../assets/gallery-4.jpg";
import best5 from "../../assets/gallery-5.jpg";
const About = () => {
  return (
    <>
      <div className="aboutMainBgc">
        <div className="AboutBgc">
            <div className="abBgc">
              <img src={aboutPhoto} alt="" />
            </div>
          <div className="aboutHeading">
            <h1>We’re will fully help you get peace and comfort</h1>
            <p>
              Massa enim nunc, elementum et. Tempus orci, est dui, orci,
              tristique. Turpis enim, cum neque, ultricies purus velit. <br /> Quis
              elit amet commodo a est. Sit vitae, sed vulputate aliquet duis
              facilisis bibendum neque. <br /> Mattis aliquam enim in sed sit tellus 
              amet. Et, velit ullamcorper diam blandit. Aliquam, facilisis sit
              gravida posuere. Ipsum enim mauris volutpat quis id id placerat
              eu. Ante quis facilisi bibendum et tortor.
            </p>
          </div>
        </div>

        <div className="bestPlace">
            <div className="bestHeading">
                <h1>Our Best Places</h1>
            </div>
            <div className="bestPlaceImg">
                <img src={best1} alt="" />
                <img src={best2} alt="" />
                <img src={best3} alt="" />
                <img src={best4} alt="" />
                {/* <img src={best5} alt="" /> */}
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
