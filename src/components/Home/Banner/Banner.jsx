import React from 'react';
import img1 from '../../../assets/Images/BannerImage-1.png'
import img2 from '../../../assets/Images/BannerImage-2.png'
import img3 from '../../../assets/Images/BannerImage-3.png'
import person from '../../../assets/Images/person1.png'
import dot from '../../../assets/Images/Dot.png'
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const Banner = () => {
    return (
        <div>
            <div className='lg:flex items-center justify-evenly mt-10 space-y-10'>
                <div className='space-y-5 '>
                    <h1 className='text-4xl font-extrabold uppercase'>Discover, And Collect <br /> Digital Art NFTS</h1>
                    <p>Digital marketplace for crypto collectibles and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.</p>
                    <div>

                        <button className='button-primary'>Explore more</button>


                        <div className='flex  space-x-5 bg-no-repeat bg-contain py-8' style={{ backgroundImage: `url(${dot})` }}>

                            <div className=''>
                                <h1 className='lg:text-5xl text-lg font-extrabold whitespace-nowrap'> <CountUp end={98}></CountUp>k+</h1>
                                <p>Artwork</p>
                            </div>
                            <div className=''>
                                <h1 className='lg:text-5xl text-lg font-extrabold whitespace-nowrap'> <CountUp end={12}></CountUp>k+</h1>
                                <p>Auction</p>
                            </div>
                            <div className=''>
                                <h1 className='lg:text-5xl text-lg font-extrabold  whitespace-nowrap'><CountUp end={15}></CountUp>k+</h1>
                                <p>Artist</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div data-aos-duration="1000" data-aos="fade-left"
                    className='relative lg:max-w-max  mr-5'>
                    <div className='absolute z-10 max-w-max'>
                        <div className='relative'>
                            <img src={img1} alt='' />
                            <div className='absolute top-5 left-5 text-white font-semibold space-y-2'>

                                <h3 className='text-lg'>Abstr Gradient NFT</h3>
                                <div className='flex items-center space-x-2'>
                                    <img className='w-8' src={person} alt="" />
                                    <p>Arkhan17</p>

                                </div>
                            </div>


                            <div className='absolute bottom-5  w-full'>

                                <div className='bg-indigo-400 bg-opacity-50 px-5 p-2 rounded-lg mx-5'>

                                    <div className='flex justify-between text-white '>

                                        <div>

                                            <p className='text-sm'>Current Bid</p>
                                            <p>0.25 ETH</p>
                                        </div>

                                        <div>

                                            <p className='text-wm'>Ends in</p>
                                            <p>12h 43m 43s</p>
                                        </div>
                                    </div>


                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='relative '>
                        <img className='absolute z-0 bottom-0 left-7  transition-transform ' src={img2} alt='' />
                        <img className='relative -z-10 bottom-0 left-12 transition-transform ' src={img3} alt='' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;