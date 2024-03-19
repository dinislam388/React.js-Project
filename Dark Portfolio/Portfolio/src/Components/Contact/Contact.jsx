import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="conatiner">
        <div className="formBox">
          <form className="inputFild">
            <div className="inputBorder">
              <div>
                {/* <img className="conatctImg" src={contactImg} alt="" /> */}
              </div>
              <h1 className="contactHeading">CONTACT</h1>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
              />{" "}
              <br />
              <input
                name="email"
                type="email"
                placeholder="Enter email"
              />{" "}
              <br />
              <input
                name="number"
                type="number"
                placeholder="Enter number"
              />{" "}
              <br />
              <input
                name="link"
                type="text"
                placeholder="Enter your Portfolio Link"
              />{" "}
              <br />
              <button className="submitBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
