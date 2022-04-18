import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../Shared/Button/Button';
import styles from './Service.module.css';


const Service = ({service}) => {
    const navigate =  useNavigate()
    const {name,balance,picture,rating,category,student,discription} = service;
console.log(service)
    return (
        <div className='bg-white shadow-lg w-full mx-auto '>

            <div className={styles.service}>
                <img src={picture} alt="course" />
                <div className={styles.discription}>
                    <p>{discription}</p>
                </div>
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
                <Button bgColor="bg-blue-800" textColor="text-white"  onClick = {() => navigate('/checkout')}>Checkout</Button>
            </div>
        </div>
    );
};

export default Service;