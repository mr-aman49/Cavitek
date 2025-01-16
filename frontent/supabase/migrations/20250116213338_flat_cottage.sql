/*
  # Initial Schema Setup for Sanitary Pads Website

  1. New Tables
    - `products`: Stores product information
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `category` (text)
      - `created_at` (timestamp)
    
    - `customer_inquiries`: Stores contact form submissions and partnership requests
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `message` (text)
      - `company` (text, nullable)
      - `type` (text)
      - `created_at` (timestamp)
    
    - `visitor_data`: Tracks page visits
      - `id` (uuid, primary key)
      - `page_visited` (text)
      - `session_id` (uuid)
      - `timestamp` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read products
    - Add policies for authenticated users to insert customer inquiries
    - Add policies for authenticated users to insert visitor data
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price numeric NOT NULL,
  image_url text NOT NULL,
  category text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create customer inquiries table
CREATE TABLE IF NOT EXISTS customer_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  company text,
  type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create visitor data table
CREATE TABLE IF NOT EXISTS visitor_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_visited text NOT NULL,
  session_id uuid NOT NULL,
  timestamp timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitor_data ENABLE ROW LEVEL SECURITY;

-- Create policies for products
CREATE POLICY "Anyone can read products"
  ON products
  FOR SELECT
  TO public
  USING (true );

-- Create policies for customer inquiries
CREATE POLICY "Anyone can insert customer inquiries"
  ON customer_inquiries
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policies for visitor data
CREATE POLICY "Anyone can insert visitor data"
  ON visitor_data
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Insert sample products
INSERT INTO products (name, description, price, image_url, category) VALUES
  (
    'Ultra Comfort Pads',
    'Our premium pads with maximum absorption and comfort for day use.',
    8.99,
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    'day'
  ),
  (
    'Night Protection Pads',
    'Extra-long pads with wings for complete overnight protection.',
    9.99,
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    'night'
  ),
  (
    'Active Fit Pads',
    'Designed for active lifestyles with secure fit and moisture control.',
    7.99,
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80',
    'active'
  );