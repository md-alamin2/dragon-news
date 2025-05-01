import React from 'react';
import { NavLink } from 'react-router';
import user  from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='w-11/12 lg:container mx-auto mt-5 flex justify-between items-center'>
            {/* empty div */}
            <div className='navbar-start'></div>
            {/* nav links */}
            <div className='navbar-center'>
                <ul className='flex items-center gap-4 text-accent'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/career">Career</NavLink>
                    </li>
                </ul>
            </div>
            {/* login btn */}
            <div className='flex items-center gap-3 navbar-end'>
                <img src={user} alt="" />
                <button className='btn btn-primary px-4 py-2 text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;