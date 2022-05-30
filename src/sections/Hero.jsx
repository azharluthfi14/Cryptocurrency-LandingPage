import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { hero } from '../assets'

const Hero = () => {
    return (
        <section id="hero">
            <div className="h-screen items-center flex flex-col md:justify-between">
                <div className="flex flex-col space-y-4 h-full justify-center text-center">
                    <h1 className="uppercase text-blue-500 text-sm font-bold">
                        Sign up today
                    </h1>
                    <h2 className="text-3xl flex flex-col font-bold">
                        <span>The World's</span>
                        <span className="text-blue-500">Fastest Growing</span>
                        <span>Crypto Web App</span>
                    </h2>
                    <p className="hidden md:block text-sm text-gray-500 leading-loose">
                        Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
                        bank transfers or your credit/debit card.
                    </p>
                    <div className="flex flex-col space-y-5 gap-x-3 mt-6">
                        <button
                            className="items-center px-6 py-3.5 bg-blue-600 
                        text-white font-medium text-base leading-tight rounded-full hover:bg-blue-700 hover:shadow-lg"
                        >
                            Get Started
                        </button>
                        <button
                            className="flex justify-center  text-center items-center px-6 py-3.5 border border-blue-500
                        text-blue-500 font-medium text-base leading-tight rounded-full hover:bg-black hover:bg-opacity-5"
                        >
                            Download App
                            <span>
                                <BsChevronDown className="ml-3 font-bold" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="hidden h-screen md:flex items-center relative">
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