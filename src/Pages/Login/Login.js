import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login.svg';
import auth from '../../firebase';
import Illustration from '../Shared/Illstration/Illustration';
import InputField from '../Shared/InputField/InputField';

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
const navigate =  useNavigate()
      if(user){
          navigate('/')
      }
const handleLoginForm = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(email,password);
}
    return (
        <div>
            <h1 className='text-center text-xl'>Login to your account</h1>
            <div className='grid grid-cols-2 gap-4'>
                <Illustration src={image} alt="login"/>
                <div className='pt-20'>
                <form onSubmit={handleLoginForm}>
                    <InputField onBlur={(e) => setEmail(e.target.value)} type="email" placeholder = "email" />
                    <InputField onBlur={(e) => setPassword(e.target.value)} type="password" placeholder = "password"/>
                    <InputField type="submit" value="login" />
                </form>
                <p>New to Smart Draw ? <Link className="text-red-400" to="/regester">signup</Link> instead.</p>
                </div>
            </div>
        </div>
    );
};

export default Login;