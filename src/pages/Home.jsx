const Home = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Smarter Digital Healthcare <br />
            <span className="text-blue-200">Built for Everyone</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Medynex connects patients, doctors, and medical records into one
            secure digital healthcare ecosystem.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
              Book a Demo
            </button>

            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            One Platform, Multiple Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                Virtual Care
              </h3>
              <p className="mt-4 text-gray-600">
                Consult certified doctors online through video, chat, and secure
                messaging.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                Digital Records
              </h3>
              <p className="mt-4 text-gray-600">
                Store, access, and manage medical records safely anytime,
                anywhere.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800">
                AI Assistance
              </h3>
              <p className="mt-4 text-gray-600">
                Get instant health guidance using intelligent symptom analysis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Ready to Transform Healthcare?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Experience how Medynex simplifies healthcare delivery with modern
            technology.
          </p>

          <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
            Book a Free Demo
          </button>
        </div>
      </section>

    </div>
  );
};

export default Home;
