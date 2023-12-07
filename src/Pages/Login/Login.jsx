import logpic from '../../assets/others/authentication1.png'
import Tilt from 'react-parallax-tilt';

const Login = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row  gap-20">

      <Tilt>
      <div style={{  backgroundColor: 'darkgreen' }}>
      <div className="text-center lg:text-left w-1/2">
         <img src={logpic} alt="" />
        </div>
      </div>
    </Tilt>
  
        
        <div className="card w-1/2 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-white">Login now!</h1>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
