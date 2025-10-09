import 'boxicons/css/boxicons.min.css';

const Footer = () => {
  return (
    <footer className="bg-[#f49827] text-white py-8 font-poppins">
      <div className="container mx-auto flex flex-col items-center gap-1">
        
        {/* Social Media */}
        <div className="flex gap-3 text-2xl">
          <a href="#" className="hover:text-black transition-colors duration-300">
            <i className='bx bxl-tiktok'></i>
          </a>
          <a href="#" className="hover:text-black transition-colors duration-300">
            <i className='bx bxl-instagram'></i>
          </a>
          <a href="#" className="hover:text-black transition-colors duration-300">
            <i className='bx bx-envelope'></i>
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-1xl font-medium">
          <a href="#" className="hover:text-black transition-colors duration-300">Home</a>
          <a href="#" className="hover:text-black transition-colors duration-300">About</a>
          <a href="#" className="hover:text-black transition-colors duration-300">Jasa</a>
          <a href="#" className="hover:text-black transition-colors duration-300">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center">
          Created by <span className="text-black font-semibold">Sodara | ©2025</span> 
        </p>
      </div>
    </footer>
  );
};

export default Footer;
