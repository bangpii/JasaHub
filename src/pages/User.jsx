import React from 'react';
import "../css/index.css";
import Header from "../components/Header";
import Hero from '../components/Hero';
import AboutHeader from '../components/AboutHeader';
import About from '../components/About';
import JasaHeader from '../components/JasaHeader';
import Jasa from '../components/Jasa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const User = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  })

  return (
    <div>
      <img className='absolute top-0 right-0 opacity-60 -z-10'
      src="/gradient.png" alt="Background" />

      {/* Aura */}
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
      

      <Header/>

      {/* Section Home */}
      <section id="home">
        <Hero />
      </section>

      {/* Section About */}
      <section id="about">
        <AboutHeader />
        <About />
      </section>

      {/* Section Jasa */}
      <section id="jasa">
        <JasaHeader />
        <Jasa />
      </section>
    </div>
  );
};

export default User;
