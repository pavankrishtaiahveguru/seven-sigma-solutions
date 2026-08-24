import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const GlobalCTA = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-px w-1/4 bg-gradient-to-r from-transparent to-blue-500/30" />

      <div className="pointer-events-none absolute right-0 top-1/2 h-px w-1/4 bg-gradient-to-l from-transparent to-blue-500/30" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-blue-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
            Let&apos;s Build What&apos;s Next
          </span>

          <span className="h-px w-8 bg-blue-500" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Have a Need?
          <span className="block text-blue-500">
            Let&apos;s Find the Right Solution.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg"
        >
          Whether you&apos;re a professional looking for your next opportunity,
          a business looking for support, or an organization looking for the
          right vendors and partners, Seven Sigma Solutions is here to help.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <Link
            to="/contact"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 sm:w-auto"
          >
            Contact Seven Sigma Solutions
            <FiArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-9 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-600"
        >
          <span className="h-px w-8 bg-slate-700" />

          <span>Precision. Performance. Excellence.</span>

          <span className="h-px w-8 bg-slate-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalCTA;
