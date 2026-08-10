import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiMessageSquare,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const benefits = [
  {
    number: "01",
    title: "Personalized Mentorship",
    description:
      "Receive individual guidance from experienced professionals who understand your career goals, challenges, and professional direction.",
    icon: FiUsers,
  },
  {
    number: "02",
    title: "Practical Learning",
    description:
      "Develop practical, real-world skills that help you become confident and prepared for professional opportunities.",
    icon: FiBookOpen,
  },
  {
    number: "03",
    title: "Industry-Focused Training",
    description:
      "Learn relevant concepts and skills aligned with today's professional environment and employer expectations.",
    icon: FiTarget,
  },
  {
    number: "04",
    title: "Interview Preparation",
    description:
      "Build confidence through mock interviews, technical preparation, behavioral practice, and personalized feedback.",
    icon: FiMessageSquare,
  },
  {
    number: "05",
    title: "Individual Attention",
    description:
      "Get support tailored to your background, experience, learning needs, and desired career direction.",
    icon: FiCheckCircle,
  },
  {
    number: "06",
    title: "End-to-End Career Support",
    description:
      "Our guidance continues beyond training with career advice, job search strategies, and ongoing professional support.",
    icon: FiArrowRight,
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
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        data-page-hero
        className="relative overflow-hidden bg-[#030303] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

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
              Why Choose Us
            </span>

            <span className="h-px w-8 bg-blue-500" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Goals.
            <br />
            <span className="text-blue-500">Our Guidance.</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
            At 7Sigma Solutions, we combine personalized mentorship, practical
            learning, and continuous career support to help you move forward
            with confidence.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          BENEFITS
      ====================================================== */}
      <section className="relative bg-black px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
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
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <motion.article
                  key={benefit.number}
                  variants={cardVariants}
                  className="group relative border-b border-white/[0.07] bg-[#050505] p-6 transition-all duration-500 hover:bg-[#080808] sm:p-7 lg:p-8"
                >
                  {/* Number */}
                  <span className="absolute right-6 top-5 text-5xl font-bold tracking-tight text-white/[0.035] transition-colors duration-500 group-hover:text-blue-500/10">
                    {benefit.number}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  {/* Content */}
                  <div className="relative mt-7">
                    <h2 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-xl">
                      {benefit.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {benefit.description}
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
      <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
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
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
            Built Around You
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            More Than Training.
            <br />
            <span className="text-blue-500">A Career Partnership.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We focus on more than just training. Our goal is to help you build
            the confidence, skills, and professional direction needed for
            long-term career growth.
          </p>
        </motion.div>
      </section>
    </main>
  );
};

export default WhyUs;
