 import React from "react";

function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div 
        className="max-w-4xl mx-auto rounded-3xl bg-slate-900/40 backdrop-blur-xl 
        border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden
        transition-all duration-500 hover:border-cyan-500/30 hover:shadow-cyan-500/5 group"
      >
        {/* Decorative background glow behind the card */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

        {/* Top Section: Avatar / Initials */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-cyan-500/20 mb-4 ring-4 ring-white/5">
            K
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Main Bio */}
        <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto text-center font-light mb-10">
          Hi, I am <span className="font-semibold text-white border-b-2 border-cyan-400/40 pb-0.5">Krishna</span>. 
          I am a passionate tech enthusiast driven by the desire to build impactful digital products and solve real-world problems through code.
        </p>

        {/* Quick Info Grid / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {/* Education */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
            <span className="text-2xl mb-2 block">🎓</span>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-1">Education</h3>
            <p className="text-sm text-slate-300 font-medium">Diploma in Computer Engineering</p>
            <p className="text-xs text-slate-400 mt-1">GWPTC Kaimanam</p>
          </div>

          {/* Location */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
            <span className="text-2xl mb-2 block">📍</span>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-1">Location</h3>
            <p className="text-sm text-slate-300 font-medium">Vamanapuram</p>
            <p className="text-xs text-slate-400 mt-1">Kerala, India</p>
          </div>

          {/* Goal */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all duration-300">
            <span className="text-2xl mb-2 block">🚀</span>
            <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-1">Goal</h3>
            <p className="text-sm text-slate-300 font-medium">Software Engineer</p>
            <p className="text-xs text-slate-400 mt-1">Building Digital Products</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;