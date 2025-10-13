import React from "react";
import "boxicons/css/boxicons.min.css";

const TotalDashboard = () => {
  return (
    <div
      className="
        grid gap-6 mt-10 text-white font-antonio
        xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1
        justify-items-start
      "
       data-aos="fade-down"
    >
      {/* ====== Total Users ====== */}
      <div
        className="
          bg-[#0c0c0c] rounded-2xl p-6
          w-[240px] lg:w-[220px] md:w-[200px] sm:w-[160px] max-sm:w-[140px]
          shadow-lg hover:scale-105 transition-transform duration-300
          flex flex-col items-start text-left
        "
      >
        <p className="text-[#f49827] text-sm mb-2">Total Users</p>
        <h2 className="text-3xl font-bold mb-2">0</h2>
        <p className="text-green-500 flex items-center gap-1 text-sm">
          <i className="bx bx-up-arrow-alt"></i> 0%
        </p>
      </div>

      {/* ====== Total Sales ====== */}
      <div
        className="
          bg-[#0c0c0c] rounded-2xl p-6
          w-[240px] lg:w-[220px] md:w-[200px] sm:w-[160px] max-sm:w-[140px]
          shadow-lg hover:scale-105 transition-transform duration-300
          flex flex-col items-start text-left
        "
      >
        <p className="text-[#f49827] text-sm mb-2">Total Sales</p>
        <h2 className="text-3xl font-bold mb-2">Rp. 0</h2>
        <p className="text-green-500 flex items-center gap-1 text-sm">
          <i className="bx bx-up-arrow-alt"></i> 0%
        </p>
      </div>

      {/* ====== Total Revenue ====== */}
      <div
        className="
          bg-[#0c0c0c] rounded-2xl p-6
          w-[240px] lg:w-[220px] md:w-[200px] sm:w-[160px] max-sm:w-[140px]
          shadow-lg hover:scale-105 transition-transform duration-300
          flex flex-col items-start text-left
        "
      >
        <p className="text-[#f49827] text-sm mb-2">Total Revenue</p>
        <h2 className="text-3xl font-bold mb-2">Rp. 0</h2>
        <p className="text-green-500 flex items-center gap-1 text-sm">
          <i className="bx bx-up-arrow-alt"></i> 0%
        </p>
      </div>

      {/* ====== New Orders ====== */}
      <div
        className="
          bg-[#0c0c0c] rounded-2xl p-6
          w-[240px] lg:w-[220px] md:w-[200px] sm:w-[160px] max-sm:w-[140px]
          shadow-lg hover:scale-105 transition-transform duration-300
          flex flex-col items-start text-left
        "
      >
        <p className="text-[#f49827] text-sm mb-2">New Orders</p>
        <h2 className="text-3xl font-bold mb-2">0</h2>
        <p className="text-green-500 flex items-center gap-1 text-sm">
          <i className="bx bx-up-arrow-alt"></i> 0%
        </p>
      </div>
    </div>
  );
};

export default TotalDashboard;
