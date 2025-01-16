import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="ml-2 text-xl font-semibold text-gray-800">CarePads</span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-pink-600">Home</Link>
            <Link to="/products" className="text-gray-800 hover:text-pink-600">Products</Link>
            <Link to="/about" className="text-gray-800 hover:text-pink-600">About Us</Link>
            <Link to="/contact" className="text-gray-800 hover:text-pink-600">Contact</Link>
            <Link to="/partner" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
