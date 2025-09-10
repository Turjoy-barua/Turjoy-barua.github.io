import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/activities', label: 'Activities' },
    { path: '/projects', label: 'Projects' },
    { path: '/achievements', label: 'Achievements' },
  ];

  return (
    <header className="fixed w-full bg-emerald-200/70 backdrop-blur-sm z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-emerald-600 transition-colors">
          TURJOY
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition-colors duration-300 ${
                isActive(item.path)
                  ? 'text-primary-600 font-medium'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 hover:text-primary-600 transition-colors p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-emerald-200/95 backdrop-blur-sm border-t border-gray-200 transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobileMenu}
              className={`block py-2 transition-colors duration-300 ${
                isActive(item.path)
                  ? 'text-primary-600 font-medium'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
