import { useEffect } from "react";
import {
  ArrowLeft,

  DraftingCompass,
  Building2,
  Ruler,
  PenLine,
  CircleCheck,

} from "lucide-react";



import { useNavigate, Link } from "react-router-dom";

const ArchitectureService = () => {
  // Ensure the user starts at the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const pillars = [
    {
      title: "Concept & Feasibility",
      desc: "We translate your vision into realistic architectural concepts backed by technical feasibility and local bylaws.",
      icon: <DraftingCompass className="text-green-500" size={24} />,
    },
    {
      title: "Space Planning",
      desc: "Intelligent layouts that optimize light, ventilation, circulation, and usability for every square foot.",
      icon: <Ruler className="text-green-500" size={24} />,
    },
    {
      title: "Facade & Elevation",
      desc: "Modern, timeless front elevations tailored to your taste, surroundings, and budget.",
      icon: <Building2 className="text-green-500" size={24} />,
    },
    {
      title: "Detail Drawings",
      desc: "Construction-ready drawings including sections, details, and schedules for on-site precision.",
      icon: <PenLine className="text-green-500" size={24} />,
    },
  ];

  return (
    <section className="min-h-screen text-white pb-20 pt-32 px-6 lg:px-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/5 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-green-500/5 blur-[100px] rounded-full z-0" />

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
              Design Philosophy
            </h2>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              ARCHITECTURAL <br />
              <span className="text-green-500">PRECISION.</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-green-500/30 pl-8">
            Our architecture team at M/s Pir Badshah & Co crafts spaces that are
            beautiful, functional, and structurally sound — aligning aesthetics
            with engineering and everyday living.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {pillars.map((item, index) => (
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
              <DraftingCompass size={48} className="mb-6 text-white/80" />
              <h3 className="text-2xl font-bold text-white mb-4">
                What You Receive
              </h3>
              <ul className="space-y-4 text-green-50 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <CircleCheck size={16} /> Complete architectural drawing set
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck size={16} /> 2D plans with sections & elevations
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck size={16} /> Coordination with structure & MEP
                </li>
                <li className="flex items-center gap-3">
                  <CircleCheck size={16} /> Revisions based on client feedback
                </li>
              </ul>
            </div>
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Building2 size={250} />
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h3 className="text-3xl font-bold mb-4">
                From Sketch to{" "}
                <span className="text-green-500">Site Plan</span>
              </h3>
              <p className="text-gray-400 text-sm">
                We work closely with you to refine your brief, then convert it
                into drawings that contractors can build with confidence.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Briefing",
                  text: "Understanding your lifestyle, functional needs, plot constraints, and budget.",
                },
                {
                  step: "02",
                  title: "Concept Design",
                  text: "Multiple layout options and elevation directions to lock the overall design.",
                },
                {
                  step: "03",
                  title: "Technical Drawings",
                  text: "Finalized plans, sections, and details ready for approvals and execution.",
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
        <div className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-green-900/20 to-transparent border border-white/5 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to design your space?
          </h2>
          <Link
            to="/#ContactUs"
            className="inline-flex items-center justify-center px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-widest rounded-full transition-all shadow-xl shadow-green-900/20"
          >
            Talk to our Architects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureService;