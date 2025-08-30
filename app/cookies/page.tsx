"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="https://res.cloudinary.com/dyj3rywju/image/upload/v1753528568/calispec_transparent_1_sez0aw.png" 
              alt="Calispec.ai" 
              className="h-12 w-28 object-contain"
            />
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 1, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you 
                visit our website. They are widely used to make websites work more efficiently and to 
                provide information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Calispec.ai uses cookies to enhance your experience on our platform. We use cookies for 
                the following purposes:
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation, access to secure areas, and maintaining your login session.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Performance Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies collect information about how visitors use our website, such as which pages 
                are visited most often. This data helps us improve our website performance and user experience.
              </p>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Functionality Cookies</h3>
              <p className="text-gray-700 mb-4">
                These cookies allow our website to remember choices you make and provide enhanced, 
                personalized features such as remembering your preferences and settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Cookie Type
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Purpose
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Session Cookies</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Maintain user login and session state</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Session only</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Authentication Cookies</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Remember login credentials securely</td>
                      <td className="px-6 py-4 text-sm text-gray-700">30 days</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Preference Cookies</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Store user interface preferences</td>
                      <td className="px-6 py-4 text-sm text-gray-700">1 year</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-900">Analytics Cookies</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Understand usage patterns and performance</td>
                      <td className="px-6 py-4 text-sm text-gray-700">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use third-party services that place cookies on your device. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Security Services:</strong> For fraud detection and security monitoring</li>
                <li><strong>Support Tools:</strong> For customer support and chat functionality</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Managing Cookies</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Block cookies entirely</li>
                <li>Accept or reject cookies on a case-by-case basis</li>
                <li>Delete existing cookies</li>
                <li>Set your browser to notify you when cookies are being set</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Impact of Disabling Cookies</h3>
              <p className="text-gray-700 leading-relaxed">
                Please note that disabling cookies may affect the functionality of our website. Some features 
                may not work properly, and you may need to re-enter information more frequently.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, 
                legislation, or our business practices. We will notify you of any material changes by 
                posting the updated policy on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Calispec Private Limited</strong><br />
                  136, 1st Cross, 5th Block<br />
                  Koramangala, Bangalore - 560034<br />
                  Email: <a href="mailto:support@calispec.ai" className="text-blue-600 hover:text-blue-700">support@calispec.ai</a>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
