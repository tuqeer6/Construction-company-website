import { useEffect } from "react";
import {
  ArrowLeft,
  Palette,
  Lightbulb,
  Maximize,
  Figma,
  Layers,
  Sparkles,
  CheckCircle2,
  Brush,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const InteriorService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const interiorExpertise = [
    {
      title: "Bespoke Furniture",
      desc: "Custom-engineered cabinetry and furniture pieces tailored to your room's exact dimensions.",
      icon: <Layers className="text-green-500" size={24} />,
    },
    {
      title: "Lighting Architecture",
      desc: "Layered lighting design (Ambient, Task, and Accent) to create depth and mood.",
      icon: <Lightbulb className="text-green-500" size={24} />,
    },
    {
      title: "Space Optimization",
      desc: "Ergonomic layouts that maximize square footage without compromising on luxury.",
      icon: <Maximize className="text-green-500" size={24} />,
    },
    {
      title: "Material Selection",
      desc: "Sourcing premium marbles, exotic woods, and high-performance textiles.",
      icon: <Palette className="text-green-500" size={24} />,
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
              Aesthetic Mastery
            </h2>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-tight">
              CURATED <br />
              <span className="text-green-500">INTERIORS.</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-green-500/30 pl-8">
            Interior design is the silent language of a building. We move beyond 
            decoration to curate environments that harmonize your personal style 
            with modern functionality and timeless elegance.
          </p>
        </div>

        {/* The Sensory Design Breakdown */}
        <div className="mb-24">
           <div className="flex flex-col md:flex-row gap-1 border-y border-white/10 py-12">
              {[
                { label: "Visual", value: "Color Theory & Balance", detail: "Creating palettes that influence mood and perception of space." },
                { label: "Tactile", value: "Textural Contrast", detail: "Layering materials like matte stone against polished brass." },
                { label: "Acoustic", value: "Sound Engineering", detail: "Integrating soft furnishings and panels for optimal quietness." }
              ].map((item, i) => (
                <div key={i} className="flex-1 px-8 border-r border-white/5 last:border-0">
                  <span className="text-green-500 text-[10px] uppercase tracking-widest font-bold">{item.label}</span>
                  <h4 className="text-xl font-bold mt-2 mb-3 text-white">{item.value}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {interiorExpertise.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-green-500/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Side Info Card - Material Selection */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <Sparkles size={48} className="mb-6 text-green-500" />
              <h3 className="text-2xl font-bold text-white mb-4 italic">The Finish</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                We believe in "Total Design." Every handle, fabric swatch, and 
                grout line is selected to fit a cohesive narrative.
              </p>
              <ul className="space-y-4 text-gray-300 text-xs font-bold uppercase tracking-widest">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-500"/> Italian Marble Sourcing</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-500"/> Bespoke Joinery</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-500"/> Smart Lighting Control</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-green-500"/> Sustainable Varnish</li>
              </ul>
            </div>
            <Figma className="absolute -bottom-10 -right-10 opacity-5 group-hover:rotate-12 transition-transform duration-700" size={250} />
          </div>
        </div>

        {/* Visual Workflow Steps */}
        <div className="border-t border-white/10 pt-20">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3">
              <h3 className="text-4xl font-black mb-6">
                FROM MOODBOARD <br />
                <span className="text-green-500">TO REALITY</span>
              </h3>
              <p className="text-gray-400 text-md leading-relaxed">
                Our approach ensures that what you see in the render is exactly 
                what you feel when you step into the finished room.
              </p>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                { step: "01", title: "Moodboard & Persona", desc: "Developing a visual language that reflects your personality and lifestyle requirements." },
                { step: "02", title: "FF&E Specification", desc: "Detailed selection of Furniture, Fixtures, and Equipment from global suppliers." },
                { step: "03", title: "Prototyping", desc: "Physical sampling of wood grains, metal finishes, and fabrics under various light sources." },
                { step: "04", title: "Installation Management", desc: "On-site supervision of craftsmen to ensure millimeter-perfect placement." }
              ].map((step, i) => (
                <div key={i} className="group p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition-all">
                  <span className="text-5xl font-black text-white/5 group-hover:text-green-500/20 transition-colors duration-300">{step.step}</span>
                  <h4 className="text-lg font-bold mt-4 mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-24 p-12 rounded-[3rem] bg-linear-to-b from-green-900/10 to-transparent border border-white/5 text-center relative">
          <Brush className="absolute top-5 left-1/2 -translate-x-1/2 opacity-10" size={60} />
          <h2 className="text-3xl font-bold mb-6">Design Your Private Sanctuary</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Ready to redefine your space? Consult with our interior stylists today.
          </p>
          <Link
            to="/#ContactUs"
            className="inline-flex items-center justify-center px-10 py-4 bg-green-600 hover:bg-green-500 text-white font-black uppercase tracking-widest rounded-full transition-all shadow-xl shadow-green-900/20"
          >
            Book a Design Session
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteriorService;