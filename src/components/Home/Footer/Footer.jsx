import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='space-y-3'>
                    <h1 className='font-extrabold text-2xl'>NFTERS</h1>
                    <p>The world’s first and largest digital marketplace for  <br /> crypto collectibles and non-fungible tokens (NFTs). <br /> Buy, sell, and discover exclusive digital items.</p>

                    <div>
                        <button className='bg-[#3B5998] text-white  btn btn-circle btn-sm'><FaFacebook ></FaFacebook></button>
                        <button className='bg-[#55ACEE] text-white  btn btn-circle btn-sm'><FaTwitter ></FaTwitter></button>
                        <button className='bg-[#3B5998] text-white  btn btn-circle btn-sm'><FaLinkedinIn ></FaLinkedinIn></button>


                    </div>
                </div>
                <div>
                    <span className="text-lg font-extrabold">Market Place</span>
                    <a className="link link-hover">All NFT's</a>
                    <a className="link link-hover">New</a>
                    <a className="link link-hover">Art</a>
                    <a className="link link-hover">Sports</a>
                    <a className="link link-hover">Utility</a>
                    <a className="link link-hover">Music</a>
                    <a className="link link-hover">Domain Name</a>
                </div>
                <div>
                    <span className="text-lg font-extrabold">My Account</span>
                    <a className="link link-hover">Profile</a>
                    <a className="link link-hover">Favourite</a>
                    <a className="link link-hover">My  Collections</a>
                    <a className="link link-hover">Settings</a>
                </div>
                <div>
    <span className="footer-title">Stay In The Loop</span> 
    <p>Join our mailing list to stay in the loop with our newest <br /> feature releases, NFT drops, and tips and tricks for <br /> navigating NFTs.</p>
    <div className="form-control w-80 ">
      <label className="label">
        <span className="label-text">Enter your email address...</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="Enter your email address..." className="input input-bordered w-full pr-16 p-7 text-sm rounded-3xl" /> 
        <button className="absolute top-2 right-0 bg-[#2639ED] text-white py-3 px-8 rounded-3xl">Subscribe</button>
      </div>
    </div>
    </div>
            </footer>
        </div>
    );
};

export default Footer;