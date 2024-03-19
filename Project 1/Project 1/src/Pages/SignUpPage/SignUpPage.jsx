import { Link } from "react-router-dom";
import "./SignUpPage.css";
import { useForm } from "react-hook-form";
const SignUpPage = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const onSubmit = data => {
    console.log(data);}
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
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form">
                <div className="inputBox">
                  <input style={{backgroundColor: '#333333'}} {...register("name", {required: 'enter your name', minLength: {value: 3, message: 'minimum 3 word'}, maxLength: {value: 20, message: 'word limit 20'}})} type="text" />{" "}
                  <i>Full Name</i>
                  <p style={{color: 'red', padding: '2px'}}>{errors.name?.message}</p>
                </div>
                <div className="inputBox">
                  <input {...register("email", {required: 'enter email'})} type="email"  />{" "}
                  <i>Email</i>
                  <p style={{color: 'red', padding: '2px'}}>{errors.email?.message}</p>
                </div>
                <div className="inputBox">
                  <input
                    {...register("pass", {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ })}
                    type="password" />{" "}
                  <i>Password</i>

                  {
                    errors?.pass?.type === 'pattern' && ( <p style={{color: 'red', padding: '2px'}}>Please enter Hard Password</p> )
                  }

                </div>
                <div className="inputBox">
                  <input
                    {...register("cpass", {validate: data => {
                      if (watch('pass') !== data) {
                        return 'password not match'
                      }
                    }})}
                    type="password"

                  />{" "}
                  <i>Conform Password</i>
                  <p style={{color: 'red', padding: '2px'}}>{errors.cpass?.message}</p>
                </div>
                <div className="links">
                  {" "}
                  <a href="#">Forgot Password</a>
                  {/* <a href="#">Signup</a> */}
                  <Link to="/login">
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Sign in
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

export default SignUpPage;
