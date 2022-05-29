import React from 'react'
import Navbar from './Navbar'

export default function LayoutPages({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
        </>
    )
}
