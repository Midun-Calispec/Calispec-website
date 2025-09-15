"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Factory,
  Target,
  Users,
  Award,
  Globe,
  Lightbulb,
  TrendingUp,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Technology Officer",
      experience: "15+ years in precision metrology",
      expertise: "ISO 17025, MSA, Statistical Analysis"
    },
    {
      name: "Michael Chen",
      role: "Head of Product Development",
      experience: "12+ years in manufacturing systems",
      expertise: "Industry 4.0, IoT Integration, Quality Systems"
    },
    {
      name: "Dr. Robert Martinez",
      role: "Senior Metrology Consultant",
      experience: "20+ years with OEMs and Tier 1 suppliers",
      expertise: "Calibration Standards, Audit Compliance, Training"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to digitize metrology processes"
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Released our core gauge management platform"
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Introduced predictive analytics and smart recommendations"
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Awarded Best Innovation in Manufacturing Technology"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Serving customers across 15+ countries worldwide"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Precision & Accuracy",
      description: "Every measurement matters. We ensure your calibration data is precise, traceable, and audit-ready.",
      color: "from-blue-100 to-indigo-100 hover:from-blue-200 hover:to-indigo-200 border-blue-200/50",
      iconBg: "bg-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Continuously pushing boundaries with AI-driven insights and Industry 4.0 integration.",
      color: "from-yellow-100 to-orange-100 hover:from-yellow-200 hover:to-orange-200 border-yellow-200/50",
      iconBg: "bg-yellow-600"
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our mission. We provide comprehensive support and training for optimal results.",
      color: "from-green-100 to-emerald-100 hover:from-green-200 hover:to-emerald-200 border-green-200/50",
      iconBg: "bg-green-600"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Always evolving based on industry feedback and emerging manufacturing standards.",
      color: "from-purple-100 to-violet-100 hover:from-purple-200 hover:to-violet-200 border-purple-200/50",
      iconBg: "bg-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInVariants}>
              <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 text-sm font-medium">
                About Calispec.ai
              </Badge>
            </motion.div>
            <motion.h1 
              variants={fadeInVariants}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Transforming Metrology with
              <span className="text-blue-600 block">Three Decades of Expertise</span>
            </motion.h1>
            <motion.p 
              variants={fadeInVariants}
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Born from real-world manufacturing challenges, Calispec.ai combines deep industry knowledge 
              with cutting-edge technology to revolutionize how organizations manage their metrology processes.
            </motion.p>
            <motion.div variants={fadeInVariants}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Learn Our Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Calispec.ai was founded by a team of metrology professionals who spent decades 
                  working with manufacturing giants, OEMs, and Tier 1 suppliers. We witnessed firsthand 
                  the challenges of managing thousands of gauges, ensuring calibration compliance, 
                  and maintaining audit readiness.
                </p>
                <p>
                  Traditional spreadsheet-based systems were failing to meet the demands of modern 
                  manufacturing. Quality managers were drowning in paperwork, calibration schedules 
                  were missed, and audit preparations consumed weeks of valuable time.
                </p>
                <p>
                  We knew there had to be a better way. Combining our deep understanding of metrology 
                  processes with modern cloud technology and AI capabilities, we created Calispec.ai – 
                  a platform that doesn't just digitize existing processes, but reimagines them entirely.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl">
                <Factory className="h-16 w-16 mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Industry Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>30+ years combined metrology experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Worked with Fortune 500 manufacturers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>ISO 17025 and IATF 16949 expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                    <span>Managed 10,000+ calibration events</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do, from product development to customer support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-6 rounded-xl bg-gradient-to-r ${value.color} transition-all duration-200 border h-full`}>
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className={`${value.iconBg} p-3 rounded-lg flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2 text-lg">{value.title}</h3>
                          <p className="text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to industry leader – here's how we've evolved to serve the manufacturing community.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <Badge className="bg-blue-600 text-white px-3 py-1">{milestone.year}</Badge>
                          <Clock className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-full md:w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with a passion for precision and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <CardContent className="p-0 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-600 mb-3">{member.experience}</p>
                    <p className="text-sm text-gray-500">{member.expertise}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Metrology?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join hundreds of manufacturers who trust Calispec.ai to manage their calibration processes 
              with precision, efficiency, and complete audit readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}