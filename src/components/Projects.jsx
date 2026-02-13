import { useState, useMemo } from "react";
import { projectsDataa } from "../data/projectsData";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Ongoing", "Completed", "Sold"];
const navigate=useNavigate()
  // Memoize filtered data for performance
  const filteredProjects = useMemo(() => {
    const normalizedTab = activeTab.toLowerCase();
    return normalizedTab === "all"
      ? projectsDataa
      : projectsDataa.filter((p) => p.category.toLowerCase() === normalizedTab);
  }, [activeTab]);

  return (
    <section
      id="ourProjects"
      className="relative min-h-screen py-24 px-6 lg:px-20 "
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <header className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-green-500 font-semibold">
            Portfolio
          </h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white">
            Our <span className="text-green-500">Masterpieces</span>
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full" />
        </header>

        {/* MODERN TAB NAVIGATION */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl ${
                  activeTab === tab
                    ? "bg-green-600 text-white shadow-lg shadow-green-900/40"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:border-green-500/50"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 "
                  loading="lazy"
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-widest rounded-full">
                    {project.category}
                  </span>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="flex items-center text-green-500/80 text-xs font-medium uppercase tracking-wider">
                   <span className="mr-2 italic opacity-60">Location:</span> {project.location}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                {/* Decorative architectural line */}
                <div className="pt-4 border-t border-white/5">
                    <button   onClick={() => navigate(`/projects/${project.id}`)} 
                    className="text-xs font-semibold text-white uppercase tracking-widest flex items-center gap-2 hover:text-green-400 transition-colors">
                        View Details 
                        <span className="text-lg">→</span>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 italic">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;