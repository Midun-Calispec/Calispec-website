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
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Users,
      title: "Fast Onboarding & Modern UI",
      description: "Quick adoption with an intuitive, modern interface that requires minimal training and ensures frictionless team adoption.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Gauge-Based Pricing & Lower TCO",
      description: "No per-user fees with gauge-based pricing model, resulting in lower total cost of ownership compared to traditional GMS solutions.",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
            Why Manufacturers <span className="text-blue-600 font-medium">Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
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
              <Card className="h-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white rounded-3xl group">
                <CardContent className="p-10 text-center h-full flex flex-col">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className={`${feature.bgColor} rounded-2xl p-4 mb-8 mx-auto inline-block group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`h-16 w-16 ${feature.color} flex-shrink-0`} />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 leading-tight">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-center flex-grow font-light">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}