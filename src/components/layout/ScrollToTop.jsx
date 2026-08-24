import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If URL contains a hash, scroll to that section
    if (hash) {
      const element = document.getElementById(hash.substring(1));

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }

      return;
    }

    // Normal page navigation → scroll to top
    scrollToTop();
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
