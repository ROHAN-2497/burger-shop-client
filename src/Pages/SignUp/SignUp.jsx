import { Link, useNavigate } from "react-router-dom";
import sidePic from "../../assets/others/authentication2.png";
import Tilt from "react-parallax-tilt";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL).then(() => {
        const saveUser = { name: data.name, email: data.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Profile Update..",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            navigate("/");
          });
      });
    });
  };
  return (
    <div className="hero min-h-screen bg-black">
      <Helmet>
        <title>Burger Shop | SignUp </title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Tilt className="">
            <div className="w-3/4 ">
              <img src={sidePic} alt="" />
            </div>
          </Tilt>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body mpt-20">
            <h1 className="text-5xl text-black font-bold">SignUp now!</h1>
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                {...register("name", { required: true })}
                className="input input-bordered"
              />
              {errors.name && <span>This field is required</span>}{" "}
            </div>
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="name"
                placeholder="Photo URL"
                {...register("photoURL", { required: true })}
                className="input input-bordered"
              />
              {errors.photoURL && <span>Photo URL field is required</span>}{" "}
            </div>
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && <span>Email field is required</span>}
            </div>
            <div className="form-control text-black">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">password is required</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  one upper charecter one lower charecter one speacial charecter
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
            <p className="text-black text-center">
              Already have an ?
              <Link className="text-blue-500" to="/login">
                Account
              </Link>{" "}
            </p>
            <SocialLogin></SocialLogin>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
