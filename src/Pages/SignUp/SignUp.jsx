import { Link } from "react-router-dom";
import sidePic from "../../assets/others/authentication2.png";
import Tilt from "react-parallax-tilt";

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-black">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Tilt className="">
            <div className="w-3/4 ">
              <img src={sidePic} alt="" />
            </div>
          </Tilt>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold">Login now!</h1>

          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-black">
              Already have an ?
              <Link className="text-blue-500" to="/login">
                Account
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
