import { X, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navlinks = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", target: null },
    { name: "Our Projects", target: "ourProjects" },
    { name: "Cost Calculator", target: "cost" },
    { name: "About Us", target: "AboutUs" },
    { name: "Contact Us", target: "ContactUs" },
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);

    if (target) {
      navigate("/", { state: { scrollTo: target } });
    } else {
      navigate("/", { state: {} });
    }
  };

  return (
    <div className="flex items-center">
      {/* DESKTOP MENU */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item.name} className="relative group">
            <button
              type="button"
              onClick={() => handleNavClick(item.target)}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-100" : "text-white"
              } hover:text-green-400`}
            >
              {item.name}
            </button>
            {/* Animated underline */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </li>
        ))}
      </ul>

      {/* CTA BUTTON (Desktop) */}
      <button
        type="button"
        onClick={() => handleNavClick("ContactUs")}
        className="hidden md:block ml-10 px-5 py-2 bg-green-600 hover:bg-green-500 text-white text-xs font-bold uppercase tracking-widest rounded-full transition-all active:scale-95"
      >
        Work with us
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
        <div className="fixed top-16 right-0 left-0 bg-emerald-900 z-50 animate-fade-in duration-300 md:hidden">
          <div className="flex flex-col p-8 space-y-6">
            {navItems.map((item, idx) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavClick(item.target)}
                className="text-2xl font-bold text-white hover:text-green-500 transition-colors border-b border-white/5 pb-4 text-left"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.name}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNavClick("ContactUs")}
              className="w-full py-4 bg-green-600 text-white font-bold rounded-xl mt-4"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navlinks;
