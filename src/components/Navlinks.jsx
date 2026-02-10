import { X } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navlinks = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
   <div className="flex items-center">
      <div className="flex items-center">
        <ul className=" gap-10  hidden md:flex">
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#ourProjects">Our Projects</a>
          </li>
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#cost">Cost Calculator</a>
          </li>
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#AboutUs">About Us</a>
          </li>
          <li className="hover:text-emerald-700 font-semibold">
            <a href="#ContactUs">Contact Us</a>
          </li>
        </ul>
        <button
          className="md:hidden p-2 text-gray-300 hover:text-white "
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

      </div>



      {mobileMenuOpen && (
        <div className="fixed left-0 right-0 top-20 sm:top-16 md:top-20 backdrop-blur-sm bg-emerald-800 shadow-white/50 shadow-sm md:hidden "> 
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 m-10 sm:p-4 shadow-2xl border border-white/10">         
          <div className="flex flex-col gap-8 px-6 py-5 font-semibold  text-gray-300 ">
             <a
              href="home"
               onClick={() => {
              return setMobileMenuOpen(false);
            
            }}
              className="block  hover:text-white text-sm lg:text-base  "
            >
              Home
            </a>

            <a
              href="#ourProjects"
               onClick={() => {
              return setMobileMenuOpen(false);
            }}
              className="block  hover:text-white text-sm lg:text-base "
            >
              Our Project
            </a>

            <a
              href="#CC"
               onClick={() => {
              return setMobileMenuOpen(false);
            }}
              className="block hover:text-white text-sm lg:text-base "
            >
              Cost Calculator
            </a>

            <a
              href="#AboutUs"
               onClick={() => {
              return setMobileMenuOpen(false);
            }}
              className="block  hover:text-white text-sm lg:text-base "
            >
             About US
            </a>

            <a
              href="#ContactUs"
               onClick={() => {
              return setMobileMenuOpen(false);
            }}
              className="block  hover:text-white text-sm lg:text-base "
            >
              Contact Us
            </a>



          </div>
        </div>
        </div>
      )}
      
    </div>
  );
};

export default Navlinks;
