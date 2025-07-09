
import { Code, Database, Palette, Smartphone } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Database,
      title: "Backend Development", 
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      skills: ["Figma", "Adobe XD", "Responsive Design", "Prototyping"],
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      color: "from-orange-400 to-red-400"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-gray-300 text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
