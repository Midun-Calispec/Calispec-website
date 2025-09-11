"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gauge, ArrowRight, Check } from "lucide-react";

export default function PricingSection() {
  const pricingTiers = [
    {
      name: "Small Scale",
      description: "Up to 5,000 gauges",
      subtitle: "Perfect for single facilities",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      name: "Medium Scale", 
      description: "Up to 25,000 gauges",
      subtitle: "Multi-facility operations",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      popular: true
    },
    {
      name: "Enterprise",
      description: "50,000+ gauges", 
      subtitle: "Global manufacturing",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            Plans and{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light">
            Transparent. Scalable. Indian Market-Ready.
          </p>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 via-white to-orange-50 rounded-3xl p-12 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50 mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl inline-block mb-10 border border-gray-100"
          >
            <Gauge className="h-24 w-24 text-blue-600" />
          </motion.div>
          
          <h3 className="text-4xl font-bold text-gray-900 mb-8">Gauge-Based Pricing</h3>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Our pricing is based on the number of gauges managed — not per user — ensuring unlimited adoption
            within your organization. Whether you manage less than 5,000 gauges or more than 50,000, our subscription tiers offer
            flexibility and ease of operation.
          </p>
          
          {/* Pricing Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                  tier.popular ? 'border-orange-500 relative overflow-hidden transform hover:scale-105' : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm px-4 py-2 rounded-bl-2xl font-medium">
                    Popular
                  </div>
                )}
                
                <div className={`bg-gradient-to-br ${tier.gradient} rounded-xl p-4 w-16 h-16 mx-auto mb-6 shadow-lg`}>
                  <Check className="h-8 w-8 text-white" />
                </div>
                
                <h4 className="font-bold text-gray-900 mb-3 text-xl">{tier.name}</h4>
                <p className="text-gray-600 mb-2 font-medium">{tier.description}</p>
                <div className={`text-sm font-medium bg-gradient-to-r ${tier.bgGradient} px-4 py-2 rounded-lg`}>
                  {tier.subtitle}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 border-0">
              <a href="/contact-us">
                Get Custom Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}