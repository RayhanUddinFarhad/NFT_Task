import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import fakedata from './../../../../public/fakedata.json'
import Card from './Card';
import sortIcon from '../../../assets/Images/Icons/Sort.png'
import { FaSort } from "react-icons/fa";

const Discover = () => {
    const [sortByPrice, setSortByPrice] = useState(false);

    const sortedData = sortByPrice ? [...fakedata].sort((a, b) => a.ethPrice - b.ethPrice) : fakedata;


    const art = fakedata.filter(data => data.category === 'Art')
    const Celebrities = fakedata.filter(data => data.category === 'Celebrities')
    const Gaming = fakedata.filter(data => data.category === 'Gaming')
    const Sport = fakedata.filter(data => data.category === 'Sport')
    const Music = fakedata.filter(data => data.category === 'Music')
    const Crypto = fakedata.filter(data => data.category === 'Crypto')
    console.log(art);

    const handleSortByEth = () => {
        setSortByPrice(!sortByPrice);
    };




    return (
        <div className=''>

            <h1 className='text-3xl font-extrabold'>Discover More NFTS</h1>


            <div className='flex justify-self-center'>



                <Tabs selectedTabClassName='button-primary' className='outline-0'>
                    <div className='flex items-center justify-between'>

                    <TabList className='my-8 '>
                        <Tab>All Categories</Tab>
                        <Tab>Art</Tab>
                        <Tab>Celebrities</Tab>
                        <Tab>Gaming</Tab>
                        <Tab>Sport</Tab>
                        <Tab>Music</Tab>
                        <Tab>Crypto</Tab>
                    </TabList>

                    
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="bg-gray-100 p-1 rounded-3xl normal-case text-sm flex items-center"> <FaSort></FaSort>
                        <p className='whitespace-nowrap'> All Filters</p></label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={handleSortByEth}>Sort by ETH</a></li>
                    </ul>
                </div>
                    </div>

                    <TabPanel className='grid lg:grid-cols-4 gap-10 justify-center'>

                        {
                            sortByPrice ? sortedData.map(data => <Card data={data}></Card>) : fakedata.map(data => <Card data={data}></Card>)
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
                        }

                    </TabPanel>


                </Tabs>



            </div>

            <div className='flex justify-center my-10'>
                <button className='button-secondary'>More NFT's</button>

            </div>

        </div>
    );
};

export default Discover;