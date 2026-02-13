import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Construction, 
  PencilRuler, 
  Paintbrush, 
  RotateCcw, 
  ShieldCheck, 
  Clock, 
  Gem 
} from "lucide-react";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allServices = [
    {
      id: "construction",
      title: "General Construction",
      tagline: "Infrastructure & Engineering",
      icon: <Construction size={32} />,
      desc: "Turning blueprints into reality with 40+ years of structural expertise. From high-rise commercial hubs to luxury residential estates.",
      features: ["Structural Engineering", "Project Management", "Material Procurement"],
      color: "from-green-600/20",
    },
    {
      id: "architecture",
      title: "Architecture Design",
      tagline: "Visionary Planning",
      icon: <PencilRuler size={32} />,
      desc: "Blending modern aesthetics with functional precision. We create spaces that are iconic, sustainable, and deeply human.",
      features: ["3D Visualization", "BIM Modeling", "Urban Planning"],
      color: "from-blue-600/20",
    },
    {
      id: "renovations",
      title: "Renovation & Renewal",
      tagline: "Restoring Legacies",
      icon: <RotateCcw size={32} />,
      desc: "Revitalizing existing structures through technical retrofitting and modern modernization without losing architectural soul.",
      features: ["Structural Strengthening", "System Overhaul", "Damp Proofing"],
      color: "from-amber-600/20",
    },
    {
      id: "interior",
      title: "Interior Designing",
      tagline: "Bespoke Environments",
      icon: <Paintbrush size={32} />,
      desc: "The final layer of luxury. We curate furniture, lighting, and textures to create a cohesive, sensory living experience.",
      features: ["Custom Joinery", "Lighting Design", "Material Curation"],
      color: "from-purple-600/20",
    },
  ];

  return (
    <div className="min-h-screen  text-white pt-32 pb-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-24">
          <h2 className="text-green-500 uppercase tracking-[0.4em] text-sm font-bold mb-4">
            Our Solutions
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">
              INTEGRATED <br /> <span className="text-green-500">EXPERTISE.</span>
            </h1>
            <p className="max-w-md text-gray-400 text-lg leading-relaxed border-l border-white/10 pl-6">
              M/s Pir Badshah & Co provides a seamless transition from the first architectural 
              sketch to the final interior finish. Discover our four pillars of excellence.
            </p>
          </div>
        </div>

        {/* Services Master Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allServices.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-green-500/50"
            >
              {/* Background Gradient Glow */}
              <div className={`absolute inset-0 bg-linear-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <ArrowRight className="text-white/20 group-hover:text-green-500 group-hover:translate-x-2 transition-all" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-green-500/60 mb-2 block">
                    {service.tagline}
                  </span>
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feat, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold tracking-widest bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* The Value Proposition (Detailed Footer Section) */}
        <div className="mt-32 grid lg:grid-cols-4 gap-12 py-16 border-y border-white/10 bg-white/2 rounded-[3rem] px-12">
          <div className="space-y-4">
            <ShieldCheck className="text-green-500" size={40} />
            <h4 className="font-bold text-lg">Guaranteed Safety</h4>
            <p className="text-gray-500 text-sm">Full compliance with international building codes and OSHA standards.</p>
          </div>
          <div className="space-y-4">
            <Clock className="text-green-500" size={40} />
            <h4 className="font-bold text-lg">On-Time Delivery</h4>
            <p className="text-gray-500 text-sm">Rigorous project management ensuring deadlines are never missed.</p>
          </div>
          <div className="space-y-4">
            <Gem className="text-green-500" size={40} />
            <h4 className="font-bold text-lg">Premium Quality</h4>
            <p className="text-gray-500 text-sm">Sourcing only the finest A-grade materials for structural and aesthetic work.</p>
          </div>
          <div className="space-y-4 flex flex-col justify-center">
             <Link to="/#ContactUs" className="bg-green-600 text-center py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-green-500 transition-colors">
                Start Project
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;