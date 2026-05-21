 import React from "react";

function Home() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-[#030712] overflow-hidden py-24 md:py-0">
      
      {/* 🌌 NEXT-GEN TECH BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="absolute top-0 left-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-[2px] h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 🚀 TWO COLUMN RESPONSIVE CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-center lg:text-left w-full">
        
        {/* 📸 PHOTO COLUMN (Mobile-ൽ മുകളിൽ വരും) */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 mt-8 lg:mt-0">
          <div className="relative group">
            
            {/* Outer Cyber Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            
            {/* Main Photo Frame */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-[2.2rem] overflow-hidden border border-white/10 shadow-2xl ring-4 ring-cyan-500/10 group-hover:ring-cyan-500/30 transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img 
                src="/images/krishnaaaaaa.jpeg"
                alt="Krishna Profile" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Sci-Fi Decorative Corner Brackets */}
            <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl" />
            <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-blue-500 rounded-br-xl" />
            
          </div>
        </div>

        {/* 📝 TEXT COLUMN */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start order-2 lg:order-1">
          
          <div className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest bg-slate-900/80 border border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)] w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>SYSTEM.READY // PORTFOLIO_V2.0</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 select-none leading-none">
            Hi, I'm <br className="hidden lg:block" />
            <span className="relative inline-block mt-2 lg:mt-4">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 blur-2xl opacity-40" />
              <span className="relative bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(6,182,212,0.3)]">
                Krishna
              </span>
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-lg md:text-2xl text-slate-300 font-medium tracking-wide">
            <span>Aspiring</span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 font-mono text-cyan-400 font-bold shadow-md text-base md:text-xl">
              &lt; Software Engineer /&gt;
            </span>
          </div>

          <p className="max-w-xl mt-6 text-slate-400 text-base md:text-lg font-normal leading-relaxed text-center lg:text-left">
            Turning complex code into seamless user experiences. Specializing in building 
            <span className="text-white font-semibold"> modern web architectures</span> and high-impact digital products.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Projects 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a 
              href="#about"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/[0.03] backdrop-blur-md text-slate-300 font-bold rounded-xl border border-white/10 hover:border-cyan-500/40 hover:text-white hover:bg-white/[0.07] transition-all duration-300 shadow-lg text-center"
            >
              Read My Story
            </a>
          </div>
        </div>

      </div>

      {/* Modern Mouse Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hidden lg:flex">
        <div className="w-5 h-9 rounded-full border-2 border-slate-400 flex justify-center p-1.5">
          <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  );
}

export default Home;