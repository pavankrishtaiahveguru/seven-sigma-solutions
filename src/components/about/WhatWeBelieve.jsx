import { motion } from "framer-motion";
import { FiUsers, FiLink, FiTrendingUp, FiShield } from "react-icons/fi";

const WhatWeBelieve = () => {
  const beliefs = [
    {
      icon: FiUsers,
      title: "People Matter",
      description:
        "The right people can transform an organization and create new opportunities.",
    },
    {
      icon: FiLink,
      title: "Partnerships Matter",
      description:
        "Strong relationships with clients, vendors, and professionals create long-term value.",
    },
    {
      icon: FiTrendingUp,
      title: "Results Matter",
      description:
        "Our goal isn’t simply to provide a service. It’s to provide a solution that makes a difference.",
    },
    {
      icon: FiShield,
      title: "Integrity Matters",
      description:
        "We believe in transparency, professionalism, accountability, and building relationships based on trust.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              What We Believe
            </span>

            <span className="h-px w-10 bg-blue-500" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Principles That
            <span className="block text-blue-500">Guide Us.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Our work is guided by the principles that shape how we build
            relationships, create solutions, and deliver meaningful results.
          </p>
        </motion.div>

        {/* Beliefs Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;

            return (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-white/[0.05] sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                  <Icon size={22} />
                </div>

                {/* Number */}
                <span className="absolute right-6 top-6 text-xs font-semibold tracking-widest text-slate-700">
                  0{index + 1}
                </span>

                {/* Content */}
                <h3 className="mt-7 text-xl font-bold text-white">
                  {belief.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {belief.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-10 bg-blue-500/40 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
