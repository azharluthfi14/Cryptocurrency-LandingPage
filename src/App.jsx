import React from 'react'
import { Navbar } from './components'
import { Hero, ListCrypto, BuyAndTrade } from './sections'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ListCrypto />
      <BuyAndTrade />
    </>
  )
}

export default App