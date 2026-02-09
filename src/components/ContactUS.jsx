import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUS = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_94y22md",
        "template_fxmzuko",
        {
          first_name: first,
          last_name: last,
          email: email,
          message: message,
        },
        "xCwD6kHlBRoE5O2jJ",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFirst("");
          setLast("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        },
      );
  };
  return (
    <div
      id="ContactUs"
      className="flex flex-col items-center justify-center min-h-screen mx-10 my-10"
    >
      <div className="flex flex-col items-center justify-center px-10 space-y-3">
        <h1 className="font-bold text-3xl ">Get In Touch</h1>
        <p className=" md:px-20  text-center">
          We specialize in high-performance construction and visionary
          architectural design, building durable foundations that pave the way
          for your future growth and a modern lifestyle. Let us transform your
          complex blueprints into stunning, functional realities.
        </p>
      </div>
      {/* form main dev */}
      <div className="relative bg-gray-900/30 backdrop-blur-xl rounded-xl mt-15 lg:mx-15 sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
        <div className="flex flex-col lg:flex-row ">
          {/* left section */}
          <div className="lg:w-1/2 relative bg-white/5 backdrop-blur-xl rounded-xl  sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
            <div className=" px-5 py-15 ">
              <div className="text-gray-300 ">
                <h1 className="font-semibold text-lg mb-3">
                  Contact Information
                </h1>
                <p className="leading-loose">
                  We deliver high-quality construction services and innovative
                  interior designs across Pakistan. 
                </p>
              </div>
              <div className="flex flex-col space-y-8 mt-10 text-gray-300">
                <div className="flex items-center gap-5">
                  <Phone />
                  <span>+92-3458558866</span>
                </div>
                <div className="flex items-center gap-5">
                  <Mail />
                  <span>tuqeershah7@gamil.com</span>
                </div>
                <div className="flex items-center gap-5">
                  <MapPin />
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </div>
          </div>
          {/* right section */}
          <div className=" px-20 py-10 ">
            <form
              onSubmit={(e) => {
                return submitHandler(e);
              }}
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col md:flex-row space-x-10">
                <div>
                  <h3 className="mb-1.5">First Name</h3>
                  <input
                    required
                    value={first}
                    onChange={(e) => {
                      setFirst(e.target.value);
                    }}
                    className=" p-3 bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-green-500 transition-colors leading-relaxed"
                    type="text"
                    placeholder="Enter First name here"
                  />
                </div>
                <div className="mt-5 md:mt-0">
                  <h3 className="mb-1.5">Last Name</h3>
                  <input
                    value={last}
                    onChange={(e) => {
                      setLast(e.target.value);
                    }}
                    className=" p-3 bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-green-500 transition-colors leading-relaxed"
                    type="text"
                    placeholder="Enter Last name here"
                  />
                </div>
              </div>
              <div>
                <h3 className="mb-1.5"> Email Address</h3>
                <input
                  value={email}
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className=" p-3 bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-green-500 transition-colors leading-relaxed"
                  type="email"
                  placeholder="Enter your email here"
                />
              </div>
              <div>
                <h3 className="mb-1.5"> Message</h3>
                <textarea
                  value={message}
                  required
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className=" p-3 bg-transparent border-b border-gray-500 py-2 focus:outline-none focus:border-green-500 transition-colors leading-relaxed w-full"
                  placeholder="Write your Message Here"
                  name=""
                  id=""
                ></textarea>
              </div>
              <button className=" px-6 py-2  text-white font-semibold  rounded-4xl border-2 border-white/30 shadow-lg hover:shadow-white/20 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl bg-linear-to-r hover:from-[#ffda34]/50 hover:to-[#1F5E2E] active:translate-y-0">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
