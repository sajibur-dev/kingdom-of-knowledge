import React, { useState } from "react";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
    useUpdateProfile
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/signup.svg";
import auth from "../../firebase";
import Illustration from "../Shared/Illstration/Illustration";
import InputField from "../Shared/InputField/InputField";

const Signup = () => {
  const [displayName, setDisplaName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile] = useUpdateProfile(auth);

  const [signInWithGoogle, googleUser,] = useSignInWithGoogle(auth);

  if (user || googleUser) {
    navigate("/");
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };

  const googleSignIn =  () => {
      console.log('google sign in')
      signInWithGoogle()
  }

  return (
    <div className="mt-16">
      <h1 className="text-center text-xl">Create an account</h1>
      <div className="grid grid-cols-2 gap-4">
        <Illustration src={image} alt="signup" />
        <div>
          <form
            className="py-12 px-8"
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
            <InputField type="submit" value="submit" />
          </form>
          <p>Already have an account? <Link className="text-red-400" to="/login">Login</Link> instead.</p>
          <button className="px-12 py-3 border-2 border-gray-400 rounded-xl mt-5" onClick={() => googleSignIn()}>google sign in </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
