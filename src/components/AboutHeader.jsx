import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutHeader = () => {
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
    <main>
      <div
        className="flex flex-col items-center justify-center text-center px-6 py-10"
        data-aos={window.innerWidth > 768 ? "fade-up" : ""}
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-[4rem] sm:mt-[4rem] md:mt-[2rem]"
          data-aos={window.innerWidth > 768 ? "fade-up" : ""}
          data-aos-delay="100"
        >
          About <span className="text-[#f49827]">Me</span>
        </h2>

        <p
          className="font-antonio sm:text-lg md:text-xl tracking-wider text-gray-300 
            text-center max-w-[45rem] md:max-w-[35rem] leading-relaxed mt-4"
          data-aos={window.innerWidth > 768 ? "fade-up" : ""}
          data-aos-delay="300"
        >
          Inilah hasil karya kami! Dari flayer, poster, website, sampai spanduk,
          semua dibuat dengan sentuhan kreativitas dan semangat untuk memberikan hasil yang memukau.
        </p>
      </div>
    </main>
  );
};

export default AboutHeader;
