import React from 'react'
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
        
            <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
                {/* Gradiend Model */}
                <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#f49827] shadow-[0_0_15px_rgba(255, 255, 255, 0.4)] rounded-full'>
                    <div className='font-antonio absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                        <i class='bx bx-globe'></i>
                        INTRODUCING
                    </div>
                </div>

                {/* Main Heading */}
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider my-8'>
                    WELCOME TO
                    <br />
                    <span className="text-[#f49827]">JASAHUB</span>
                </h1>

                {/* Desk */}
                <p className="font-antonio text-base sm:text-lg tracking-wider text-gray-300 max-w-[40rem] lg:max-[30rem]" >Tempat kreatif untuk memenuhi kebutuhan Digital Anda.
                Kami melayani pembuatan Website profesional, desain Poster, Flyer, dan Spanduk dengan hasil berkualitas, cepat, dan sesuai kebutuhan Anda.</p>
            
                {/* Button */}
                <div className='flex gap-4 mt-5'>
                  <a href="#" className="font-antonio border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm-text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#f49827] hover:text-[#010101]" >
                    Documentation <i class='bx bx-link-external'></i>
                  </a>

                  <a href="#" className="font-antonio border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm-text-lg text-sm font-semibold tracking-wider transition-all duration-300 bg-gray-300 text-black hover:bg-[#f49827] hover:text-[#010101]" >
                    Create Now! <i class='bx bx-link-external'></i>
                  </a>
                </div>
            </div>

            {/* 3D Animation */}
            <Spline className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:lfet-[-2%] h-full" scene="https://prod.spline.design/ov9z4hT74xrtQhSg/scene.splinecode" />

    </main>
  )
}

export default Hero
