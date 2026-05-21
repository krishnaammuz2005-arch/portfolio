import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030712]/40 backdrop-blur-md border-b border-white/5 px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* 🚀 LOGO */}
        <a href="#home" className="text-xl font-mono font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
          KRISHNA.DEV //
        </a>

        {/* 💻 DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium font-mono text-slate-300">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 border border-cyan-500/30 px-4 py-1.5 rounded-lg bg-slate-900/50 hover:border-cyan-400/80 transition-all">
            Contact
          </a>
        </div>

        {/* 📱 MOBILE HAMBURGER BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-cyan-400 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 📱 MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030712]/95 border-b border-white/5 backdrop-blur-lg flex flex-col items-center py-6 gap-5 font-mono text-slate-300 animate-fadeIn">
          <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="w-4/5 text-center py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;