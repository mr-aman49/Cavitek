import React from 'react';

const leaders = [
  {
    name: "Priya Sharma",
    role: "Chief Executive Officer",
    bio: "With over 15 years of experience in the personal care industry, Priya has led Livca Personal Care to become a leading provider of feminine hygiene products. Her vision for sustainable and accessible feminine care drives our innovation.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
  },
  {
    name: "Sarah Chen",
    role: "Chief Technology Officer",
    bio: "Sarah brings 12 years of expertise in sustainable materials and product development. Her commitment to eco-friendly innovation has revolutionized our product line and manufacturing processes.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  }
];

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

        {/* Leadership Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader) => (
              <div key={leader.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-pink-600 font-medium mb-4">{leader.role}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </div>
            ))}
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