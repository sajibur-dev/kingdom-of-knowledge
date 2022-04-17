import React from 'react';
import image from '../../assets/images/signup.svg';
import Illustration from '../Shared/Illstration/Illustration';
import InputField from '../Shared/InputField/InputField';


const Signup = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-center text-xl'>Create an account</h1>
           <div className='grid grid-cols-2 gap-4'> 
           <Illustration src={image} alt="signup"/>
            <form style={{height:"500px"}} className="py-12 px-8">
                <InputField placeholder = "name"  type="text" />
                <InputField placeholder = "email"  type="email" />
                <InputField placeholder = "password"  type="password" />
                <InputField type="submit" value="submit"/>
            </form>
           </div>
        </div>
    );
};

export default Signup;