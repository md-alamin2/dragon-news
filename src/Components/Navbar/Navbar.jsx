import React, { use } from 'react';
import "./Navbar.css"
import { Link, NavLink } from 'react-router';
import userIcon  from "../../assets/user.png"
import { AuthContext } from '../../Provider/AuthContext';

const Navbar = () => {
    const {user, logoutUser} = use(AuthContext);

    const handleLogOut = ()=>{
        logoutUser().then(()=>{console.log("logout")}).catch(error=>console.log(error))
    }

    return (
        <div className='w-11/12 lg:container mx-auto pt-5 flex justify-between items-center'>
            {/* empty div */}
            <div className='navbar-start'></div>
            {/* nav links */}
            <div className='navbar-center'>
                <ul className='flex items-center gap-4 text-accent'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive})=> isActive? "border-b pb-1":""}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/career">Career</NavLink>
                    </li>
                </ul>
            </div>
            {/* login btn */}
            <div className='flex items-center gap-3 navbar-end'>
                <img src={userIcon} alt="" />
                {
                    user? <button onClick={handleLogOut} className='btn btn-primary px-4 py-2 text-white'>Logout</button>: <Link to="/auth/login" className='btn btn-primary px-4 py-2 text-white'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;