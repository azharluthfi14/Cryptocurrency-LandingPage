import React from 'react'
import { BsChevronRight } from 'react-icons/bs';

const CoinRow = ({ image, coinName, coinPrice, coinTrend }) => {
    return (
        <div className='grid grid-cols-2 mb-2 py-2.5 border-b border-gray-100 last:border-none'>
            <div className="flex items-center text-sm">
                <img className='inline h-[1em] mr-2' draggable="false" src={image} alt={coinName} />
                {coinName}
            </div>
            <div className="flex items-center text-sm text-gray-600">
                {coinTrend ?
                    <span className='text-green-500 mr-1'>+</span> :
                    <span className='text-red-500 mr-1'>-</span>
                }
                {coinPrice}
            </div>
        </div>
    )
}

const ListCoin = ({ title, more, data }) => {
    return (
        <>
            <div className='flex justify-between items-center mb-6'>
                <h1 className='font-bold text-base'>{title}</h1>
                <a href={more} className="text-sm text-blue-500">
                    More
                    <BsChevronRight className="inline ml-2" />
                </a>
            </div>
            <div>
                <div className="grid grid-cols-2 mb-4 text-gray-500 text-sm">
                    <span>Name</span>
                    <span>Price</span>
                </div>
                {data.map(({ image, name, price, uptrend }, i) =>
                    <CoinRow key={i} image={image} coinName={name} coinPrice={price} coinTrend={uptrend} />
                )}
            </div>
        </>
    )
}

export default ListCoin