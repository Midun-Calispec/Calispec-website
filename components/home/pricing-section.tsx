"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gauge, ArrowRight } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
            Plans and <span className="text-blue-600 font-medium">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Transparent. Scalable. Indian Market-Ready.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-3xl p-8 inline-block mb-10"
          >
            <Gauge className="h-20 w-20 text-blue-600" />
          </motion.div>
          <h3 className="text-3xl font-light text-gray-900 mb-8">Gauge-Based Pricing</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
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
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-3">Small Scale</h4>
              <p className="text-gray-600 mb-4">Up to 5,000 gauges</p>
              <div className="text-blue-600 font-medium">Perfect for single facilities</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs px-3 py-1 rounded-bl-lg">Popular</div>
              <h4 className="font-semibold text-gray-900 mb-3">Medium Scale</h4>
              <p className="text-gray-600 mb-4">Up to 25,000 gauges</p>
              <div className="text-blue-600 font-medium">Multi-facility operations</div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="font-semibold text-gray-900 mb-3">Enterprise</h4>
              <p className="text-gray-600 mb-4">50,000+ gauges</p>
              <div className="text-blue-600 font-medium">Global manufacturing</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/contact-us">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}