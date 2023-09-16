import React from 'react'
import Image from 'next/image'
import { NavbarArray, NavbarItemType } from '@/components/utils/NavbarArrayAndTypes'
import Link from 'next/link'
import { BiChevronDown, BiSearch } from 'react-icons/bi'
import { BsCart } from 'react-icons/bs'
import DropDown from './subComponent/DropDown'
import MobileNavbar from './subComponent/MobileNavbar'
const Navbar = () => {
  return (
    <div className="py-7 px-7 flex flex-shrink-0 justify-between items-center space-x-12">

      {/* Logo  */}
      <div className='w-[190px] flex-shrink-0'>
        <Image src={require('../../assets/pictures/logo.png')} width={500} height={500} alt={"Logo"} />
      </div>

      <div className='hidden lg:flex justify-between items-center width-full flex-1 '>
        {/* Navigation Option  */}
        <div>
          <ul className="flex space-x-2 lg:space-x-4 font-medium text-lg">
            {
              NavbarArray.map((item: NavbarItemType, index: number) => (
                <li className='flex items-center text-purple-950 group relative  rounded-md p-2 hover:bg-gray-50 cursor-pointer  m-3'>
                  <Link href={item.href}>{item.label}</Link>

                  {/* DownArrow Icon  */}
                  {
                    item.isDropDown ? <BiChevronDown className="-rotate-180 group-hover:rotate-0 group-hover:duration-300" /> : ""
                  }

                  {/* Drop down  */}
                  {item.isDropDown && <div className={`invisible group-hover:visible group-hover:duration-300 absolute top-8 px-6 py-2 font-light rounded-sm m-width-[7.8rem] left-0 bg-gray-100`}>
                    <DropDown item={item} />
                  </div>
                  }
                </li>
              ))
            }
          </ul>
        </div>

        {/* Search Bar  */}
        <div className='border flex text-gray-600 pl-3 rounded-md bg-white items-center'>
          <BiSearch />
          <input
            type="text"
            className='focus:outline-none pl-1 pr-5  w-50 xl:width-80 rounded-r-md '
            placeholder='What are you looking for?' />
        </div>

        {/* Cart  */}
        <div className='flex flex-shrink-0 relative h-11 w-11 rounded-full bg-gray-200 items-center justify-center'>
          <div
            className=" w-4 h-4 absolute top-1 right-1 bg-red-400 text-xs rounded-full flex justify-center items-center text-white font-semibold">0</div>    <BsCart size={24} />
        </div>

      </div>

      {/* Mobile Navbar  */}
      <div className='lg:hidden flex'>

        <MobileNavbar />
      </div>

    </div>
  )
}

export default Navbar