import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", percent: "95%" },
    { name: "CSS", percent: "90%" },
    { name: "JavaScript", percent: "80%" },
    { name: "React", percent: "85%" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-6 py-20 
                 bg-gradient-to-br from-black via-slate-900 to-cyan-950 text-white"
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-extrabold text-cyan-400 tracking-wide">
          My Skills
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Technologies and tools I work with
        </p>
      </div>

      {/* Skills Container */}
      <div className="max-w-4xl mx-auto w-full space-y-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/10 backdrop-blur-xl 
                       rounded-3xl p-6 shadow-2xl hover:scale-[1.02] 
                       transition-transform duration-300"
          >
            {/* Skill Info */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold tracking-wide">{skill.name}</h3>
              <span className="text-cyan-300 font-semibold text-lg">
                {skill.percent}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-5 bg-slate-700 rounded-full overflow-hidden">
              <div
                className="h-5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 
                           shadow-lg shadow-cyan-500/50 transition-all duration-1000 ease-out"
                style={{ width: skill.percent }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
