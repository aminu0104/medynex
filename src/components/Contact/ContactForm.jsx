import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // EmailJS config (kept simple as discussed)
  const SERVICE_ID ="service_ixeucca";
  const TEMPLATE_ID = "template_0jaii18";
  const PUBLIC_KEY = "MeJQpHReH5HfDZsNG";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setStatus("Message sent successfully!");
          setSubmitted(true);
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          setStatus("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full">
      {!submitted ? (
        <>
          <h3 className="text-2xl font-semibold mb-2">Get In Touch</h3>
          <p className="text-gray-500 mb-6 text-sm">
            Reach out to us for inquiries, support, or collaborations.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">
             Message Sent!
          </h3>
          <p className="text-gray-600 text-sm">
            Thanks for reaching out. We’ll get back to you shortly.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;