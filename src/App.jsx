import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";     // ✅ Footer section

function App() {
  return (
    <div className="bg-[#030712] min-h-screen text-white selection:bg-cyan-500/30 font-sans antialiased">
      {/* 🧭 Navigation Bar */}
      <Navbar /> 

      {/* 🚀 Main Content */}
      <main>
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>

      {/* 🔻 Footer */}
      <Footer />
    </div>
  );
}

export default App;
