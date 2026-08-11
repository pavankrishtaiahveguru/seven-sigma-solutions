import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiSend,
} from "react-icons/fi";

const services = [
  "Career Consultation",
  "Technical Skill Development",
  "Resume Building & Optimization",
  "LinkedIn Profile Enhancement",
  "Interview Preparation",
  "Job Search Guidance",
  "Career Mentorship",
  "Professional Development",
  "Personalized Learning Plans",
  "Ongoing Career Support",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitted(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (error) {
      console.error("Contact form error:", error);

      alert(
        error.message ||
          "Unable to send your message right now. Please try again later.",
      );
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        data-page-hero
        className="relative overflow-hidden bg-[#050505] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Get In Touch
            </span>

            <span className="h-px w-8 bg-blue-500" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact <span className="text-blue-500">Us</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            Have a question or want to work with us? Reach out and we'll get
            back to you promptly.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT CONTENT
      ====================================================== */}
      <section className="relative bg-black px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div className="space-y-5">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group rounded-xl border border-white/[0.07] bg-[#070707] p-5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.06)] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <FiMail size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">Email</p>

                  <a
                    href="mailto:sigma7tech@outlook.com"
                    className="mt-1 block text-sm font-semibold text-white transition-colors hover:text-blue-400 sm:text-base"
                  >
                    sigma7tech@outlook.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="group rounded-xl border border-white/[0.07] bg-[#070707] p-5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.06)] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <FiPhone size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">Phone</p>

                  <a
                    href="tel:+19454019183"
                    className="mt-1 block text-sm font-semibold text-white transition-colors hover:text-blue-400 sm:text-base"
                  >
                    +1 (945) 401-9183
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group rounded-xl border border-white/[0.07] bg-[#070707] p-5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.06)] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <FiMapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">Address</p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-white sm:text-base">
                    1305 Elijah Dr, Anna, TX
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="group rounded-xl border border-white/[0.07] bg-[#070707] p-5 transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.06)] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <FiClock size={20} />
                </div>

                <div className="w-full">
                  <p className="text-xs font-medium text-slate-500">
                    Business Hours
                  </p>

                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Monday – Friday</span>

                      <span className="font-medium text-white">
                        9:00 AM – 5:00 PM
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Saturday</span>

                      <span className="font-medium text-white">
                        9:00 AM – 5:00 PM
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Sunday</span>

                      <span className="font-medium text-red-400">Closed</span>
                    </div>

                    <p className="pt-1 text-xs text-slate-600">
                      Central Standard Time (CST)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE - FORM
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-xl border border-white/[0.07] bg-[#070707] p-6 sm:p-7 lg:p-8"
          >
            {/* Form Header */}
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <FiMessageSquare size={19} />
              </div>

              <div>
                <h2 className="text-lg font-bold text-white sm:text-xl">
                  Send a Message
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Tell us how we can help you.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Name <span className="text-blue-500">*</span>
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="h-11 w-full rounded-lg border border-white/[0.08] bg-[#111111] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Email + Phone */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Email <span className="text-blue-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                    className="h-11 w-full rounded-lg border border-white/[0.08] bg-[#111111] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-medium text-slate-300"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="h-11 w-full rounded-lg border border-white/[0.08] bg-[#111111] px-4 text-sm text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Service <span className="text-blue-500">*</span>
                </label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="h-11 w-full rounded-lg border border-white/[0.08] bg-[#111111] px-4 text-sm text-white outline-none transition-all duration-300 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-slate-300"
                >
                  Message <span className="text-blue-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  className="w-full resize-none rounded-lg border border-white/[0.08] bg-[#111111] px-4 py-3 text-sm leading-6 text-white outline-none transition-all duration-300 placeholder:text-slate-600 focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
              >
                {isSubmitted ? (
                  "Message Sent Successfully"
                ) : (
                  <>
                    Send Message
                    <FiSend
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs font-medium text-emerald-400"
                >
                  Thank you! We'll get back to you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
