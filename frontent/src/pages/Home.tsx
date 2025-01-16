import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Leaf } from 'lucide-react';

// Importing the banner image from the assets folder
import bannerImage from '../assets/pexels-karolina-grabowska-4238992.jpg';
import bannerVideo from '../assets/7719710-uhd_4096_2160_25fps.mp4';
import productFirst from '../assets/maddi-bazzocco-2LJkFMdaDUY-unsplash.jpg';


export default function Home() {
  const [currentBackground, setCurrentBackground] = useState(0);

  // Backgrounds array (Image and Video)
  const backgrounds = [
    { type: 'image', src: bannerImage },
    { type: 'video', src: bannerVideo }, 
  ];

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center">
        {/* Conditional Rendering for Image or Video */}
        {backgrounds[currentBackground].type === 'image' ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgrounds[currentBackground].src})` }}
          />
        ) : (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={backgrounds[currentBackground].src}
            autoPlay
            loop
            muted
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Comfort & Care,<br />Every Day
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Premium sanitary pads designed with your comfort and well-being in mind.
              Made with natural materials for a better period experience.
            </p>
            <Link
              to="/products"
              className="bg-pink-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-pink-600"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-pink-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Maximum Protection</h3>
              <p className="mt-2 text-gray-600">Advanced absorption technology for worry-free days</p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-pink-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Gentle Care</h3>
              <p className="mt-2 text-gray-600">Soft, breathable materials for ultimate comfort</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-pink-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Eco-Friendly</h3>
              <p className="mt-2 text-gray-600">Sustainable materials and biodegradable packaging</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>
          
          {/* Product Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src={productFirst}
                alt="Niine Biodegradable Sanitary Napkin" 
                className="w-full max-w-[350px] h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Niine Biodegradable & Compostable Sanitary Napkin
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Niine provides sanitary pads for women that are ideal for both light and heavy flow days. Made with natural and biodegradable materials for a sustainable period experience.
              </p>
              <p className="text-pink-500 font-bold text-xl mb-4">
                ₹320 <span className="line-through text-gray-500">₹400</span>
              </p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
