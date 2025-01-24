const express = require('express');
const Product = require('../models/Contact');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Seed initial data (optional)
router.post('/seed', async (req, res) => {
  const sampleProducts = [
    {
      id: '1',
      name: 'Ultra Comfort Pads',
      description: 'Our premium pads with maximum absorption and comfort for day use.',
      price: 8.99,
      image_url: 'url-to-image-1', // Update with actual URLs
      category: 'day',
    },
    {
      id: '2',
      name: 'Night Protection Pads',
      description: 'Extra-long pads with wings for complete overnight protection.',
      price: 9.99,
      image_url: 'url-to-image-2', // Update with actual URLs
      category: 'night',
    },
    {
      id: '3',
      name: 'Active Fit Pads',
      description: 'Designed for active lifestyles with secure fit and moisture control.',
      price: 7.99,
      image_url: 'url-to-image-3', // Update with actual URLs
      category: 'active',
    },
  ];

  try {
    await Product.insertMany(sampleProducts);
    res.json({ message: 'Sample products seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to seed products' });
  }
});

module.exports = router;
