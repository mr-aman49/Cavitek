import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoo.jpg';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-pink-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Zeero Logo" 
                className="h-12 w-auto"
              />
              <div className="ml-3">
                <span className="text-xl font-semibold text-gray-800">Livca Personal Care</span>
                <span className="block text-sm text-gray-600">Zeero Sanitary Pads</span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-pink-600">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-pink-600">Products</Link>
            <Link to="/tracker" className="text-gray-700 hover:text-pink-600">Period Tracker</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-600">Contact</Link>
            <Link to="/partner" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-pink-50">
          <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-100 rounded-md">
            Home
          </Link>
          <Link to="/products" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-100 rounded-md">
            Products
          </Link>
          <Link to="/tracker" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-100 rounded-md">
            Period Tracker
          </Link>
          <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-100 rounded-md">
            About Us
          </Link>
          <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-100 rounded-md">
            Contact
          </Link>
          <Link to="/partner" className="block px-3 py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-md">
            Become a Partner
          </Link>
        </div>
      </div>
    </nav>
  );
}