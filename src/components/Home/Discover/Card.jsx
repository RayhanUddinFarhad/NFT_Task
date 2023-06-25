import React from 'react';
import person from '../../../assets/Images/person1.png'

const Card = ({ data }) => {
    return (
        <div className='card  shadow p-5'>
            <div className='relative'>

                <img className='h-60' src={data.image} alt="" />


                <div className="avatar-group -space-x-4 absolute -bottom-3 ">
                    <div className="avatar">
                        <div className="w-8">
                            <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-8">
                            <img src='https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80' />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-8">
                            <img src='https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80' />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-8">
                            <img src={person} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='pt-5'>
                <h1 className='font-bold'>{data.name}</h1>
                <div className='flex justify-between'>

                    <p className='text-green-500 font-bold text-xs'>{data.ethPrice} ETH</p>
                    <p>{data.totalStock} of {data.totalSold}</p>


                </div>

                <div className='flex justify-between pt-10'>
                    <button className='bg-gray-100 p-2 rounded-3xl text-[#5539A8] font-bold text-sm whitespace-nowrap'>3h 50m 2s left</button>
                    <button className='text-[#5539A8] font-bold whitespace-nowrap'>Place a  bid</button>


                </div>
            </div>
        </div>
    );
};

export default Card;