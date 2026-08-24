import { Link, useLocation } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";

export default function HomeLink({ onClick, ...props }) {
  const { pathname } = useLocation();

  const handleClick = (event) => {
    onClick?.(event);

    if (!event.defaultPrevented && pathname === "/") {
      scrollToTop();
    }
  };

  return <Link {...props} to="/" onClick={handleClick} />;
}
