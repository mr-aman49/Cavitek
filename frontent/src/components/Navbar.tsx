import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg'; // Adjust the path based on your folder structure

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-pink-50 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Zeero Logo" 
                className="h-10 w-auto"
              />
              <div className="ml-3">
                <span className="text-xl font-semibold text-gray-800">Livca Personal Care</span>
                <span className="block text-sm text-gray-600">Zeero Sanitary Pads</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
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
    </nav>
  );
}
