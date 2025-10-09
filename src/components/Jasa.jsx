import React, { useState } from "react";
import Pesan from "./Pesan";

const Jasa = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Flyer",
      price: "15000",
      desc: "Desain flyer profesional",
      features: [
        "Desain original dan kreatif",
        "Revisi ringan GRATIS",
        "Hasil cepat & profesional",
        "Format file JPG, PNG, atau PDF",
        "Siap cetak & siap upload",
        "Desain sesuai permintaan",
        "Warna dan tipografi yang menarik",
        "Layout rapi dan proporsional",
        "Konsultasi desain GRATIS",
      ],
    },
    {
      title: "Poster",
      price: "15000",
      desc: "Poster keren untuk promosi",
      features: [
        "Desain poster original & kreatif",
        "Revisi ringan GRATIS",
        "Format file JPG, PNG, dan PDF",
        "Resolusi tinggi (HD)",
        "Ukuran sesuai kebutuhan (custom)",
        "Desain sesuai tema",
        "Penataan teks rapi",
        "Konsultasi konsep GRATIS",
        "Estimasi pengerjaan cepat",
      ],
    },
    {
      title: "Spanduk",
      price: "20000",
      desc: "Spanduk berkualitas tinggi",
      features: [
        "Desain spanduk original & menarik",
        "Revisi ringan GRATIS",
        "File siap cetak (PDF, JPG, atau PNG)",
        "Ukuran bebas (Custom)",
        "Desain sesuai tema, warna",
        "Teks besar dan mudah dibaca",
        "Komposisi elemen visual rapi",
        "Konsultasi desain GRATIS",
        "Pengerjaan cepat dan hasil dijamin",
      ],
    },
    {
      title: "Website",
      price: "200000",
      desc: "Website modern & responsif",
      features: [
        "Website modern, responsif",
        "Struktur halaman profesional",
        "Tampilan sesuai tema",
        "HTML, CSS, dan JavaScript",
        "Ikon & ilustrasi menarik",
        "Konsultasi desain",
        "Desain SEO-friendly",
        "Hosting & Domain",
        "Support bantuan",
      ],
    },
  ];

  return (
    <div className="-mt-15 min-h-screen font-[Antonio] flex flex-col items-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] max-w-7xl">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="border border-[#FFF] text-black bg-[#FFF] rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-anton mb-2 text-center font-bold text-[#f49827]">
              <span className="text-black">Desain</span> {service.title}
            </h2>
            <p className="text-center text-lg font-semibold mb-3">
              Rp. {service.price}
            </p>
            <p className="text-sm text-center mb-4">{service.desc}</p>
            <ul className="text-sm list-disc list-inside mb-4">
              {service.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button
              className="w-full border border-black bg-black text-white rounded-xl py-2 hover:bg-[#f49827] hover:text-black transition-all"
              onClick={() => setSelectedService(service)} // buka modal + kirim data
            >
              Pesan Sekarang
            </button>
          </div>
        ))}
      </div>

      {/* Jika ada service yang dipilih, tampilkan form Pesan */}
      {selectedService && (
        <Pesan
          selectedService={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Jasa;
