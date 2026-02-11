import React from "react";

const modules = [
  {
    title: "Electronic Medical Records",
    desc: "Centralized digital patient records with real-time updates and secure cloud storage.",
  },
  {
    title: "Patient Registration",
    desc: "Efficient onboarding system for managing patient data and history seamlessly.",
  },
  {
    title: "Appointment Scheduling",
    desc: "Smart scheduling system to manage doctor availability and patient bookings.",
  },
  {
    title: "Billing & Invoicing",
    desc: "Automated billing system with invoice tracking and payment management.",
  },
  {
    title: "Pharmacy Management",
    desc: "Inventory tracking and prescription management integrated within the system.",
  },
  {
    title: "Laboratory Integration",
    desc: "Manage lab tests, reports, and diagnostics from one centralized dashboard.",
  },
  {
    title: "Staff & Role Control",
    desc: "Role-based access control for doctors, nurses, and administrative staff.",
  },
  {
    title: "Analytics & Reports",
    desc: "Real-time hospital performance insights and customizable reporting tools.",
  },
];

const Modules = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
          Core Modules
        </span>

        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
          Everything Your Hospital Needs in One Platform
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Medynex Record provides a complete suite of hospital management tools 
          designed to streamline operations, improve efficiency, and ensure 
          secure patient data management.
        </p>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-6 text-left hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              {/* Icon placeholder */}
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {module.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {module.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Modules;