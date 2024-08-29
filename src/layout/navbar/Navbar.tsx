import React, { useState } from 'react';
import { MusicalNoteIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const Header = () => {
    const Links =[
        {name:"HOME", href:"/"},
        {name:"BLOG", href:"/blog"},
        {name:"CONTACT", href:"/contact"},
        {name:"LOG IN", href:"/log-in"},
      ];
      const [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
           <Link to='/'>
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <MusicalNoteIcon className='w-7 h-7 text-blue-600'/>
                <span>FestiFind</span>
            </div>
            </Link>
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link to={link.href}>{link.name}</Link>
                    </li>))
                }
            </ul>

           </div>
        </div>
    );
};

export default Header;