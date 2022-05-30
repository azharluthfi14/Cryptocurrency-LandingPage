import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="container bg-gray-50 mx-auto border-y border-gray-200 py-6 px-2">
                <div className="grid grid-cols-4">
                    <div className='flex p-8 md:justify-between border-r border-gray-200'>
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
                    <div className='flex p-8 md:justify-center border-r border-gray-200'>

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
                </div>
            </div>
        </>
    )
}
