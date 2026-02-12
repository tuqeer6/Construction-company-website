import logo from "../assets/logo.png";
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900/30 border-t border-white/5 pt-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-green-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex flex-col items-center">
          
          {/* LOGO & BRANDING */}
          <div className="flex flex-col items-center mb-12 group cursor-pointer" onClick={scrollToTop}>
            <div className="relative p-1 mb-4">
              <img src={logo} alt="Pir Badshah & Co Logo" className="h-20 w-auto relative z-10" />
              <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
            </div>
            <h2 className="text-white font-black text-2xl tracking-tighter">
              M/S PIR <span className="text-green-500">BADSHAH</span> & CO
            </h2>
            <p className="text-gray-300 text-[10px] uppercase tracking-[0.5em] mt-1">
              Building the Future
            </p>
          </div>

          {/* NAVIGATION LINKS */}
          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {[
                { name: "Home", href: "#" },
                { name: "Our Projects", href: "#ourProjects" },
                { name: "Cost Calculator", href: "#cost" },
                { name: "About Us", href: "#AboutUs" },
                { name: "Contact Us", href: "#ContactUs" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 text-sm font-bold uppercase tracking-widest transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-8 mb-16">
            {[
              { icon: <Facebook size={18} />, href: "#" },
              { icon: <Twitter size={18} />, href: "#" },
              { icon: <Instagram size={18} />, href: "#" },
              { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/tuqeer-shah" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:border-green-500 hover:text-green-500 hover:-translate-y-1 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* BOTTOM COPYRIGHT SECTION */}
          <div className="w-full pt-8 pb-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-300 text-xs text-center md:text-left leading-relaxed">
              &copy; {new Date().getFullYear()} M/s Pir Badshah & Co. <br className="md:hidden" /> 
              All rights reserved. Designed for Excellence.
            </p>
            
            <div className="flex items-center gap-4">
               <a href="/" className="text-gray-300 hover:text-white text-xs transition-colors">
                  Privacy Policy
               </a>
               <div className="w-1 h-1 bg-gray-700 rounded-full" />
               <a href="/" className="text-green-500 hover:text-green-400 text-xs font-bold tracking-wider">
                 WWW.PIRBADSHAH.COM
               </a>
            </div>

            {/* BACK TO TOP */}
            <button 
              onClick={scrollToTop}
              className="p-3 bg-white/5 hover:bg-green-600 text-white rounded-full transition-all duration-300 group"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;