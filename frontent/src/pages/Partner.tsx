import React, { useState } from "react";

export default function Partner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    type: "",
  });

  const [errors, setErrors] = useState({ email: "" });

  // ✅ Explicitly typed function for email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return false;
    }
    setErrors({ email: "" });
    return true;
  };

  // ✅ Submit button redirects to email client
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) return;

    const subject = encodeURIComponent(`Partnership Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPartnership Type: ${formData.type}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:amanraj.87892@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Become a Partner</h1>
          <p className="text-center text-gray-600 mb-8">
            Join us in our mission to provide quality feminine hygiene products to women everywhere.
          </p>

          <p className="text-sm text-gray-600 mb-4">
            * Please send all details via email by clicking the button below.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-pink-500 ${
                  errors.email ? "border-red-300 focus:border-red-500" : "border-gray-300 focus:border-pink-500"
                }`}
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                  validateEmail(e.target.value);
                }}
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Company Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Company Name</label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.company}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
              />
            </div>

            {/* Partnership Type Dropdown */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Partnership Type</label>
              <select
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.type}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setFormData((prev) => ({ ...prev, type: e.target.value }))
                }
              >
                <option value="">Select a partnership type</option>
                <option value="distributor">Distributor</option>
                <option value="retailer">Retailer</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
                value={formData.message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Tell us about your business and how you'd like to partner with us"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
