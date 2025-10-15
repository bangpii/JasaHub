import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const Layanan = () => {
  const jasaList = [
    { title: "Flyer", price: "15000", desc: "Desain flyer profesional" },
    { title: "Poster", price: "15000", desc: "Poster keren untuk promosi" },
    { title: "Spanduk", price: "20000", desc: "Spanduk berkualitas tinggi" },
    { title: "Website", price: "200000", desc: "Website modern & responsif" },
  ];

  const [layanan, setLayanan] = useState(jasaList);
  const [selected, setSelected] = useState(null);

  const handleDelete = (title) => {
    setLayanan(layanan.filter((l) => l.title !== title));
  };

  const pesanan = [
    {
      id: 1,
      nama: "Baihaqie Ar Rafi",
      jasa: "Website",
      status: "Complete",
      hp: "081536313056",
      alamat: "Jln.Kemiri Gg.Utama No.8",
      email: "baihaqiearrafi6@gmail.com",
      jumlah: "1",
      total: "20000",
      waktu: "15 Oktober 2025 | 11:04 ",
      pembayaran: "-",
    },
    {
      id: 2,
      nama: "Amira Nadhifa Nasution",
      jasa: "Flayer",
      status: "Pending",
    },
    {
      id: 3,
      nama: "Ryanto Siregar",
      jasa: "Spanduk",
      status: "Pending",
    },
  ];

  return (
    <div className="text-white font-antonio">
      {/* ====== KARTU LAYANAN ====== */}
      <div
        className="
        grid gap-6 mt-10
        xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1
        justify-items-start
      "
        data-aos="fade-down"
      >
        {layanan.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#0c0c0c] rounded-2xl p-6
              w-[240px] lg:w-[220px] md:w-[200px] sm:w-[180px] max-sm:w-[160px]
              shadow-lg hover:scale-105 transition-transform duration-300
              flex flex-col items-start text-left relative
            "
          >
            <h2 className="text-2xl font-normal mb-1 font-anton">{item.title}</h2>
            <p className="text-[#f49827] text-sm mb-5">{item.desc}</p>

            <div className="flex gap-3 mt-auto">
              {/* Tombol Lihat */}
              <button
                onClick={() => setSelected(item)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-[#f49827] transition duration-300 shadow-md"
                title="Lihat Detail"
              >
                <i className="bx bx-show text-white text-xl"></i>
              </button>

              {/* Tombol Hapus */}
              <button
                onClick={() => handleDelete(item.title)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-red-600 transition duration-300 shadow-md"
                title="Hapus Layanan"
              >
                <i className="bx bx-trash text-white text-xl"></i>
              </button>
            </div>
          </div>
        ))}

        {/* ===== Modal Detail ===== */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
            <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white w-[90%] sm:w-[400px] shadow-xl relative">
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
              >
                <i className="bx bx-x"></i>
              </button>
              <h2 className="text-2xl font-bold mb-2">{selected.title}</h2>
              <p className="text-[#f49827] mb-3">{selected.desc}</p>
              <p className="text-green-500 font-semibold">
                Harga: Rp {selected.price.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        )}
      </div>

{/* ====== TABLE PESANAN ====== */}
<div className="mt-7 flex" data-aos="fade-down">
  <div className="w-full max-w-6xl p-6 pb-8 shadow-lg bg-[#0c0c0c] rounded-2xl">
    <h2 className="text-2xl font-normal font-anton mb-4 text-white text-start">
      Data <span className="text-[#f49827]">Pesanan</span>
    </h2>

    <div className="rounded-xl overflow-hidden">
      <table className="min-w-full text-sm text-gray-300">
        <thead className="bg-[#f49827] text-white uppercase text-sm">
          <tr>
            <th className="px-3 py-2 text-left">ID</th>
            <th className="px-3 py-2 text-left">Nama</th>
            <th className="px-3 py-2 text-left">Email</th>
            <th className="px-3 py-2 text-left">Status</th>
            <th className="px-3 py-2 text-left">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {pesanan.map((p) => (
            <tr
              key={p.id}
              className="border-t border-gray-700 hover:bg-[#222] transition"
            >
              <td className="px-3 py-2">{p.id}</td>
              <td className="px-3 py-2">{p.nama}</td>
              <td className="px-3 py-2">{p.email || "-"}</td>
              <td
                className={`px-3 py-2 font-semibold ${
                  p.status === "Complete" ? "text-green-400" : "text-[#f49827]"
                }`}
              >
                {p.status}
              </td>

              {/* ===== Kolom Aksi ===== */}
              <td className="px-3 py-2 flex gap-3">
                {/* Tombol Lihat */}
                <button
                  title="Lihat Detail"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-[#f49827] transition duration-300"
                >
                  <i className="bx bx-show text-white text-lg"></i>
                </button>

                {/* Tombol Edit */}
                <button
                  title="Edit Pesanan"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-[#f49827] transition duration-300"
                >
                  <i className="bx bx-edit text-white text-lg"></i>
                </button>

                {/* Tombol Hapus */}
                <button
                  title="Hapus Pesanan"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1e1e1e] hover:bg-red-600 transition duration-300"
                >
                  <i className="bx bx-trash text-white text-lg"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>



      </div>
  );
};

export default Layanan;
