import React from 'react';
import img1 from '../../../assets/Images//Image1.png'
import person from '../../../assets/Images/person1.png'
import img2 from '../../../assets/Images/image2.png'
import TopCollectionOver from './TopCollectionOver';

const TopCollections = () => {
    return (
        <div className='flex space-x-10 justify-center '>

            <div>

                <img src={img1} alt="" />

                <div className='flex items-center justify-between mt-5'>

                    <div className='flex items-center space-x-2'>

                        <img src={person} alt="" />
                        <div>
                            <h1 className='text-lg font-bold'>The Futr Abstr</h1>
                            <p>10 in stock</p>

                        </div>
                    </div>

                    <div>
                        <p className='text-sm'>Highest Bid</p>
                        <p className='font-semibold'>0.25 TH</p>

                    </div>

                    <div>


                    </div>
                </div>
            </div>

            <div className='space-y-5'>

                <div className='flex items-center space-x-5'>

                    <img className='w-36 h-36' src={img2} alt="" />

                    <div className='space-y-2'>

                        <h4 className='font-bold text-lg'>The Futr Abstr</h4>
                        <div className='flex items-center space-x-2 text-xs'>
                            <img src={person} alt="" />
                            <p className='outline outline-1 outline-[#00AC4F] text-[#00AC4F] p-1'>0.25ETH</p>
                            <p className='whitespace-nowrap'>1 of B</p>
                        </div>
                        <button className='button-primary text-xs'>Place  a bid</button>

                    </div>






                </div>
                <div className='flex items-center space-x-5'>

                    <img className='w-36 h-36' src={img2} alt="" />

                    <div className='space-y-2'>

                        <h4 className='font-bold text-lg'>The Futr Abstr</h4>
                        <div className='flex items-center space-x-2 text-xs'>
                            <img src={person} alt="" />
                            <p>0.25ETH</p>
                            <p className='whitespace-nowrap'>1 of B</p>
                        </div>
                        <button className='button-secondary text-xs'>Place  a bid</button>

                    </div>






                </div>
                <div className='flex items-center space-x-5'>

                    <img className='w-36 h-36' src={img2} alt="" />

                    <div className='space-y-2'>

                        <h4 className='font-bold text-lg'>The Futr Abstr</h4>
                        <div className='flex items-center space-x-2 text-xs'>
                            <img src={person} alt="" />
                            <p>0.25ETH</p>
                            <p className='whitespace-nowrap'>1 of B</p>
                        </div>
                        <button className='button-secondary text-xs'>Place  a bid</button>

                    </div>






                </div>
            </div>

            <div className='divider divider-horizontal'></div>


            <TopCollectionOver></TopCollectionOver>

        </div>
    );
};

export default TopCollections;