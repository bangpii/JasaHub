import React, { useEffect, useState } from "react";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../../context/AuthContext";

const HeaderAdmin = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
  };

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

          {/* Profile dengan Dropdown */}
          <div className="relative">
            <div
              className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center rounded-full 
              bg-[#f49827] shadow-[0_0_8px_rgba(244,152,39,0.4)] cursor-pointer 
              hover:scale-105 transition-transform duration-300"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <i className="bx bxs-user text-white text-xl sm:text-2xl"></i>
            </div>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 top-12 mt-2 w-48 bg-[#0c0c0c] border border-[#f49827] rounded-lg shadow-xl z-50">
                {/* Info User */}
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-white font-antonio text-sm font-semibold">
                    {user?.namaLengkap || user?.username}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {user?.devisi || 'Admin'}
                  </p>
                </div>
                
                {/* Menu Items */}
                <div className="py-1">
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#f49827] hover:text-black transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <i className="bx bx-cog text-lg mr-3"></i>
                    Pengaturan
                  </button>
                  
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-white hover:bg-[#f49827] hover:text-black transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    <i className="bx bx-user text-lg mr-3"></i>
                    Profil
                  </button>
                  
                  {/* Logout Button */}
                  <button
                    className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-red-600 hover:text-white transition-colors border-t border-gray-700 mt-1"
                    onClick={handleLogout}
                  >
                    <i className="bx bx-log-out text-lg mr-3"></i>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay untuk menutup dropdown ketika klik di luar */}
      {showDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowDropdown(false)}
        />
      )}
    </header>
  );
};

export default HeaderAdmin;