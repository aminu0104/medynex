import React from "react";
import { motion } from "framer-motion";
import { Brain, FileText, Activity, AlertTriangle, BarChart3, Mic } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Clinical Decision Support",
    desc: "Provides intelligent recommendations based on patient history, lab results, and real-time data analysis."
  },
  {
    icon: FileText,
    title: "Automated Documentation",
    desc: "Automatically generates structured medical notes and summaries to reduce administrative workload."
  },
  {
    icon: Activity,
    title: "Predictive Risk Analysis",
    desc: "Identifies high-risk patients and operational risks using advanced predictive modeling."
  },
  {
    icon: AlertTriangle,
    title: "Smart Alerts & Notifications",
    desc: "Detects anomalies and sends real-time alerts for critical conditions or unusual patterns."
  },
  {
    icon: BarChart3,
    title: "Intelligent Data Insights",
    desc: "Transforms raw hospital data into actionable analytics for better strategic decisions."
  },
  {
    icon: Mic,
    title: "Voice-to-Text Medical Notes",
    desc: "Enables doctors to dictate notes that are automatically structured and saved securely."
  }
];

const CoreCapabilities = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
            Core Capabilities
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Powerful AI Features Built for Healthcare
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Medynex AI Assistant enhances hospital workflows with intelligent
            automation, predictive analytics, and real-time decision support.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default CoreCapabilities;