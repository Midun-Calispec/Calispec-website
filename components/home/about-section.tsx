"use client";

import { motion } from "framer-motion";
import { CheckCircle, Factory, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Built by Metrology Experts.<br />
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Designed for Industry 4.0.
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Calispec.ai is the digital evolution of three decades of precision metrology experience. 
            Developed by industry experts with international expertise working closely with OEMs and Tier 1 suppliers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Why We're Different</h3>
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-100 group"
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Real-World Understanding</h4>
                  <p className="text-gray-600 leading-relaxed">Every feature reflects actual calibration pain points, audit pressures, and operational challenges.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 border border-blue-100 group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Industry 4.0 Ready</h4>
                  <p className="text-gray-600 leading-relaxed">Futuristic solutions that put metrology systems at the center of operational excellence.</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6 p-6 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 hover:from-orange-100 hover:to-amber-100 transition-all duration-300 border border-orange-100 group"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Proven Expertise</h4>
                  <p className="text-gray-600 leading-relaxed">Built by professionals who understand the manufacturing arena's quality requirements.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 rounded-3xl p-10 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-500/20 relative overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-orange-600/90 rounded-3xl"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Factory className="h-20 w-20 mb-8 opacity-90" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-6">Quality 4.0 Solution</h3>
                <p className="text-blue-100 mb-8 leading-relaxed text-lg font-light">
                  In this fast-changing world, where precision and technology are the hallmarks of our era, 
                  Calispec.ai has developed Gauge Management Solutions aligning with Industry Quality 4.0.
                </p>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center text-white bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30"
                >
                  <Target className="h-6 w-6 mr-3" />
                  <span className="font-medium text-lg">Precision • Technology • Excellence</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}