import React from "react";
import { Quote } from "lucide-react"; // Optional: if you have lucide-react installed
import CEOImg from "../assets/CEO.png";

const CEOMessage = () => {
  return (
    <section className="relative min-h-screen py-24 px-6 lg:px-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-green-500/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* IMAGE SIDE - With Architectural Frame */}
          <div className="lg:w-5/12 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={CEOImg} 
                alt="Syed Pir Badshah - CEO" 
                className="w-full h-auto object-cover  transition-all duration-700" 
              />
              {/* Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
            </div>
            
            {/* Decorative Frame Element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-green-500/30 rounded-3xl -z-10" />
          </div>

          {/* TEXT SIDE */}
          <div className="lg:w-7/12 space-y-8">
            <header className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.4em] text-green-500 font-semibold">
                Leadership
              </h2>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Message from <span className="text-green-500">Our CEO</span>
              </h1>
              <div className="w-20 h-1.5 bg-green-500 rounded-full" />
            </header>

            <div className="relative">
              {/* Large Quote Icon for Style */}
              <Quote className="absolute -top-6 -left-8 w-16 h-16 text-white/5" />
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed italic">
                <p>
                  “At <strong className="text-white font-semibold">M/s Pir Badshah & Co</strong>, 
                  our mission is to turn visions into reality. Every project we undertake 
                  is a promise of quality, precision, and innovation.”
                </p>
                <p>
                  “Over the years, we have grown through the trust of our clients and the 
                  dedication of our team, delivering exceptional construction, architecture, 
                  renovation, and interior design solutions. Our commitment is to exceed 
                  expectations by combining creativity, sustainability, and cutting-edge technology.”
                </p>
                <p>
                  “We believe that every space has a story to tell, and it is our 
                  responsibility to bring that story to life while maintaining the 
                  highest standards of professionalism and integrity.”
                </p>
              </div>

              {/* Signature Section */}
              <div className="pt-10 flex flex-col items-start">
                <span className="text-white font-bold text-2xl tracking-tight">
                  Syed Pir Badshah
                </span>
                <span className="text-green-500 font-medium tracking-widest uppercase text-xs mt-1">
                  Chief Executive Officer
                </span>
                
                {/* Visual Accent */}
                <div className="mt-6 flex gap-2">
                    <div className="w-8 h-1 bg-green-500/40 rounded-full" />
                    <div className="w-4 h-1 bg-green-500/20 rounded-full" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CEOMessage;