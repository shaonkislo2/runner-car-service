import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { setAuthToken } from "../../../api/auth";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setAuthToken(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <p className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-info mt-4 ">
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
