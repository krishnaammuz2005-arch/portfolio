 import React, { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");

  // Email ഡയറക്റ്റ് അയക്കാനുള്ള ഫങ്ക്ഷൻ (Web3Forms Integration)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    // https://web3forms.com/ -ൽ പോയി ഫ്രീ ആയി കീ എടുത്ത് ഇവിടെ പേസ്റ്റ് ചെയ്യുക
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully! 🚀");
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-4 bg-[#020617] overflow-hidden">
      
      {/* 🌌 HYPER-PREMIUM BACKGROUND ACCENTS */}
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Radial Neon Lights */}
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/10 to-blue-600/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="px-3 py-1 rounded-md text-xs font-mono tracking-widest bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            GET IN TOUCH
          </span>
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-white mt-4">
            Let's Build <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">Something Great</span>
          </h2>
          <p className="text-slate-400 mt-4 text-base md:text-lg max-w-md mx-auto font-light">
            I'm open to collaborations, internships, or just sharing tech ideas.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
          
          {/* 📬 LEFT: Sleek Tech Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-5 justify-between">
            
            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <a href="mailto:krishna@gmail.com" className="p-6 rounded-2xl bg-slate-900/30 backdrop-blur-xl border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300 flex items-center gap-5 group shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-xl text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  ✉️
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Me</h3>
                  <p className="text-slate-200 font-semibold text-base mt-0.5 group-hover:text-cyan-400 transition-colors">krishna@gmail.com</p>
                </div>
              </a>

              {/* Phone Card */}
              <a href="tel:+919876543210" className="p-6 rounded-2xl bg-slate-900/30 backdrop-blur-xl border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300 flex items-center gap-5 group shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-xl text-cyan-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  📞
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Call Me</h3>
                  <p className="text-slate-200 font-semibold text-base mt-0.5 group-hover:text-cyan-400 transition-colors">+91 9876543210</p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-6 rounded-2xl bg-slate-900/30 backdrop-blur-xl border border-white/5 hover:border-cyan-500/40 hover:bg-slate-900/60 transition-all duration-300 flex items-center gap-5 group shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-xl text-cyan-400 group-hover:scale-110 transition-all">
                  📍
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Location</h3>
                  <p className="text-slate-200 font-semibold text-base mt-0.5">Kerala, India</p>
                </div>
              </div>
            </div>

            {/* Quick Tech Note on the side */}
            <div className="hidden lg:block p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 to-slate-950/40 border border-cyan-500/10 text-xs font-mono text-cyan-400/60 leading-relaxed">
              // Active listening mode enabled.<br />
              // Responses are typically sent within 24 hours.
            </div>

          </div>

          {/* 📝 RIGHT: Premium Functional Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 flex flex-col gap-5 w-full bg-slate-950/40 backdrop-blur-2xl border border-white/5 p-6 md:p-10 rounded-3xl shadow-2xl relative">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Input Name */}
              <div className="flex flex-col gap-2 relative group/input">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Krishna"
                  className="p-4 rounded-xl bg-slate-900/50 border border-white/10 outline-none text-slate-100 placeholder-slate-600 focus:border-cyan-500/50 transition-all duration-300"
                />
              </div>

              {/* Input Email */}
              <div className="flex flex-col gap-2 relative group/input">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="krishna@example.com"
                  className="p-4 rounded-xl bg-slate-900/50 border border-white/10 outline-none text-slate-100 placeholder-slate-600 focus:border-cyan-500/50 transition-all duration-300"
                />
              </div>
            </div>

            {/* Textarea Message */}
            <div className="flex flex-col gap-2 relative group/input">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
              <textarea
                name="message"
                required
                placeholder="Let's build a software product..."
                className="p-4 rounded-xl bg-slate-900/50 border border-white/10 outline-none text-slate-100 placeholder-slate-600 min-h-[160px] max-h-[260px] resize-y focus:border-cyan-500/50 transition-all duration-300"
              ></textarea>
            </div>

            {/* Glowing Submit Button */}
            <button
              type="submit"
              className="mt-2 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-extrabold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 text-center flex items-center justify-center gap-3 group"
            >
              <span>Transmit Message</span>
              <span className="group-hover:translate-x-1 transition-transform text-lg">🚀</span>
            </button>

            {/* Form Submission Status Message */}
            {result && (
              <div className="text-center text-sm font-mono mt-2 font-semibold text-cyan-400 animate-pulse">
                {result}
              </div>
            )}

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;