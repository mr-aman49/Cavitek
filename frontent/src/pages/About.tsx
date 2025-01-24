import React from 'react';
// Import the About image
import aboutImage from '../assets/About.jpg';

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

        <div className="text-center mb-16">
        
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
      </div>
    </div>
  );
}
