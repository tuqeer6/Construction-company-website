import { useEffect } from "react";
import {
  ArrowLeft,
  RotateCcw,
 
  Zap,
  Droplets,
  Paintbrush,
  History,
  ShieldAlert,
  Scaling,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const RenovationService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const renovationExpertise = [
    {
      title: "Structural Retrofitting",
      desc: "Reinforcing old foundations and load-bearing walls to meet modern seismic safety standards.",
      icon: <Scaling className="text-green-500" size={24} />,
    },
    {
      title: "System Modernization",
      desc: "Complete overhaul of obsolete electrical, plumbing, and HVAC systems with energy-efficient tech.",
      icon: <Zap className="text-green-500" size={24} />,
    },
    {
      title: "Damp Proofing & Restoration",
      desc: "Advanced chemical injection and membrane solutions to eliminate 'Seem' and structural decay.",
      icon: <Droplets className="text-green-500" size={24} />,
    },
    {
      title: "Interior Facelift",
      desc: "Premium floor replacement, ceiling redesign, and bespoke cabinetry for a contemporary feel.",
      icon: <Paintbrush className="text-green-500" size={24} />,
    },
  ];

  return (
    <section className="min-h-screen text-white pb-20 pt-32 px-6 lg:px-20 relative overflow-hidden ">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-green-500/5 blur-[120px] rounded-full z-0" />
      <div className="absolute bottom-0 left-0 w-75 h-75 bg-green-500/5 blur-[100px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-green-500 mb-12 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Overview</span>
        </button>

        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-green-500 font-semibold mb-4">
              Revitalizing Spaces
            </h2>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              RESTORATION <br />
              <span className="text-green-500">& RENEWAL.</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-green-500/30 pl-8">
            Renovation is an art of precision. We specialize in breathing new life into 
            dated structures, combining the charm of the original architecture with the 
            luxury and efficiency of modern engineering.
          </p>
        </div>

        {/* The Transformation Matrix (Detailed Section) */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <History className="text-green-500" /> The Modernization Matrix
          </h3>
          <div className="grid md:grid-cols-3 gap-1">
            {[
              { label: "Phase 1: Diagnosis", task: "Infrared thermal imaging to detect hidden leaks and structural cracks." },
              { label: "Phase 2: Extraction", task: "Safe removal of hazardous materials (Asbestos/Lead) and old wiring." },
              { label: "Phase 3: Integration", task: "Installing smart-home features and sustainable insulation layers." }
            ].map((box, i) => (
              <div key={i} className="bg-white/5 p-8 border border-white/10 hover:bg-green-500/5 transition-colors">
                <p className="text-green-500 font-bold text-xs uppercase tracking-tighter mb-2">{box.label}</p>
                <p className="text-gray-300 text-sm">{box.task}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {renovationExpertise.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-green-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6  group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Side Info Card - Renovation Specifics */}
          <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <ShieldAlert size={48} className="mb-6 text-white/90" />
              <h3 className="text-2xl font-bold text-white mb-4 italic">Safety First</h3>
              <p className="text-green-100 text-sm mb-6 leading-relaxed">
                Renovation carries higher risks than new builds. We employ advanced 
                shoring techniques to prevent structural collapse during deep remodeling.
              </p>
              <ul className="space-y-4 text-white text-xs font-bold uppercase tracking-widest">
                <li className="flex items-center gap-3">✓ Live-In Protection</li>
                <li className="flex items-center gap-3">✓ Dust & Noise Control</li>
                <li className="flex items-center gap-3">✓ Structural Shoring</li>
                <li className="flex items-center gap-3">✓ Waste Management</li>
              </ul>
            </div>
            <RotateCcw className="absolute -bottom-10 -right-10 opacity-10 group-hover:rotate-180 transition-transform duration-1000" size={250} />
          </div>
        </div>

        {/* Detailed Workflow Step-by-Step */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 sticky top-32">
              <h3 className="text-4xl font-black mb-6">
                OUR <span className="text-green-500">RE-BUILD</span> <br /> PROCESS
              </h3>
              <p className="text-gray-400 text-md leading-relaxed">
                A meticulous 4-stage process designed to minimize disruption 
                while maximizing the property's value.
              </p>
            </div>
            
            <div className="md:w-2/3 space-y-16">
              {[
                {
                  step: "01",
                  title: "Technical Audit",
                  desc: "We conduct a thorough audit of the existing load-bearing capacity and utilities to identify what can be saved and what must be replaced.",
                },
                {
                  step: "02",
                  title: "Selective Demolition",
                  desc: "Precision removal of non-essential elements. We treat your property with respect, ensuring no damage to the core structure.",
                },
                {
                  step: "03",
                  title: "Reinforcement & Shelling",
                  desc: "Installation of new steel members, updated conduits, and moisture barriers. This is where the 'new soul' of the building is born.",
                },
                {
                  step: "04",
                  title: "Bespoke Finishing",
                  desc: "The application of premium materials, custom lighting, and high-end paint to achieve a flawless 'as-new' finish.",
                }
              ].map((step, i) => (
                <div key={i} className="relative pl-12 border-l border-green-500/20 group">
                  <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-green-500 group-hover:bg-green-500 transition-colors" />
                  <span className="text-xs font-black text-green-500 uppercase tracking-[0.3em] mb-2 block">Stage {step.step}</span>
                  <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                  <p className="text-gray-400 leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 p-12 rounded-[3rem] bg-white/5 border border-white/10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-green-500/5 pointer-events-none" />
          <h2 className="text-4xl font-bold mb-6">Invest in Longevity</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto italic">
            "Don't demolish—evolve. Let us transform your existing asset into a modern masterpiece."
          </p>
          <Link
            to="/#ContactUs"
            className="inline-flex items-center justify-center px-12 py-5 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-widest rounded-full transition-all hover:scale-105"
          >
            Request a Restoration Audit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RenovationService;