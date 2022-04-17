import React from 'react';
import image from '../../assets/images/404.png';

const NotFound = () => {
    return (
        <div className='p-12 flex justify-center items-center'>
                <img src={image} alt="" />
        </div>
    );
};

export default NotFound;