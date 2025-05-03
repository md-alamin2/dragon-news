import React from 'react';
import swimmingImage from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playgroundImage from "../../assets/playground.png"
import demo from "../../assets/bg.png"

const QZone = () => {
    return (
        <div >
            <div className='bg-base-200 w-full'>
            <h2 className='text-xl font-semibold p-4'>QZone</h2>
            <div className='py-4 w-fit mx-auto'>
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playgroundImage} alt="" />
            </div>
            </div>
            <img className='mt-5 w-full' src={demo} alt="" />
        </div>
    );
};

export default QZone;