import React from 'react';

const Category = ({category}) => {
    const {picture,quantity,course} = category;
    return (
        <div className='flex justify-between border-none  items-center rounded-lg bg-green-200  p-5 mb-5'>
            <div className='mr-5'>
                <img className='w-10' src={picture} alt="" />
            </div>
            <div >
                <h4 className='text-base'>{course}</h4>
                <h5 className='text-sm text-slate-600 '>{quantity} courses</h5>
            </div>
        </div>
    );
};

export default Category;