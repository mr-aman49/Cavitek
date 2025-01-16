import React from 'react';
import type { Product } from '../types';
import ultraComfortPadImg from '../assets/pexels-karolina-grabowska-4238992.jpg';
import nightProtectionPadImg from '../assets/maddi-bazzocco-2LJkFMdaDUY-unsplash.jpg';
import activeFitPadImg from '../assets/yellow-cactus-Z05kqyq_4NU-unsplash.jpg';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ultra Comfort Pads',
    description: 'Our premium pads with maximum absorption and comfort for day use.',
    price: 8.99,
    image_url: ultraComfortPadImg,
    category: 'day'
  },
  {
    id: '2',
    name: 'Night Protection Pads',
    description: 'Extra-long pads with wings for complete overnight protection.',
    price: 9.99,
    image_url: nightProtectionPadImg,
    category: 'night'
  },
  {
    id: '3',
    name: 'Active Fit Pads',
    description: 'Designed for active lifestyles with secure fit and moisture control.',
    price: 7.99,
    image_url: activeFitPadImg,
    category: 'active'
  }
];

export default function Products() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SAMPLE_PRODUCTS.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-pink-500">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}