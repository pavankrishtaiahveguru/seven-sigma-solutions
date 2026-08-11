import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheckCircle,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const offerings = [
  "Personalized career guidance",
  "Industry-focused skill development",
  "Resume review and optimization",
  "Mock interviews with expert feedback",
  "Job search strategies",
  "LinkedIn profile enhancement",
  "One-on-one mentorship",
  "Ongoing career support",
];

const strengths = [
  {
    icon: FiUsers,
    title: "Personalized mentorship from experienced professionals",
  },
  {
    icon: FiBookOpen,
    title: "Practical, real-world learning approach",
  },
  {
    icon: FiTarget,
    title: "Individual attention and career guidance",
  },
  {
    icon: FiCheckCircle,
    title: "Resume and interview preparation",
  },
  {
    icon: FiBookOpen,
    title: "Industry-focused training",
  },
  {
    icon: FiTarget,
    title: "Flexible learning options",
  },
  {
    icon: FiUsers,
    title: "End-to-end support throughout your career journey",
  },
];

const About = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Page Hero */}
      <section
        data-page-hero
        className="relative overflow-hidden border-b border-white/5 pt-32 sm:pt-36 lg:pt-40"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="mx-auto max-w-4xl text-center"
          >
            {/* Label */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                About 7Sigma Solutions
              </span>

              <span className="h-px w-8 bg-blue-500" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Careers.
              <span className="block text-blue-500">Building Futures.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              We help aspiring professionals gain the skills, confidence, and
              industry knowledge needed to succeed in today&apos;s competitive
              job market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500" />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                  Who We Are
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                The Right Guidance Can
                <span className="text-blue-500"> Transform Careers.</span>
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                At 7Sigma Solutions, we believe that the right guidance can
                transform careers. Our mission is to help aspiring professionals
                gain the skills, confidence, and industry knowledge needed to
                succeed in today&apos;s competitive job market.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-400">
                We work closely with individuals at every stage of their career
                journey, providing personalized mentorship, hands-on learning,
                resume optimization, interview preparation, and career coaching.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-400">
                Whether you&apos;re a recent graduate, changing careers, or
                looking to advance professionally, our experienced mentors
                provide the support and direction needed to help you achieve
                your goals.
              </p>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070707] p-6 sm:p-8">
                <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" />

                <div className="relative">
                  <span className="text-7xl font-bold tracking-tight text-blue-500/10 sm:text-8xl">
                    7Σ
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">
                    Empowering Potential
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-slate-400 sm:text-base">
                    Helping individuals turn their career goals into practical
                    action and meaningful professional opportunities.
                  </p>

                  <div className="mt-8 h-px w-full bg-white/10" />

                  <div className="mt-7 grid grid-cols-2 gap-5">
                    <div>
                      <p className="text-2xl font-bold text-blue-500">01</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                        Personalized
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-bold text-blue-500">02</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                        Practical
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-bold text-blue-500">03</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                        Industry Focused
                      </p>
                    </div>

                    <div>
                      <p className="text-2xl font-bold text-blue-500">04</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                        Career Support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="relative overflow-hidden border-y border-white/5 bg-[#050505] py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                What We Offer
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Everything You Need to
              <span className="text-blue-500"> Move Forward.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
              Our services are designed to support you from career planning
              through professional growth.
            </p>
          </motion.div>

          {/* Offerings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            }}
            className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {offerings.map((item, index) => (
              <motion.div
                key={item}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                className="group bg-slate-950 p-6 transition-colors duration-300 hover:bg-slate-900"
              >
                <span className="text-sm font-semibold text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="mt-4 flex items-start gap-3">
                  <FiCheckCircle
                    className="mt-0.5 shrink-0 text-blue-500"
                    size={18}
                  />

                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Why Choose 7Sigma Solutions?
              </span>

              <span className="h-px w-8 bg-blue-500" />
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Why Choose
              <span className="text-blue-500"> 7Sigma Solutions?</span>
            </h2>
          </motion.div>

          {/* Client Shared Points */}
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
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <motion.article
                  key={strength.title}
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
                      },
                    },
                  }}
                  className="group rounded-2xl border border-white/10 bg-[#070707] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-slate-900 sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={20} />
                    </div>

                    <div>
                      <span className="text-xs font-semibold tracking-wider text-blue-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3 className="mt-2 text-base font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-blue-400">
                        {strength.title}
                      </h3>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Client Shared Supporting Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/10 bg-[#070707] p-7 text-center sm:p-9"
          >
            <p className="text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              At 7Sigma Solutions, our goal is to equip you with the knowledge,
              confidence, and professional skills needed to pursue new career
              opportunities and achieve long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Vision */}
            <motion.article
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-7 sm:p-9"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl transition-all duration-500 group-hover:bg-blue-600/20" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <FiTarget size={21} />
                </div>

                <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Our Vision
                </span>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  A Trusted Partner for Career Growth
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  To become a trusted career development partner that empowers
                  professionals with the knowledge, confidence, and practical
                  skills needed to thrive in an ever-evolving workforce.
                </p>
              </div>
            </motion.article>

            {/* Mission */}
            <motion.article
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-7 sm:p-9"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl transition-all duration-500 group-hover:bg-blue-600/20" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <FiBookOpen size={21} />
                </div>

                <span className="mt-7 block text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Our Mission
                </span>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Bridging Education and Employment
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  To bridge the gap between education and employment by
                  providing high-quality mentorship, career guidance, and
                  industry-relevant training that helps individuals unlock their
                  full potential.
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/5 bg-slate-950 py-20 sm:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-3xl px-5 text-center sm:px-8"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Start Your Journey
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Build Your
            <span className="text-blue-500"> Future?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Let&apos;s create a personalized path toward your professional
            goals.
          </p>

          <a
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
          >
            Get Career Guidance
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default About;
