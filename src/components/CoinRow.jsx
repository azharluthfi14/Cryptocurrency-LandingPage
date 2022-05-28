import React from 'react'

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

export default CoinRow