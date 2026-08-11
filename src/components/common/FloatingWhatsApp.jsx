"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "183";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
    //   aria-label="Chat on WhatsApp"
    //   title="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: {
          duration: 0.5,
        },
        scale: {
          duration: 0.5,
        },
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.12,
        y: -6,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="group fixed z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_35px_rgba(37,211,102,0.45)] transition-all duration-300 hover:bg-[#1EBE5D] sm:h-16 sm:w-16"
      style={{
        right: "3rem",
        bottom: "3rem",
      }}
    >
      {/* Pulse */}
      <span className="absolute h-12 w-12 animate-ping rounded-full bg-[#25D366] opacity-30 sm:h-14 sm:w-14" />

      {/* Icon */}
      <FaWhatsapp className="relative z-10 text-3xl text-white sm:text-[34px]" />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-20 hidden whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-black opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 lg:block">
        Chat with us
      </span>
    </motion.a>
  );
}
