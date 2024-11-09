import React from 'react'
import Image from 'next/image'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/portfolio.bg.jpg)] bg-left lg:bg-[10%] bg-cover'
    style={{backgroundSize: "30%"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'></div>
      <div className='hidden lg:block'></div>
      <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
      <div className='hover:text-orange-600'>
        <p>I'M</p>
        <p>Rimsha</p>
        <p>Tariq</p>
      </div>
      </div>

    </div>
  )
}

export default Hero
