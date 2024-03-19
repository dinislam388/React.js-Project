import "./About.css"
import aboutImg from "../../assets/Images/About Image.jpeg"
const About = () => {
    return (
        <div className="aboutBg">
            <div>
                <h1 className="AbHead">About Me</h1>
            </div>
            <div className="aboutContent">
                <div className="abPara">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad corporis veritatis quia. Quasi, beatae! Quidem temporibus eos blanditiis veritatis, et aut dicta. Quod enim dolores autem nesciunt. Enim voluptatibus culpa amet nostrum maxime quae ratione, non omnis alias laborum delectus velit officiis labore dolore! Eos autem et suscipit cum? Sed nostrum reiciendis dolore amet ab veritatis earum, autem pariatur possimus quam quasi in dignissimos repellat laboriosam optio nihil harum recusandae neque. Sint dolorum, rem sapiente accusantium odit minima delectus qui perspiciatis illo ea fuga autem vero recusandae, hic porro. Error, ab maxime aliquid ipsam sunt sint deleniti quisquam expedita.</p>
                </div>
                <div className="abImg">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;