import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { hero } from '../assets'

const Hero = () => {
    return (
        <section id="hero" className='bg-blue-100'>
            <div className="container mx-auto h-screen items-center flex justify-between">
                <div className="flex flex-col p-5 h-full justify-center">
                    <h1 className="uppercase text-blue-500 text-sm font-bold">
                        Sign up today
                    </h1>
                    <h2 className="text-5xl flex space-y-5 flex-col font-bold my-7">
                        <span>The World's</span>
                        <span className="text-blue-500">Fastest Growing</span>
                        <span>Crypto Web App</span>
                    </h2>
                    <p className="text-sm text-gray-500 leading-loose">
                        Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
                        bank transfers or your credit/debit card.
                    </p>
                    <div className="flex gap-x-3 mt-6">
                        <button
                            className="inline-flex items-center px-6 py-3.5 bg-blue-600 
                        text-white font-medium text-sm leading-tight rounded-full hover:bg-blue-700 hover:shadow-lg"
                        >
                            Get Started
                        </button>
                        <button
                            className="inline-flex items-center px-6 py-3.5 border border-blue-500
                        text-blue-500 font-medium text-sm leading-tight rounded-full hover:bg-black hover:bg-opacity-5"
                        >
                            Download App
                            <BsChevronDown className="ml-3 font-bold" />
                        </button>
                    </div>
                </div>
                <div className="h-screen flex items-center relative">
                    <img

                        draggable="false"
                        src={hero}
                        alt="heroImg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero