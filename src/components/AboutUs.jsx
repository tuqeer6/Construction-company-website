import React, { useState, useEffect, useMemo, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { aboutUsData } from "../data/projectsData";
import { Link } from "react-router-dom";

/**
 * ServiceCard Sub-component
 */
const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const isConstruction = service.category === "construction";

  return (
    <div className="group flex-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-green-500/10 hover:border-green-500/30">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-500/10 border border-green-500/20 mb-6 transition-colors group-hover:bg-green-500/20">
        <Icon className="w-7 h-7 text-green-400" />
      </div>

      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
        {service.title}
      </h3>

      <div className="w-12 h-1 bg-green-500 rounded-full mb-6 transition-all duration-500 group-hover:w-20" />

      <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-20">
        {service.description}
      </p>

      {isConstruction ? (
        <Link
          to="/services/construction"
          className="relative overflow-hidden px-6 py-2.5 rounded-full bg-green-600 text-white text-sm font-medium transition-all hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/20 active:scale-95 inline-block"
        >
          Explore Service
        </Link>
      ) : (
        <button
          type="button"
          className="relative overflow-hidden px-6 py-2.5 rounded-full bg-green-600/60 text-white text-sm font-medium cursor-default inline-block"
        >
          Explore Service
        </button>
      )}
    </div>
  );
};

const AboutUs = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [current, setCurrent] = useState(1); // Start at index 1 due to cloning
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle Screen Resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1. Prepare original data chunks
  const originalChunks = useMemo(() => {
    const perView = isDesktop ? 2 : 1;
    return Array.from(
      { length: Math.ceil(aboutUsData.length / perView) },
      (_, i) => aboutUsData.slice(i * perView, i * perView + perView),
    );
  }, [isDesktop]);

  // 2. Create clones for infinite effect [Last, First, Second, ..., Last, First]
  const pagedData = useMemo(() => {
    if (originalChunks.length === 0) return [];
    return [
      originalChunks[originalChunks.length - 1], // Clone of the last slide at the start
      ...originalChunks,
      originalChunks[0], // Clone of the first slide at the end
    ];
  }, [originalChunks]);

  // 3. Jump without animation when reaching clones
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (current === pagedData.length - 1) {
      setCurrent(1); // Teleport to real first slide
    } else if (current === 0) {
      setCurrent(pagedData.length - 2); // Teleport to real last slide
    }
  };

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent((prev) => prev - 1);
  };

  return (
    <section
      id="AboutUs"
      className="relative min-h-screen flex items-center overflow-hidden py-24 px-6 lg:px-20"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-green-900/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* TOP HEADER */}
        <header className="mb-16 text-center ">
          <h2 className="text-sm uppercase tracking-[0.3em] text-green-500 font-semibold mb-3">
            Our Legacy
          </h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
            About Our Firm
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* CONTENT SIDE (Your Updated Text) */}
          <div className="lg:w-2/5 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Decades of <span className="text-green-500">Excellence</span> in
              Construction
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At{" "}
              <span className="text-white font-medium">
                M/s Pir Badshah & Co
              </span>
              , we bridge the gap between architectural vision and structural
              reality. With over{" "}
              <span className="text-green-400 font-semibold">40+ years</span> of
              industry-leading experience, we specialize in high-precision
              engineering and sustainable infrastructure.
            </p>
            <div className="pt-4 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">40+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl font-bold text-white">1000+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Projects Done
                </p>
              </div>
            </div>
          </div>

          {/* SLIDER SIDE */}
          <div className="lg:w-3/5 w-full">
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl">
                <div
                  className={`flex ${isTransitioning ? "transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)" : "transition-none"}`}
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {pagedData.map((slide, idx) => (
                    <div key={idx} className="w-full shrink-0 flex gap-6 px-2">
                      {slide.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                      ))}
                      {/* Flex padding for uneven cards */}
                      {isDesktop && slide.length < 2 && (
                        <div className="flex-1" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTROLS */}
              <div className="flex items-center justify-between mt-10">
                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {originalChunks.map((_, i) => {
                    // Logic to highlight the correct dot during cloning
                    const isActive =
                      current === i + 1 ||
                      (current === 0 && i === originalChunks.length - 1) ||
                      (current === pagedData.length - 1 && i === 0);
                    return (
                      <button
                        key={i}
                        onClick={() => !isTransitioning && setCurrent(i + 1)}
                        className={`h-1.5 transition-all duration-500 rounded-full ${
                          isActive ? "w-8 bg-green-500" : "w-2 bg-white/20"
                        }`}
                      />
                    );
                  })}
                </div>

                {/* Arrow Navigation */}
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-green-500 hover:border-green-500 transition-all active:scale-90"
                    aria-label="Previous slide"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-green-500 hover:border-green-500 transition-all active:scale-90"
                    aria-label="Next slide"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
