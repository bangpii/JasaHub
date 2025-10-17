import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import { useAuth } from "../context/AuthContext";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { login } = useAuth();

  if (!open) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.username || !formData.password) {
      setError("Username dan password harus diisi");
      setLoading(false);
      return;
    }

    try {
      const result = await login(formData.username, formData.password);
      
      if (result.success) {
        setOpen(false);
        // Redirect otomatis ke Admin page melalui App.jsx
      } else {
        setError(result.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Untuk user login dengan Google (akan diimplementasikan nanti)
    console.log("Google login clicked");
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[9999] p-4 overflow-auto"
      onClick={() => setOpen(false)}
    >
      {/* Card Login */}
      <div
        className="bg-black text-white rounded-2xl shadow-2xl w-full max-w-sm md:max-w-3xl flex flex-col md:flex-row overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kiri - Form Login */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
          <h2 className="font-anton text-3xl md:text-4xl mb-3 text-white">
            Login <span className="text-[#f49827]">Akun</span>
          </h2>
          <p className="font-antonio text-white mb-6 md:mb-8 text-sm md:text-base">
            Login untuk mengamankan Data Anda
          </p>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col">
              <label className="mb-1 font-antonio text-sm md:text-base">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Masukkan Username"
                className="p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#f49827]"
                disabled={loading}
              />
            </div>

            <div className="relative flex flex-col">
              <label className="mb-1 font-antonio text-sm md:text-base">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Masukkan Password"
                  className="p-3 rounded-lg text-black pr-10 w-full focus:outline-none focus:ring-2 focus:ring-[#f49827]"
                  disabled={loading}
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-xl text-black"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={`bx ${showPassword ? "bx-show" : "bx-hide"}`}></i>
                </span>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="bg-[#f49827] text-black py-3 rounded-lg font-antonio hover:bg-[#8b581c] transition font-extrabold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </form>

          <div className="my-4 text-center text-white font-antonio text-sm md:text-base">
            --------- Atau ---------
          </div>

          <button 
            onClick={handleGoogleLogin}
            className="w-full border-2 border-[#f49827] text-[#f49827] py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-white hover:text-black transition text-sm md:text-base"
          >
            <i className="bx bxl-google text-xl"></i>
            Login with Google
          </button>

          {/* Info login admin (bisa di-hidden atau di-remove di production) */}
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-xs">
              *Admin: gunakan username & password admin
            </p>
          </div>
        </div>

        {/* Kanan - Video, hidden di mobile */}
        <div className="hidden md:block w-full md:w-1/2 h-48 md:h-auto">
          <video
            src="/login.mp4"
            loop
            muted
            autoPlay
            className="w-full h-full object-cover rounded-b-2xl md:rounded-none"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Login;