import React from 'react';

const Blogs = () => {
    return (
        <div className='p-6 space-y-4 my-12'>
            <div className='border-2 border-black rounded-md p-6 space-y-4 md:w-1/2 w-full mx-auto'>
                <h2 className='md:text-2xl text-lg font-semibold text-slate-800'>What's the differce bettween Authentication and Authurization</h2>
                <p className='text-sm'>Authentication verifies who the user is. and Authorization determines what resources a user can access.</p>
                <p className='text-sm'>Authentication is the first step of a good identity and access management process. and 	Authorization always takes place after authentication.</p>
                <p className='text-sm'>Autentication  Generally, transmits info through an ID Token and Authorization ransmits info through an Access Token</p>
            </div>



            <div className='border-2 border-black rounded-md p-6 space-y-4 md:w-1/2 w-full mx-auto'> 
                <h2 className='md:text-2xl text-lg font-semibold text-slate-800'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text-sm'>We use firebase for banckend of clint applicaion. For authentication we can use Oauth2, okta,PingIdentity,Keycloak etc</p>
            </div>


            <div className='border-2 border-black rounded-md p-6 space-y-4 md:w-1/2 w-full mx-auto'>
                <h2 className='md:text-2xl text-lg font-semibold text-slate-800'>What other services does firebase provide other than authentication ? </h2>
                <p className='text-sm'>Besides authentication firbases provide firestore database , hosting , realtime database etc </p>
            </div>
        </div>
    );
};

export default Blogs;