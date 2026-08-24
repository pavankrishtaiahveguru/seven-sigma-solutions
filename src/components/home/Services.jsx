import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiUsers,
  FiLink,
  FiTrendingUp,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    icon: FiTrendingUp,
    title: "Career & Professional Solutions",
    description:
      "Helping professionals navigate career opportunities, strengthen their professional presence, and build a path toward long-term growth.",
  },
  {
    number: "02",
    icon: FiBriefcase,
    title: "Business Solutions",
    description:
      "Supporting businesses with practical solutions that improve operations, workforce needs, and business performance.",
  },
  {
    number: "03",
    icon: FiLink,
    title: "Vendorship & Vendor Management",
    description:
      "Helping businesses identify, connect with, coordinate, and manage reliable vendors and business partners.",
  },
  {
    number: "04",
    icon: FiUsers,
    title: "Workforce & Talent Solutions",
    description:
      "Connecting businesses with the people and resources they need while helping professionals find opportunities that align with their goals.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Label */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              What We Do
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Practical Solutions.
            <br />
            <span className="text-blue-500">Meaningful Opportunities.</span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            From career development and professional guidance to business
            solutions, workforce support, and vendor management, we bring
            people, resources, and opportunities together to create meaningful
            results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-blue-950/20 sm:p-7">
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top Row */}
                  <div className="relative z-10 flex items-start justify-between">
                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15 group-hover:text-blue-300">
                      <Icon size={22} />
                    </div>

                    {/* Number */}
                    <span className="text-xs font-semibold tracking-[0.15em] text-slate-600 transition-colors duration-300 group-hover:text-blue-500/70">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 mt-7 flex flex-1 flex-col">
                    <h3 className="text-lg font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-blue-400">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <Link
                      to="/services"
                      className="group/link mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-blue-400"
                    >
                      Learn More
                      <FiArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-10 flex justify-center lg:mt-12"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white"
          >
            Explore All Services
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
