import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/signup.svg";
import auth from "../../firebase";
import Illustration from "../Shared/Illstration/Illustration";
import InputField from "../Shared/InputField/InputField";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Signup = () => {
  const [displayName, setDisplaName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);


  if (user) {
    navigate("/");
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  return (
    <div className="mt-16">
      <h1 className="text-center text-xl">Create an account</h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 mb-12">
        <Illustration  src={image} alt="signup" />
        <div className="px-5">
          <form
            className="py-12 "
            onSubmit={handleSubmitForm}
          >
            <InputField
              onBlur={(e) => setDisplaName(e.target.value)}
              placeholder="name"
              type="text"
            />
            <InputField
              onBlur={(e) => setEmail(e.target.value)}
              placeholder="email"
              type="email"
            />
            <InputField
              onBlur={(e) => setPassword(e.target.value)}
              placeholder="password"
              type="password"
            />
            <InputField type="submit" value="regester" />
          </form>
          <p>Already have an account? <Link className="text-red-400" to="/login">Login</Link> instead.</p>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
