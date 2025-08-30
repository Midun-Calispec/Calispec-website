"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfUse() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
          <p className="text-gray-600 mb-8">Effective Date: January 1, 2024</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using Calispec.ai's gauge management system ("Service"), you accept and 
                agree to be bound by the terms and provision of this agreement. If you do not agree to 
                abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Calispec.ai provides a comprehensive gauge management system designed for modern manufacturing 
                environments. Our Service includes calibration tracking, audit management, predictive analytics, 
                and metrology process optimization.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Account Registration</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You must provide accurate and complete information during registration</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">Account Restrictions</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>One person or entity may not maintain more than one account</li>
                <li>Accounts are non-transferable</li>
                <li>You must be 18 years or older to create an account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Use the Service for any unlawful purpose or in violation of any regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the Service</li>
                <li>Interfere with or disrupt the Service or servers connected to the Service</li>
                <li>Upload or transmit viruses, malware, or other malicious code</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Use the Service to compete with our business</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Service and its original content, features, and functionality are and will remain the 
                exclusive property of Calispec Private Limited and its licensors. The Service is protected 
                by copyright, trademark, and other laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data and Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of the Service, to understand our practices regarding your data.
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>You retain ownership of data you input into the Service</li>
                <li>We may use aggregated, anonymized data for analytics and improvements</li>
                <li>You grant us necessary rights to provide the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Availability</h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to maintain high availability but do not guarantee uninterrupted access to the Service. 
                We may temporarily suspend access for maintenance, updates, or other operational reasons.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall Calispec Private Limited be liable for any indirect, incidental, special, 
                consequential, or punitive damages arising out of or relating to your use of the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and access to the Service at our sole discretion, 
                without prior notice, for conduct that we believe violates these Terms or is harmful to 
                other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes via email or through the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us:
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
