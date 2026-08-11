import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("[data-page-hero]");

    if (!hero) {
      const resetButton = window.setTimeout(() => {
        setShowTopButton(false);
      }, 0);

      return () => {
        window.clearTimeout(resetButton);
      };
    }

    const observer = new IntersectionObserver(([entry]) => {
      setShowTopButton(!entry.isIntersecting);
    });

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // return (
  //   <motion.button
  //     type="button"
  //     onClick={scrollToTop}
  //     initial={{ opacity: 0, scale: 0.8 }}
  //     animate={{
  //       opacity: showTopButton ? 1 : 0,
  //       scale: showTopButton ? 1 : 0.8,
  //     }}
  //     transition={{ duration: 0.25 }}
  //     className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-700 ${
  //       showTopButton ? "pointer-events-auto" : "pointer-events-none"
  //     }`}
  //     aria-label="Scroll to top"
  //   >
  //     <FiArrowUp />
  //   </motion.button>
  // );
};

export default ScrollToTop;
