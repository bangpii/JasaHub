import React, { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const images = [
    "web1.png",
    "flyer_1.png",
    "web2.png",
    "flayer_2.png",
    "web3.png",
    "flayer_3.png",
    "web4.png",
  ];

  const duplicatedImages = [...images, ...images];
  const orbitRef = useRef(null);
  const scrollRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const angleRef = useRef(0); // ✅ gunakan useRef agar tidak warning

  // ✅ Deteksi ukuran layar
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ Inisialisasi AOS (fade-up ketika muncul)
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
    return () => window.removeEventListener("resize", initAOS);
  }, []);

  // ✅ Tambahan: Fade-out ketika keluar dari viewport
// ✅ FIXED: Animasi fade-out ketika keluar dari viewport
useEffect(() => {
  const section = aboutSectionRef.current;
  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ketika masuk viewport
          section.style.opacity = "1";
        } else {
          // Ketika keluar viewport
          section.style.opacity = "0";
        }
      });
    },
    { 
      threshold: 0.3, // Mulai fade ketika 30% section keluar
      rootMargin: "0px"
    }
  );

  observer.observe(section);
  return () => observer.disconnect();
}, []);

  // ✅ Animasi orbit 3D untuk desktop & tablet — versi bebas warning
  useEffect(() => {
    if (isMobile) return;
    const total = duplicatedImages.length;
    const orbit = orbitRef.current;
    let animationId;

    const animate = () => {
      angleRef.current += 0.3;
      const items = orbit.children;

      for (let i = 0; i < total; i++) {
        const currentAngle = (360 / total) * i + angleRef.current;
        const rad = (currentAngle * Math.PI) / 180;

        const x = Math.sin(rad) * 380;
        const z = Math.cos(rad) * 380;
        const zIndex = Math.round(z);
        const opacity = 0.4 + (z / 380) * 0.6;

        items[i].style.transform = `rotateX(20deg) translateX(${x}px) translateZ(${z}px) rotateY(${currentAngle}deg)`;
        items[i].style.zIndex = zIndex;
        items[i].style.opacity = opacity;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 🧹 Cleanup biar aman dari memory leak
    return () => cancelAnimationFrame(animationId);
  }, [duplicatedImages.length, isMobile]); 

  // ✅ Animasi scroll horizontal untuk mobile
  useEffect(() => {
    if (!isMobile) return;
    const container = scrollRef.current;
    let direction = 1;

    const scrollLoop = () => {
      container.scrollLeft += direction * 1.2;
      if (
        container.scrollLeft + container.clientWidth >= container.scrollWidth ||
        container.scrollLeft <= 0
      ) {
        direction *= -1;
      }
      requestAnimationFrame(scrollLoop);
    };

    scrollLoop();
  }, [isMobile]);

  return (
    <main
      ref={aboutSectionRef}
      className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden transition-opacity duration-700"
       style={{
        transition: "opacity 0.7s ease-in-out",
        opacity: 1 // Default visible
      }}
      data-aos={window.innerWidth > 768 ? "fade-up" : ""}
      data-aos-delay="100"
    >
      {/* 🔹 Spline di tengah */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="w-[130%] h-[130%] md:w-[120%] md:h-[120%] sm:w-[110%] sm:h-[110%]">
          {/* <Spline scene="https://prod.spline.design/OgGcVgPFvhwzueEz/scene.splinecode" /> */}
        </div>
      </div>

      {/* 🔸 Desktop / Tablet: Orbit */}
      {!isMobile && (
        <div className="relative z-0 w-[480px] h-[480px] md:w-[430px] md:h-[430px] [perspective:1200px] mx-auto">
          <div
            ref={orbitRef}
            className="
              absolute 
              left-1/2 
              top-48 md:top-36
              -translate-x-1/2 
              -translate-y-1/2 
              [transform-style:preserve-3d]
              flex items-center justify-center
            "
          >
            {duplicatedImages.map((img, i) => (
              <div
                key={i}
                className="absolute overflow-hidden transition-transform duration-700 hover:scale-110 rounded-lg border border-orange-400 shadow-[0_0_15px_rgba(244,152,39,0.6)]"
                style={{
                  width: "160px",
                  height: "110px",
                }}
              >
                <img
                  src={`/${img}`}
                  alt={`design-${i}`}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      )}

            {/* 🔸 Mobile: Scroll horizontal */}
        {isMobile && (
        <div
            ref={scrollRef}
            className="
            relative z-2 flex gap-4 px-6 pt-6 pb-10 
            overflow-x-hidden no-scrollbar 
            [perspective:800px] [transform:rotateX(12deg)]
            -mt-80
            "
        >
            {images.map((img, i) => (
            <div
                key={i}
                className="
                flex-shrink-0 w-72 h-48 
                rounded-lg border border-orange-400 
       
                overflow-hidden
                "
            >
                <img
                src={`/${img}`}
                alt={`mobile-design-${i}`}
                className="w-full h-full object-cover rounded-lg"
                />
            </div>
            ))}
        </div>
        )}

   {/* 🔹 Deskripsi Why JasaHub */}
<div className="absolute z-50 bottom-10 w-full px-6 sm:px-10 flex flex-col items-center text-white">

  {/* 🔸 Container teks utama */}
  <div className="relative z-30 flex flex-col sm:flex-row justify-between items-start 
  w-full max-w-4xl mx-auto gap-8 sm:gap-6 mt-20">

    {/* 🔹 Kiri — Why JasaHub */}
    <div className="relative w-full sm:w-1/2">
      {/* Title di atas paragraf kiri */}
      <div className="fade-part absolute -top-1 left-0 w-[11rem] sm:w-52 h-9 bg-gradient-to-r from-[#656565] to-[#f49827] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
        <div className="font-antonio absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base">
          <i className="bx bx-globe"></i>
          Why JasaHub?
        </div>
      </div>

      {/* Paragraf kiri */}
      <p className="font-antonio sm:text-lg md:text-xl tracking-wider text-gray-300 
      text-left max-w-[45rem] md:max-w-[35rem] leading-relaxed mt-8 sm:mt-12">
        JasaHub lahir dari semangat kolaborasi, inovasi, dan keinginan untuk menghadirkan hasil yang berdampak.
      </p>
    </div>

    {/* 🔹 Kanan — Projects Me */}
    <div className="relative w-full sm:w-1/2">
      {/* Title di atas paragraf kanan */}
      <div className="fade-part absolute -top-1 right-0 w-[11rem] sm:w-52 h-9 bg-gradient-to-r from-[#f49827] to-[#656565] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
        <div className="font-antonio absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-sm sm:text-base">
          <i className="bx bx-globe"></i>
          Projects Me
        </div>
      </div>

      {/* Paragraf kanan */}
      <p className="font-antonio sm:text-lg md:text-xl tracking-wider text-gray-300 
      text-right max-w-[45rem] md:max-w-[35rem] leading-relaxed mt-8 sm:mt-12">
        Kami menggunakan software Canva untuk membuat desain, serta bahasa PHP, JavaScript, HTML, dan CSS untuk pengembangan website.
      </p>
    </div>
  </div>
</div>

    </main>
  );
};

export default About;
