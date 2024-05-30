/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import logo from '../../images/logo.png';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps} hover:text-[#818080]`}>
            {title}
        </li>
    )
}



const Navbar = () => {

    const arr = ["Market", "Exchange", "Tutorials", "Wallets"]

    const [toggle, setToggle] = useState(false)

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-3">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>

            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-intial">
                {arr.map((item, index) => {
                    return <NavbarItem title={item} key={index} />
                })}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                    Login
                </li>
            </ul>
            <div className='flex relative '>
                {
                    toggle && (
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden cursor-pointer' fontSize={28} />
                    )
                }
                {
                    toggle && (
                        <div className={`flex p-6 black-gradient absolute top-20 right-0 my-2 min-w-[140px] rounded-xl z-10`}>
                            <ul className='list-none flex flex-col gap-4 justify-end items-start'>
                                {arr.map((item, index) => {
                                    return <NavbarItem title={item} key={index}  classProps='text-xl text-white ' />
                                })}
                                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                                    Login
                                </li>
                            </ul>
                            
                        </div>
                    )
                }
                {
                    !toggle && (
                        <HiMenuAlt1 onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden cursor-pointer hover:text-[#a8a6a6]' fontSize={28} />
                    )
                }

            </div>




        </nav>
    )
}

export default Navbar
