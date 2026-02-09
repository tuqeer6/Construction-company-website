import { useState } from "react";
import { projectsDataa } from "../data/projectsData";

const Projects = () => {
  const [activeTab, setactiveTab] = useState("All");
  const normalizedTab = activeTab.toLowerCase();
  const projectdata = normalizedTab === "all"
      ? projectsDataa
      : projectsDataa.filter((p) => p.category === normalizedTab);
  return (
    <div
      id="ourProjects"
      className="flex flex-col items-center justify-center min-h-screen mx-10 my-10"
    >
      <h1 className="font-bold text-3xl mb-5">Our projects</h1>
      <div className="relative w-full ">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          <div className="space-x-5 space-y-5 px-5 mb-3">
            <button
              onClick={() => setactiveTab("All")}
              className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                     ${
                       activeTab === "All"
                         ? "bg-green-500/30 text-white border-blue-400/20"
                         : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                     }
                      text-gray-300 transition-all duration-200 whitespace-nowrap
                      `}
            >
              All
            </button>
            <button
              onClick={() => setactiveTab("Ongoing")}
              className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                     ${
                       activeTab === "Ongoing"
                         ? "bg-green-500/30 text-white border-blue-400/20"
                         : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                     }
                      text-gray-300 transition-all duration-200 whitespace-nowrap
                      `}
            >
              Ongoing
            </button>
            <button
              onClick={() => setactiveTab("Completed")}
              className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                     ${
                       activeTab === "Completed"
                         ? "bg-green-500/30 text-white border-blue-400/20"
                         : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                     }
                      text-gray-300 transition-all duration-200 whitespace-nowrap
                      `}
            >
              Completed
            </button>

            <button
              onClick={() => setactiveTab("Sold")}
              className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border
                     ${
                       activeTab === "Sold"
                         ? "bg-blue-500/30 text-white border-blue-400/20"
                         : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                     }
                      text-gray-300 transition-all duration-200 whitespace-nowrap
                      `}
            >
              Sold
            </button>
          </div>
          <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-full w-full border border-white/5">
            {/* projescts show case */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-h-screen overflow-auto">
              {projectdata.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-contain shadow-lg hover:shadow-amber-200 hover:scale-95 rounded-lg"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-semibold">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                    <p className="text-gray-300 text-sm mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
