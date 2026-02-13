import { X, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navlinks = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", target: null },
    { name: "Our Projects", target: "ourProjects" },
    { name: "Cost Calculator", target: "cost" },
    { name: "About Us", target: "AboutUs" },
    { name: "Contact Us", target: "ContactUs" },
  ];

  const servicesDropdown = [
    { name: "Construction", path: "/services/construction" },
    { name: "Architecture", path: "/services/architecture" },
    { name: "Renovation", path: "/services/renovation" },
    { name: "Interior Design", path: "/services/interior" },
  ];

  const handleNavClick = (item) => {
    // Close mobile menu after click
    setMobileMenuOpen(false);
    setServicesOpen(false);

    // Navigate based on path or target scroll
    if (item.path) {
      navigate(item.path); // Navigate to service page
    } else if (item.target !== undefined) {
      navigate("/", { state: { scrollTo: item.target } }); // Scroll on home
    } else {
      navigate("/"); // Default home
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
              onClick={() => handleNavClick(item)}
              className={`text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-gray-100" : "text-white"
              } hover:text-green-400`}
            >
              {item.name}
            </button>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
          </li>
        ))}

        {/* SERVICES DROPDOWN */}
        <li className="relative group">
          <button
            type="button"
            onClick={() => navigate("/services")} // Navigate to ServicesPage
            className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
              isScrolled ? "text-gray-100" : "text-white"
            } hover:text-green-400`}
          >
            Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
          </button>

          {/* Dropdown menu */}
          <div className="absolute top-full pt-4 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="bg-emerald-700 border border-white/10 rounded-xl shadow-2xl overflow-hidden min-w-55 backdrop-blur-xl">
              {servicesDropdown.map((service) => (
                <button
                  key={service.name}
                  onClick={() => handleNavClick(service)}
                  className="block w-full text-left px-5 py-4 text-xs font-bold uppercase tracking-widest text-gray-300 hover:bg-green-600 hover:text-white transition-all border-b border-white/5 last:border-0"
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </li>
      </ul>

      {/* CTA BUTTON (Desktop) */}
      <button
        type="button"
        onClick={() => handleNavClick({ target: "ContactUs" })}
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
                onClick={() => handleNavClick(item)}
                className="text-2xl font-bold text-white hover:text-green-500 transition-colors border-b border-white/5 pb-4 text-left"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.name}
              </button>
            ))}

            <div className="py-4">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-3xl font-black text-green-500"
              >
                Services
                <ChevronDown size={28} className={servicesOpen ? "rotate-180" : ""} />
              </button>

              {servicesOpen && (
                <div className="mt-6 ml-4 flex flex-col space-y-6 border-l-2 border-green-500/20 pl-6">
                  {servicesDropdown.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => handleNavClick(service)}
                      className="text-xl font-bold text-left text-gray-400"
                    >
                      {service.name}
                    </button>
                  ))}
                 <button
      onClick={() => {
        setMobileMenuOpen(false); // CLOSE mobile menu
        navigate("/services");    // Navigate to ServicesPage
      }}
      className="text-sm font-black text-green-500 uppercase"
    >
      View All Services →
    </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleNavClick({ target: "ContactUs" })}
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
