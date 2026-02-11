import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="max-w-7xl mx-auto px- py-16">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-500">We are glad to hear from you</p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT CARD */}
        <div className="bg-blue-600 text-white rounded-2xl p-8    bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <p className="text-blue-100 text-sm mb-8">
            Reach out to us for inquiries, support, or partnerships.
          </p>

          <div className="space-y-6 text-sm">
            <div>
              <p className="font-semibold">Our Location</p>
              <p className="text-blue-100">
                Abuja & Kano, Nigeria
              </p>
            </div>

            <div>
              <p className="font-semibold">Phone Number</p>
              <p className="text-blue-100">+234 000 000 0000</p>
            </div>

            <div>
              <p className="font-semibold">Email Address</p>
              <p className="text-blue-100">hello@medynex.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <ContactForm />

      </div>
    </section>
  );
};

export default ContactSection;
