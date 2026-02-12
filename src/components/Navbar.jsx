import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import Navlinks from "./Navlinks";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-100 transition-all duration-500 ${
        isScrolled 
          ? " backdrop-blur-lg border-b border-white/10 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 ">
        <div className="flex justify-between items-center">
          
          {/* LOGO SECTION */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
                <img src={logo} alt="Logo" className="h-12 w-auto relative z-10" />
                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <span className="font-bold text-2xl tracking-tighter text-white">
              PBS <span className="text-green-500">.</span>
            </span>
          </div>

          {/* NAVIGATION LINKS */}
          <Navlinks isScrolled={isScrolled} />

        </div>
      </div>
    </nav>
  );
};

export default Navbar;