"use client";
import { NavbarArray, NavbarItemType } from '@/components/utils/NavbarArrayAndTypes';
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import Expand from './Expand';

const MobileNavbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState<boolean>(false)
    return (

        <div onClick={() => setNavbarOpen(!isNavbarOpen)}>
            {isNavbarOpen ?
                <div className='lg:hidden flex'>
                    <IoMdClose size={28} />
                </div>
                :
                <div className='lg:hidden flex'>
                    <GiHamburgerMenu size={25} />
                </div>
            }
            {
                isNavbarOpen && < MobileDropDown />
            }
        </div>
    )
}
export default MobileNavbar

const MobileDropDown = () => {
    return (
        <div className='w-full px-6 py-4 bg-gray-100'>
            {
                NavbarArray.map((item: NavbarItemType, index: number) => {
                    return (
                        <Expand key={index} item={item} />
                    )
                })
            }
        </div>
    )
}