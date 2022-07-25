import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { hero } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b flex items-center justify-center h-[110vh] from-cyan-50 to-blue-100"
    >
      <div className="flex flex-col md:mx-20 md:justify-between md:flex-row">
        <div className="flex flex-col md:w-[70%] space-y-4 justify-center text-center md:text-left">
          <h1 className="uppercase text-blue-500 text-sm font-bold">
            Sign up today
          </h1>
          <h2 className="space-y-4 flex flex-col font-bold">
            <span className="text-7xl">The World's</span>
            <span className="text-blue-500 text-6xl">Fastest Growing</span>
            <span className="text-5xl">Crypto Web App</span>
          </h2>
          <p className="hidden md:block text-sm text-gray-500 leading-loose">
            Buy and sell 200+ cryptocurrencies with 20+ flat currencies using
            bank transfers or your credit/debit card.
          </p>
          <div className="flex items-center flex-col md:flex-row gap-5">
            <button className="flex justify-center items-center rounded-full text-center px-6 py-3.5 bg-blue-600 text-white  hover:bg-blue-700 hover:shadow-lg">
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
        <div className="hidden md:flex items-center relative">
          <img draggable="false" src={hero} alt="heroImg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
