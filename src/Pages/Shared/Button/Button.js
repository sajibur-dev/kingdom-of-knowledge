import React from 'react';

const Button = ({children,bgColor,textColor,uppercase,...rest}) => {
    return (
        <button className={`md:px-10 px-3 py-2 rounded-md  outline-0 ${textColor} ${bgColor} ${uppercase}` } {...rest}>
            {children}
        </button>
    );
};

export default Button;