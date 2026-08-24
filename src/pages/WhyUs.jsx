import { motion } from "framer-motion";
import {
  FiUsers,
  FiLayers,
  FiBriefcase,
  FiLink,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";
import GlobalCTA from "../components/common/GlobalCTA";

const reasons = [
  {
    number: "01",
    title: "Personalized Approach",
    description:
      "We don’t believe in one-size-fits-all solutions. We take the time to understand your goals, challenges, and priorities before recommending the right solution.",
    icon: FiUsers,
  },
  {
    number: "02",
    title: "Multiple Solutions Under One Roof",
    description:
      "From career development to business support, workforce solutions, and vendor management, we bring multiple capabilities together so you don’t have to search for different partners for every need.",
    icon: FiLayers,
  },
  {
    number: "03",
    title: "People & Business Focused",
    description:
      "We understand that behind every business challenge are real people, real operations, and real goals. Our solutions are designed with both people and business needs in mind.",
    icon: FiBriefcase,
  },
  {
    number: "04",
    title: "Reliable Partnerships",
    description:
      "We focus on building long-term relationships with clients, professionals, and vendors rather than simply completing a transaction.",
    icon: FiLink,
  },
  {
    number: "05",
    title: "Practical & Results Driven",
    description:
      "Our goal is to provide solutions that can actually be implemented. We focus on clarity, efficiency, practical execution, and measurable value.",
    icon: FiTrendingUp,
  },
  {
    number: "06",
    title: "Professional & Transparent",
    description:
      "We believe successful relationships are built on communication, professionalism, accountability, transparency, and trust.",
    icon: FiShield,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const WhyUs = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        data-page-hero
        className="relative overflow-hidden bg-slate-950 px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        {/* Decorative Line */}
        <div className="pointer-events-none absolute left-0 top-1/2 h-px w-1/4 bg-gradient-to-r from-transparent to-blue-500/20" />

        <div className="pointer-events-none absolute right-0 top-1/2 h-px w-1/4 bg-gradient-to-l from-transparent to-blue-500/20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative mx-auto max-w-4xl text-center"
        >
          {/* Label */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Why Seven Sigma Solutions
            </span>

            <span className="h-px w-8 bg-blue-500" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            More Than a Service.
            <br />
            <span className="text-blue-500">A Solution.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
            Choosing the right partner matters. At Seven Sigma Solutions, we
            focus on understanding your needs before recommending a solution
            that creates practical and meaningful value.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          REASONS
      ====================================================== */}
      <section className="relative bg-slate-950 px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] sm:grid-cols-2 lg:grid-cols-3"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <motion.article
                  key={reason.number}
                  variants={cardVariants}
                  className="group relative border-b border-white/[0.07] bg-slate-950 p-6 transition-all duration-500 hover:bg-slate-900/70 sm:p-7 lg:p-8"
                >
                  {/* Number */}
                  <span className="absolute right-6 top-5 text-5xl font-bold tracking-tight text-white/[0.035] transition-colors duration-500 group-hover:text-blue-500/10">
                    {reason.number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <h2 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-xl">
                      {reason.title}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {reason.description}
                    </p>
                  </div>

                  {/* Hover Accent */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CLOSING STATEMENT
      ====================================================== */}
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-slate-900 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Center Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
            Built Around Your Needs
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The Right People.
            <br />
            <span className="text-blue-500">The Right Partnerships.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Whether you are looking for career support, workforce solutions,
            business assistance, or reliable partnerships, we focus on
            understanding your needs and creating solutions that move you
            forward.
          </p>

          {/* Tagline */}
          <div className="mt-8 flex items-center justify-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
            <span className="h-px w-8 bg-slate-700" />
            <span>Precision. Performance. Excellence.</span>
            <span className="h-px w-8 bg-slate-700" />
          </div>
        </motion.div>
      </section>
      <GlobalCTA />
    </main>
  );
};

export default WhyUs;
