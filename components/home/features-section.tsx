"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  TrendingUp, 
  CheckCircle,
  Lock,
  Globe
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 -right-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-orange-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            What You Get with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Calispec.ai
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Not just software — a shield against audit failures where traceability meets accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Full Traceability */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="w-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-blue-50/50 rounded-3xl overflow-hidden">
              <CardContent className="p-10 h-full flex flex-col">
                <div className="flex items-start mb-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 mr-6 bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg"
                  >
                    <Shield className="h-12 w-12 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                      Full Traceability & Compliance
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-lg font-light">
                  Calispec.ai delivers full traceability across your gauge and instrument ecosystem. 
                  From procurement to retirement — every action is logged, monitored, and reportable.
                </p>
                <div className="space-y-4">
                  {[
                    "Automated calibration scheduling",
                    "Compliance-ready certificates", 
                    "QR-code traceability",
                    "IATF 16949, ISO 9001, ISO 17025 ready"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-150 transition-all duration-300 border border-blue-200/50"
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* MSA & Predictive Intelligence */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="w-full border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-orange-50/50 rounded-3xl overflow-hidden">
              <CardContent className="p-10 h-full flex flex-col">
                <div className="flex items-start mb-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 mr-6 bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg"
                  >
                    <TrendingUp className="h-12 w-12 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 leading-tight mb-2">
                      MSA & Predictive Intelligence
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-8 leading-relaxed flex-grow text-lg font-light">
                  Built-in MSA suite aligned with AIAG MSA 4.0 standards. AI models don't just record what happened — they predict what might happen.
                </p>
                <div className="space-y-4">
                  {[
                    "Bias, Linearity, GRR, Stability studies",
                    "Statistical calculations & reports",
                    "AI-driven predictions", 
                    "Equipment reliability insights"
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-150 transition-all duration-300 border border-orange-200/50"
                    >
                      <CheckCircle className="h-5 w-5 text-orange-600 mr-4 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Security & Scalability */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-orange-50/30 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-200/50"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl mr-6 flex-shrink-0 shadow-lg"
                >
                  <Lock className="h-12 w-12 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Security & Scalability
                </h3>
              </div>
              <p className="text-gray-600 mb-10 text-xl leading-relaxed font-light">
                Enterprise-grade security, yet incredibly simple to use. Whether you're running a single plant 
                or multiple global facilities, Calispec scales effortlessly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "AES-256 encryption",
                  "2FA authentication",
                  "Role-based access", 
                  "ERP integrations"
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-150 transition-all duration-300 shadow-md hover:shadow-lg border border-purple-200/50"
                  >
                    <CheckCircle className="h-5 w-5 text-purple-600 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-sm w-full border border-white/20"
              >
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-semibold text-gray-900 text-xl">Global Deployment</h4>
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Single Plant", status: "Ready", color: "green" },
                    { label: "Multiple Facilities", status: "Scalable", color: "blue" },
                    { label: "Global Operations", status: "Enterprise", color: "purple" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex justify-between items-center py-4 px-4 rounded-xl bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 hover:from-${item.color}-100 hover:to-${item.color}-150 transition-all duration-300 border border-${item.color}-200/50`}
                    >
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <Badge className={`bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 text-white border-0 shadow-sm`}>
                        {item.status}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}