import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
const testimonials = [
  {
    name: "Ali Khan",
    role: "Homeowner",
    image: t1,
    content:
      "M/s Pir Badshah & Co transformed our dream home into reality. Their construction team was professional, timely, and meticulous with every detail.",
  },
  {
    name: "Sara Ali",
    role: "Interior Designer Client",
    image: t3,
    content:
      "The interior design services were exceptional. Every room reflects elegance and comfort, perfectly matching our vision and style.",
  },
  {
    name: "Omar Farooq",
    role: "Business Owner",
    image: t2,
    content:
      "Their renovation services brought new life to our office space. The team worked efficiently and exceeded our expectations with modern design solutions.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative bg-gray-900/30 text-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left side header */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-green-400">
              What our clients are saying
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0">
              From home construction to interior design and renovation projects, we
              strive to deliver exceptional quality, aesthetics, and professionalism
              in every project.
            </p>
          </div>

          {/* Right side testimonials */}
          <div className="lg:w-1/2 w-full space-y-5">
            {testimonials.map((testi, key) => (
              <div
                key={key}
                className="bg-white/5 p-6 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl shadow-lg"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="shrink-0 text-4xl font-bold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    “
                  </div>
                  <div className="grow">
                    <p className="text-gray-200">{testi.content}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <img
                        src={testi.image}
                        alt={testi.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-green-400"
                      />
                      <div>
                        <h3 className="font-semibold">{testi.name}</h3>
                        <h4 className="text-gray-400 text-sm">{testi.role}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
