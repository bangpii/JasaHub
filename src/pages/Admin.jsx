import React from "react";
import HeaderAdmin from "../components/admin/HeaderAdmin";
import NavKiri from "../components/admin/NavKiri";
import TotalDashboard from "../components/admin/TotalDashboard";
import UsersandGrafik from "../components/admin/UsersandGrafik";


const Admin = () => {
  return (
    <div className="bg-transparent text-white overflow-y-hidden">
      {/* ======= Wrapper utama ======= */}
      <div className="px-5 sm:px-8 md:px-10 lg:px-16 xl:px-24">
        {/* Header */}
        <HeaderAdmin />
 
        {/* Konten utama */}
        <div className="flex gap-6 mt-20 -ml-[40px]">
          {/* Sidebar kiri */}
          <div className="w-34 [@media(max-width:1020px)]:ml-7 overflow-y-hidden">
            <NavKiri />
          </div>

          {/* Isi konten */}
        <div className="admin-content">
          <div>
            <h2 className="text-5xl font-antonio mt-10 [@media(max-width:1020px)]:text-4xl" data-aos="fade-down">Dashboard Admin</h2>
          </div>

          <div>
            <TotalDashboard/>
            <UsersandGrafik/>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;
