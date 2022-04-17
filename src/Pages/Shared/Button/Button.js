import React from 'react';

const Button = ({children,...rest}) => {
    return (
        <button className='px-10 py-2 rounded-md bg-blue-600 text-white' {...rest}>
            {children}
        </button>
    );
};

export default Button;