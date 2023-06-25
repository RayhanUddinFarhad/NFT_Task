import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import Navbar from '../Shared/Navbar';
import TopCollections from '../components/Home/TopCollection/TopCollections';
import CollectionFeatured from '../components/Home/CollectionFeatured/CollectionFeatured';

const Main = () => {
    return (
        <>

        <Navbar></Navbar>

        <Banner></Banner>
        <div className='mt-32 space-y-20'>

        <TopCollections></TopCollections>
        <CollectionFeatured></CollectionFeatured>
        </div>
        
        </>
    );
};

export default Main;