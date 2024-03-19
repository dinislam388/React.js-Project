import { Link, useNavigate } from "react-router-dom";
import "./LogInPage.css";
import { useForm } from "react-hook-form";
const LogInPage = () => {
  const {register, handleSubmit, formState: { errors }} = useForm()
  const onSubmit = data =>  {
    console.log(data);
  }
  return (
 
    <div>
      <section>
        {" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span />
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <div className="inputBox">
                <input 
                {...register('email', {required: 'enter you email'})}
                type="email" 
                name="email" 
                required="" /> 
                <i>Email</i>
                <p style={{color: 'red', padding: '2px'}}>{errors.email?.message}</p>
              </div>
              <div className="inputBox">
                <input 
                {...register('password', {required: 'enter original password'})}
                type="password" 
                name="password" 
                required="" /> 
                <i>Password</i>
                <p style={{color: 'red', padding: '2px'}}>{errors.password?.message}</p>
              </div>
              <div className="links">
                {" "}
                <a href="#">Forgot Password</a>
                {/* <a href="#">Signup</a> */}
                <Link to="/signup">
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="inputBox">
                <input type="submit" defaultValue="Login" />
              </div>
            </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogInPage;
