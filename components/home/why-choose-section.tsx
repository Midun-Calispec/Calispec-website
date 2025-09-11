"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, Zap } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: AlertTriangle,
      title: "Alerts, Audit Trails & Digital Signatures",
      description: "Complete visibility and accountability with automated alerts, comprehensive audit trails, and secure digital signatures for compliance.",
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100"
    },
    {
      icon: Users,
      title: "Fast Onboarding & Modern UI",
      description: "Quick adoption with an intuitive, modern interface that requires minimal training and ensures frictionless team adoption.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Zap,
      title: "Gauge-Based Pricing & Lower TCO",
      description: "No per-user fees with gauge-based pricing model, resulting in lower total cost of ownership compared to traditional GMS solutions.",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/30"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Why Manufacturers{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed font-light">
            Manufacturers choose Calispec.ai because it goes beyond software — it delivers peace of mind. The platform reduces risks of missed calibrations, failed audits, and costly production stoppages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="h-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm rounded-3xl group overflow-hidden">
                <CardContent className="p-10 text-center h-full flex flex-col">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`bg-gradient-to-br ${feature.gradient} rounded-3xl p-6 shadow-xl mb-8 mx-auto inline-block group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110`}
                  >
                    <feature.icon className="h-16 w-16 text-white flex-shrink-0" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center flex-grow text-lg font-light">{feature.description}</p>
                  
                  {/* Decorative gradient bar */}
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6 mx-auto`}
                  ></motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}