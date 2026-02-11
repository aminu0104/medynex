import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false); 
 const [mobileProductsOpen, setMobileProductsOpen] = useState(false);



  useEffect(() => {
    const closeOnScroll = () => setProductOpen(false);
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "hover:text-blue-600 transition";

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="flex justify-center pt-6 pb-2">
        <nav className="w-[92%] max-w-4xl bg-white/90 backdrop-blur rounded-full shadow-lg px-8 py-4 flex items-center justify-between transition-all duration-300">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="font-bold text-xl text-gray-800">
              Medynex
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-10 text-gray-600 font-medium">

            <li>
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>
            </li>
          {/* PRODUCTS DROPDOWN */}
<li
  className="relative"
  onMouseEnter={() => setProductOpen(true)}
  onMouseLeave={() => setProductOpen(false)}
>
  <button className="flex items-center gap-1 hover:text-blue-600 transition">
    Products
    <span
      className={`text-xs transition-transform ${
        productOpen ? "rotate-180" : ""
      }`}
    >
      ▼
    </span>
  </button>

  <div
    className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl p-4 space-y-3 transition-all duration-200 ${
      productOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-2 pointer-events-none"
    }`}
  >
    
    <div className="absolute -top-2 left-0 w-full h-2"></div>

    <NavLink
      to="/products/care"
      className="block hover:text-blue-600"
      onClick={() => setProductOpen(false)}
    >
      Medynex Care
    </NavLink>

    <NavLink
      to="/products/health-records"
      className="block hover:text-blue-600"
      onClick={() => setProductOpen(false)}
    >
      Medynex Records
    </NavLink>

    <NavLink
      to="/products/ai-assistant"
      className="block hover:text-blue-600"
      onClick={() => setProductOpen(false)}
    >
      Medynex AI
    </NavLink>
  </div>
</li>


            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/book-demo"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Book Demo +
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-700 text-xl"
          >
            ☰
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
    {/* MOBILE MENU */}
<div
  className={`md:hidden flex justify-center overflow-hidden transition-all duration-300 ${
    mobileOpen ? "max-h-[600px] mt-4" : "max-h-0"
  }`}
>
  <div className="w-[92%] bg-white rounded-2xl shadow-lg p-6 space-y-4 text-gray-700 font-medium">

    {/* HOME */}
    <NavLink
      to="/"
      onClick={() => setMobileOpen(false)}
      className="block py-2"
    >
      Home
    </NavLink>

    {/* ABOUT */}
    <NavLink
      to="/about"
      onClick={() => setMobileOpen(false)}
      className="block py-2"
    >
      About Us
    </NavLink>

    {/* MOBILE PRODUCTS DROPDOWN */}
    <div>
      <button
        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
        className="w-full flex items-center justify-between py-2 font-semibold"
      >
        Products
        <span
          className={`transition-transform ${
            mobileProductsOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`pl-4 overflow-hidden transition-all duration-300 ${
          mobileProductsOpen ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <NavLink
          to="/products/care"
          onClick={() => setMobileOpen(false)}
          className="block py-2 text-sm"
        >
          Medynex Care
        </NavLink>

        <NavLink
          to="/products/health-records"
          onClick={() => setMobileOpen(false)}
          className="block py-2 text-sm"
        >
          Medynex Records
        </NavLink>

        <NavLink
          to="/products/ai-assistant"
          onClick={() => setMobileOpen(false)}
          className="block py-2 text-sm"
        >
          Medynex AI
        </NavLink>
      </div>
    </div>

    {/* CONTACT */}
    <NavLink
      to="/contact"
      onClick={() => setMobileOpen(false)}
      className="block py-2"
    >
      Contact
    </NavLink>

    {/* CTA */}
    <NavLink
      to="/book-demo"
      onClick={() => setMobileOpen(false)}
      className="block text-center bg-blue-600 text-white py-3 rounded-full mt-4"
    >
      Book Demo +
    </NavLink>
  </div>
</div>

    </header>
  );
};

export default Navbar;
