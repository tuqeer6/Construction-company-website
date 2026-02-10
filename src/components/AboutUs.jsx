
import {aboutUsData} from "../data/projectsData";

const AboutUs = () => {
  
  return (
    <div
      id="AboutUs"
      className="flex flex-col items-center justify-center min-h-screen mx-10 my-10"
    >
      <h1 className="font-bold text-3xl mb-5">About Us</h1>

      <div className="relative md:mx-30">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          <p className="text-lg">
            At <strong className="text-green-200">M/s Pir Badshah & Co</strong>,
            we are dedicated to transforming ideas into reality through
            innovative construction and design solutions. With over{" "}
            <strong className="text-green-200">40+ years</strong> of experience
            in the construction industry, we specialize in a comprehensive range
            of services including construction management, architecture design,
            renovation services, and interior designing. Our mission is to
            deliver projects that combine functionality, aesthetics, and
            sustainability, tailored to meet the unique needs of each client.
          </p>
        </div>
      </div>

      <div className="relative w-full mt-5 p-3">
        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          <h2 className="flex items-center justify-center font-bold text-2xl text-green-200 mb-5">
            Our Services
          </h2>

          <div className="flex items-center justify-center gap-10 flex-wrap">
            {aboutUsData.map((about)=>{
              return <div className=" bg-gray-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
               <div key={about.id} className="w-70 p-4 ">
                <img
                  src={about.image}
                  alt={about.title}
                  className="h-70 w-70 object-cover mb-4 shadow-lg hover:shadow-amber-200 hover:scale-95 rounded-2xl "
                />
                <h2 className="font-bold ">{about.title}</h2>
                <div className="w-20 border-b border-3 border-green-500 my-2 " />
                <p>
                 {about.description}
                </p>
              </div>
             <div className="flex items-center justify-center">
               <button
          className=" px-6 py-2  text-white font-semibold  rounded-4xl border-2 border-white/30 shadow-lg hover:shadow-white/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl bg-linear-to-r hover:from-[#ffda34]/50 hover:to-[#1F5E2E] active:translate-y-0"
        >
          Explore Service
        </button>
             </div>
              </div>
              
            
          
            })}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
