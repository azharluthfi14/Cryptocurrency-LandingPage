import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs';
import { credit } from '../assets'


export default function CreditCard() {
    return (
        <section>
            <div className="py-20">
                <div className="grid grid-cols md:grid-cols-2 gap-x-48">
                    <div>
                        <img src={credit} alt="credit-image" />
                    </div>
                    <div>
                        <h1 className='font-semibold text-3xl mb-6'>
                            Introducing the
                            <span className="text-blue-500 font-semibold"> NEFA</span> <br /> Credit
                            Card
                        </h1>
                        <p className='text-base text-gray-600'>Subject to cardholder and rewards terms which will be available at application.</p>
                        <ul className='my-6'>
                            <li className='mb-2'>
                                <BsCheckCircleFill className='text-blue-500 inline mr-2' />
                                Up to 3% back on purchases
                            </li>
                            <li className='mb-2'>
                                <BsCheckCircleFill className='text-blue-500 inline mr-2' />
                                Earn rewards in bitcoin or any crypto on NEFA
                            </li>
                            <li className='mb-2'>
                                <BsCheckCircleFill className='text-blue-500 inline mr-2' />
                                No annual fee
                            </li>
                        </ul>
                        <button
                            className="inline-flex items-center px-6 py-3.5 border border-blue-500
                        text-blue-500 font-medium text-sm leading-tight rounded-full hover:bg-black hover:bg-opacity-5"
                        >
                            Join the waitlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
