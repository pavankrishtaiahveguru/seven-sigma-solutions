import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowUpRight, FiHome } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-5 py-20 text-white sm:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="relative mx-auto mb-8"
        >
          <div className="absolute inset-0 -z-10 mx-auto h-48 w-48 rounded-full bg-blue-600/10 blur-3xl sm:h-64 sm:w-64" />

          <h1 className="select-none text-[8rem] font-black leading-none tracking-tighter text-white sm:text-[11rem] md:text-[13rem]">
            4<span className="text-blue-500">0</span>4
          </h1>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mb-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-blue-500 sm:w-10" />

          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400 sm:text-sm">
            7Sigma Solutions
          </span>

          <span className="h-px w-8 bg-blue-500 sm:w-10" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8"
        >
          The page you are looking for may have been moved, removed, or the URL
          may be incorrect. Let&apos;s get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          {/* Home */}
          <Link
            to="/"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 sm:w-auto"
          >
            <FiHome
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            Back to Home
            <FiArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Go Back */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10 sm:w-auto"
          >
            <FiArrowLeft
              size={17}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Go Back
          </button>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="mt-12 flex items-center justify-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600 sm:text-xs"
        >
          <span className="h-px w-8 bg-slate-800" />
          <span>Precision. Performance. Excellence.</span>
          <span className="h-px w-8 bg-slate-800" />
        </motion.div>
      </div>
    </main>
  );
};

export default PageNotFound;
