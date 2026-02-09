import logo from "../assets/logo.png";
import Navlinks from "./Navlinks";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full z-50 transition-all duration-300 bg-emerald-800 md:bg-emerald-500/20 md:backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex justify-center items-center space-x-1 group cursor-pointer">
            <img src={logo} alt="Logo" className="h-16 w-auto " />
            <span className=" font(--font-logo)] italic text-3xl text-brand-primary drop-shadow-sm tracking-widest bg-linear-to-b from-white to-cyan-800 bg-clip-text text-transparent">
              PBS
            </span>
          </div>
          <Navlinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
