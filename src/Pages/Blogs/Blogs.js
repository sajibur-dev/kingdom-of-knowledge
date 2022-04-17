import React from 'react';

const Blogs = () => {
    return (
        <div className='p-6 space-y-4'>
            <div className='border-2 border-black rounded-md p-6 space-y-4'>
                <h2 className='text-4xl font-semibold'>What's the differce bettween Authentication and Authurization</h2>
                <p className='text-lg'>Authentication verifies who the user is. and Authorization determines what resources a user can access.</p>
                <p>Authentication is the first step of a good identity and access management process. and 	Authorization always takes place after authentication.</p>
                <p>Autentication  Generally, transmits info through an ID Token and Authorization ransmits info through an Access Token</p>
            </div>



            <div className='border-2 border-black rounded-md p-6 space-y-4'> 
                <h2 className='text-4xl font-semibold'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>We use firebase for banckend of clint applicaion. For authentication we can use Oauth2, okta,PingIdentity,Keycloak etc</p>
            </div>


            <div className='border-2 border-black rounded-md p-6 space-y-4'>
                <h2 className='text-4xl font-semibold'>What other services does firebase provide other than authentication ? </h2>
                <p>Besides authentication firbases provide firestore database , hosting , realtime database etc </p>
            </div>
        </div>
    );
};

export default Blogs;