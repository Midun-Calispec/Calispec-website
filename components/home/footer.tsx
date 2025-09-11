"use client";

import { Gauge, Mail, Phone, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-400 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-600/10 to-orange-800/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl p-4 inline-block mb-6 shadow-lg">
              <img
                src="https://res.cloudinary.com/dyj3rywju/image/upload/v1753528568/calispec_transparent_1_sez0aw.png"
                alt="Calispec.ai"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm max-w-xs mb-8 leading-relaxed">
              Reimagining gauge management for modern manufacturing with cutting-edge technology and precision.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-orange-600/20 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-white font-semibold mb-8 text-lg">Pages</h3>
            <nav className="flex flex-col space-y-4">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#features", label: "Features" },
                { href: "#why-choose-us", label: "Why Choose Us" },
                { href: "#pricing", label: "Pricing" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-semibold mb-8 text-lg">Legal</h3>
            <nav className="flex flex-col space-y-4">
              {[
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Use" },
                { href: "/cookies", label: "Cookie Policy" }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-gray-400 hover:text-white transition-all duration-300 text-sm relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white font-semibold mb-8 text-lg">Contact Us</h3>
            <div className="space-y-6 text-sm">
              <p className="text-gray-300 font-medium">Calispec Private Limited</p>
              
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">136, 1st Cross, 5th Block</p>
                  <p className="text-gray-400">Koramangala, Bangalore - 560034</p>
                </div>
              </div>
              
              <div className="pt-2 space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                    <Mail size={16} className="text-white" />
                  </div>
                  <a href="mailto:support@calispec.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                    support@calispec.ai
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-2 rounded-lg">
                    <Phone size={16} className="text-white" />
                  </div>
                  <a href="tel:+917358779184" className="hover:text-gray-300 transition-colors">
                    +91-7358779184
                  </a>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <div className="bg-gradient-to-r from-blue-600 to-orange-600 p-2 rounded-lg">
                    <Globe size={16} className="text-white" />
                  </div>
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
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 text-center md:text-left mb-4 md:mb-0">
              © 2024 Calispec.ai. All rights reserved. Reimagining gauge management for modern manufacturing.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Proficient and Nimble</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}