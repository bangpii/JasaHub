import React, { useState } from "react";
import HeaderAdmin from "../components/admin/HeaderAdmin";
import NavKiri from "../components/admin/NavKiri";
import TotalDashboard from "../components/admin/TotalDashboard";
import UsersandGrafik from "../components/admin/UsersandGrafik";

const Admin = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <>
            <div className="w-full">
              <TotalDashboard />
            </div>
            <div className="w-full">
              <UsersandGrafik />
            </div>
          </>
        );
      case "Layanan":
        return (
          <div className="p-5 bg-[#0c0c0c] rounded-2xl">
            <h2 className="text-3xl font-antonio text-[#f49827] mb-3">
              Halaman Layanan
            </h2>
            <p className="text-gray-300">Konten layanan akan muncul di sini.</p>
          </div>
        );
      case "Pengguna":
        return (
          <div className="p-5 bg-[#0c0c0c] rounded-2xl">
            <h2 className="text-3xl font-antonio text-[#f49827] mb-3">
              Data Pengguna
            </h2>
            <p className="text-gray-300">Daftar pengguna akan tampil di sini.</p>
          </div>
        );
      case "Statistik":
        return (
          <div className="p-5 bg-[#0c0c0c] rounded-2xl">
            <h2 className="text-3xl font-antonio text-[#f49827] mb-3">
              Statistik Penjualan
            </h2>
            <p className="text-gray-300">
              Grafik dan data statistik akan ditampilkan di sini.
            </p>
          </div>
        );
      case "Pengaturan":
        return (
          <div className="p-5 bg-[#0c0c0c] rounded-2xl">
            <h2 className="text-3xl font-antonio text-[#f49827] mb-3">
              Pengaturan Sistem
            </h2>
            <p className="text-gray-300">
              Atur profil, tema, dan konfigurasi lainnya di sini.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-transparent text-white overflow-y-hidden">
      <div className="px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24">
        <HeaderAdmin />
        <div className="flex gap-6 mt-12">
          {/* Sidebar kiri */}
          <div className="w-[10rem] md:w-[10rem] lg:w-[10rem] mt-5">
            <NavKiri onMenuSelect={setActivePage} />
          </div>

          {/* Konten utama */}
          <div className="flex-1 ml-0">
            <h2
              className="text-5xl font-antonio mt-10 [@media(max-width:1020px)]:text-4xl"
              data-aos="fade-down"
            >
              {activePage === "Dashboard"
                ? "Dashboard Admin"
                : activePage}
            </h2>

            <div className="mt-6 space-y-8">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;