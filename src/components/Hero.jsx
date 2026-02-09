import heroImg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-6 overflow-hidden flex-col gap-12 min-[930px]:flex-row">
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h72 bg-[#3da254]/20 rounded full blur-3xl animate-pulse" />
      <div className=" min-[930px]:w-1/2 flex flex-col items-center justify-center px-5 min-[930px]:px-15 space-y-10 ">
        <h1 className="font-bold text-3xl">
          From Concept to Construction — We Build It Right
        </h1>
        <p className=" text-xl italic">
          We provide complete construction solutions including architecture
          design, renovation, interior designing, and cost estimation — all
          under one roof.
        </p>
        <button
          className=" relative px-8 py-4  text-white font-semibold text-lg rounded-tl-2xl rounded-br-2xl bg-linear-to-r from-[#1F5E2E] to-[#2E7D32] shadow-lg hover:shadow-white/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl hover:from-[#3da254] hover:to-[#1F5E2E] active:translate-y-0"
        >
          Get Free Consultation
        </button>
      </div>
      <div className="min-[930px]:w-1/2 flex flex-col items-center justify-center px-10 shrink-0">
        <img
          src={heroImg}
          alt="Hero Image"
          className="rounded-tl-[15.5rem]  rounded-br-[10rem]  transition-all duration-500 ease-out
    hover:scale-[1.03]
    hover:-translate-y-2
    hover:shadow-xl
    hover:shadow-white/20"
        />
      </div>
    </div>
  );
};

export default Hero;
