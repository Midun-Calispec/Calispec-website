"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  FileCheck,
  BarChart3,
  Clock
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const textVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15
    }
  }
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeInVariants} className="mb-8">
            <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-medium bg-gray-100 text-gray-700 border-0 rounded-full">
              <Zap className="h-4 w-4 mr-2 text-blue-600" />
              Next-Generation GMS Platform
            </Badge>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-8 leading-tight tracking-tight"
          >
            <motion.span variants={wordVariants} className="inline-block font-extralight">
              Reimagining
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block font-medium">
              Gauge
            </motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block font-medium text-blue-600">
              Management
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block font-extralight">
              For
            </motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block font-light">
              Modern
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block font-light">
              Manufacturing
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInVariants}
            className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Calispec.ai is a next-generation SaaS platform purpose-built for managing the entire lifecycle of
            gauges, calibration events, inspection processes, and metrology studies in a single, intelligent interface.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <motion.div variants={fadeInVariants}>
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href="/contact-us">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-10 py-4 rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="bg-blue-50 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300"
                    >
                      <FileCheck className="h-12 w-12 text-blue-600" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Full Traceability</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Complete audit trail from procurement to retirement</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="bg-orange-50 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-orange-100 transition-colors duration-300"
                    >
                      <BarChart3 className="h-12 w-12 text-orange-600" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">AI Predictions</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Prevent failures with predictive analytics</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-none hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 }}
                      className="bg-green-50 p-4 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300"
                    >
                      <Clock className="h-12 w-12 text-green-600" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Real-time Alerts</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Never miss a calibration deadline again</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}