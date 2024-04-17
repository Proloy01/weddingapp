import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'; // Assuming Button component is correctly defined

const Navbar = () => {
    return (
        <nav className='z-50 fixed top-0 left-0 bgblur flex justify-between px-16 h-[10vh] w-screen items-center border-b text-[#ffffff] border-[#00000057]'>
            <Link className='headingfont text-2xl w-1/4 font-medium hover:tracking-wide ease-linear duration-150' to="/">Weddings</Link>
            <ul className='w-2/4 flex items-center gap-8 justify-center'>
                <li><Link className='nav-a text-zinc-300 hover:text-white duration-150 ease-in' to="/">Home</Link></li>
                <li><Link className='nav-a text-zinc-300 hover:text-white duration-150 ease-in' to="/about">About</Link></li>
                <li><Link className='nav-a text-zinc-300 hover:text-white duration-150 ease-in' to="/services">Services</Link></li>
                <li><Link className='nav-a text-zinc-300 hover:text-white duration-150 ease-in' to="/contact">Contact</Link></li>
            </ul> 
            <div className='w-1/4 flex gap-4 items-center justify-end'>
                <Button path='/login' title='Login'/>
            </div>
        </nav>
    );
}

export default Navbar;
