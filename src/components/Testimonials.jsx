import React from "react";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import CountUp from "react-countup";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ali Khan",
    role: "Homeowner",
    image: t1,
    content:
      "M/s Pir Badshah & Co transformed our dream home into reality. Their construction team was professional, timely, and meticulous with every detail.",
    stars: 5,
  },
  {
    name: "Sara Ali",
    role: "Interior Designer Client",
    image: t3,
    content:
      "The interior design services were exceptional. Every room reflects elegance and comfort, perfectly matching our vision and style.",
    stars: 5,
  },
  {
    name: "Omar Farooq",
    role: "Business Owner",
    image: t2,
    content:
      "Their renovation services brought new life to our office space. The team worked efficiently and exceeded our expectations with modern solutions.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 px-6 lg:px-20  overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          
          {/* LEFT SIDE: Header & Animated Stats */}
          <div className="lg:w-5/12 w-full">
            <header className="space-y-4 mb-12">
              <h2 className="text-sm uppercase tracking-[0.4em] text-green-500 font-semibold">
                Testimonials
              </h2>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                What our <span className="text-green-500">Clients</span> say
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                We strive to deliver exceptional quality and aesthetics in every project, 
                from luxury homes to modern corporate spaces.
              </p>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { label: "Projects Completed", value: 1000 },
                { label: "Satisfied Customers", value: 900 },
                { label: "Years of Excellence", value: 40 },
                { label: "City Presence", value: 15 },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <h3 className="text-4xl font-black text-white group-hover:text-green-500 transition-colors duration-300">
                    <CountUp end={stat.value} duration={3} suffix="+" enableScrollSpy />
                  </h3>
                  <div className="w-8 h-1 bg-green-500 my-2 group-hover:w-16 transition-all duration-500" />
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Testimonial Cards */}
          <div className="lg:w-7/12 w-full space-y-5">
            {testimonials.map((testi, idx) => (
              <div
                key={idx}
                className="relative group p-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all duration-500 hover:bg-white/8 hover:border-green-500/30"
              >
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-8 right-8 text-white/5 group-hover:text-green-500/10 transition-colors" size={60} />
                
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testi.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-green-500 text-green-500" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-lg italic leading-relaxed mb-4">
                    "{testi.content}"
                  </p>

                  <div className="flex items-center gap-5 pt-3 border-t border-white/5">
                    <div className="relative">
                        <img
                        src={testi.image}
                        alt={testi.name}
                        className="w-14 h-14 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-white/10"
                        />
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-600 rounded-full border-2 border-[#0a0a0a] flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">
                        {testi.name}
                      </h3>
                      <p className="text-green-500 text-xs uppercase tracking-widest font-semibold">
                        {testi.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;