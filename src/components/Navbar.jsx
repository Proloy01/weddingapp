import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'; // Assuming Button component is correctly defined

const Navbar = ({ isLogin, setIsLogin, username }) => {
    useEffect(() => {
        // Perform any side effects based on changes to isLogin or username here
        // For example, you might want to fetch user data when a user logs in
        if (username!='') {
           
            // Fetch user data or perform any other relevant actions
        }
    }, [username]);
    
    const[display,setDisplay]= useState('none')

    return (
        <nav className='z-50 fixed top-0 left-0 bgblur flex justify-between px-16 h-[10vh] w-screen items-center border-b text-[#ffffff] border-[#00000057]'>
            <Link className='headingfont text-2xl w-1/4 font-medium hover:tracking-wide ease-linear duration-150' to="/">Weddings</Link>
            <ul className='w-2/4 flex items-center gap-8 justify-center'>
                <li><Link className='nav-a text-zinc-300 hover:text-white duration-150 ease-in' to="/">Home</Link></li>
                <li><Link className='nav-a text-zinc-300 hover:text-white duration-150 ease-in' to="/about">About</Link></li>
                <li><Link className='nav-a text-zinc-300 hover:text-white duration-150 ease-in' to="/services">Services</Link></li>
                <li><Link className='nav-a text-zinc-300 hover:text-white duration-150 ease-in' to="/contact">Contact</Link></li>
            </ul>
            <div className=' relative w-1/4 flex gap-4 items-center justify-end'>
                {isLogin ? (
                    <>
                        <div className=' flex h8 w-8 overflow-hidden rounded-full bg-green-400'>
                            <img onClick={()=>display=='none'?setDisplay('yesy'):setDisplay('none')} className=' w-full cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                        </div>
                        <div className={`absolute top-10 translate-x-4 ${display} items-center justify-center w-fit h-fit bg-zinc-900 rounded-xl py-3 px-2 `}>
                            <Link className=' text-white'>{username}</Link>
                            <Link onClick={()=>setIsLogin(false)} className=' w-full flex justify-center items-center mt-6'>Logout</Link>
                        </div>
                    </>
                ) : (
                        <Button path='/login' title='Login' />
                    )}

            </div>
        </nav>
    );
}

export default Navbar;
