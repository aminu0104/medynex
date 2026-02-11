import React from "react";

const Hero = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Smart Hospital Management <br />
            <span className="text-blue-600">Powered by Medynex Record</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            A complete hospital SaaS system designed to manage patient records,
            appointments, billing, pharmacy, lab reports, and staff operations —
            all in one secure cloud platform.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Request Demo
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/medynex-record-mockup.png"
            alt="Medynex Record Dashboard Mockup"
            className="w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;