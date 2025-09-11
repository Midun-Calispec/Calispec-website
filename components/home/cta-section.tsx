"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Your Digital Transformation <span className="font-medium">Begins Here</span>
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Book a personalized demo and see how Calispec.ai can transform your calibration and gauge management processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-blue-600 text-lg px-10 py-4 rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="/contact-us">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 rounded-full border-white/30 text-white hover:bg-white/10 bg-transparent transition-all duration-300"
            >
              <a href="/contact-us">
                Talk to an Expert
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}