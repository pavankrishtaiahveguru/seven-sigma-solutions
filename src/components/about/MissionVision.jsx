import { motion } from "framer-motion";
import { FiTarget, FiEye } from "react-icons/fi";

const MissionVision = () => {
  const items = [
    {
      icon: FiTarget,
      label: "Our Mission",
      title: "Helping People & Businesses Move Forward",
      description:
        "To provide reliable, professional, and practical solutions that help individuals and businesses grow, connect, and succeed.",
    },
    {
      icon: FiEye,
      label: "Our Vision",
      title: "Building a Strong Network of Opportunities",
      description:
        "To become a trusted partner for professionals and businesses by creating a strong network of people, opportunities, services, and partnerships.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-900 py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
              Our Direction
            </span>

            <span className="h-px w-10 bg-blue-500" />
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Purpose That Drives
            <span className="block text-blue-500">What We Do.</span>
          </h2>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05] sm:p-9 lg:p-10"
              >
                {/* Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:border-blue-500/40 group-hover:bg-blue-500/15">
                  <Icon size={25} />
                </div>

                {/* Label */}
                <p className="relative mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  {item.label}
                </p>

                {/* Title */}
                <h3 className="relative mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
