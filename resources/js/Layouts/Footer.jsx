import ApplicationLogo from '@/Components/ApplicationLogo';
import React, { useState } from 'react'

function Footer() {
    const [toggle, setToggle] = useState(false);
    const handleMenu = () => {
        setToggle(!toggle);
    }
  return (
    <div className='w-full z-10'>
        <div className="text-white md:px-20 text-sm p-2 bg-gradient-to-r from-[#565b24] via-[#cf9742] to-blue-950">
            <p><span>+234 71787878 </span> | <span>bookings@sinmiakinsanmi.com</span></p>
        </div>
    </div>
  )
}

export default Footer