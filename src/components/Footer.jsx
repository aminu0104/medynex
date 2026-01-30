import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-8 text-slate-700">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span className="text-xl font-bold text-slate-800">
              Medynex
            </span>
          </div>
          
          <p className="text-sm leading-relaxed mb-4">
            Access health care everywhere you go with secure digital
            healthcare solutions.
          </p>

          <p className="text-sm mb-2">
            <span className="font-semibold">Phone:</span> +234 90642 40961
          </p>
          <p className="text-sm mb-4">
            <span className="font-semibold">Email:</span> hello@mylikita.com
          </p>

          <div className="flex gap-3">
            {[X, Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/features" className="hover:text-blue-600">Features</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Telemedicine</li>
            <li>Health Records</li>
            <li>Appointment Booking</li>
            <li>Pharmacy Services</li>
            <li>Health Insurance</li>
          </ul>
        </div>

        {/* Resources + Address */}
        <div>
          <h3 className="font-semibold text-slate-900 mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm mb-6">
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Help Center</li>
          </ul>

          <h4 className="font-semibold text-slate-900 mb-2">
            Our Address
          </h4>
          <p className="text-sm leading-relaxed">
            Office: Floor 1, African Alliance Building, Abdullahi Waye, Kano
            <br /><br />
            Branch: Flat 42, DROL Estate, Wuye, Abuja
          </p>
        </div>
      </motion.div>

      {/* Bottom */}
      <div className="border-t mt-12 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Medynex Health Solutions Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;