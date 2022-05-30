import React from 'react'

const Navbar = () => {

    const navLink = ['Cryptocurrency', 'Exchanges', 'Watchlist', 'NFT', 'Portofolio']

    return (
        <nav className="w-full container fixed z-30 bg-slate-500 top-0 px-2 py-3.5">
            <div className="flex flex-wrap justify-between items-center">

                <a className="self-center text-xl font-black whitespace-nowrap" href="#">
                    <span>NEFA</span>
                </a>

                <div className="hidden md:flex items-center gap-x-3.5 md:order-2">
                    <button type="button" data-mdb-ripple="true"
                        data-mdb-ripple-color="primary" className="
                       inline-block px-5 py-2.5 border border-blue-400  text-blue-400  font-medium text-base leading-tight rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out
                    ">Log In</button>
                    <button type="button" data-mdb-ripple="true"
                        data-mdb-ripple-color="light" className="inline-block px-7 py-2.5 bg-blue-400 text-white font-medium text-base leading-tight rounded-full shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">Sign Up</button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-base md:font-medium">
                        {navLink.map((item, i) => (
                            <li key={i}>
                                <a href="#" className="text-sm text-gray-500">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar