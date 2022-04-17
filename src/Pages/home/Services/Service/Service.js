import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Shared/Button/Button';

const Service = ({service}) => {
    const navigate =  useNavigate()
    const {name,balance,picture,rating,category,student,discription} = service;
console.log(service)
    return (
        <div className='bg-white shadow-lg w-full mx-auto '>
            <div>
                <img className='h-52 w-full' src={picture} alt="course" />
            </div>
            <div className='p-5 space-y-7' >
                <div className='flex justify-between items-center'>
                    <p className='text-blue-400'>{category}</p>
                    <p className='text-red-500'>{balance}</p>
                </div>
                <div>
                    <h3 className='text-xl'>{name}</h3>
                </div>
                <div className='flex justify-between items-center'>
                    <p>{rating}</p>
                    <p>{student}k <span className='text-gray-400'>student</span></p>
                </div>
                <Button bgColor="bg-green-400"  onClick = {() => navigate('/checkout')}>Checkout</Button>
            </div>
        </div>
    );
};

export default Service;