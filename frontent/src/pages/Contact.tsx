import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({ email: "" });

  // ✅ Explicitly typed function
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return false;
    }
    setErrors({ email: "" });
    return true;
  };

  // ✅ Explicitly typed form submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) return;

    const subject = encodeURIComponent(`New Contact Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:amanraj.87892@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

          <p className="text-sm text-gray-600 mb-4">
            * Please send all details via email by clicking the button below.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
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
