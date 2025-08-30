"use client";

import { Gauge } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-3 inline-block mb-4">
              <img
                src="https://res.cloudinary.com/dyj3rywju/image/upload/v1753528568/calispec_transparent_1_sez0aw.png"
                alt="Calispec.ai"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Reimagining gauge management for modern manufacturing with cutting-edge technology and precision.
            </p>
          </div>

          {/* Empty column for spacing */}
          <div className="hidden lg:block"></div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Legal</h3>
            <nav className="flex flex-col space-y-3">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Use</a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300 font-medium">Calispec Private Limited</p>
              <p className="text-gray-400">136, 1st Cross, 5th Block</p>
              <p className="text-gray-400">Koramangala, Bangalore - 560034</p>
              
              <div className="pt-2 space-y-2">
                <p className="text-gray-400">
                  <a href="mailto:support@calispec.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                    support@calispec.ai
                  </a>
                </p>
                <p className="text-gray-400">
                  <a href="tel:+917358779184" className="hover:text-gray-300 transition-colors">
                    +91-7358779184
                  </a>
                </p>
                <p className="text-gray-400">
                  <a href="https://www.calispec.ai" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">
                    www.calispec.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-xs text-gray-500 text-center">
            © 2024 Calispec.ai. All rights reserved. Reimagining gauge management for modern manufacturing.
          </p>
        </div>
      </div>
    </footer>
  );
}