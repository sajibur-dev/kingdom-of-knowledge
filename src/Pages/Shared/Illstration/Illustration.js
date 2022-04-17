import React from 'react';

const Illustration = ({src,alt}) => {
    return (
        <div className='py-20 px-8'>
            <img style={{maxWidth:"80%"}} src={src} alt={alt} />
        </div>
    );
};

export default Illustration;