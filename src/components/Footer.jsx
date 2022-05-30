import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export default function Footer() {
    return (
        <>
            <div className="border-y border-gray-200 py-6 px-2">
                <div className="grid grid-cols lg:grid-cols-4">
                    <div className='flex p-3 md:justify-between border-r border-gray-200'>
                        <div>
                            <h1 className='font-semibold text-2xl'>NEFA</h1>
                        </div>
                        <ul className='text-sm text-gray-700'>
                            <li className='mb-4'>
                                <a href="/"  >Buy Crypto</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/"  >Exchanges</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" >Watchlist</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/">Portfolio</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/">NFT</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex p-3 md:justify-center border-r border-gray-200'>
                        <ul className='text-sm text-gray-700'>
                            <li className='mb-4'>
                                <a href="/"  >Products</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/"  >About Us</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" >Careers</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/">Blog</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/">Security</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex p-3 md:justify-center border-r border-gray-200'>
                        <ul className='text-sm text-gray-700'>
                            <li className='mb-4'>
                                <a href="/"  >Help Center</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/"  >Contact Us</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/" >System Status</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/">Area Avaibilty</a>
                            </li>
                            <li className='mb-4'>
                                <a href="/">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="p-6 col-span-auto">
                        <h1 className='text-gray-700 mb-3'>Newsletter</h1>
                        <p className='text-gray-500 text-sm'>Never miss anything crypto when you're on the go</p>
                        <div className="flex gap-3 my-4">
                            <div>
                                <input type="email"
                                    className="border border-gray-500 rounded-xl p-3 outline-none focus:border-blue-500 w-full"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <button className='flex justify-center items-center aspect-square p-4 text-white bg-blue-500 rounded-lg'>
                                    <BsArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-6">
                <p className="text-gray-500">© Copyright 2022 NEFA LLC. All rights reserved</p>
                <small className='text-gray-500'>
                    Design by Irvan Moses
                </small>
            </div>
        </>
    )
}
