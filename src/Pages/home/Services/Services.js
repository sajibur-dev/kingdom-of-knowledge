import React from 'react';
import useFetchServices from '../../../Hooks/useFetchServices';
import Service from './Service/Service';

const Services = () => {
    const {services} =  useFetchServices("services.json")
    return (
        <div  className='px-9 py-12 my-12'>
            <h2 className='text-2xl text-center my-12 font-semibold'>My Best Selling Courses</h2>
            <div className='md:grid md:grid-cols-3 md:gap-11 mb-4 grid grid-cols-1 gap-8'>
                {
                    services.map((service) => <Service key={service.id} service={service}/>)
                }
            </div>
        </div>
    );
};

export default Services;