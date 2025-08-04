import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className=" text-black font-fustat relative"
      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
    >
      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-[#FFC107] to-[#943cb4]"></div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <Link to="/">
            <img
              className="rounded-lg w-48 sm:w-56 md:w-64 mx-auto sm:mx-0"
              src="https://i.ibb.co/wFjPnMXs/aa.png"
              alt="logo"
            />
          </Link>
          <p className="text-sm mt-4 leading-relaxed max-w-[280px] sm:max-w-full">
            Make your moments magical with elegant decoration and unforgettable
            ambiance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b font-danching border-white/40 pb-2">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              <Link
                to="/"
                className="hover:text-[#FFC107] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#FFC107] transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#FFC107] transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-danching border-b border-white/40 pb-2">
            Our Services
          </h3>
          <ul className="space-y-3 text-sm sm:text-base">
            <li>Birthday Decoration</li>
            <li>Baby Shower</li>
            <li>Anniversary Setup</li>
            <li>Event Styling</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b font-danching border-white/40 pb-2">
            Get in Touch
          </h3>
          <ul className="space-y-5 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#FFC107] w-5 h-5 flex-shrink-0" />
              <a
                href="tel:+33753606495"
                className="hover:text-[#FFC107] transition-colors duration-300"
              >
                +33 753606495
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#FFC107] w-5 h-5 flex-shrink-0" />
              <a
                href="mailto:charme.decor@gmail.com"
                className="hover:text-[#FFC107] transition-colors duration-300"
              >
                charme.decor@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-6 mt-4 justify-center sm:justify-start text-2xl">
              <a
                href="https://www.facebook.com/profile.php?id=61577920499599"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC107] hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/33753606495"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FFC107] hover:text-white transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar some code added  added some code  */}
      {/* Some code added   some code added */}
      {/* some code addeed added some code  */}
      <div className="text-center text-white font-danching animate-slideDown bg-gradient-to-r from-[#943cb4] to-[#FFC107] md:text-xl sm:text-xs border-t  border-white/30 py-5 px-6 bg-black bg-opacity-10">
        © {new Date().getFullYear()} iftakharalamshuvo11@gmail.com | +8801980640702. All Rights Reserved.
      </div>
    </footer>
  );
}
