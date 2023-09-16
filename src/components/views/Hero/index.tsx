import Image from 'next/image';
import React from 'react'
import { BsCart2 } from 'react-icons/bs'

const Hero = () => {
  const btnText = "Start \n shopping";
  return (
    <div className='px-2 py-5 flex justify-between items-center '>
      {/* Right Part  */}
      <div className='space-y-6 max-w-sm'>
        {/* Sales Button  */}
        <button aria-label='Redirect the user to Sale Page'
          className='rounded-md bg-primaryWhite text-blue-700 font-medium px-4 py-2'>
          Sale 70%
        </button>
        {/* Heading  */}
        <h1 className='text-4xl md:text-6xl text-gray-800 font-bold '>
          An Industrial Take on Streetwear
        </h1>
        {/* Paragraph  */}
        <p className='text-gray-700'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
        {/* Button  */}
        <button
          aria-label='Redirect the user to Sale Page'
          className='flex gap-3 items-center rounded-sm text-lg ring-1 ring-slate-800 bg-gray-800 text-white font-semibold py-3 px-5'
        >
          <BsCart2 />
          <p className='whitespace-pre leading-4'>
            {btnText}
          </p>
        </button>
        {/* Logos */}
        <div className='flex gap-4'>
          {/* first logo  */}
          <div className="w-14 md:w-28">
            <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured1.66abddd4.png&w=128&q=75"} alt="bazaar" />
          </div>
          {/* second Logo*/}
          <div className="w-14 md:w-28">
            <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured2.247cd605.png&w=128&q=75"} alt="basal" />
          </div>
          {/* third logo  */}
          <div className="w-14 md:w-28">
            <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured3.6076521d.png&w=128&q=75"} alt="versace" />
          </div>
          {/* fourth logo  */}
          <div className="w-14 md:w-28">
            <Image width={100} height={100} src={"https://full-stack-ecommerce-clothing-web.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFeatured4.0489f1fc.png&w=128&q=75"} alt="instyle" />
          </div>
        </div>
      </div>
      {/* Left Part  */}
      <div className='hidden md:flex bg-primaryWhite rounded-full'>
            <Image src={require('../../assets/pictures/HeroGirlimg.webp')} alt={"HeroImage"}/>
      </div>
    </div>
  )
}

export default Hero