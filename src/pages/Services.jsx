import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiCompass,
  FiEdit3,
  FiMessageSquare,
  FiTarget,
  FiTrendingUp,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Career Consultation",
    description:
      "Receive one-on-one guidance to understand your career goals, evaluate your current skills, and create a personalized roadmap for success.",
    points: [
      "Career Goal Assessment",
      "Skill & Experience Evaluation",
      "Personalized Career Roadmap",
    ],
    icon: FiCompass,
    image: "/images/services/career-consultation.jpg",
  },
  {
    number: "02",
    title: "Technical Skill Development",
    description:
      "Learn industry-relevant concepts and practical skills through structured, hands-on training designed to prepare you for real-world work environments.",
    points: [
      "Industry-Relevant Skills",
      "Hands-On Learning",
      "Real-World Practice",
    ],
    icon: FiBookOpen,
    image: "/images/services/technical-skill-development.jpg",
  },
  {
    number: "03",
    title: "Resume Building & Optimization",
    description:
      "Stand out to recruiters with a professionally crafted resume that highlights your strengths, experience, and accomplishments while aligning with industry standards.",
    points: [
      "Professional Resume Review",
      "ATS-Friendly Optimization",
      "Achievement-Focused Content",
    ],
    icon: FiEdit3,
    image: "/images/services/resume-building.jpg",
  },
  {
    number: "04",
    title: "LinkedIn Profile Enhancement",
    description:
      "Build a strong professional presence with an optimized LinkedIn profile that attracts recruiters and increases your visibility in the job market.",
    points: [
      "Profile Optimization",
      "Professional Branding",
      "Recruiter Visibility",
    ],
    icon: FiTrendingUp,
    image: "/images/services/linkedin-profile.jpg",
  },
  {
    number: "05",
    title: "Interview Preparation",
    description:
      "Boost your confidence through mock interviews, technical interview coaching, behavioral interview practice, and personalized feedback.",
    points: [
      "Mock Interviews",
      "Technical Interview Practice",
      "Behavioral Interview Coaching",
    ],
    icon: FiMessageSquare,
    image: "/images/services/interview-preparation.jpg",
  },
  {
    number: "06",
    title: "Job Search Guidance",
    description:
      "Learn effective job search strategies, networking techniques, and best practices for applying to positions that match your skills and career aspirations.",
    points: [
      "Job Search Strategies",
      "Networking Guidance",
      "Application Best Practices",
    ],
    icon: FiTarget,
    image: "/images/services/job-search.jpg",
  },
  {
    number: "07",
    title: "Career Mentorship",
    description:
      "Work with experienced professionals who provide continuous guidance, answer your questions, and help you navigate challenges throughout your career journey.",
    points: [
      "One-on-One Mentorship",
      "Professional Guidance",
      "Career Progress Support",
    ],
    icon: FiUsers,
    image: "/images/services/career-mentorship.jpg",
  },
  {
    number: "08",
    title: "Professional Development",
    description:
      "Strengthen your communication, problem-solving, teamwork, leadership, and workplace professionalism to excel in today's competitive environment.",
    points: [
      "Communication Skills",
      "Leadership Development",
      "Workplace Professionalism",
    ],
    icon: FiBriefcase,
    image: "/images/services/professional-development.jpg",
  },
  {
    number: "09",
    title: "Personalized Learning Plans",
    description:
      "Every learner has unique goals. We create customized learning paths based on your background, experience, and desired career direction.",
    points: [
      "Customized Learning Path",
      "Goal-Based Planning",
      "Progress-Focused Approach",
    ],
    icon: FiUserCheck,
    image: "/images/services/personalized-learning.jpg",
  },
  {
    number: "10",
    title: "Ongoing Career Support",
    description:
      "Our support doesn't end after training. We continue to assist you with interview preparation, career advice, and professional guidance as you progress in your career.",
    points: [
      "Continued Career Guidance",
      "Interview Support",
      "Professional Advice",
    ],
    icon: FiCheckCircle,
    image: "/images/services/ongoing-career-support.jpg",
  },
];

const serviceVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section
        data-page-hero
        className="relative overflow-hidden border-b border-white/5 bg-[#050505] pt-32 sm:pt-36 lg:pt-40"
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
            className="mx-auto max-w-3xl text-center"
          >
            {/* Label */}
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-blue-500" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
                Our Expertise
              </span>

              <span className="h-px w-8 bg-blue-500" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Services We <span className="text-blue-500">Offer</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
              Comprehensive career development services designed to help you
              gain the skills, confidence, and guidance needed to achieve your
              professional goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="relative bg-black">
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute left-0 top-[10%] h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

        <div className="pointer-events-none absolute right-0 top-[45%] h-96 w-96 rounded-full bg-blue-600/5 blur-3xl" />

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
                amount: 0.15,
              }}
              className={`relative border-b border-white/[0.04] ${
                index % 2 === 0 ? "bg-[#050505]" : "bg-black"
              }`}
            >
              <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    isReversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* =================================================
                      CONTENT
                  ================================================== */}
                  <div className={`${isReversed ? "lg:pl-6" : "lg:pr-6"}`}>
                    {/* Number + Icon */}
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-semibold tracking-[0.2em] text-blue-500">
                        {service.number}
                      </span>

                      <span className="h-px w-10 bg-blue-500/40" />

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                        <Icon size={19} />
                      </div>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="mt-5 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                      {service.description}
                    </p>

                    {/* Points */}
                    <ul className="mt-6 space-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-3 text-sm text-slate-300"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      to="/contact"
                      className="group mt-7 inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 sm:text-sm"
                    >
                      Get Started
                      <FiArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </Link>
                  </div>

                  {/* =================================================
                      IMAGE
                  ================================================== */}
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
                    <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-blue-600/5 blur-2xl transition-all duration-700 group-hover:bg-blue-600/10" />

                    {/* Image Container */}
                    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#070707] p-1 transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(14,165,233,0.12)]">
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading={index > 1 ? "lazy" : "eager"}
                          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Image Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70" />

                        {/* Image Number */}
                        <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60 text-xs font-semibold text-white backdrop-blur-md">
                          {service.number}
                        </div>
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
          BOTTOM CTA
      ====================================================== */}
      <section className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-20 sm:py-24 lg:py-28">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative mx-auto max-w-3xl px-5 text-center sm:px-8"
        >
          {/* Label */}
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Start Your Journey
            </span>

            <span className="h-px w-8 bg-blue-500" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Take the Next Step
            <span className="block text-blue-500">in Your Career?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            Get the guidance, practical skills, and confidence you need to
            pursue new opportunities and build a successful career.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 sm:w-auto"
            >
              Get Career Guidance
              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              to="/about"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/5 sm:w-auto"
            >
              Learn About Us
              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Services;
