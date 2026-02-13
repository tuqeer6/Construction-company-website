import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectsDataa } from "../data/projectsData";
import { ArrowLeft, MapPin, Tag, Calendar, Maximize2 } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Always start at the top
    const selectedProject = projectsDataa.find((p) => p.id === parseInt(id));
    if (!selectedProject) {
      navigate("/");
    } else {
      setProject(selectedProject);
    }
  }, [id, navigate]);

  if (!project) return <p>Loading project details...</p>;

  return (
    <section className="min-h-screen mt-20 text-white pb-20">
      {/* 1. HERO HEADER SECTION */}
      <div className="relative h-[70vh] lg:h-[70vh] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-linear-to-t from-green-300/20 via-transparent to-transparent" />
        
        {/* Back Button Overlay */}
        <div className="absolute top-10 left-6 lg:left-20">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-green-600 transition-all duration-300"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Back </span>
          </button>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-10 left-6 lg:left-20 max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-900 border border-green-500/30 text-green-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            {project.category}
          </span>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-4">
            {project.title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? "text-white" : "text-green-500"}> {word} </span>
            ))}
          </h1>
        </div>
      </div>

      {/* 2. PROJECT INFO BAR */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-8 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Location</p>
              <p className="text-sm font-semibold">{project.location}</p>
            </div>
          </div>
          <div className="p-8 flex items-center gap-4 hover:bg-white/5 transition-colors border-x border-white/10">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <Tag size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Category</p>
              <p className="text-sm font-semibold capitalize">{project.category}</p>
            </div>
          </div>
          <div className="p-8 flex items-center gap-4 hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Status</p>
              <p className="text-sm font-semibold">Completed Project</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CONTENT & GALLERY */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Side: Description */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="w-8 h-0.5 bg-green-500"></span>
                Detail Description
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.detailDescription || project.description}
              </p>
            </div>
            
         
          </div>

          {/* Right Side: Professional Gallery Layout */}
          <div className="lg:col-span-8">
             <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                Gallery <span className="text-green-500">Showcase</span>
              </h2>
              
              <div className="columns-1 md:columns-2 gap-4 space-y-4">
                {project.gallery?.map((img, idx) => (
                  <div key={idx} className="relative group overflow-hidden rounded-2xl bg-white/5">
                    <img
                      src={img}
                      alt={`${project.title} ${idx + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                       <Maximize2 className="text-white" size={32} />
                    </div>
                  </div>
                ))}
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;