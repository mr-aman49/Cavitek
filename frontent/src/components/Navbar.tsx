import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-pink-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-12 w-12 text-pink-500" />
              <span className="ml-2 text-2xl font-semibold text-gray-800">CarePads</span>
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

          {/* Desktop menu */}
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

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-pink-50">
          <Link
            to="/"
            className="block px-3 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block px-3 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/tracker"
            className="block px-3 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Period Tracker
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 text-gray-700 hover:text-pink-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/partner"
            className="block px-3 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
            onClick={() => setIsMenuOpen(false)}
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </nav>
  );
}