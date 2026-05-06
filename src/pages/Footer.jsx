import React from 'react';
import logo from '../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Hope for Life Ministry Logo" className="h-10 w-10 object-contain mr-3" />
              <div className="text-golden font-bold text-xl">
                <span className="text-red-light">Hope</span> for Life
              </div>
            </div>
            <p className="text-gray-400 mb-4">Reaching, Equipping, Empowering and Sending God's people for His glory.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-golden transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-golden transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#mission" className="hover:text-golden transition-colors">
                  Ministries
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-golden transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Nairobi, Githurai 45, Mwihoko</p>
              <p>
                <a href="tel:+254727691035" className="hover:text-golden transition-colors">
                  +254 727691035
                </a>
              </p>
              <p>
                <a href="mailto:dismusmutuku@gmail.com" className="hover:text-golden transition-colors">
                  dismusmutuku@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-golden">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-golden transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Hope for Life Jesus Ministry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
