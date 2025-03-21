import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Leaf, Star } from 'lucide-react';

// Importing assets
import bannerImage from '../assets/pexels-karolina-grabowska-4238992.jpg';
import bannerVideo from '../assets/7719710-uhd_4096_2160_25fps.mp4';
import productFirst from '../assets/main.jpg';
import logo from '../assets/logoo.jpg';
import aboutImage from '../assets/About.jpg';
import martImage from '../assets/mart.jpg';
import medicalImage from '../assets/medical.jpg';
import beautyImage from '../assets/beauty.jpg';

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

  const testimonials = [
    {
      id: 1,
      name: 'Mrs. Anjali Kumawat',
      role: 'Anjali Beauty Parlour',
      content:
        'Zeero pads have revolutionized feminine care with their exceptional quality and comfort. My clients consistently praise their reliability.',
      rating: 5,
      image: beautyImage
    },
    {
      id: 2,
      name: 'Mrs. Dimple Sharma',
      role: 'Wellness Medical Store, Jaipur',
      content:
        'As a healthcare provider, I appreciate Zeero\'s commitment to quality and hygiene. These pads are truly a game-changer for women\'s health.',
      rating: 5,
      image: medicalImage
    },
    {
      id: 3,
      name: 'Mr. Ramesh Kumar',
      role: 'BK Super Mart',
      content:
        'The demand for Zeero pads in my store has been overwhelming. Customers love the comfort and eco-friendly approach.',
      rating: 5,
      image: martImage
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center">
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
          <div className="text-white text-center md:text-left">
            <img
              src={logo}
              alt="Company Logo"
              className="w-20 h-20 mx-auto md:mx-0 mb-4"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Kuchhh… tho baat hai…
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Premium sanitary pads designed with your comfort and well-being in mind.
              Made with natural materials for a better period experience.
            </p>
            <div className="space-x-4">
              <Link
                to="/products"
                className="bg-pink-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-pink-600 inline-block"
              >
                Shop Now
              </Link>
              <a
                href="https://www.amazon.in/l/27943762031?me=A1EDAW7S7V8TOH&tag=ShopReferral_c18a282c-c0cc-4f66-aa14-3f1132278c2b&ref=sf_seller_app_share_new_ls_srb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-500 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 inline-block"
              >
                Buy on Amazon
              </a>
            </div>
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
              <p className="mt-2 text-gray-600">
                Advanced absorption technology for worry-free days
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-pink-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Gentle Care</h3>
              <p className="mt-2 text-gray-600">
                Soft, breathable materials for ultimate comfort
              </p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-pink-500 mx-auto" />
              <h3 className="mt-4 text-xl font-semibold">Eco-Friendly</h3>
              <p className="mt-2 text-gray-600">
                Sustainable materials and biodegradable packaging
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src={productFirst}
                alt="Niine Biodegradable Sanitary Napkin"
                className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Biodegradable & Compostable Sanitary Napkin
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                Zeero provides sanitary pads for women that are ideal for both light and heavy flow days. Made with natural and biodegradable materials for a sustainable period experience.
              </p>
              
              <a
                href="https://www.amazon.in/l/27943762031?me=A1EDAW7S7V8TOH&tag=ShopReferral_c18a282c-c0cc-4f66-aa14-3f1132278c2b&ref=sf_seller_app_share_new_ls_srb"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-pink-500 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 inline-block"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Why to choose Zeero sanitary pads
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Zeero sanitary pads are designed with sustainability and comfort in mind. 
              Made from biodegradable materials, they provide the best protection while caring for the environment. 
              Our pads are soft, highly absorbent, and gentle on the skin—perfect for your comfort and peace of mind.
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img
              src={aboutImage}
              alt="About Zeero Sanitary Pads"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-pink-200"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-pink-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}