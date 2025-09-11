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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={fadeInVariants} className="mb-8">
            <Badge className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-600 to-orange-500 text-white border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="h-4 w-4 mr-2" />
              Next-Generation GMS Platform
            </Badge>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight"
          >
            <motion.span variants={wordVariants} className="inline-block">
              Reimagining
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block">
              Gauge
            </motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Management
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block">
              For
            </motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block">
              Modern
            </motion.span>{" "}
            <motion.span variants={wordVariants} className="inline-block">
              Manufacturing
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeInVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Calispec.ai Is a Next-Generation SaaS Platform Purpose-Built for Managing the Entire Lifecycle of
            Gauges, Calibration Events, Inspection Processes, and Metrology Studies in a Single, Intelligent Interface.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.div variants={fadeInVariants}>
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0">
                <a href="/contact-us">
                  Schedule Demo
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <motion.div variants={fadeInVariants}>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-full border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl group hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      <FileCheck className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Full Traceability</h3>
                    <p className="text-gray-600 leading-relaxed">Complete audit trail from procurement to retirement</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-orange-50/50 rounded-2xl group hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      <BarChart3 className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">AI Predictions</h3>
                    <p className="text-gray-600 leading-relaxed">Prevent failures with predictive analytics</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50/50 rounded-2xl group hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.0 }}
                      className="bg-gradient-to-br from-blue-500 to-orange-500 p-4 rounded-2xl w-fit mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      <Clock className="h-12 w-12 text-white" />
                    </motion.div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">Real-time Alerts</h3>
                    <p className="text-gray-600 leading-relaxed">Never miss a calibration deadline again</p>
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