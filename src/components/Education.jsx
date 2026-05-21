 function Education() {
  const educationData = [
    {
      title: "Bachelor of Computer Applications (BCA)",
      institute: "MG University",
      year: "2022 - 2025",
    },
    {
      title: "Higher Secondary Education",
      institute: "Kerala State Board",
      year: "2020 - 2022",
    },
    {
      title: "SSLC",
      institute: "Kerala State Board",
      year: "2019 - 2020",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-cyan-950 text-white py-20 px-6">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 tracking-wide">
          Education
        </h2>

        <p className="text-gray-400 mt-4 text-lg">
          My academic journey and achievements
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative group bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden hover:-translate-y-3 hover:shadow-cyan-500/20 transition-all duration-500"
          >
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Year Badge */}
            <div className="inline-block px-4 py-1 mb-6 text-sm font-semibold rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
              {edu.year}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
              {edu.title}
            </h3>

            <p className="text-gray-300 text-lg">
              {edu.institute}
            </p>

            {/* Bottom Line */}
            <div className="mt-6 w-16 h-1 bg-cyan-400 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;