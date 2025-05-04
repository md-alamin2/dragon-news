import React from 'react';
import Header from '../../Components/Header/Header';
import RightAside from '../../Components/RightAside/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../../Components/NewsDetailsCard/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();

    const news = data.find(news=> news.id == id);
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 lg:container mx-auto grid grid-cols-10 gap-4 py-8'>
                <section className='col-span-8'>
                    <h2 className='text-xl font-semibold'>Dragon News</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-2'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;