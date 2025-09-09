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
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
            What You Get with <span className="text-blue-600 font-medium">Calispec.ai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Not just software — a shield against audit failures where traceability meets accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Full Traceability */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="w-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white rounded-3xl">
              <CardContent className="p-10 h-full flex flex-col">
                <div className="flex items-start mb-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 mr-6 bg-blue-50 p-4 rounded-2xl"
                  >
                    <Shield className="h-12 w-12 text-blue-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 leading-tight mb-4">
                      Full Traceability & Compliance
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Calispec.ai delivers full traceability across your gauge and instrument ecosystem. 
                      From procurement to retirement — every action is logged, monitored, and reportable.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Automated calibration scheduling</span>
                  </div>
                  <div className="flex items-center p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Compliance-ready certificates</span>
                  </div>
                  <div className="flex items-center p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">QR-code traceability</span>
                  </div>
                  <div className="flex items-center p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">IATF 16949, ISO 9001, ISO 17025 ready</span>
                  </div>
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
            <Card className="w-full border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white rounded-3xl">
              <CardContent className="p-10 h-full flex flex-col">
                <div className="flex items-start mb-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 mr-6 bg-orange-50 p-4 rounded-2xl"
                  >
                    <TrendingUp className="h-12 w-12 text-orange-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-medium text-gray-900 leading-tight mb-4">
                      MSA & Predictive Intelligence
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      Built-in MSA suite aligned with AIAG MSA 4.0 standards. AI models don't just record what happened — they predict what might happen.
                    </p>
                  </div>
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="flex items-center p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Bias, Linearity, GRR, Stability studies</span>
                  </div>
                  <div className="flex items-center p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Statistical calculations & reports</span>
                  </div>
                  <div className="flex items-center p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">AI-driven predictions</span>
                  </div>
                  <div className="flex items-center p-3 rounded-xl bg-gray-50">
                    <CheckCircle className="h-5 w-5 text-orange-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Equipment reliability insights</span>
                  </div>
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
          className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-green-50 p-4 rounded-2xl mr-6 flex-shrink-0"
                >
                  <Lock className="h-12 w-12 text-green-600" />
                </motion.div>
                <h3 className="text-3xl font-light text-gray-900">
                  Security & Scalability
                </h3>
              </div>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed font-light">
                Enterprise-grade security, yet incredibly simple to use. Whether you're running a single plant 
                or multiple global facilities, Calispec scales effortlessly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 rounded-xl bg-gray-50"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">AES-256 encryption</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 rounded-xl bg-gray-50"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">2FA authentication</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 rounded-xl bg-gray-50"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Role-based access</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 rounded-xl bg-gray-50"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">ERP integrations</span>
                </motion.div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-3xl p-8 max-w-sm w-full"
              >
                <div className="flex items-center justify-between mb-8">
                  <h4 className="font-semibold text-gray-900">Global Deployment</h4>
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-4 px-4 rounded-xl bg-white"
                  >
                    <span className="text-sm text-gray-600 font-medium">Single Plant</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-0">Ready</Badge>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-4 px-4 rounded-xl bg-white"
                  >
                    <span className="text-sm text-gray-600 font-medium">Multiple Facilities</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-0">Scalable</Badge>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center py-4 px-4 rounded-xl bg-white"
                  >
                    <span className="text-sm text-gray-600 font-medium">Global Operations</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-0">Enterprise</Badge>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}