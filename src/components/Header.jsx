import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Header = () => {
    // toggle menu
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu');

        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden');
        }else {
            mobileMenu.classList.add('hidden');
        }
    }


  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20" >
        
        <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className='text-3xl md:text-4xl lg:text-5xl font-light m-0'>
            JASA<span className='text-[#f49827]'>HUB</span>
        </h1>

        <nav className="hidden md:flex items-center gap-12"> 
            <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="font-poppins text-base tracking-wider transition-colors hover:text-[#f49827] z-50"
                href="#home">Home</a>

             <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1100"
                className="font-poppins text-base tracking-wider transition-colors hover:text-[#f49827] z-50"
                href="#about">About</a>

             <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1200"
                className="font-poppins text-base tracking-wider transition-colors hover:text-[#f49827] z-50"
                href="#jasa">Jasa</a>

             <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1300"
                className="font-poppins text-base tracking-wider transition-colors hover:text-[#f49827] z-50"
                href="#">Contact</a>
        </nav>

        <button data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="600"
        data-aos-duration="600"
        className="hidden md:block bg-[#f49827] text-[#010101] py-3 px-8 rounded-full border-none
         transition-all duration-500 hover:bg-white cursor-pointer z-50 font-antonio font-extrabold">
            SIGNIN
        </button>


        {/* Mobile Button */}
        <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
            <i className="bx bx-menu"></i>
        </button>

        {/* Mobile Menu - hidden */}
        <div id='mobileMenu' className='fixed top-[5rem] bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md'>
            <nav className='flex flex-col gap-6 items-left'>
             <a className="font-poppins w-fit text-base tracking-wider transition-colors hover:text-[#f49827] z-50 cursor-pointer"
             href="#home">Home</a>

             <a className="font-poppins w-fit text-base tracking-wider transition-colors hover:text-[#f49827] z-50 cursor-pointer"
             href="#about">About</a>

             <a className="font-poppins w-fit text-base tracking-wider transition-colors hover:text-[#f49827] z-50 cursor-pointer"
             href="#jasa">Jasa</a>

             <a className="font-poppins w-fit text-base tracking-wider transition-colors hover:text-[#f49827] z-50 cursor-pointer"
             href="#">Contact</a>
            </nav>
        </div>


    </header>
  )
}

export default Header
