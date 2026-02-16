import { useState } from "react";

const DemoForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative bg-white rounded-3xl p-10 text-center shadow-xl">
        <h3 className="text-2xl font-semibold text-slate-900">
          Demo Request Sent!
        </h3>
        <p className="mt-4 text-gray-600">
          Our team will contact you shortly to schedule your personalized demo.
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-white rounded-3xl p-10 shadow-xl">
      
      {/* Soft Glow (Contained & Clean) */}
      <div className="absolute top-10 -left-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 -right-16 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

      <h3 className="text-2xl font-semibold mb-2">Request a Demo</h3>
      <p className="text-gray-500 mb-6 text-sm">
        Fill in the details below and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <input
          type="email"
          placeholder="Work Email"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <input
          type="text"
          placeholder="Company / Organization"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <select
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-600 focus:ring-2 focus:ring-blue-500 outline-none transition"
        >
          <option value="">Your Role</option>
          <option>Doctor</option>
          <option>Clinic Admin</option>
          <option>Hospital Management</option>
          <option>Startup Founder</option>
          <option>Other</option>
        </select>

        <textarea
          rows="4"
          placeholder="Tell us what you’d like to see in the demo"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none transition"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Book My Demo
        </button>
      </form>
    </div>
  );
};

export default DemoForm;