import React from 'react'
import ListCoin from '../components/ListCoin';
import { bitcoin, ethereum, solana, dogecoin, pappay, btcasia, moonrock, ninjafloki, metacraft, frog, muskdoge, share } from '../images/crypto'

const trendingCoins = [{
    image: bitcoin,
    name: 'Bitcoin',
    price: '$43,180.13',
    uptrend: true
}, {
    image: ethereum,
    name: 'Ethereum',
    price: '$3,480.65',
    uptrend: false
}, {
    image: solana,
    name: 'Solana',
    price: '$150,20',
    uptrend: true
}, {
    image: dogecoin,
    name: 'Doge',
    price: '$0,1572',
    uptrend: true
}];

const gainerCoins = [{
    image: pappay,
    name: 'PAPPAY',
    price: '$0.00374',
    uptrend: true
}, {
    image: btcasia,
    name: 'Bitcoin Asia',
    price: '$0.02096',
    uptrend: true
}, {
    image: moonrock,
    name: 'Moon Rock',
    price: '$0.004907',
    uptrend: true
}, {
    image: ninjafloki,
    name: 'Ninja Floki',
    price: '$0.000123',
    uptrend: true
}];

const recentlyCoins = [{
    image: metacraft,
    name: 'Metacraft',
    price: '$0.0608',
    uptrend: false
}, {
    image: frog,
    name: 'Frog',
    price: '$0.5875',
    uptrend: false
}, {
    image: muskdoge,
    name: 'Musk Doge',
    price: '$0.04041',
    uptrend: true
}, {
    image: share,
    name: '2 Share',
    price: '$1,366.24',
    uptrend: true
}];

const ListCrypto = () => {
    return (
        <section className='relative container mx-auto'>
            <div className="-mt-14 rounded-3xl bg-white py-8 px-4 shadow-lg">
                <div className="grid md:grid-cols-2 xl:grid-cols-3">
                    <div className="px-4 mb-6 lg:mb-0">
                        <ListCoin title='🔥 Trending' data={trendingCoins} more="/" />
                    </div>
                    <div className="px-4 mb-6 lg:mb-0">
                        <ListCoin title="🚀  Top Gainers " data={gainerCoins} more="/" />
                    </div>
                    <div className="px-4 mb-6 lg:mb-0">
                        <ListCoin title="💎  Recently Added" data={recentlyCoins} more="/" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListCrypto