import React from "react";
import { Link } from "react-router-dom";

function Hero() {

 return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative text-center text-white px-6 z-10">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl mb-6">
            Welcome to Cairo
          </h1>
          <p className="mt-6 text-xl md:text-3xl text-gray-300 drop-shadow-lg font-light">
            Let me take you on a journey around beautiful{" "}
            <span className="text-blue-400 font-semibold">CAIRO</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/home"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/25"
            >
              <span className="font-semibold">Let's Explore</span>
            </Link>
            
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 hover:border-white/40 backdrop-blur-sm rounded-xl transition-all duration-300 hover:bg-white/10"
            >
              <span className="font-semibold">Learn More</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


