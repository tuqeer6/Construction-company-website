import { X, Menu } from "lucide-react";
import { useState } from "react";

const Navlinks = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "" },
    { name: "Our Projects", href: "#ourProjects" },
    { name: "Cost Calculator", href: "#cost" },
    { name: "About Us", href: "#AboutUs" },
    { name: "Contact Us", href: "#ContactUs" },
  ];

  return (
    <div className="flex items-center">
      {/* DESKTOP MENU */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <a
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-100" : "text-white"
              } hover:text-green-400`}
            >
              {item.name}
            </a>
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </li>
        ))}
      </ul>

      {/* CTA BUTTON (Desktop) */}
      <button className="hidden md:block ml-10 px-5 py-2 bg-green-600 hover:bg-green-500 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all active:scale-95">
        <a href="#ContactUs">Work with us</a>
      </button>

      {/* MOBILE HAMBURGER */}
      <button
        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed top-18 right-0 left-0 bg-emerald-900 z-50 md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col p-8 space-y-6">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-green-500 transition-colors border-b border-white/5 pb-4"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.name}
              </a>
              
            ))}

            <button
             onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 bg-green-600 text-white font-bold rounded-xl mt-4">
              <a href="#ContactUs">Get Free Consultation</a>
            </button>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Navlinks;
