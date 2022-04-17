import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [ services,setServices ] =  useState([]);
    useEffect(() => {
        fetch('services.json')
        .then((res) => res.json())
        .then((data) => setServices(data));
    },[])
    return (
        <div  className='px-9 py-12 mt-12'>
            <h2 className='text-2xl text-center my-12 font-semibold'>My Courses</h2>
            <div className='grid grid-cols-3 gap-11'>
                {
                    services.map((service) => <Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;