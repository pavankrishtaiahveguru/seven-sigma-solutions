import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiUsers,
  FiUserCheck,
  FiTarget,
  FiLink,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import GlobalCTA from "../components/common/GlobalCTA";

const services = [
  {
    number: "01",
    title: "Career & Professional Development",
    description:
      "Helping professionals build stronger careers and make informed career decisions.",
    points: [
      "Career guidance and strategy",
      "Resume and professional profile development",
      "LinkedIn optimization",
      "Interview preparation",
      "Professional development",
      "Career transition guidance",
      "Job-search strategy",
      "Mentorship and professional guidance",
    ],
    icon: FiTarget,
  },
  {
    number: "02",
    title: "Business Solutions",
    description:
      "Practical support for businesses looking to improve their operations, workforce, and overall performance.",
    points: [
      "Business consulting and support",
      "Workforce planning",
      "Operational support",
      "Process improvement",
      "Business coordination",
      "Talent and resource support",
      "Strategic business guidance",
    ],
    icon: FiBriefcase,
  },
  {
    number: "03",
    title: "Vendorship & Vendor Management",
    subtitle: "Connecting Businesses With the Right Vendors",
    description:
      "Finding the right vendor can take time. Managing multiple vendors can take even more. Seven Sigma Solutions helps businesses identify, connect, coordinate, and maintain relationships with vendors that support their operational needs.",
    points: [
      "Vendor sourcing",
      "Vendor identification and matching",
      "Vendor onboarding support",
      "Vendor coordination",
      "Vendor relationship management",
      "Vendor communication",
      "Service and performance coordination",
      "Procurement support",
      "Vendor documentation support",
      "Multi-vendor coordination",
    ],
    footer:
      "Our goal is simple: help businesses spend less time searching for vendors and more time focusing on their business.",
    icon: FiLink,
  },
  {
    number: "04",
    title: "Workforce & Talent Solutions",
    description:
      "Helping businesses find the right resources while helping professionals connect with opportunities.",
    intro: "We can support businesses with:",
    points: [
      "Talent sourcing",
      "Workforce coordination",
      "Staffing support",
      "Candidate connections",
      "Resource planning",
      "Professional referrals",
      "Workforce-related business solutions",
    ],
    icon: FiUsers,
  },
  {
    number: "05",
    title: "Professional Partnerships",
    description:
      "We believe strong businesses are built through strong relationships.",
    points: [
      "Business connections",
      "Professional connections",
      "Vendor relationships",
      "Service provider connections",
      "Mutually beneficial partnerships",
    ],
    footer:
      "Seven Sigma Solutions works to create connections between businesses, professionals, vendors, and service providers, helping create opportunities for mutually beneficial partnerships.",
    icon: FiUserCheck,
  },
];

const serviceVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        data-page-hero
        className="relative overflow-hidden border-b border-white/5 bg-[#050505] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40"
      >
        {/* Background Glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Label */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                Our Services
              </span>

              <span className="h-px w-8 bg-blue-500" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Solutions Built
              <br />
              <span className="text-blue-500">Around Your Needs.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
              Every client has a different challenge. That&apos;s why Seven
              Sigma Solutions offers a range of services designed to support
              individuals, businesses, and professional partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="relative bg-black">
        {/* Decorative Glows */}
        <div className="pointer-events-none absolute left-0 top-[10%] h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-[50%] h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

        {services.map((service, index) => {
          const Icon = service.icon;
          const isReversed = index % 2 !== 0;

          return (
            <motion.section
              key={service.number}
              variants={serviceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.12,
              }}
              className={`relative border-b border-white/[0.05] ${
                index % 2 === 0 ? "bg-[#050505]" : "bg-black"
              }`}
            >
              <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={isReversed ? "lg:pl-6" : "lg:pr-6"}>
                    {/* Number + Icon */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold tracking-[0.2em] text-blue-500">
                        {service.number}
                      </span>

                      <span className="h-px w-10 bg-blue-500/40" />

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h2>

                    {/* Subtitle */}
                    {service.subtitle && (
                      <h3 className="mt-3 text-base font-semibold text-blue-400 sm:text-lg">
                        {service.subtitle}
                      </h3>
                    )}

                    {/* Description */}
                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                      {service.description}
                    </p>

                    {/* Intro */}
                    {service.intro && (
                      <p className="mt-6 text-sm font-semibold text-slate-200">
                        {service.intro}
                      </p>
                    )}

                    {/* Points */}
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Footer Message */}
                    {service.footer && (
                      <div className="mt-7 border-l-2 border-blue-500/60 pl-4">
                        <p className="text-sm leading-7 text-slate-400">
                          {service.footer}
                        </p>
                      </div>
                    )}

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="group mt-8 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                    >
                      Discuss Your Needs
                      <FiArrowUpRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  {/* Visual */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isReversed ? 50 : -50,
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
                      duration: 0.8,
                      delay: 0.1,
                      ease: "easeOut",
                    }}
                    className="relative"
                  >
                    {/* Glow */}
                    <div className="pointer-events-none absolute -inset-5 rounded-3xl bg-blue-600/5 blur-2xl" />

                    {/* Visual Card */}
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/[0.08] via-white/[0.02] to-transparent p-8 transition-all duration-500 hover:border-blue-500/30 sm:p-10 lg:p-12">
                      {/* Large Number */}
                      <span className="absolute -right-5 -top-8 text-[160px] font-bold leading-none text-white/[0.025]">
                        {service.number}
                      </span>

                      {/* Icon */}
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={36} />
                      </div>

                      {/* Visual Heading */}
                      <div className="relative mt-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                          Seven Sigma Solutions
                        </p>

                        <h3 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white sm:text-3xl">
                          {service.title}
                        </h3>

                        <div className="mt-7 h-px w-20 bg-blue-500/50" />

                        <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
                          Practical, professional solutions designed around real
                          needs and meaningful results.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="relative mx-auto max-w-4xl px-0 text-center"
        >
          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
            Whether you&apos;re a professional looking for your next
            opportunity, a business looking for support, or an organization
            looking for the right vendors and partners, Seven Sigma Solutions is
            here to help.
          </p>

          <GlobalCTA />
        </motion.div>
      </section>
    </main>
  );
};

export default Services;
