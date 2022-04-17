import React from 'react';
import useFetchServices from '../../../Hooks/useFetchServices';
import Category from './Category/Category';

const TopCategory = () => {
    const { services } =  useFetchServices("category.json");
    return (
        <div className='mt-16 p-8'>
            <h1 className='text-center text-2xl my-5 text-slate-800'>Borwse Top Category</h1>
            <div className='grid grid-cols-4 gap-6 p-5'>
                {
                    services.map((service) => <Category key={service.id} category={service}/>)
                }
            </div>
        </div>
    );
};

export default TopCategory;
