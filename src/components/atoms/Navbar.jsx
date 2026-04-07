import React from "react";
import { Search } from "lucide-react";

//  It is absolute so it can overlay the Hero image
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-2 py-4 md:px-12 border-b border-white/50">
      {/* left side for search icon  */}
      <div className="flex items-center space-x-2 text-white/80 cursor-pointer hover:text-white">
        <Search size={18} />
        <span className="hidden sm:block text-lg">Search</span>
      </div>

      {/* right side for links  */}
      <div className="flex items-center space-x-4 md:space-x-10 text-white font-medium text-[10px] md:text-sm uppercase tracking-wider">
        <a href="#home" className="hover:text-orange-500 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-orange-500 transition-colors">
          About
        </a>
        <a href="#service" className="hover:text-orange-500 transition-colors">
          Services
        </a>
        <a href="#cars" className="hover:text-orange-500 transition-colors">
          Cars
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
