import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/brand-logo.png';
import auth from '../../../firebase';
import Button from '../Button/Button';

const Header = () => {
    const [user] =  useAuthState(auth)
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
                        {
                            user ?  <Button onClick={() => signOut(auth)}>sign out</Button> :
                            <NavLink className="text-lg mr-7" to="/login">login</NavLink>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;