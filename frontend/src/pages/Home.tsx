import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from "../pages/About"
import hotelBackground from '../hotelbackground.png'

const Home = () => {

  return (
    <>
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
         <img
    src={hotelBackground}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Welcome to
          <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Harsh Garden
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-200">
          Experience luxury and comfort in the heart of the city
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Link
            to="/rooms"
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Explore Rooms
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>

      {/* Features Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Luxury Rooms</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">10+</div>
              <div className="text-gray-700 font-medium">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">4.9</div>
              <div className="text-gray-700 font-medium">Guest Rating</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <About/>
    
    </>
  );
};

export default Home;