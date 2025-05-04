import React, { use } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs/FindUs';
import QZone from '../Qzone/Qzone';
import { AuthContext } from '../../Provider/AuthContext';

const RightAside = () => {
    const {user}= use(AuthContext)
    return (
        <div className=' space-y-8'>
            {user ? "" : <SocialLogin></SocialLogin>}
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;