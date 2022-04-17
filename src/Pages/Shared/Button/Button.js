import React from 'react';

const Button = ({children,...rest}) => {
    return (
        <button className='md:px-10 px-3 py-2 rounded-md bg-blue-600 outline-0 text-white' {...rest}>
            {children}
        </button>
    );
};

export default Button;