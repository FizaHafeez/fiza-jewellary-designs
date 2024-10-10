import React from 'react'
import Navbar from './Navbar'
import { url } from 'inspector'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/1_necklace.jpg)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize: "35%", backgroundImage: url()}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)] '>
        <div className='hidden lg:block '></div>
        <div className='text-[80px] sm:text-[150] font-bold leading-tight flex justify-centre items-center'>
          <div>
            <p>Hi I am</p>
            <p>Fiza</p>
            <p>Hafeez</p>
          </div>
        </div>
      </div>
    </div>
    
  )
  
}

export default Hero
 