import React from "react";

const DashboardPreview = () => {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Platform Overview
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Complete Control Through a Unified Dashboard
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Medynex Record provides hospital administrators with a powerful
            centralized dashboard to monitor patient records, appointments,
            billing activities, and departmental performance in real time.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Real-time hospital performance analytics
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Appointment & scheduling management
              </p>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></div>
              <p className="text-gray-700">
                Billing, invoices & financial tracking
              </p>
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/images/dashboard-preview.png"
            alt="Medynex Record Dashboard"
            className="rounded-2xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;