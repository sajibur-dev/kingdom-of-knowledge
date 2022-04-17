import React from 'react';

const Illustration = ({src,alt}) => {
    return (
        <div className='py-20 px-8 hidden md:block'>
            <img style={{maxWidth:"80%"}} src={src} alt={alt} />
        </div>
    );
};

export default Illustration;