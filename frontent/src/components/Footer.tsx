import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pink-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-pink-500" />
              <span className="ml-2 text-lg font-semibold">CarePads</span>
            </div>
            <p className="mt-4 text-gray-600">
              Empowering women through quality feminine hygiene products.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/products" className="text-gray-600 hover:text-pink-600">Products</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-pink-600">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-pink-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Partners</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/partner" className="text-gray-600 hover:text-pink-600">Become a Partner</Link></li>
              <li><Link to="/wholesale" className="text-gray-600 hover:text-pink-600">Wholesale</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Follow Us</h3>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 CarePads. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}