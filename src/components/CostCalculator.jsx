import { useState } from "react";

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
    if (!area || area <= 0) return;

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
      className="min-h-screen px-6 md:px-20 py-16 bg-gray-900/30 text-white "
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h1 className="text-4xl font-bold mb-4 text-green-500 ">
          Construction Cost Calculator
        </h1>
        <p className="text-gray-400">
          Enter your project details to estimate the construction cost. Plan
          smart, control your budget, and build with confidence.
        </p>
      </div>

      {/* Result */}
      {result && (
        <div className="max-w-5xl mx-auto mb-12 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold mb-4 text-green-400">
              Estimated Project Cost
            </h2>

            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
              <p className="text-gray-400 text-2xl">
                <span className="">City:</span> {result.city}</p>
              <p className="text-gray-400 text-2xl">
                <span >Area:</span> {result.area} sq ft</p>
              <p className="text-gray-400 text-2xl">
                <span >Type:</span>{" "}
                {result.type === "gray" ? "Gray Structure" : "Complete"}
              </p>
              <p className="text-gray-400 text-2xl">
                <span >Mode:</span>{" "}
                {result.mode === "with_material"
                  ? "With Material"
                  : "Without Material"}
              </p>
              
            </div>

            <div className="mt-6 text-right">
              <p className="text-gray-400">Total Estimated Cost</p>
              <h3 className="text-3xl font-bold text-green-500">
                PKR {result.total.toLocaleString()}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Left Info */}
        <div className="space-y-6">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="font-semibold text-green-400 mb-2">
              Gray Structure
            </h3>
            <p className="text-sm text-gray-400">
              Structural construction including foundation, walls, roofing, and
              plaster. Best for phased construction planning.
            </p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="font-semibold text-green-400 mb-2">
              Complete Finishing
            </h3>
            <p className="text-sm text-gray-400">
              End-to-end construction solution including flooring, paint,
              plumbing, electrical, fixtures, and handover.
            </p>
          </div>
        </div>

        {/* Calculator */}
        <div className="md:col-span-2 bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["City", city, setCity, ["Lahore", "Islamabad", "Karachi"]],
              ["Construction Type", type, setType, [
                { v: "gray", t: "Gray Structure" },
                { v: "complete", t: "Complete" },
              ]],
              ["Construction Mode", mode, setMode, [
                { v: "with_material", t: "With Material" },
                { v: "without_material", t: "Without Material" },
              ]],
            ].map(([label, value, setter, options], i) => (
              <div key={i}>
                <label className="text-sm text-gray-400">{label}</label>
                <select
                  value={value}
                  onChange={(e) => setter(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-500 p-2 mt-2 outline-none focus:border-green-500"
                >
                  {options.map((o, idx) =>
                    typeof o === "string" ? (
                      <option key={idx} value={o} className="text-black">
                        {o}
                      </option>
                    ) : (
                      <option key={idx} value={o.v} className="text-black">
                        {o.t}
                      </option>
                    )
                  )}
                </select>
              </div>
            ))}

            <div>
              <label className="text-sm text-gray-400">
                Covered Area (sq ft)
              </label>
              <input
                type="number"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g. 1250"
                className="w-full bg-transparent border-b border-gray-500 p-2 mt-2 outline-none focus:border-green-500"
              />
            </div>
          </div>

          <button
            onClick={calculateCost}
            className="mt-10 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Calculate Cost
          </button>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;
