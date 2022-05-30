import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function LayoutPages({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='mx-2 md:container md:mx-auto'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
