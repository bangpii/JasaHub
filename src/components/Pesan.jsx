import React, { useState } from "react";
import '../css/index.css';

const Pesan = ({ onClose, selectedService }) => {
  const [metode, setMetode] = useState("");
  const [jumlah, setJumlah] = useState(1); // jumlah default 1
  const price = selectedService?.price || 0;

   // fungsi untuk klik overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[9999]" onClick={handleOverlayClick}>
      <div className="relative w-[200px] sm:w-[250px]">
        {/* SVG Mobile */}
        <img
          src="/Mobile.svg"
          alt="Mobile Frame"
          className="w-full h-auto"
          data-aos="zoom-in"
        />
        
        <div
          className="absolute top-[5%] left-[5%] w-[90%] h-[90%] bg-white rounded-xl overflow-hidden p-4 shadow-lg"
          data-aos="zoom-in"
        >
          
          <h2 className="text-center text-2xl mb-4 font-anton">
            <span className="text-black">Form </span>
            <span className="text-[#f49827]">Pemesanan</span>
          </h2>

          {/* Container form yang bisa di-scroll */}
          <div className="h-[calc(100%-80px)] overflow-y-auto touch-pan-y scrollbar-thin scrollbar-thumb-[#f49827] scrollbar-track-gray-100 hover:scrollbar-thumb-[#885f2d]"
               style={{
                 WebkitOverflowScrolling: 'touch',
                 scrollBehavior: 'smooth'
               }}>

            <form className="space-y-3 pb-6">
              {/* Nama Lengkap */}
              <div>
                <label className="text-sm font-semibold text-black">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap"
                  className="w-full mt-1 p-2 border border-black rounded-lg focus:outline-[#f49827] text-black placeholder-gray-400"
                />
              </div>

              {/* Nomor HP */}
              <div>
                <label className="text-sm font-semibold text-black">Nomor HP</label>
                <input
                  type="number"
                  placeholder="Masukkan nomor HP aktif"
                  className="w-full mt-1 p-2 border border-black rounded-lg focus:outline-[#f49827] text-black placeholder-gray-400"
                />
              </div>

              {/* Alamat */}
              <div>
                <label className="text-sm font-semibold text-black">Alamat</label>
                <input
                  type="text"
                  placeholder="Masukkan alamat lengkap"
                  className="w-full mt-1 p-2 border border-black rounded-lg focus:outline-[#f49827] text-black placeholder-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-black">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email aktif"
                  className="w-full mt-1 p-2 border border-black rounded-lg focus:outline-[#f49827] text-black placeholder-gray-400"
                />
              </div>

              {/* Jenis Jasa (otomatis dari pilihan user) */}
              <div>
                <label className="text-sm font-semibold text-black">Jenis Jasa</label>
                <input
                  type="text"
                  value={selectedService?.title || ""}
                  readOnly
                  className="w-full mt-1 p-2 border border-black rounded-lg bg-gray-100 text-black placeholder-gray-400"
                />
              </div>

              {/* Jumlah */}
              <div>
                <label className="text-sm font-semibold text-black">Jumlah</label>
                <input
                  type="number"
                  min="1"
                  value={jumlah}
                  onChange={(e) => setJumlah(parseInt(e.target.value) || 1)}
                  className="w-full mt-1 p-2 border border-black rounded-lg focus:outline-[#f49827] text-black placeholder-gray-400"
                />
              </div>

              {/* Total */}
              <div>
                <label className="text-sm font-semibold text-black">Total (Rp)</label>
                <input
                  type="number"
                  readOnly
                  value={price * jumlah}
                  className="w-full mt-1 p-2 border border-black rounded-lg bg-gray-100 text-black"
                />
              </div>

              {/* Metode Pembayaran */}
              <div>
                <label className="text-sm font-semibold text-black">Metode Pembayaran</label>
                <div className="flex gap-4 mt-2">
                  {/* QRIS */}
                  <label className="flex items-center gap-2 cursor-pointer text-black">
                    <input
                      type="radio"
                      name="metode"
                      value="qris"
                      checked={metode === "qris"}
                      onChange={(e) => setMetode(e.target.value)}
                      className="accent-[#f49827]"
                    />
                    <span>QRIS</span>
                  </label>

                  {/* Bank */}
                  <label className="flex items-center gap-2 cursor-pointer text-black">
                    <input
                      type="radio"
                      name="metode"
                      value="bank"
                      checked={metode === "bank"}
                      onChange={(e) => setMetode(e.target.value)}
                      className="accent-[#f49827]"
                    />
                    <span>Transfer Bank</span>
                  </label>
                </div>

                {/* QRIS */}
                {metode === "qris" && (
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-600 mb-2">
                      Silakan scan QRIS di bawah ini.
                    </p>
                    <img
                      src="/qris-sample.png"
                      alt="QRIS"
                      className="mx-auto w-32 h-32 border border-black rounded-xl p-2"
                    />
                    <input
                      type="file"
                      className="mt-2 text-xs text-gray-700 cursor-pointer"
                    />
                  </div>
                )}

                {/* Bank */}
                {metode === "bank" && (
                  <div className="mt-3 text-left">
                    <p className="text-xs text-gray-700 mb-2">
                      Transfer ke rekening berikut:
                    </p>
                    <p className="text-sm font-semibold mb-2 text-black">
                      Mandiri 123-456-7890 a/n Baihaqie Ar Rafi
                    </p>
                    <input
                      type="file"
                      className="mt-2 text-xs text-gray-700 cursor-pointer"
                    />
                  </div>
                )}
              </div>

              {/* Waktu Pesan */}
              <div>
                <label className="text-sm font-semibold text-black">Waktu Pemesanan</label>
                <input
                  type="datetime-local"
                  className="w-full mt-1 p-2 border border-black rounded-lg focus:outline-[#f49827] text-black"
                />
              </div>

              {/* Tombol Submit */}
              <button
                type="button"
                className="w-full bg-[#f49827] text-black hover:bg-[#885f2d] font-semibold py-2.5 rounded-xl transition-all duration-300 mt-2 border-black"
              >
                Bayar Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pesan;