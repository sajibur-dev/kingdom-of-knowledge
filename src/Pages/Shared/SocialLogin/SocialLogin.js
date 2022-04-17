import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import GoogleLogin from '../../../assets/images/google.png';
import auth from "../../../firebase";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (googleUser) {
    navigate("/");
  }
  
  return (
    <div className="mt-8">
      <button
          className=" border-2 border-gray-400 rounded-full  flex justify-center items-center px-5 py-3 my-3 "
          onClick={() => signInWithGoogle()}
        >
          <img src={GoogleLogin} alt="" />{" "}
          <span className="ml-3 uppercase">continue with boogle</span>
        </button>
    </div>
  );
};

export default SocialLogin;
