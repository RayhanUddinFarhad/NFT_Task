import React from 'react';
import image1 from '../../../assets/Images/image1.png';
import image2 from '../../../assets/Images/BannerImage-2.png';
import image3 from '../../../assets/Images/image3.png';
import image4 from '../../../assets/Images/image4.png';
import image5 from '../../../assets/Images/image5.png';
import image6 from '../../../assets/Images/image6.png';
import image7 from '../../../assets/Images/BannerImage-1.png';
import image8 from '../../../assets/Images/BannerImage-3.png';
import image9 from '../../../assets/Images/image2.png';

import person from '../../../assets/Images/person1.png'

const CollectionFeatured = () => {
    return (
        <div className='bg-gray-50 py-5 p-10 mx-auto  '>

<h1 className='font-extrabold text-4xl text-left '>Collection Featured NFTS</h1>



            <div className='lg:flex space-y-5  lg:space-y-0 lg:space-x-7 mx-auto '>



                <div>

                    <div className='lg:flex lg:space-x-3 mt-10'>
                        <img className='h-64' src={image1} alt="" />
                        <div className='lg:space-y-2 flex lg:block'>

                            <img className='h-20 w-24 rounded-lg object-cover' src={image2} alt="" />
                            <img className='h-20 w-24 rounded-lg object-cover' src={image5} alt="" />
                            <img className='h-20 w-24 rounded-lg object-cover' src={image6} alt="" />
                        </div>





                    </div>
                    <p className='text-xl font-bold mb-2 mt-5'>Amazing Collection</p>

                    <div className='flex justify-between'>

                        <div className='flex items-center space-x-2'>
                            <img className='w-7' src={person} alt="" />
                            <p className='font-bold'>by Arkhan</p>
                        </div>
                        <div>

                            <button className='button-secondary text-xs'>Total 54 Items</button>
                        </div>
                    </div>

                </div>


                <div>

                    <div className='lg:flex lg:space-x-3 mt-10'>
                        <img className='h-64 max-w-full' src={image7} alt="" />
                        <div className='lg:space-y-2 flex lg:block'>

                            <img className='h-20 w-24 rounded-lg object-cover' src={image5} alt="" />
                            <img className='h-20 w-24 rounded-lg object-cover' src={image2} alt="" />
                            <img className='h-20 w-24 rounded-lg object-cover' src={image8} alt="" />
                        </div>





                    </div>
                    <p className='text-xl font-bold mb-2 mt-5'>Amazing Collection</p>

                    <div className='flex justify-between'>

                        <div className='flex items-center space-x-2'>
                            <img className='w-7' src={person} alt="" />
                            <p className='font-bold'>by Arkhan</p>
                        </div>
                        <div>

                            <button className='button-secondary text-xs'>Total 54 Items</button>
                        </div>
                    </div>

                </div>
                <div>

                    <div className='lg:flex lg:space-x-3 mt-10'>
                        <img className='h-64' src={image3} alt="" />
                        <div className='lg:space-y-2 flex lg:block'>

                            <img className='h-20 w-24 rounded-lg object-cover' src={image9} alt="" />
                            <img className='h-20 w-24 rounded-lg object-cover' src={image4} alt="" />
                            <img className='h-20 w-24 rounded-lg object-cover' src={image2} alt="" />
                        </div>





                    </div>
                    <p className='text-xl font-bold mb-2 mt-5'>Amazing Collection</p>

                    <div className='flex justify-between'>

                        <div className='flex items-center space-x-2'>
                            <img className='w-7' src={person} alt="" />
                            <p className='font-bold'>by Arkhan</p>
                        </div>
                        <div>

                            <button className='button-secondary text-xs'>Total 54 Items</button>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
};

export default CollectionFeatured;