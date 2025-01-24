import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
// Import the logo image
import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-pink-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              {/* Replace Heart with logo */}
              <img src={logo} alt="Livca Logo" className="h-8 w-8" />
              <span className="ml-2 text-lg font-semibold">Livca Personal Care</span>
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
              <li><Link to="/careers" className="text-gray-600 hover:text-pink-600">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Partners</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/partner" className="text-gray-600 hover:text-pink-600">Become a Partner</Link></li>
              <li><a href="https://www.amazon.in" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">Buy on Amazon</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/legal/privacy-policy" className="text-gray-600 hover:text-pink-600">Privacy Policy</Link></li>
              <li><Link to="/legal/terms-of-use" className="text-gray-600 hover:text-pink-600">Terms of Use</Link></li>
              <li><Link to="/legal/cookie-policy" className="text-gray-600 hover:text-pink-600">Cookie Policy</Link></li>
              <li><Link to="/legal/disclaimer" className="text-gray-600 hover:text-pink-600">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Livca Personal Care. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
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
      </div>
    </footer>
  );
}
