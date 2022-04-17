import React from 'react';
import {
    useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase';


const SocialLogin = () => {
    const [signInWithGoogle,googleUser] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if(googleUser){
        navigate('/')
    }
    const googleSignIn =  () => {
        console.log('google sign in')
        signInWithGoogle()
    }
    return (
        <div>
            <button className="md:px-12 px-3 py-3 border-2 border-gray-400 rounded-xl mt-5" onClick={() => googleSignIn()}>google sign in </button>
        </div>
    );
};

export default SocialLogin;