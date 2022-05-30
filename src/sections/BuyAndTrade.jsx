import React from 'react'
import { buy } from '../assets'
import SelectForm from '../components/Form'

const BuyAndTrade = () => {
    return (
        <section className="pt-11">
            <div className="flex flex-col md:justify-between">
                <div>
                    <h1 className="text-4xl font-semibold mb-6 leading-normal">
                        Buy & trade on the <br />
                        original crypto exchange.
                    </h1>
                    <p className="text-sm text-gray-700 mb-6 leading-normal">
                        Buy now and get 40% extra bonus Minimum pre-sale amount <br />
                        25 Crypto Coin. We accept BTC crypto-currency
                    </p>
                    <div>
                        <form>
                            <div className="flex justify-between gap-2 mb-7">
                                <div className="border border-blue-500 rounded-2xl p-2 flex items-center">
                                    <div className="border-r border-blue-500 pr-3 md:pr-6">
                                        <small className="text-blue-500">Amount</small>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="5,000"
                                        className="text-right placeholder:text-sm border-0 focus:border-0 focus:ring-0 focus:outline-none w-full"
                                    />
                                </div>
                                <SelectForm value="BTC" />
                            </div>

                            <div className="flex justify-between gap-2">
                                <div className="border border-blue-500 w-full rounded-2xl p-2 flex items-center">
                                    <div className="border-r border-blue-500 pr-10 md:pr-14">
                                        <small className="text-blue-500">Get</small>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="1,530"
                                        className="text-right border-0 focus:border-0 focus:ring-0 focus:outline-none w-full"
                                    />
                                </div>
                                <SelectForm value="USD" />
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <img draggable="false" className='object-cover w-[500px] h-[500px]' src={buy} alt="buy" />
                </div>
            </div>
        </section>
    );
}

export default BuyAndTrade