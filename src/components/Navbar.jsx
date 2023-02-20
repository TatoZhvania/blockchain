import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setnav] = useState(false)

    const handleNav = () => {
        setnav(!nav)
    }

    return (
        <div className='w-full h-[60px] fixed bg-[rgba(0,0,0,0.5)] backdrop-blur-sm'>
            <div className='max-w-[1900px] mx-auto px-4 pt-1 flex justify-between items-center'>
                <div>
                    <h1 className='text-[var(--primary-blue)]'>DEFI</h1>
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex text-white items-center'>
                        <li>Platform</li>
                        <li>Developers</li>
                        <li>Community</li>
                        <li>About</li>
                        <button className='ml-4'>Use DEFI</button>
                    </ul>
                </div>
                <div onClick={handleNav} className='block md:hidden cursor-pointer'>
                    {nav ? <AiOutlineClose size={30} className='text-white' /> : <AiOutlineMenu size={30} className='text-white' />}
                </div>

                {/* MOBILE MENU */}
                <div className={nav ? 'w-full bg-black text-white absolute top-[60px] left-0 flex justify-center text-center ease-in-out duration-300' :
                    "absolute left-[-100%] ease-in-out duration-300"}>
                    <ul>
                        <li className='text-xl'>Platform</li>
                        <li className='text-xl'>Developers</li>
                        <li className='text-xl'>Community</li>
                        <li className='text-xl'>About</li>
                        <button className='m-8'>Use DEFI</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar