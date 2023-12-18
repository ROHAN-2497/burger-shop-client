import { useContext, useEffect, useState } from "react";
import logpic from "../../assets/others/authentication1.png";
import Tilt from "react-parallax-tilt";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleRecaptcha = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value) === true) {
      setDisabled(false);
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
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Logged in Succesfull",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <Helmet>
        <title>Burger Shop | Login </title>
      </Helmet>
      <div className="hero  min-h-screen  text-black">
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
                  onBlur={handleRecaptcha}
                  name="recaptcha"
                  placeholder="type recaptcha"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-black text-center">
                New here Create a?
                <Link className="text-blue-500 " to="/signup">
                  new Account
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
