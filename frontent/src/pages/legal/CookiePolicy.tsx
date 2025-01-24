import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose prose-pink max-w-none">
          <p>Last updated: February 2024</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">What Are Cookies</h2>
          <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: To understand how visitors interact with our website</li>
            <li>Preference cookies: To remember your settings and preferences</li>
            <li>Marketing cookies: To deliver more relevant advertisements</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">Types of Cookies We Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Strictly Necessary Cookies</h3>
              <p>These cookies are essential for you to browse the website and use its features.</p>
            </div>
            <div>
              <h3 className="font-semibold">Performance Cookies</h3>
              <p>These cookies collect information about how you use our website.</p>
            </div>
            <div>
              <h3 className="font-semibold">Functionality Cookies</h3>
              <p>These cookies allow the website to remember choices you make.</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">Managing Cookies</h2>
          <p>Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may affect your experience of our website.</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p>If you have questions about our Cookie Policy, please contact us:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>By email: [Your Email]</li>
            <li>By phone: [Your Phone]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}