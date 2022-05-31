import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import image from "../../assets/images/login.svg";
import auth from "../../firebase";
import Button from "../Shared/Button/Button";
import Illustration from "../Shared/Illstration/Illustration";
import InputField from "../Shared/InputField/InputField";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLoginForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="mt-16">
      <ToastContainer />
      <h1 className="text-center text-xl">Login to your account</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 mb-5">
        <Illustration src={image} alt="login" />
        <div className="pt-20 mx-6">
          <form onSubmit={handleLoginForm}>
            <InputField
              onBlur={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
            />
            <InputField
              
              onBlur={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
            <InputField specificStyle = {true} type="submit" value="login" />
          </form>
          {loading && <p className="text-blue-400 text-center my-5">loading ...</p> }
          {error && <p className="text-red-400 text-center my-5" >{error.message}</p>}
          <p className="mb-5">
            New to Kingdom of Knowledge ?{" "}
            <Link className="text-red-400" to="/regester">
              signup
            </Link>{" "}
            instead.
          </p>
          <Button bgColor="bg-green-400"
            onClick={async () => {
              await sendPasswordResetEmail(email);

              if (email) {
                toast("sent email");
              } else {
                toast("please provide an email");
              }
            }}
          >
            reset password
          </Button>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
