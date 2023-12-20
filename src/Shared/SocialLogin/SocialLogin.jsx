import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { GoogleSignIn } = useContext(AuthContext);
  const location = useLocation;
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    GoogleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const saveUser = { name: loggedUser.displayName, email: loggedUser.email };

      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="text-center py-2">
        <p>Or Sign In with</p>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-circle btn-outline mt-2"
        >
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
