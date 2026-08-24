import { motion } from "framer-motion";
import { FiCompass, FiLayers, FiUsers, FiTarget } from "react-icons/fi";

const approachSteps = [
  {
    number: "01",
    icon: FiCompass,
    title: "Understand the Need",
    description:
      "We begin by understanding the real goals, challenges, and requirements before recommending the right solution.",
  },
  {
    number: "02",
    icon: FiLayers,
    title: "Build the Right Solution",
    description:
      "We develop practical and personalized solutions that are aligned with the specific needs of individuals and businesses.",
  },
  {
    number: "03",
    icon: FiUsers,
    title: "Connect People & Resources",
    description:
      "We bring together the right people, resources, opportunities, and business partners to create meaningful connections.",
  },
  {
    number: "04",
    icon: FiTarget,
    title: "Create Meaningful Results",
    description:
      "Our focus is on delivering reliable, results-driven support that creates value and encourages long-term growth.",
  },
];

const OurApproach = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

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
          className="mx-auto max-w-3xl text-center"
        >
          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Our Approach
            </span>

            <span className="h-px w-10 bg-blue-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Solutions Start With
            <span className="text-blue-500"> Understanding.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            We believe the right solution starts with understanding the real
            need. Our approach is practical, personalized, and focused on
            creating meaningful results for individuals and businesses.
          </p>
        </motion.div>

        {/* Approach Steps */}
        <div className="relative mt-14 sm:mt-16 lg:mt-20">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {approachSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 35,
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
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  {/* Number + Icon */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/20 bg-slate-900 shadow-[0_0_30px_rgba(37,99,235,0.08)] transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_35px_rgba(37,99,235,0.18)]">
                    <Icon
                      size={27}
                      className="text-blue-500 transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Step Number */}
                    <span className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-1.5 text-[9px] font-bold text-slate-400">
                      {step.number}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-500/20 group-hover:bg-white/[0.05]">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-14 max-w-3xl text-center sm:mt-16"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-5 py-3">
            <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />

            <span className="text-xs font-medium text-slate-300 sm:text-sm">
              Practical. Personalized. Results-driven.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurApproach;
