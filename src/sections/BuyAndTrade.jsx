import React from 'react'
import buy from '../images/buy.png'
import SelectForm from '../components/SelectForm'

const BuyAndTrade = () => {
    return (
        <section className='container py-28 mx-auto h-screen'>
            <div className="flex justify-between">
                <div>
                    <h1 className='text-4xl font-semibold mb-6 leading-normal'>
                        Buy & trade on the <br />
                        original crypto exchange.
                    </h1>
                    <p className='text-sm text-gray-700 mb-6 leading-normal'>
                        Buy now and get 40% extra bonus Minimum pre-sale amount <br />
                        25 Crypto Coin. We accept BTC crypto-currency
                    </p>
                    <div>
                        <form>
                            <div className="flex justify-between w-full mb-7">
                                <div className="border border-blue-500 rounded-2xl py-3 px-7 flex items-center">
                                    <div className="border-r border-blue-500 pr-4 md:pr-6">
                                        <small className="text-blue-500">Amount</small>
                                    </div>
                                    <input type="text" placeholder='5,000' className='text-right border-0 focus:border-0 focus:ring-0 focus:outline-none w-full' />
                                </div>
                                <SelectForm value='USD' />
                            </div>

                            <div className="flex justify-between w-max">
                                <div className="border border-blue-500 w-full rounded-2xl py-3 px-7 flex items-center">
                                    <div className="border-r border-blue-500 pr-4 md:pr-6">
                                        <small className="text-blue-500">Getasda</small>
                                    </div>
                                    <input type="text" placeholder='1,530' className='text-right border-0 focus:border-0 focus:ring-0 focus:outline-none w-full' />
                                </div>
                                <SelectForm value='USD' />
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <img width={550} height={550} draggable="false" src={buy} alt="" />
                </div>
            </div>
        </section>
    )
}

export default BuyAndTrade