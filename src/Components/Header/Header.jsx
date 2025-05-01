import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='w-11/12 lg:container mx-auto mt-12'>
            <img className='max-w-[471px] mx-auto' src={logo} alt="logo" />
            <p className='text-lg text-accent text-center mt-5'>Journalism Without Fear or Favour</p>
            {/* Sunday, November 27, 2025 */}
            <p className='text-xl font-medium text-accent text-center mt-2'>{format(new Date(), "PPPP")}</p>
        </div>
    );
};

export default Header;