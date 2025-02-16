import React from 'react';
import type { Product } from '../types';

const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ultra Comfort Pads',
    description: 'Our premium pads with maximum absorption and comfort for day use.',
    price: 8.99,
    image_url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    category: 'day'
  },
  {
    id: '2',
    name: 'Night Protection Pads',
    description: 'Extra-long pads with wings for complete overnight protection.',
    price: 9.99,
    image_url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    category: 'night'
  },
  {
    id: '3',
    name: 'Active Fit Pads',
    description: 'Designed for active lifestyles with secure fit and moisture control.',
    price: 7.99,
    image_url: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    category: 'active'
  }
];

const AMAZON_STORE_URL = "https://www.amazon.in/l/27943762031?me=A1EDAW7S7V8TOH&tag=ShopReferral_c18a282c-c0cc-4f66-aa14-3f1132278c2b&ref=sf_seller_app_share_new_ls_srb";

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
                  <a
                    href={AMAZON_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}