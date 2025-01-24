import React from 'react';

export default function Disclaimer() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Disclaimer</h1>
        <div className="prose prose-pink max-w-none">
          <p>Last updated: February 2024</p>
          
          <h2 className="text-xl font-semibold mt-6 mb-4">Website Disclaimer</h2>
          <p>The information provided by Livca Personal Care ("Company", "we", "our", "us") on zeero.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">Product Information Disclaimer</h2>
          <p>While we strive to provide accurate product information, it is provided by manufacturers, suppliers, and others, and has not been verified by us. We do not assume any liability for inaccuracies. For exact product information, please refer to the product packaging.</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">Medical Disclaimer</h2>
          <p>The information on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding your personal health or medical conditions.</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">External Links Disclaimer</h2>
          <p>The Site may contain links to external websites that are not provided or maintained by or in any way affiliated with our Company. Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
          <p>If you have any questions about this Disclaimer, please contact us:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>By email: [Your Email]</li>
            <li>By phone: [Your Phone]</li>
          </ul>
        </div>
      </div>
    </div>
  );
}