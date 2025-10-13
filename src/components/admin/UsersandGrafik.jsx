import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const UsersandGrafik = () => {
  // ====== DATA PIE CHART ======
  const data = {
    labels: ["Flayer", "Poster", "Spanduk", "Website"],
    datasets: [
      {
        label: "Traffic Source",
        data: [35, 25, 20, 20],
        backgroundColor: ["#f49827", "#f5c16c", "#f7e1b5", "#ffffff"],
        borderColor: "#0c0c0c",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
          font: {
            family: "Antonio",
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div 
    
    className="text-white font-antonio flex flex-col lg:flex-row gap-10 lg:gap-12 mt-6" 
    data-aos="fade-down"
    >
      {/* ===== Recent Orders ===== */}
      <div
        className="flex-1 bg-[#0c0c0c] rounded-2xl 
        p-5 sm:p-6 shadow-lg hover:scale-[1.01] transition-transform duration-300"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
          Recent <span className="text-[#f49827]">Orders</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-300 border border-gray-700 rounded-xl overflow-hidden">
            <thead className="bg-[#f49827] text-white uppercase text-sm">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Nama</th>
                <th className="px-4 py-3 text-left">Jasa</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700 hover:bg-[#1a1a1a] transition">
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">Amira Nadhifa Nasution</td>
                <td className="px-4 py-3">Flayer</td>
                <td className="px-4 py-3 text-[#f49827]">Pending</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-[#1a1a1a] transition">
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">Ryanto Siregar</td>
                <td className="px-4 py-3">Spanduk</td>
                <td className="px-4 py-3 text-[#f49827]">Pending</td>
              </tr>
              <tr className="border-t border-gray-700 hover:bg-[#1a1a1a] transition">
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">Baihaqie Ar Rafi</td>
                <td className="px-4 py-3">Website</td>
                <td className="px-4 py-3 text-green-400">Complete</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ===== Traffic Source ===== */}
      <div
        className="flex-1 bg-[#0c0c0c] rounded-2xl 
        p-5 sm:p-6 shadow-lg hover:scale-[1.01] transition-transform duration-300"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold mb-5">
          Traffic <span className="text-[#f49827]">Source</span>
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Grafik lingkaran */}
          <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px]">
            <Pie data={data} options={options} />
          </div>

          {/* List source */}
          <div>
            <ol className="space-y-2 text-gray-300 text-base sm:text-lg">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#f49827] rounded-full"></span> Flayer
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#f5c16c] rounded-full"></span> Poster
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-[#f7e1b5] rounded-full"></span> Spanduk
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-white rounded-full"></span> Website
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersandGrafik;
