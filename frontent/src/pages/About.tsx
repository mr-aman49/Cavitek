import React from 'react';
import salesImage from '../assets/sales.jpg';
import marketImage from '../assets/market.jpg';

export default function About() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a mission to provide high-quality feminine hygiene products
            while promoting sustainability and women's health education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
              alt="Team meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe every woman deserves access to high-quality feminine hygiene
              products. Our mission is to provide comfortable, safe, and eco-friendly
              solutions while breaking taboos around menstrual health.
            </p>
            <p className="text-gray-600">
              Through education and community engagement, we're working to create a
              world where period care is accessible to all and where women feel
              empowered to discuss their health openly.
            </p>
          </div>
        </div>

        <div className="bg-pink-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We never compromise on the quality of our products, ensuring comfort
                and safety for all our customers.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the heart of everything we do,
                from product design to packaging.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">
                We're committed to promoting menstrual health education and breaking
                stigmas around periods.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src={salesImage}
                  alt="Sales Leader"
                  className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white text-lg font-semibold">Connect on LinkedIn</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ritik Goyal</h3>
              <p className="text-gray-600 mb-3">Sales Head</p>
              <p className="text-gray-500 max-w-sm mx-auto">
              Responsible for developing and executing sales strategies, leading a sales team, achieving revenue targets, and identifying new business opportunities, all while staying ahead of market trends and ensuring operational efficiency.
              </p>
            </div>
            <div className="text-center">
              <div className="relative mb-6">
                <img
                  src={marketImage}
                  alt="Marketing Leader"
                  className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white text-lg font-semibold">Connect on LinkedIn</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Ketan Goyal</h3>
              <p className="text-gray-600 mb-3">Marketing Head</p>
              <p className="text-gray-500 max-w-sm mx-auto">
                Driving our brand strategy and digital presence with innovative marketing approaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}