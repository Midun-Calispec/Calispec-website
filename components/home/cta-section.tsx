"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, Globe2 } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Digital Transformation <span className="text-blue-400">Begins Here</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Book a personalized demo and see how Calispec.ai can transform your calibration and gauge management processes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <a href="/contact-us">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-gray-400 text-black">
              <a href="/contact-us">
                Talk to an Expert
              </a>
            </Button>
          </div>

          {/* Contact details moved to footer */}
        </motion.div>
      </div>
    </section>
  );
}