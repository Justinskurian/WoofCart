import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-[#295840] text-white text-xs md:text-sm">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Left - Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-[#E9A56A] transition">
            <TbBrandMeta className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-[#E9A56A] transition">
            <IoLogoInstagram className="h-4 w-4" />
          </a>
          <a href="#" className="hover:text-[#E9A56A] transition">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Center - Message */}
        <div className="text-center flex-grow px-2 text-white">
          <span>We Ship All Over India - Fast and Reliable Shipping!</span>
        </div>

        {/* Right - Contact */}
        <div className="hidden md:block">
          <a href="tel:+911234567890" className="hover:text-[#E9A56A] transition">
            +91 (123) 456-7890
          </a>
        </div>
      </div>
    </div>
  );
};


export default Topbar;
