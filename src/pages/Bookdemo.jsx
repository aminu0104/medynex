import DemoForm from "../components/BookDemo/DemoForm";

const BookDemo = () => {
  return (
    <section className="min-h-screenpt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Book a Live Demo of <span className="text-blue-600">Medynex</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            See how Medynex helps healthcare providers deliver smarter,
            faster, and more connected digital care — all in one platform.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li> -Real-time virtual consultations</li>
            <li> -Secure medical records management</li>
            <li> -AI-assisted healthcare workflows</li>
            <li> -Built for clinics, hospitals & startups</li>
          </ul>
        </div>

        {/* Right Form */}
        <DemoForm />

      </div>
    </section>
  );
};

export default BookDemo;