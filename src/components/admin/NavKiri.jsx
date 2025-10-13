import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

  
const NavKiri = () => {
  return (
    <nav
      className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6 h-[90rem]
      bg-[#0c0c0c] outline-none text-white font-antonio rounded-xl
      px-2 sm:px-3 md:px-4 py-2 sm:py-3 w-full max-w-[15rem] md:max-w-[17rem] lg:max-w-[20rem]
      transition-all duration-300 mx-auto md:mx-0 overflow-y-hidden"
      data-aos="fade-right">

      {/* ====== Dashboard ====== */}
      <a
        href="#"
        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl 
        bg-transparent border border-transparent transition-all duration-300
        text-sm sm:text-base hover:bg-[#f49827] hover:text-white"
      >
        <i className="bx bxs-dashboard text-lg sm:text-xl"></i>
        Dashboard
      </a>

      {/* ====== Tambahan Menu ====== */}
      <a
        href="#"
        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl 
        bg-transparent border border-transparent transition-all duration-300
        text-sm sm:text-base hover:bg-[#f49827] hover:text-white"
      >
        <i className="bx bx-briefcase text-lg sm:text-xl"></i>
        Layanan
      </a>

      <a
        href="#"
        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl 
        bg-transparent border border-transparent transition-all duration-300
        text-sm sm:text-base hover:bg-[#f49827] hover:text-white"
      >
        <i className="bx bx-user text-lg sm:text-xl"></i>
        Pengguna
      </a>

      <a
        href="#"
        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl 
        bg-transparent border border-transparent transition-all duration-300
        text-sm sm:text-base hover:bg-[#f49827] hover:text-white"
      >
        <i className="bx bx-bar-chart-alt text-lg sm:text-xl"></i>
        Statistik
      </a>

      <a
        href="#"
        className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl 
        bg-transparent border border-transparent transition-all duration-300
        text-sm sm:text-base hover:bg-[#f49827] hover:text-white"
      >
        <i className="bx bx-cog text-lg sm:text-xl"></i>
        Pengaturan
      </a>
    </nav>
  );
};

export default NavKiri;
