import React from 'react';

const InputField = ({...rest}) => {
    return (
        <input className='leading-6 py-2 px-3 text-base font-semibold  border-2 w-fit outline-none   border-gray-400 rounded-md block my-4'  {...rest} required/>
    );
};

export default InputField;