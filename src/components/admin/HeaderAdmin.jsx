import React, { useEffect } from "react";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderAdmin = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <header
      className="w-full fixed top-0 left-0 z-50 bg-black backdrop-blur-md
      shadow-[0_2px_20px_rgba(0,0,0,0.1)]"
      data-aos="fade-down"
    >
      <div
        className="max-w-7xl mx-auto flex flex-wrap justify-between items-center
        px-4 sm:px-6 md:px-8 py-3 sm:py-4 gap-y-3"
      >
        {/* ====== Kiri ====== */}
        <div className="flex items-center gap-3 group">
          {/* Logo Title */}
          <div className="flex items-end gap-[3px] ml-[-6px]">
            <h3
              className="font-anton text-white text-2xl sm:text-3xl md:text-4xl 
              tracking-widest font-semibold leading-none"
            >
              JASA<span className="text-[#f49827]">HUB</span>
            </h3>
            <span
              className="font-antonio text-xs sm:text-sm md:text-base text-white 
              tracking-wide"
            >
              INDONESIA
            </span>
          </div>
        </div>

        {/* ====== Kanan ====== */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Pencarian */}
          <div
            className="flex items-center bg-[#0c0c0c] px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl
            focus-within:border-white transition-all border border-transparent
            hover:border-[#f49827] w-[9rem] sm:w-[12rem] md:w-[16rem] lg:w-[18rem]"
          >
            <i className="bx bx-search text-white text-lg sm:text-xl mr-2 opacity-90"></i>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white font-antonio 
              placeholder-white text-sm sm:text-base w-full"
            />
          </div>

          {/* Profile */}
          <div
            className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full 
            bg-[#f49827] shadow-[0_0_8px_rgba(244,152,39,0.4)] cursor-pointer 
            hover:scale-105 transition-transform duration-300"
          >
            <i className="bx bxs-user text-white text-xl sm:text-2xl"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
