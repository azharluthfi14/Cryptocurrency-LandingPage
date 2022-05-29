import React from 'react'
import { asked } from '../assets'
import Accordion from '../components/Accordion/Accordion'

export default function Faq() {
    return (
        <section>
            <div className="container mx-auto py-20">
                <div className="grid grid-cols-2 gap-20">
                    <div>
                        <img src={asked} alt="asked-image" />
                    </div>
                    <div>
                        <h1>Support</h1>
                        <Accordion />
                    </div>
                </div>
            </div>
        </section>
    )
}
