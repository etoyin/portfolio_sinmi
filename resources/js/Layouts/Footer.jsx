import ApplicationLogo from '@/Components/ApplicationLogo';
import React, { useState } from 'react'

function Footer() {
    const [toggle, setToggle] = useState(false);
    const handleMenu = () => {
        setToggle(!toggle);
    }
  return (
    <div className='w-full z-10'>
        <div className="bg-[#121d30] border-t-2 border-white h-20 sm:h-48 flex flex-col justify-center items-center">
            <div className="px-5 sm:px-0 w-full sm:w-max flex items-center sm:block">
                {/* <h1 className='text-white font-great_vibes text-3xl sm:text-5xl md:text-7xl'>Sinmi Akinsanmi</h1> */}
                <ApplicationLogo className="relative -left-5 md:left-0 h-10 sm:h-20 md:h-28"/>
            </div>
            <nav className="text-white uppercase" >
                <div className="max-w-screen-xl py-1 px-4 sm:py-3 mx-auto ">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-2xl">
                            <li>
                                <a href="#" className="text-white hover:underline" aria-current="page">
                                    <i className="lab la-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:underline">
                                    <i className="lab la-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:underline">
                                    <i className="lab la-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:underline">
                                    <i className="lab la-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:underline">
                                    <i className="lab la-telegram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="text-white md:px-20 text-sm p-2 bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950">
            <p><span>+234 71787878 </span> | <span>bookings@sinmiakinsanmi.com</span></p>
        </div>
    </div>
  )
}

export default Footer