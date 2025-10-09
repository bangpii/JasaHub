import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

     useEffect(() => {
            const initAOS = () => {
              if (window.innerWidth > 768) {
                AOS.init({
                  duration: 1200,
                  easing: "ease-out-cubic",
                  once: false, 
                  offset: 100,
                });
              } else {
                AOS.refreshHard(); 
              }
            };
        
            initAOS();
            window.addEventListener("resize", initAOS); 
        
            return () => {
              window.removeEventListener("resize", initAOS);
            };
          }, []);

  return (
    <div
    className="min-h-screen bg-black text-white font-[Antonio] flex flex-col items-center py-2"
        data-aos={window.innerWidth > 768 ? "fade-up" : ""}
        data-aos-delay="300"
    >

      {/* Grid utama */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] max-w-6xl bg-white text-black rounded-2xl shadow-lg overflow-hidden"
        data-aos="fade-up"
      >
        {/* Peta */}
        <div className="w-full h-[400px] md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.1063036736423!2d98.65297457497299!3d3.5629934964112073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131d6e3d2b367%3A0xc5edba7e577329d2!2sPoliteknik%20Negeri%20Medan!5e0!3m2!1sid!2sid!4v1759989565857!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-black"
          ></iframe>
        </div>

        {/* Form */}
        <form className="flex flex-col justify-center p-8 space-y-5">
          <h2 className="text-3xl font-anton text-black mb-2 text-center">
            Kirim <span className="text-[#f49827]">Pesan </span>
          </h2>

          <input
            type="text"
            placeholder="Nama Lengkap"
            className="p-3  border border-black rounded-xl focus:outline-[#f49827] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.2)]"
          />
          <input
            type="number"
            placeholder="No Handphone"
            className="p-3 border border-black rounded-xl focus:outline-[#f49827] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.2)]"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-black rounded-xl focus:outline-[#f49827] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.2)]"
          />
          <textarea
            placeholder="Tulis pesanmu di sini..."
            rows="4"
            className="p-3 border border-black rounded-xl focus:outline-[#f49827] transition-all shadow-[0_5px_20px_rgba(0,0,0,0.2)]"
          ></textarea>

          <button
            type="submit"
            className="mt-3w-full border border-black bg-black text-white rounded-xl py-2 hover:bg-[#f49827] hover:text-black transition-all shadow-[0_5px_20px_rgba(0,0,0,0.2)]"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
