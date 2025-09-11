"use client";

import { Mail, Phone, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img
                src="/calispec_logo.png"
                alt="Calispec.ai"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-8 leading-relaxed">
              Reimagining gauge management for modern manufacturing with cutting-edge technology and precision.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-8 text-lg">Pages</h3>
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Home</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">About</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Features</a>
              <a href="#why-choose-us" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Why Choose Us</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Pricing</a>
            </nav>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-8 text-lg">Legal</h3>
            <nav className="flex flex-col space-y-4">
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Privacy Policy</a>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Terms of Use</a>
              <a href="/cookies" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Cookie Policy</a>
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-8 text-lg">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <p className="text-gray-700 font-medium">Calispec Private Limited</p>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">136, 1st Cross, 5th Block</p>
                  <p className="text-gray-600">Koramangala, Bangalore - 560034</p>
                </div>
              </div>
              
              <div className="pt-2 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-gray-400" />
                  <a href="mailto:support@calispec.ai" className="text-blue-600 hover:text-blue-700 transition-colors">
                    support@calispec.ai
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-gray-400" />
                  <a href="tel:+917358779184" className="text-gray-600 hover:text-blue-600 transition-colors">
                    +91-7358779184
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe size={16} className="text-gray-400" />
                  <a href="https://www.calispec.ai" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                    www.calispec.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-10">
          <p className="text-xs text-gray-500 text-center">
            © 2024 Calispec.ai. All rights reserved. Reimagining gauge management for modern manufacturing.
          </p>
        </div>
      </div>
    </footer>
  );
}