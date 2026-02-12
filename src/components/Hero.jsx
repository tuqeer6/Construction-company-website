import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 lg:px-20 overflow-hidden ">
      {/* BACKGROUND ELEMENTS */}
      {/* Primary Glow */}
      <div className="absolute top-1/4 -left-20 w-120 h-120 bg-green-900/10 blur-[120px] rounded-full animate-pulse" />
      {/* Secondary Accent */}
      <div className="absolute bottom-1/4 -right-20 w-[20rem] h-80 bg-green-800/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl w-full flex flex-col min-[1024px]:flex-row items-center gap-16 lg:gap-20 relative z-10">
        {/* TEXT CONTENT */}
        <div className="min-[1024px]:w-1/2 flex flex-col items-center min-[1024px]:items-start text-center min-[1024px]:text-left space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.4em] text-green-500 font-semibold">
              Master Builders & Architects
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15]">
              Engineering Your <br />
              <span className="text-green-500">Vision into Reality</span>
            </h1>
          </div>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl italic border-l-2 border-green-500/30 pl-6 py-2">
            Providing turn-key construction solutions including architectural
            design, modern renovation, and precision cost estimation—all under
            one professional roof.
          </p>

          <div className="flex flex-wrap items-center justify-center min-[1024px]:justify-start gap-6 pt-4">
            <button
              className="px-10 py-4 text-white font-bold text-lg rounded-tl-2xl rounded-br-2xl 
              bg-linear-to-r from-green-700 to-green-900 shadow-xl 
              hover:shadow-green-500/20 transition-all duration-300 ease-out 
              hover:-translate-y-1 hover:from-green-600 hover:to-green-800 
              active:scale-95 cursor-pointer"
            >
              <a href="#ContactUs">Get Free Consultation</a>
            </button>

            <div className="hidden sm:flex items-center gap-4 text-white/80">
              <span className="w-10 h-px bg-white/20"></span>
              <span className="text-sm font-medium tracking-widest uppercase">
                Since 1985
              </span>
            </div>
          </div>
        </div>

        {/* IMAGE CONTENT */}
        <div className="min-[1024px]:w-1/2 relative">
          {/* Architectural Frame Decoration */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-green-500/50 rounded-tl-[4rem] hidden min-[1024px]:block" />

          <div className="relative z-10">
            <img
              src={heroImg}
              alt="Luxury Construction Project"
              className="w-full h-auto object-cover shadow-2xl
              rounded-tl-[10rem] rounded-br-[10rem] 
              min-[1024px]:rounded-tl-[15rem] 
              transition-all duration-700 ease-in-out
              hover:scale-[1.02] hover:-translate-y-2
              hover:shadow-green-500/10"
            />

            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hidden md:block">
              <p className="text-green-400 font-bold text-3xl">40+</p>
              <p className="text-white text-xs uppercase tracking-tighter">
                Years of Excellence
              </p>
            </div>
          </div>

          {/* Background Square Decor */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-500/5 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
