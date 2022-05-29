import React from 'react'
import LayoutPages from '../components/layout'
import {
    Hero, ListCrypto, BuyAndTrade, TrustPartner,
    CreditCard, TradingTools, Security, Faq
} from '../sections'

export default function IndexPage() {
    return (
        <LayoutPages>
            <Hero />
            <ListCrypto />
            <BuyAndTrade />
            <TrustPartner />
            <CreditCard />
            <TradingTools />
            <Security />
            <Faq />
        </LayoutPages>
    )
}
