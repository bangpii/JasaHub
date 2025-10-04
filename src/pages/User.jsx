import React from 'react';
import "../css/index.css";
import Header from "../components/Header";
import Hero from '../components/Hero';

const User = () => {
  return (
    <div>
      <img className='absolute top-0 right-0 opacity-60-z-10'
      src="/gradient.png" alt="Background" />

      {/* Aura */}
      <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10'></div>
      

      <Header/>
      <Hero/>
    </div>
  );
};

export default User;
