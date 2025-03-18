import React from 'react'; 
import { ShieldCheckIcon, ChartPieIcon, UserCircleIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy = () => {
  const SectionHeader = ({ icon: Icon, title }) => (
    <div className="flex items-center mb-4 space-x-3">
      <Icon className="w-8 h-8 text-indigo-600" />
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-lg px-8 py-12 sm:px-12">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-500 font-medium">Effective March 18, 2025</p>
        </div>

        <div className="space-y-14">
          <section>
            <SectionHeader icon={ShieldCheckIcon} title="Data Security" />
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                We implement comprehensive security measures to protect your information through:
              </p>
              <ul className="list-disc space-y-2 ml-6 marker:text-indigo-500">
                <li><strong>End-to-End Encryption:</strong> All data transmissions protected with SSL/TLS</li>
                <li><strong>Regular Audits:</strong> Quarterly security assessments by independent experts</li>
                <li><strong>Access Management:</strong> Strict role-based access controls with 2FA</li>
                <li><strong>Secure Storage:</strong> Enterprise-grade firewalls and intrusion detection systems</li>
              </ul>
            </div>
          </section>

          <section>
            <SectionHeader icon={ChartPieIcon} title="Information We Collect" />
            <div className="grid md:grid-cols-2 gap-8 text-gray-600">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Information You Provide</h3>
                <ul className="list-disc space-y-2 ml-6 marker:text-indigo-500">
                  <li>Name and contact information including email address</li>
                  <li>Demographic information (postal code, preferences, interests)</li>
                  <li>Account registration details</li>
                  <li>Payment information and transaction history</li>
                  <li>User-generated content and communications</li>
                  <li>Information from customer surveys and offers</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800">Automatically Collected</h3>
                <ul className="list-disc space-y-2 ml-6 marker:text-indigo-500">
                  <li>Device identifiers and browser characteristics</li>
                  <li>Usage patterns through cookies and web beacons</li>
                  <li>IP addresses and geolocation data</li>
                </ul>
              </div>
              <p className="md:col-span-2 pt-4 leading-relaxed">
                We require this information to understand your needs and provide you with better services. All data collection and processing is conducted in compliance with applicable data protection laws.
              </p>
            </div>
          </section>

          <section>
            <SectionHeader icon={UserCircleIcon} title="Your Rights" />
            <div className="grid md:grid-cols-2 gap-6 text-gray-600">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Data Management</h3>
                <p>Access, correct, or delete your personal information through our user portal</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Opt-Out Options</h3>
                <p>Control marketing communications and tracking preferences in your account settings</p>
              </div>
            </div>
          </section>

          <section>
            <SectionHeader icon={DocumentTextIcon} title="Data Usage & Sharing" />
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                We use collected information for the following purposes:
              </p>
              <ul className="list-disc space-y-2 ml-6 marker:text-indigo-500">
                <li>Internal record keeping and account management</li>
                <li>Improving our products and services</li>
                <li>Periodic promotional emails about new products and special offers</li>
                <li>Market research through email, phone, or mail</li>
                <li>Customizing the website according to user interests</li>
                <li>Sharing with third-party partners for marketing or promotional purposes (we never sell your information)</li>
                <li>Processing transactions and maintaining service functionality</li>
                <li>Preventing fraudulent activities and ensuring security</li>
              </ul>
              <p className="pt-4 leading-relaxed">
                Limited sharing occurs with trusted partners for payment processing, cloud storage, and customer support - all bound by strict confidentiality agreements.
              </p>
            </div>
          </section>

          {/* Other sections remain unchanged */}
          
          <section>
            <SectionHeader icon={EnvelopeIcon} title="Contact Information" />
            <div className="space-y-2 text-gray-600">
              <p>Business Basket Infratech Private Limited</p>
              <p>329, Mahala Bhawan, Rangpuri, Nr BJP Office</p>
              <p>New Delhi-110037</p>
              <div className="pt-4">
                <a href="mailto:info@businessbasket.in" className="text-indigo-600 hover:text-indigo-800 flex items-center space-x-2">
                  <EnvelopeIcon className="w-5 h-5" />
                  <span>info@businessbasket.in</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-14 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            Last updated: March 18, 2025 | Version 2.2
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;