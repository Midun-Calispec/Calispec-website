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
      color: "text-red-600"
    },
    {
      icon: Users,
      title: "Fast Onboarding & Modern UI",
      description: "Quick adoption with an intuitive, modern interface that requires minimal training and ensures frictionless team adoption.",
      color: "text-blue-600"
    },
    {
      icon: Zap,
      title: "Gauge-Based Pricing & Lower TCO",
      description: "No per-user fees with gauge-based pricing model, resulting in lower total cost of ownership compared to traditional GMS solutions.",
      color: "text-yellow-600"
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Manufacturers <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Manufacturers choose Calispec.ai because it goes beyond software — it delivers peace of mind. The platform reduces risks of missed calibrations, failed audits, and costly production stoppages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex"
            >
              <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-4 shadow-lg mb-6 mx-auto inline-block group-hover:shadow-xl transition-shadow duration-300"
                  >
                    <feature.icon className={`h-16 w-16 ${feature.color} flex-shrink-0`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}