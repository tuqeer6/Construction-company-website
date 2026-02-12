import { useState } from "react";
import { Calculator, MapPin, HardHat, Layers, X, ArrowRight } from "lucide-react";

const baseRates = {
  Lahore: { gray: 2700, complete: 4500 },
  Islamabad: { gray: 2750, complete: 4600 },
  Karachi: { gray: 2650, complete: 4550 },
};

const withoutMaterial = {
  Lahore: { gray: 700, complete: 1400 },
  Islamabad: { gray: 750, complete: 1500 },
  Karachi: { gray: 725, complete: 1450 },
};

const CostCalculator = () => {
  const [city, setCity] = useState("Lahore");
  const [area, setArea] = useState("");
  const [type, setType] = useState("gray");
  const [mode, setMode] = useState("with_material");
  const [result, setResult] = useState(null);

  const calculateCost = () => {
    if (!area || area <= 0) return alert("Please enter a valid area");

    const rate =
      mode === "with_material"
        ? baseRates[city][type]
        : withoutMaterial[city][type];

    setResult({
      city,
      area,
      type,
      mode,
      rate,
      total: rate * area,
    });
  };

  return (
    <section
      id="cost"
      className="relative min-h-screen px-6 lg:px-20 py-24  overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-green-500 font-semibold mb-3">
            Estimate
          </h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Construction <span className="text-green-500">Calculator</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Plan your investment with precision. Our calculator provides instant 
            estimates based on current market rates in major cities.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          {/* INFO CARDS (Left Side) */}
          <div className="space-y-6">
            <div className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:border-green-500/30">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 mb-4 transition-colors group-hover:bg-green-500/20">
                <Layers className="text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Gray Structure</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Includes foundation, walls, roofing, plaster, and underground piping. 
                Ideal for those managing their own finishing.
              </p>
            </div>

            <div className="group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:border-green-500/30">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/10 mb-4 transition-colors group-hover:bg-green-500/20">
                <HardHat className="text-green-400 w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Complete Finishing</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Premium end-to-end solution including tiles, woodwork, electrical fixtures, 
                and paint. Ready for move-in.
              </p>
            </div>
          </div>

          {/* CALCULATOR FORM (Center/Right) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                {/* Inputs */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-bold">
                    <MapPin size={14} className="text-green-500" /> Select City
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-green-500 outline-none transition-all appearance-none cursor-pointer"
                  >
                    {["Lahore", "Islamabad", "Karachi"].map((c) => (
                      <option key={c} value={c} className="bg-[#1a1a1a]">{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-bold">
                    <Layers size={14} className="text-green-500" /> Structure Type
                  </label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-green-500 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="gray" className="bg-[#1a1a1a]">Gray Structure</option>
                    <option value="complete" className="bg-[#1a1a1a]">Complete Finishing</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-bold">
                    <Calculator size={14} className="text-green-500" /> Construction Mode
                  </label>
                  <select
                    value={mode}
                    onChange={(e) => setMode(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-green-500 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="with_material" className="bg-[#1a1a1a]">With Material</option>
                    <option value="without_material" className="bg-[#1a1a1a]">Labor Only</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-bold">
                    Covered Area (sq ft)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="e.g. 2250"
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:border-green-500 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <button
                onClick={calculateCost}
                className="mt-12 w-full bg-green-600 hover:bg-green-500 text-white py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl shadow-green-900/20 active:scale-95 flex items-center justify-center gap-3 group"
              >
                Calculate Estimate 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>

            {/* ENHANCED RESULT PANEL */}
            {result && (
              <div className="relative bg-white/5 border border-green-500/30 rounded-3xl p-8 lg:p-10 animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
                {/* Close Button */}
                <button 
                  onClick={() => setResult(null)}
                  className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  <X size={20} />
                </button>

                <div className="space-y-8">
                  <div className="border-b border-white/10 pb-6">
                    <p className="text-green-500 text-sm font-bold uppercase tracking-[0.2em] mb-2">Estimation Summary</p>
                    <h3 className="text-white text-2xl font-bold">Project Breakdown</h3>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Location</p>
                      <p className="text-white font-medium">{result.city}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Structure</p>
                      <p className="text-white font-medium capitalize">{result.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Package</p>
                      <p className="text-white font-medium capitalize">{result.mode.replace('_', ' ')}</p>
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest mb-1">Size</p>
                      <p className="text-white font-medium">{result.area} Sq. Ft.</p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/10 gap-6">
                    {/* REDIRECT TO CONTACT US */}
                    <div className="text-left w-full md:w-auto">
                      <a 
                        href="#ContactUs"
                        className="group flex items-center gap-3 text-white hover:text-green-400 transition-all duration-300"
                      >
                        <span className="text-xs uppercase tracking-widest font-bold">
                          Get Official Quote
                        </span>
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all duration-300">
                          <ArrowRight 
                            size={18} 
                            className="group-hover:translate-x-1 transition-transform duration-300" 
                          />
                        </div>
                      </a>
                    </div>

                    <div className="text-right">
                      <p className="text-gray-500 text-[10px] uppercase mb-1 font-bold tracking-[0.2em]">Total Estimated Amount</p>
                      <div className="flex items-baseline justify-end gap-2">
                         <span className="text-green-500 font-bold text-xl">PKR</span>
                         <p className="text-4xl md:text-5xl font-black text-white tracking-tighter">
                            {result.total.toLocaleString()}
                         </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;