import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-pink max-w-none">
          <p>Last updated: February 2024</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">Introduction</h2>
          <p>Livca Personal Care ("we" or "us" or "our") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website zeero.com. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">Information We Collect</h2>
          <p>We collect information that you provide directly to us when you:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Register for an account</li>
            <li>Make a purchase</li>
            <li>Sign up for our newsletter</li>
            <li>Contact us</li>
            <li>Use our period tracker feature</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>Process your orders</li>
            <li>Send you marketing communications</li>
            <li>Improve our website and services</li>
            <li>Respond to your inquiries</li>
            <li>Provide period tracking functionality</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no security system is impenetrable and we cannot guarantee the security of our systems 100%.</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>By email: [Your Email]</li>
            <li>By phone: [Your Phone]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}