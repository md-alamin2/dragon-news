import React from 'react';
import notFoundImage from "../../assets/hand-drawn-no-data-illustration_23-2150696458.avif"

const EmptyState = () => {
    return (
        <div className='max-w-2xl mx-auto'>
            <img src={notFoundImage} alt="" />
            <p className='text-4xl font-semibold text-center'>No News Added Yet🚫</p>
        </div>
    );
};

export default EmptyState;