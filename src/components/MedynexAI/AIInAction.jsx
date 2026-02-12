import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, TrendingUp } from "lucide-react";

const AIInAction = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
            AI In Action
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Real-Time Intelligence Across Your Hospital
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Medynex AI Assistant continuously analyzes structured hospital
            data to detect patterns, assess risks, and generate actionable
            insights — all within your existing workflow.
          </p>

          {/* Feature Highlights */}
          <div className="mt-10 space-y-6">

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Auto-Generated Clinical Summaries
                </h4>
                <p className="text-gray-600 mt-2">
                  Instantly generate structured summaries from patient records,
                  lab reports, and visit history.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <TrendingUp size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Predictive Risk Scoring
                </h4>
                <p className="text-gray-600 mt-2">
                  Identify high-risk patients and operational bottlenecks
                  before they escalate.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Intelligent Alerts & Monitoring
                </h4>
                <p className="text-gray-600 mt-2">
                  Receive smart notifications for abnormal patterns,
                  critical lab values, or compliance risks.
                </p>
              </div>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src=""
            alt="AI Dashboard Preview"
            className="w-full max-w-2xl rounded-2xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AIInAction;