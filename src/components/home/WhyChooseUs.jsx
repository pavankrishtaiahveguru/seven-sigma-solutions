import { motion } from "framer-motion";
import {
  FiArrowUpRight,
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
      "Receive individual guidance from experienced professionals who understand your career goals and challenges.",
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
    icon: FiArrowUpRight,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Why Choose Us
            </span>

            <span className="h-px w-8 bg-blue-500" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your Goals.
            <span className="text-blue-500"> Our Guidance.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            At 7Sigma Solutions, we combine personalized mentorship, practical
            learning, and continuous career support to help you move forward
            with confidence.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="group relative bg-slate-950 p-7 transition-all duration-500 hover:bg-slate-900 sm:p-8"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-4xl font-bold text-white/[0.04] transition-colors duration-500 group-hover:text-blue-500/10">
                  {benefit.number}
                </span>

                {/* Icon */}
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={20} />
                </div>

                {/* Content */}
                <div className="relative mt-6">
                  <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 max-w-2xl text-center lg:mt-14"
        >
          <p className="text-sm leading-6 text-slate-500 sm:text-base">
            We focus on more than just training. Our goal is to help you build
            the confidence, skills, and professional direction needed for
            long-term career growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
