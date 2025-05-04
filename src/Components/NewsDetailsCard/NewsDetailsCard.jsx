import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    const {title, image_url, details, category_id} = news || {};
    return (
        <div className='mt-5 p-8 border border-gray-300 rounded-2xl'>
            <img className='rounded-2xl max-w-4xl' src={image_url} alt="" />
            <h1 className='text-2xl font-bold mt-5'>{title}</h1>
            <p className='mt-2 text-primary'>{details}</p>

            <Link to={`/news/${category_id}`} className='btn btn-secondary btn-outline mt-8'><FaArrowLeft></FaArrowLeft> Back to news category</Link>
            
        </div>
    );
};

export default NewsDetailsCard;