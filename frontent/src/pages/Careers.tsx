import React, { useState } from 'react';
import { Briefcase, Upload, Check } from 'lucide-react';

const openPositions = [
  {
    id: 1,
    title: "Sales Representative",
    department: "Sales",
    location: "Mumbai, India",
    type: "Full-time"
  },
  {
    id: 2,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Delhi, India",
    type: "Full-time"
  },
  {
    id: 3,
    title: "Quality Control Specialist",
    department: "Operations",
    location: "Bangalore, India",
    type: "Full-time"
  }
];

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: ''
  });

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Job Application for ${formData.position}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPosition: ${formData.position}\n\nCover Letter:\n${formData.coverLetter}`
    );

    window.location.href = `mailto:amanraj.87892@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600">
            Be part of our mission to revolutionize feminine hygiene products
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {openPositions.map((position) => (
              <div key={position.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-pink-500 mr-2" />
                  <h3 className="text-xl font-semibold">{position.title}</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>Department: {position.department}</p>
                  <p>Location: {position.location}</p>
                  <p>Type: {position.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Apply Now</h2>
          <p className="text-sm text-gray-600 mb-4">
            * Please send all details via email by clicking the submit button below.
          </p>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                required
                maxLength={10}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <select
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.position}
                onChange={(e) => setFormData(prev => ({ ...prev, position: e.target.value }))}
              >
                <option value="">Select a position</option>
                {openPositions.map(position => (
                  <option key={position.id} value={position.title}>
                    {position.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Cover Letter <span className="text-gray-500 text-sm">(Optional)</span>
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.coverLetter}
                onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                placeholder="Tell us why you'd be a great fit for this position (optional)"
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
            >
              Send Application via Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
