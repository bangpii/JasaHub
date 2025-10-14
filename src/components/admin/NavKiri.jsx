import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

const NavKiri = ({ onMenuSelect }) => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const menuItems = [
    { name: "Dashboard", icon: "bxs-dashboard" },
    { name: "Layanan", icon: "bx-briefcase" },
    { name: "Pengguna", icon: "bx-user" },
    { name: "Statistik", icon: "bx-bar-chart-alt" },
    { name: "Pengaturan", icon: "bx-cog" },
  ];

  return (
    <nav
      className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6 h-[37rem]
      bg-[#0c0c0c] text-white font-antonio rounded-xl
      px-2 sm:px-3 md:px-4 py-2 sm:py-3 w-full max-w-[15rem] md:max-w-[17rem] lg:max-w-[20rem]
      transition-all duration-300 mx-auto md:mx-0 overflow-y-hidden"
      data-aos="fade-right"
    >
      {menuItems.map((item) => (
        <a
          key={item.name}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveMenu(item.name);
            onMenuSelect(item.name); // kirim ke Admin.jsx
          }}
          className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl 
          text-sm sm:text-base transition-all duration-300
          ${
            activeMenu === item.name
              ? "bg-[#f49827] text-white"
              : "bg-transparent hover:bg-[#f49827] hover:text-white"
          }`}
        >
          <i className={`bx ${item.icon} text-lg sm:text-xl`}></i>
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default NavKiri;
