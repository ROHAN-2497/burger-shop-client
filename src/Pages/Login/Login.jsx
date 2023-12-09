import { useContext, useEffect, useRef, useState } from "react";
import logpic from "../../assets/others/authentication1.png";
import Tilt from "react-parallax-tilt";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const captchaRef = useRef(null);
  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleRecaptcha = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value) === true) {
      alert("Captcha Matched");
      setDisabled(false);
    } else {
      alert("Captcha Does Not Match");
    }
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log("User", user);
    });
  };
  return (
    <div>
      <div className="hero  min-h-screen ">
        <div className="hero-content flex-col  px-20 lg:flex-row">
          <Tilt className="">
            <div className="w-3/4 ">
              <img src={logpic} alt="" />
            </div>
          </Tilt>

          <div className="card  md:w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-5xl font-bold  flex justify-center items-center text-black">
                Login now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control text-black">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  name="recaptcha"
                  placeholder="type recaptcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <button
                className="btn btn-outline btn-xs mt-2 "
                onClick={handleRecaptcha}
              >
                Validiate
              </button>{" "}
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-black">
                New here Create a ?
                <Link className="text-blue-500 " to="/signup">
                  {" "}
                  new Account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
