import React from 'react';
import logo from '../assets/logo.png';

export const Hero = () => {
  return (
    <section id="home" className="hero-section min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          {/* Logo in Hero Section */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 shadow-2xl flex items-center justify-center">
              <img
                src={logo}
                alt="Hope for Life Ministry Logo"
                className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-golden"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-golden">Hope</span> for Life<br />
            <span className="text-3xl md:text-4xl font-light">Jesus Ministry</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            Reaching, Equipping, Empowering and Sending God's people for His glory
          </p>
          <div className="space-x-4">
            <a
              href="#about"
              className="inline-block px-8 py-3 bg-golden hover:bg-golden-dark text-primary font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              Learn More
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
