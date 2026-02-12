import { useEffect } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  HardHat,
  Construction,
  Building2,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { useNavigate, Link, useParams } from "react-router-dom";


const ConstructionService = () => {
     const { serviceType } = useParams();
  // Ensure the user starts at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const milestones = [
    {
      title: "Pre-Construction",
      desc: "Site analysis, soil testing, and structural blueprints to ensure a solid foundation.",
      icon: <Ruler className="text-green-500" size={24} />,
    },
    {
      title: "Structural Integrity",
      desc: "Using high-grade steel and premium concrete mixes (A+ Quality) for seismic resilience.",
      icon: <Building2 className="text-green-500" size={24} />,
    },
    {
      title: "Project Management",
      desc: "Real-time monitoring and phase-wise reporting to keep the project on track.",
      icon: <HardHat className="text-green-500" size={24} />,
    },
    {
      title: "Quality Finishing",
      desc: "Meticulous attention to detail in masonry, plastering, and weather-proofing.",
      icon: <Construction className="text-green-500" size={24} />,
    },
  ];

  return (
    <section className="min-h-screen text-white pb-20 pt-32 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-green-500/5 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-green-500/5 blur-[100px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-green-500 mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-xs font-bold uppercase tracking-widest">
            Back to Overview
          </span>
        </button>

        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-green-500 font-semibold mb-4">
              Our Core Expertise
            </h2>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              CONSTRUCTION <br />
              <span className="text-green-500">EXCELLENCE.</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-green-500/30 pl-8">
            At M/s Pir Badshah & Co, we don't just build structures; we build
            legacies. With 40+ years of technical mastery, we provide turnkey
            solutions for high-performance residential and commercial
            infrastructure.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {milestones.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-green-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Side Info Card */}
          <div className="bg-green-600 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <ShieldCheck size={48} className="mb-6 text-white/80" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Safety & Standards
              </h3>
              <ul className="space-y-4 text-green-50 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} /> PEC Certified Engineers
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} /> ASTM Standard Materials
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} /> OSHA Safety Compliance
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={16} /> Seismic Load Analysis
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Building2 size={250} />
            </div>
          </div>
        </div>

        {/* Workflow / Execution */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-bold mb-4">
                The Execution{" "}
                <span className="text-green-500">Blueprint</span>
              </h3>
              <p className="text-gray-400 text-sm">
                Our systematic approach ensures zero wastage and maximum
                efficiency from ground-breaking to handover.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 gap-8">
              {[
                {
                  step: "01",
                  title: "Conceptualization & Planning",
                  text: "We align with your vision and budget to create a realistic execution timeline.",
                },
                {
                  step: "02",
                  title: "Heavy Infrastructure",
                  text: "Excavation, foundation pouring, and RCC framework using specialized machinery.",
                },
                {
                  step: "03",
                  title: "Handover & Finishing",
                  text: "Rigorous quality checks and a final walk-through to ensure perfection.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <span className="text-4xl font-black text-white/10 group-hover:text-green-500/40 transition-colors duration-300">
                    {step.step}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{step.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 p-12 rounded-[3rem] bg-linear-to-r from-green-900/20 to-transparent border border-white/5 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to break ground?</h2>
          <Link
            to="/#ContactUs"
            className="inline-flex items-center justify-center px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-widest rounded-full transition-all shadow-xl shadow-green-900/20"
          >
            Consult with our Engineers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConstructionService;