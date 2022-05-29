import React, { useState } from 'react'
import AccordionLayout from './AccordionLayout/AccordionLayout'

const Accordion = () => {

    const [activeIndex, setActiveIndex] = useState(1)

    return (
        <div className='flex flex-col justify-center'>
            <AccordionLayout index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} title="Why should I choose NEFA?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more
                than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today,
                we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app,
                secure wallet, and range of features.
            </AccordionLayout>
            <AccordionLayout index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} title="How secure is NEFA?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more
                than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today,
                we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app,
                secure wallet, and range of features.
            </AccordionLayout>
            <AccordionLayout index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} title="Do I have to buy a whole Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more
                than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today,
                we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app,
                secure wallet, and range of features.
            </AccordionLayout>
            <AccordionLayout index={4}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} title="How do I actually buy Bitcoin?">
                We're industry pioneers, having been in the cryptocurrency industry since 2016. We've facilitated more
                than 21 billion USD worth of transactions on our exchange for customers in over 40 countries. Today,
                we're trusted by over 8 million customers around the world and have received praise for our easy-to-use app,
                secure wallet, and range of features.
            </AccordionLayout>
        </div>
    )
}

export default Accordion