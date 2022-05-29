import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { usd, bitcoin, ethereum } from '../assets';

const SelectForm = ({ value = 'BTC' }) => {

    const dataCoin = [
        { name: 'BTC', code: 'BTC', icon: bitcoin },
        { name: 'ETH', code: 'ETH', icon: ethereum },
        { name: 'USD', code: 'USD', icon: usd },
    ]

    const intialCoin = dataCoin.find(({ code }) => code === value)
    const [selectedValue, setSelectedValue] = useState(intialCoin)
    const [isOpen, setIsOpen] = useState(false)


    const onChangeHandler = (item) => {
        setSelectedValue(item);
        setIsOpen(false);
        if (typeof onChange === 'function') {
            onChange(item);
        }
    };

    return (
        <div className='relative'>
            <div onClick={() => setIsOpen(!isOpen)} className="border border-blue-500 cursor-pointer flex rounded-2xl py-5 px-6 items-center">
                <div className='w-[26px] pr-2'>
                    <img src={selectedValue.icon} alt={selectedValue.name} className="flex items-center" />
                </div>
                <span className='inline-block mr-2'>{selectedValue.name}</span>
                <BsChevronDown />
            </div>

            <div className={`absolute top-full right-0 left-0 bg-white z-[2] rounded-xl mt-2 shadow-xl border border-primary overflow-hidden
             ${isOpen ? "visible opacity-100" : 'invisible opacity-0'}`}>
                <div>
                    {dataCoin.map((coin, i) => <div key={i} className={`
                    py-2 flex items-center cursor-pointer hover:text-white select-none px-4 hover:bg-blue-300
                    ${coin.name === selectedValue.name ? 'bg-blue-500 text-white' : ''}`} onClick={() => onChangeHandler(coin)}>
                        <div className='h-[20px] aspect-square mr-4'>
                            <img src={coin.icon} alt={coin.name} className="flex items-center" />
                        </div>
                        <span className='inline-block mr-2'>{coin.name}</span>
                    </div>)}
                </div>
            </div>

        </div >
    )
}

export default SelectForm