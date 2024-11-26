import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react'

function NavBar() {
    const [toggle, setToggle] = useState(false);
    const handleMenu = () => {
        setToggle(!toggle);
    }
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className="text-white md:px-20 text-sm p-2 bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950">
            <p><span>+234 71787878 </span> | <span>bookings@sinmiakinsanmi.com</span></p>
        </div>
        <div className="bg-[#121d30] h-20 sm:h-48 flex flex-col justify-center items-center">
            <div className="px-5 sm:px-0 w-full sm:w-max flex items-center justify-between sm:block">
                {/* <h1 className='text-white font-great_vibes text-3xl sm:text-5xl md:text-7xl'>Sinmi Akinsanmi</h1> */}
                <ApplicationLogo className="relative -left-5 md:left-0 h-10 sm:h-20 md:h-28"/>
                <div className="" onClick={handleMenu}>
                    <i className={`sm:hidden las la-${toggle ? "times" : "bars"} text-2xl text-white`}></i>
                </div>
            </div>
            <nav className="text-white uppercase hidden sm:block" >
                <div className="max-w-screen-xl py-1 px-4 sm:py-3 mx-auto ">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-base">
                            <li>
                                <Link href="/" className="text-white hover:underline" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white hover:underline">About</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white hover:underline">Thoughts</Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-white hover:underline">Projects</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:underline">Contact</Link>
                            </li>

                            <li>
                                <Link href="/book" className="p-2 bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950 text-sm text-white hover:underline">Book Sinmi</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <nav className={`bg-[#121d30] pb-4 h-max text-white px-5 uppercase transition-all ease-out duration-700 h-10 ${
        toggle ? "opacity-100" : "opacity-0"}`} >
            <div className="max-w-screen-xl">
                <div className="">
                    <ul className="font-medium text-base space-y-4">
                        <li>
                            <Link href="/" className="text-white text-sm hover:underline" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white text-sm hover:underline">About</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-white text-sm hover:underline">Thoughts</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="text-white text-sm hover:underline">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white text-sm hover:underline">Contact</Link>
                        </li>

                        <li>
                            <Link href="/book" className="text-white text-sm hover:underline">Book Sinmi</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBar