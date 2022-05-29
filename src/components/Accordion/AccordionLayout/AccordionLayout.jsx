import React from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'

export default function AccordionLayout({ title, children, index, activeIndex, setActiveIndex }) {
    const handleSetIndex = (index) => (activeIndex !== index) && setActiveIndex(index);
    return (
        <>
            <div onClick={() => handleSetIndex(index)} className='flex justify-between items-center
             p-2 mt-2'>
                <div className="flex">
                    <div className="font-semibold">{title}</div>
                </div>
                <div className="flex items-center justify-center">
                    {
                        (activeIndex === index) ?
                            <BsChevronDown className='w-8 h-8' /> :
                            <BsChevronUp className='w-8 h-8' />
                    }
                </div>
            </div>
            {(activeIndex === index) && (
                <p className='text-sm'>
                    {children}
                </p>
            )}
        </>
    )
}
