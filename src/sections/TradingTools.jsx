import React from 'react'
import { tools } from '../assets'

export default function TradingTools() {
    return (
        <section>
            <div className="py-20">
                <div className="grid grid-cols md:grid-cols-2 gap-20">
                    <div className='order-2'>
                        <h1 className='text-xl mb-7 font-bold'>Advanced Trading <span className='text-blue-500'>Tools</span></h1>
                        <div className="mb-6">
                            <h3 className='font-semibold text-gray-600 text-base mb-4'>Professional Access, Non-stop Availability</h3>
                            <p className='text-gray-600 text-sm'>We provide premium access to crypto trading for both individuals and institutions through high liquidity, reliable order execution and constant uptime.</p>
                        </div>
                        <div className="mb-6">
                            <h3 className='font-bold text-lg mb-4'>A Range of Powerful Apis</h3>
                            <p className='text-gray-600'>Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs. Connect to our WebSocket for real-time data streaming.</p>
                        </div>
                        <div className="mb-6">
                            <h3 className='font-bold text-lg mb-4'>Customer Support</h3>
                            <p className='text-gray-600'>Premium 24/7 support available to all customers worldwide by phone or email. Dedicated account managers for partners.</p>
                        </div>
                    </div>
                    <div>
                        <img src={tools} alt="tools-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}
