import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#mission', label: 'Ministries' },
    { href: '#school', label: 'School' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#events', label: 'Events' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 border-b-2 border-golden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <div className="mr-3">
              <img
                src={logo}
                alt="Hope for Life Ministry Logo"
                className="w-12 h-12 rounded-full object-cover border-2 border-golden"
              />
            </div>
            <div className="text-primary dark:text-golden font-bold text-2xl">
              <span className="text-secondary dark:text-red-light">Hope</span> for Life
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-golden"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#partner"
              className="ml-4 px-5 py-2 bg-golden hover:bg-golden-dark text-primary font-semibold rounded-md transition-all transform hover:scale-105"
            >
              Partner With Us
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-gray-700 dark:text-gray-300"
              title="Toggle Dark/Light Mode"
            >
              {isDark ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 text-gray-700 dark:text-gray-300"
              title="Toggle Dark/Light Mode"
            >
              {isDark ? (
                <i className="fas fa-sun text-yellow-400"></i>
              ) : (
                <i className="fas fa-moon"></i>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-golden"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-gray-800 fixed inset-0 z-40 mobile-menu p-4 ${
          mobileMenuOpen ? 'show' : ''
        }`}
        style={{ width: '80%', maxWidth: '300px' }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="mr-2">
              <img
                src={logo}
                alt="Hope for Life Ministry Logo"
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="text-primary dark:text-golden font-bold text-xl">
              <span className="text-secondary dark:text-red-light">Hope</span> for Life
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-700 dark:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="py-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-golden"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#partner"
            onClick={handleLinkClick}
            className="mt-4 px-5 py-2 bg-golden hover:bg-golden-dark text-primary font-semibold rounded-md transition-all text-center"
          >
            Partner With Us
          </a>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};
