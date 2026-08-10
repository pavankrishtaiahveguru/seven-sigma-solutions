import {
  FiArrowUpRight,
  FiClock,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import DevelopedByStaffArc from "../DevelopedByStaffArc.jsx";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Choose Us", href: "/why-us" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Career Consultation",
  "Technical Skill Development",
  "Resume Optimization",
  "Interview Preparation",
  "Career Mentorship",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.4fr] lg:gap-10">
          {/* Company */}
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/images/logo/seven-sigma-logo.jpeg"
                alt="7Sigma Solutions"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Empowering careers through personalized mentorship, practical
              learning, professional development, and career guidance.
            </p>

            <div className="mt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
              >
                Start Your Career Journey
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <a
                href="tel:+19454019183"
                className="group flex items-start gap-3"
              >
                <FiPhone className="mt-1 shrink-0 text-blue-400" size={17} />

                <span className="text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-white">
                  +1 (945) 401-9183
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:sigma7tech@outlook.com"
                className="group flex items-start gap-3"
              >
                <FiMail className="mt-1 shrink-0 text-blue-400" size={17} />

                <span className="break-all text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-white">
                  sigma7tech@outlook.com
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-blue-400" size={17} />

                <p className="text-sm leading-6 text-slate-400">
                  1305 Elijah Dr,
                  <br />
                  Anna, TX
                </p>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3">
                <FiClock className="mt-1 shrink-0 text-blue-400" size={17} />

                <div className="text-sm leading-6 text-slate-400">
                  <p>Mon – Sat: 9:00 AM – 5:00 PM</p>
                  <p>Central Time</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left lg:px-10">
          <p className="text-xs text-slate-500">
            © {currentYear} 7Sigma Solutions. All rights reserved.
          </p>
          <DevelopedByStaffArc />
        </div>
      </div>
    </footer>
  );
}
