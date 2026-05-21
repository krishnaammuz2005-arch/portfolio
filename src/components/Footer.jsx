import React from "react";

function Footer() {
  return (
    <footer className="bg-[#030712] text-white py-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Krishna</h3>
          <p className="text-slate-400 leading-relaxed">
            Passionate about crafting seamless user experiences and building
            modern web architectures. Always learning, always evolving.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Navbar</h3>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-2xl font-bold text-cyan-400 mb-4">Contact</h3>
          <ul className="space-y-2 text-slate-300">
            <li><a href="mailto:krishna@example.com" className="hover:text-cyan-400 transition">krishna@example.com</a></li>
            <li><a href="tel:+919876543210" className="hover:text-cyan-400 transition">+91 98765 43210</a></li>
            <li><a href="https://github.com/krishna" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">GitHub</a></li>
            <li><a href="https://linkedin.com/in/krishna" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom small copyright */}
      <div className="mt-12 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Krishna. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
