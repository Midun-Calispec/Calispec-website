"use client";

import { Gauge, Mail, Phone, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-3 inline-block mb-4">
              <Image
                src="/calispec_logo.png"
                alt="Calispec.ai"
                className="h-12 w-auto object-contain"
                width={100}
                height={100}
              />
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-6">
              Reimagining gauge management for modern manufacturing with cutting-edge technology and precision.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Pages</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a>
              <a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors text-sm">Why Choose Us</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a>
            </nav>
          </div>

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
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">136, 1st Cross, 5th Block</p>
                  <p className="text-gray-400">Koramangala, Bangalore - 560034</p>
                </div>
              </div>
              
              <div className="pt-2 space-y-3">
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-gray-400" />
                  <a href="mailto:support@calispec.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                    support@calispec.ai
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-gray-400" />
                  <div className="flex space-x-4">
                    <a href="tel:+917358779184" className="hover:text-gray-300 transition-colors">
                      +91 73587 79184
                    </a>
                    <a href="tel:+918925826252" className="hover:text-gray-300 transition-colors">
                      +91 89258 26252
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe size={16} className="text-gray-400" />
                  <a href="https://www.calispec.ai" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-colors">
                    www.calispec.ai
                  </a>
                </div>
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