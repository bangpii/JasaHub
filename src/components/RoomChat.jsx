import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";

const RoomChat = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ===== Overlay Blur ===== */}
      {open && (
        <div
          onClick={() => setOpen(false)} // klik luar chat buat nutup
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-all duration-300"
        ></div>
      )}

      {/* ===== Container Chat & Gagang ===== */}
      <div className="fixed inset-y-0 right-0 flex items-center z-[100]">
        {/* ===== Box Chat ===== */}
        <div
          className={`relative h-screen bg-white shadow-2xl flex flex-col overflow-hidden font-antonio transition-all duration-300 ${
            open
              ? "w-[20rem] sm:w-[20rem] md:w-[23rem] lg:w-[25rem] xl:w-[27rem]"
              : "w-0"
          }`}
        >
          {/* ===== Header Chat ===== */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#f49827] text-white">
            <div className="flex items-center gap-3">
              <i className="bx bxs-user text-3xl bg-white text-[#f49827] p-1 rounded-full"></i>
              <div>
                <h3 className="font-semibold text-lg">Admin</h3>
                <p className="text-sm text-gray-100">Online</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-2xl">
              <i className="bx bxs-video hover:text-black transition-colors cursor-pointer"></i>
              <i className="bx bxs-phone hover:text-black transition-colors cursor-pointer"></i>
            </div>
          </div>

          {/* ===== Area Obrolan ===== */}
          <div className="flex-1 bg-gray-50 px-4 py-3 overflow-y-auto -space-y-4">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-1 text-[#f49827]">
                <i className="bx bxs-user text-lg"></i>
                <span className="font-semibold text-sm">Admin</span>
              </div>
              <div className="bg-[#f49827] text-white px-3 py-2 rounded-xl w-fit max-w-[75%]">
                Halo, ada yang bisa saya bantu?
              </div>
              <p className="text-xs text-gray-500 mt-1 ml-1">Dikirim 10:45</p>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1 text-black">
                <span className="font-semibold text-sm">Anda</span>
                <i className="bx bxs-user text-lg"></i>
              </div>
              <div className="bg-black text-white px-3 py-2 rounded-xl w-fit max-w-[75%]">
                Halo! Saya ingin menanyakan tentang layanan Anda.
              </div>
              <p className="text-xs text-gray-500 mt-1 mr-1">Dikirim 10:46</p>
            </div>
          </div>

          {/* ===== Input Chat ===== */}
          <div className="flex items-center justify-between p-3 bg-white border-t border-gray-200">
            <div className="flex items-center gap-3 text-2xl text-black">
              <i className="bx bxs-file hover:text-[#f49827] cursor-pointer transition-colors"></i>
              <i className="bx bxs-camera hover:text-[#f49827] cursor-pointer transition-colors"></i>
            </div>

            <div className="flex items-center flex-1 mx-3 bg-gray-100 rounded-full px-3 border border-black">
              <input
                type="text"
                placeholder="Ketik pesan..."
                className="flex-1 px-2 py-2 text-black bg-transparent focus:outline-none"
              />
              <i className="bx bxs-send text-2xl text-black hover:text-[#f49827] cursor-pointer transition-colors"></i>
            </div>

            <i className="bx bxs-microphone text-2xl text-black hover:text-[#f49827] cursor-pointer transition-colors"></i>
          </div>
        </div>

       {/* ===== Gagang Pintu ===== */}
        <div
        onClick={() => setOpen(!open)}
        className={`flex fixed top-1/2 -translate-y-1/2 bg-[#f49827] text-white w-10 h-14 rounded-l-2xl shadow-lg cursor-pointer transition-all duration-300 items-center justify-center filter blur-[1px] hover:blur-0 z-[101] ${
  open
    ? "right-[20rem] sm:right-[20rem] md:right-[23rem] lg:right-[25rem] xl:right-[27rem]" // posisi di luar chatbox
    : "right-0"
}`}

        >
        <i className="bx bxs-chat text-2xl text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></i>
        </div>

      </div>
    </>
  );
};

export default RoomChat;
