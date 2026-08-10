import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Why Us", href: "/why-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-slate-200/10 bg-slate-950 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo + Company Name */}
        <Link
          to="/"
          onClick={handleNavClick}
          className="relative z-50 flex items-center gap-3"
        >
          <img
            src="/images/logo/seven-sigma-logo.jpeg"
            alt="7Sigma Solutions"
            className="h-12 w-auto object-contain sm:h-14"
          />

          <div className="flex flex-col">
            <span
              className={`text-xl font-bold leading-tight tracking-wide transition-colors duration-300 sm:text-2xl ${
                isScrolled ? "text-blue-600" : "text-blue-600"
              }`}
            >
              7Sigma Solutions
            </span>

            <span
              className={`mt-0.5 text-[9px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 sm:text-[10px] ${
                isScrolled ? "text-slate-500" : "text-white/60"
              }`}
            >
              Precision. Performance. Excellence.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:transition-all after:duration-300 ${
                location.pathname === link.href
                  ? "text-blue-600 after:w-full after:bg-blue-600"
                  : isScrolled
                    ? "text-slate-500 hover:text-blue-600 after:w-0 after:bg-blue-600 hover:after:w-full"
                    : "text-blue-600 hover:text-blue-600 after:w-0 after:bg-white hover:after:w-full"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 lg:hidden ${
            isScrolled || isMenuOpen ? "text-blue-600" : "text-white"
          }`}
        >
          {isMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`absolute left-0 top-0 -z-10 w-full bg-white px-5 pt-24 shadow-xl transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-5 opacity-0"
        }`}
      >
        <div className="flex flex-col">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.name}
                to={link.href}
                onClick={handleNavClick}
                className={`border-b border-slate-100 py-4 text-base font-medium transition-colors duration-300 hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-slate-700"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <span className="relative inline-block">
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-600" />
                  )}
                </span>
              </Link>
            );
          })}

          <Link
            to="/contact"
            onClick={handleNavClick}
            className="my-5 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
