import React from 'react';
import Banner from '../components/Home/Banner/Banner';
import Navbar from '../Shared/Navbar';
import TopCollections from '../components/Home/TopCollection/TopCollections';

const Main = () => {
    return (
        <>

        <Navbar></Navbar>

        <Banner></Banner>
        <div className='mt-32'>

        <TopCollections></TopCollections>
        </div>
        
        </>
    );
};

export default Main;