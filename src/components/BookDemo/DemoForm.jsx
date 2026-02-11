import { useState } from "react";

const DemoForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center animate-fadeIn">
        <h3 className="text-2xl font-semibold text-slate-900">
          🎉 Demo Request Sent!
        </h3>
        <p className="mt-4 text-gray-600">
          Our team will contact you shortly to schedule your personalized demo.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-semibold mb-2">Request a Demo</h3>
      <p className="text-gray-500 mb-6 text-sm">
        Fill in the details below and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          placeholder="Work Email"
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="text"
          placeholder="Company / Organization"
          required
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          required
          className="w-full border rounded-lg px-4 py-3 text-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
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
          className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Book My Demo
        </button>
      </form>
    </div>
  );
};

export default DemoForm;