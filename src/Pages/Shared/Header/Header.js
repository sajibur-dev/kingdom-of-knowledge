import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/brand-logo.png';

const Header = () => {
    return (
        <header className='py-6 '>
            <nav className='flex justify-between items-center max-w-7xl mx-auto'>
                <div>
                    <Link to="/"><img  src={logo} alt="" /></Link>
                </div>
                
                <div>
                    <ul>
                        <NavLink className="text-lg mr-7" to="/home">home</NavLink>
                        <NavLink className="text-lg mr-7" to="/blogs">blogs</NavLink>
                        <NavLink className="text-lg mr-7" to="/about">about me</NavLink>
                        <NavLink className="text-lg mr-7" to="/regester">regester</NavLink>
                        <NavLink className="text-lg mr-7" to="/login">login</NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;