import { FiHeart } from "react-icons/fi";

const DevelopedByStaffArc = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 md:text-base">
      <span>Made with</span>

      <FiHeart className="text-lg text-red-500" />

      <span>by</span>

      <img
        src="https://www.staffarc.in/_next/image?url=%2Fimages%2FStaffarc-logo.png&w=96&q=75"
        alt="StaffArc"
        className="h-6 w-auto object-contain"
      />

      <a
        href="https://www.staffarc.in"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-orange-500 transition-all duration-300 hover:underline"
      >
        StaffArc
      </a>
    </div>
  );
};

export default DevelopedByStaffArc;
