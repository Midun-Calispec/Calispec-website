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
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You Get with <span className="text-blue-600">Calispec.ai</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Not just software — a shield against audit failures where traceability meets accountability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Full Traceability */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex"
          >
            <Card className="w-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <Shield className="h-12 w-12 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      Full Traceability & Compliance
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Calispec.ai delivers full traceability across your gauge and instrument ecosystem. 
                  From procurement to retirement — every action is logged, monitored, and reportable.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Automated calibration scheduling</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Compliance-ready certificates</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">QR-code traceability</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
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
            <Card className="w-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 mr-4">
                    <TrendingUp className="h-12 w-12 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      MSA & Predictive Intelligence
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Built-in MSA suite aligned with AIAG MSA 4.0 standards. AI models don't just record what happened — they predict what might happen.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Bias, Linearity, GRR, Stability studies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Statistical calculations & reports</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">AI-driven predictions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
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
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Lock className="h-12 w-12 text-purple-600 mr-4 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Security & Scalability
                </h3>
              </div>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Enterprise-grade security, yet incredibly simple to use. Whether you're running a single plant 
                or multiple global facilities, Calispec scales effortlessly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">AES-256 encryption</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">2FA authentication</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Role-based access</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">ERP integrations</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm w-full">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-gray-900">Global Deployment</h4>
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600 font-medium">Single Plant</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Ready</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600 font-medium">Multiple Facilities</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Scalable</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-600 font-medium">Global Operations</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">Enterprise</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}