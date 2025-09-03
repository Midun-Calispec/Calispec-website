"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gauge, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plans and <span className="text-blue-600">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent. Scalable. Indian Market-Ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 text-center shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-blue-200/50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg inline-block mb-8"
          >
            <Gauge className="h-20 w-20 text-blue-600" />
          </motion.div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Gauge-Based Pricing</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our pricing is based on the number of gauges managed — not per user — ensuring unlimited adoption
            within your organization. Whether you manage less than 5,000 gauges or more than 50,000, our subscription tiers offer
            flexibility and ease of operation.
          </p>
          
          {/* Pricing highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Small Scale</h4>
              <p className="text-gray-600">Up to 5,000 gauges</p>
              <div className="mt-3 text-blue-600 font-medium">Perfect for single facilities</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-blue-600 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg">Popular</div>
              <h4 className="font-semibold text-gray-900 mb-2">Medium Scale</h4>
              <p className="text-gray-600">Up to 25,000 gauges</p>
              <div className="mt-3 text-blue-600 font-medium">Multi-facility operations</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Enterprise</h4>
              <p className="text-gray-600">50,000+ gauges</p>
              <div className="mt-3 text-blue-600 font-medium">Global manufacturing</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}