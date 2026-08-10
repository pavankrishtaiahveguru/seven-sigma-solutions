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

const services = [
  {
    number: "01",
    title: "Career Consultation",
    description:
      "Receive one-on-one guidance to understand your career goals, evaluate your current skills, and create a personalized roadmap for success.",
    icon: FiCompass,
    image: "/images/services/career-consultation.jpg",
  },
  {
    number: "02",
    title: "Technical Skill Development",
    description:
      "Learn industry-relevant concepts and practical skills through structured, hands-on training designed to prepare you for real-world work environments.",
    icon: FiBookOpen,
    image: "/images/services/technical-skill-development.jpg",
  },
  {
    number: "03",
    title: "Resume Building & Optimization",
    description:
      "Stand out to recruiters with a professionally crafted resume that highlights your strengths, experience, and accomplishments.",
    icon: FiEdit3,
    image: "/images/services/resume-building.jpg",
  },
  {
    number: "04",
    title: "LinkedIn Profile Enhancement",
    description:
      "Build a strong professional presence with an optimized LinkedIn profile that attracts recruiters and increases your visibility.",
    icon: FiTrendingUp,
    image: "/images/services/linkedin-profile.jpg",
  },
  {
    number: "05",
    title: "Interview Preparation",
    description:
      "Boost your confidence through mock interviews, technical coaching, behavioral interview practice, and personalized feedback.",
    icon: FiMessageSquare,
    image: "/images/services/interview-preparation.jpg",
  },
  {
    number: "06",
    title: "Job Search Guidance",
    description:
      "Learn effective job search strategies, networking techniques, and best practices for applying to positions that match your goals.",
    icon: FiTarget,
    image: "/images/services/job-search.jpg",
  },
  {
    number: "07",
    title: "Career Mentorship",
    description:
      "Work with experienced professionals who provide continuous guidance, answer your questions, and help you navigate career challenges.",
    icon: FiUsers,
    image: "/images/services/career-mentorship.jpg",
  },
  {
    number: "08",
    title: "Professional Development",
    description:
      "Strengthen your communication, problem-solving, teamwork, leadership, and workplace professionalism.",
    icon: FiBriefcase,
    image: "/images/services/professional-development.jpg",
  },
  {
    number: "09",
    title: "Personalized Learning Plans",
    description:
      "Get a customized learning path based on your background, experience, career goals, and desired professional direction.",
    icon: FiUserCheck,
    image: "/images/services/personalized-learning.jpg",
  },
  {
    number: "10",
    title: "Ongoing Career Support",
    description:
      "Continue receiving interview preparation, career advice, and professional guidance as you progress in your career journey.",
    icon: FiCheckCircle,
    image: "/images/services/ongoing-career-support.jpg",
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

const Services = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Services Header */}
      <section className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
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
                What We Do
              </span>

              <span className="h-px w-8 bg-blue-500" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Services
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Comprehensive career development services designed to help you
              gain the skills, confidence, and guidance needed to achieve your
              professional goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative overflow-hidden pb-20 sm:pb-24 lg:pb-28">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.05,
            }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  variants={cardVariants}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#070707] transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/70 hover:shadow-[0_0_35px_rgba(37,99,235,0.16)] cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative m-5 mb-0 overflow-hidden rounded-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-48"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Number */}
                    <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-semibold text-slate-300 backdrop-blur-md">
                      {service.number}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6">
                    {/* Icon + Title */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-all duration-500 group-hover:border-blue-500/50 group-hover:bg-blue-600 group-hover:text-white">
                        <Icon size={19} />
                      </div>

                      <h2 className="text-base font-semibold text-white transition-colors duration-300 group-hover:text-blue-400 sm:text-lg">
                        {service.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <a
                      href="/services"
                      className="group/link mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors duration-300 hover:text-blue-400"
                    >
                      Learn More
                      <FiArrowUpRight
                        size={16}
                        className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  </div>

                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-blue-500 transition-all duration-500 group-hover:w-full" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
