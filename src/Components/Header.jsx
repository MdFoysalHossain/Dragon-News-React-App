import React from 'react';
import Logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col pt-10 gap-3'>
            <img src={Logo} alt="" />
            <p className='text-[#706F6F] font-light'>Journalism Without Fear or Favour</p>
            <p className='text-[#706F6F]'><b className='text-[#131313]'>Sunday,</b> November 27,2025</p>
        </div>
    );
};

export default Header;