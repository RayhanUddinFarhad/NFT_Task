import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import Navbar from '../Shared/Navbar';
import TopCollections from '../components/Home/TopCollection/TopCollections';
import CollectionFeatured from '../components/Home/CollectionFeatured/CollectionFeatured';
import Promotion from '../components/Home/Promotions/Promotion';
import Discover from '../components/Home/Discover/Discover';
import Footer from '../components/Home/Footer/Footer';

const Main = () => {
    return (
        <>

        <Navbar></Navbar>

        <Banner></Banner>
        <div className='mt-72 space-y-20 mx-auto flex flex-col justify-center'>

        <TopCollections></TopCollections>
        <CollectionFeatured></CollectionFeatured>
        <Promotion></Promotion>
        <Discover></Discover>
        <Footer></Footer>
        </div>
        
        </>
    );
};

export default Main;