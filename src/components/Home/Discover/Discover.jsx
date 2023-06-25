import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import fakedata from './../../../../public/fakedata.json'
import Card from './Card';

const Discover = () => {



    const art = fakedata.filter(data => data.category === 'Art')
    const Celebrities = fakedata.filter(data => data.category === 'Celebrities')
    const Gaming = fakedata.filter(data => data.category === 'Gaming')
    const Sport = fakedata.filter(data => data.category === 'Sport')
    const Music = fakedata.filter(data => data.category === 'Music')
    const Crypto = fakedata.filter(data => data.category === 'Crypto')
    console.log(art);




    return (
        <div className='px-20'>

            <h1 className='text-3xl font-extrabold'>Discover More NFTS</h1>



            <Tabs selectedTabClassName='button-primary' className='outline-0'>
                <TabList className=''>
                    <Tab>All Categories</Tab>
                    <Tab>Art</Tab>
                    <Tab>Celebrities</Tab>
                    <Tab>Gaming</Tab>
                    <Tab>Sport</Tab>
                    <Tab>Music</Tab>
                    <Tab>Crypto</Tab>
                </TabList>

                <TabPanel className='grid lg:grid-cols-4 gap-10'>

                    {

                        fakedata && fakedata.map(data => <Card key={data.id} data={data}></Card>)
                    }
                </TabPanel>
                <TabPanel className='grid lg:grid-cols-4 gap-10'>
                    {

                        art && art.map(data => <Card key={data.id} data={data}></Card>)
                    }
                </TabPanel>
                <TabPanel className='grid lg:grid-cols-4 gap-10'>


                    {

                        Celebrities && Celebrities.map(data => <Card key={data.id} data={data}></Card>)
                    }
                </TabPanel>
                <TabPanel className='grid lg:grid-cols-4 gap-10'>
                    {

                        Gaming && Gaming.map(data => <Card key={data.id} data={data}></Card>)
                    }                </TabPanel>
                <TabPanel className='grid lg:grid-cols-4 gap-10'>
                    {

                        Sport && Sport.map(data => <Card key={data.id} data={data}></Card>)
                    }                   </TabPanel>
                <TabPanel className='grid lg:grid-cols-4 gap-10'>
                    {

                        Music && Music.map(data => <Card key={data.id} data={data}></Card>)
                    }                   </TabPanel>
                <TabPanel className='grid lg:grid-cols-4 gap-10'>
                    {

                        Crypto && Crypto.map(data => <Card key={data.id} data={data}></Card>)
                    }                   </TabPanel>
            </Tabs>
        </div>
    );
};

export default Discover;