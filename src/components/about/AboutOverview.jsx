import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const AboutOverview = () => {
  return (
    <section
      id="about-overview"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                Who We Are
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built Around
              <span className="block text-blue-500">What Matters.</span>
            </h2>

            {/* Accent Line */}
            <div className="mt-6 h-1 w-16 rounded-full bg-blue-600" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            <p className="text-lg font-medium leading-8 text-slate-200 sm:text-xl">
              Seven Sigma Solutions was built around a simple idea: great
              results come from precision, the right people, and the right
              partnerships.
            </p>

            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              We work with individuals and businesses to provide solutions that
              address real-world challenges and create opportunities for growth.
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
              Our approach combines professional guidance, business support,
              workforce solutions, and vendor partnerships to help our clients
              move from where they are today to where they want to be.
            </p>

            {/* CTA */}
            <Link
              to="/services"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors duration-300 hover:text-blue-300"
            >
              Explore Our Solutions
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Principle Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-16 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-3 lg:mt-20"
        >
          <div className="border-l border-blue-500/40 pl-5">
            <p className="text-sm font-semibold text-white">Precision</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Understanding the real need before creating the right solution.
            </p>
          </div>

          <div className="border-l border-blue-500/40 pl-5">
            <p className="text-sm font-semibold text-white">People</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Connecting the right people with meaningful opportunities.
            </p>
          </div>

          <div className="border-l border-blue-500/40 pl-5">
            <p className="text-sm font-semibold text-white">Partnerships</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Building relationships that create long-term value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutOverview;
