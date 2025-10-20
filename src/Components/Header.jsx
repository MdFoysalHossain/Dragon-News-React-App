import React from 'react';
import Logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col pt-10 gap-3'>
            <img src={Logo} alt="" />
            <p className='text-accent font-light'>Journalism Without Fear or Favour</p>
            <p className='text-accent'><span className='text-[#131313]'>{format(new Date(), "EEEE,")}</span> {format(new Date(), "MMMM d, y")}</p>
        </div>
    );
};

export default Header;