import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileText, Server } from "lucide-react";

const SecurityCompliance = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Security & Compliance
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Built with Enterprise-Grade Security for Hospitals
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Medynex Record ensures patient data is protected with advanced
            encryption, strict access controls, and compliance-ready
            infrastructure designed for modern healthcare institutions.
          </p>
        </motion.div>

        {/* RIGHT FEATURES GRID */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ShieldCheck className="text-blue-600 mb-4" size={28} />
            <h4 className="font-semibold text-gray-900">
              End-to-End Encryption
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              All patient data is encrypted both in transit and at rest.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Lock className="text-blue-600 mb-4" size={28} />
            <h4 className="font-semibold text-gray-900">
              Role-Based Access Control
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Restrict system access based on staff roles and permissions.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FileText className="text-blue-600 mb-4" size={28} />
            <h4 className="font-semibold text-gray-900">
              Compliance Ready
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Designed to align with global healthcare data regulations.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Server className="text-blue-600 mb-4" size={28} />
            <h4 className="font-semibold text-gray-900">
              Secure Cloud Infrastructure
            </h4>
            <p className="mt-2 text-sm text-gray-600">
              Hosted on reliable, high-availability cloud architecture.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default SecurityCompliance;