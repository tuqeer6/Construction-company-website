import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUS = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSending(true);

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
        "xCwD6kHlBRoE5O2jJ"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFirst("");
          setLast("");
          setEmail("");
          setMessage("");
          setIsSending(false);
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
          setIsSending(false);
        }
      );
  };

  return (
    <section
      id="ContactUs"
      className="relative min-h-screen py-24 px-6 lg:px-20 bg-slate-900/20 overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-green-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-green-500 font-semibold mb-3">
            Inquiry
          </h2>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Get In <span className="text-green-500">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Let us transform your complex blueprints into stunning, functional 
            realities. Reach out today for a consultation.
          </p>
        </header>

        {/* Main Glassmorphism Container */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            
            {/* LEFT SECTION: Contact Info Card */}
            <div className="lg:w-1/3 bg-green-600 p-10 lg:p-14 text-white flex flex-col justify-between relative">
              {/* Decorative Circle */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
              
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-green-100 mb-12 leading-relaxed">
                  We deliver high-quality construction and architecture solutions 
                  across Pakistan.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Phone size={20} />
                    </div>
                    <span className="font-medium">+92-3458558866</span>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <Mail size={20} />
                    </div>
                    <span className="font-medium">pir.badshah111@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                      <MapPin size={20} />
                    </div>
                    <span className="font-medium">Islamabad, Pakistan</span>
                  </div>
                </div>
              </div>

              {/* Social or Brand Label */}
              <div className="mt-16 pt-8 border-t border-white/20">
                <p className="text-sm font-bold uppercase tracking-widest text-green-200">
                  M/S Pir Badshah & Co.
                </p>
              </div>
            </div>

            {/* RIGHT SECTION: Form */}
            <div className="lg:w-2/3 p-10 lg:p-16">
              <form onSubmit={submitHandler} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="relative group">
                    <label className="text-xs uppercase tracking-widest text-gray-300 font-bold mb-2 block group-focus-within:text-green-500 transition-colors">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      value={first}
                      onChange={(e) => setFirst(e.target.value)}
                      placeholder="first name"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-green-500 transition-all placeholder:text-gray-500"
                    />
                  </div>

                  <div className="relative group">
                    <label className="text-xs uppercase tracking-widest text-gray-300 font-bold mb-2 block group-focus-within:text-green-500 transition-colors">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={last}
                      onChange={(e) => setLast(e.target.value)}
                      placeholder="last name"
                      className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-green-500 transition-all placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-gray-300 font-bold mb-2 block group-focus-within:text-green-500 transition-colors">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-green-500 transition-all placeholder:text-gray-500"
                  />
                </div>

                <div className="relative group">
                  <label className="text-xs uppercase tracking-widest text-gray-300 font-bold mb-2 block group-focus-within:text-green-500 transition-colors">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-green-500 transition-all placeholder:text-gray-500 resize-none"
                  />
                </div>

                <button
                  disabled={isSending}
                  className="group relative px-10 py-4 bg-green-600 text-white font-bold rounded-xl overflow-hidden transition-all hover:bg-green-500 active:scale-95 disabled:opacity-50 flex items-center gap-3"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;