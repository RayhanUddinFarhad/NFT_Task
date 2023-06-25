import React from 'react';
import image1 from '../../../assets/Images/BannerImage-1.png'
import image2 from '../../../assets/Images/BannerImage-2.png'
import image3 from '../../../assets/Images/BannerImage-3.png'
import person from '../../../assets/Images/person1.png'

const Promotion = () => {
    return (
        <div className='flex px-20 items-center space-x-10 justify-center'>

            <div className='flex space-x-10 items-center'>


                <div>
                    <div className='relative'>

                        <img className='h-72' src={image1} alt="" />
                        <img className='absolute -bottom-5 -right-5' src={person} alt="" />

                    </div>
                    <div className='relative'>
                        <img className='w-48 h-52 ml-auto mt-10' src={image3} alt="" />
                        <img className='absolute -bottom-5 -right-5' src={person} alt="" />


                    </div>
                </div>
                <div className='relative'>

                    <img className='h-64 object-contain' src={image2} alt="" />
                    <img className='absolute -bottom-5 -right-5' src={person} alt="" />


                </div>

            </div>


            <div className='space-y-5 max-w-lg'>

                <h1 className='text-xl font-extrabold'>Create and Sell your NFTS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
                <button className='button-primary'>Sign Up Now</button>

            </div>

        </div>
    );
};

export default Promotion;