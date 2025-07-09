
export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience 
              creating digital solutions that make a difference. I love turning complex 
              problems into simple, beautiful designs.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-purple-400 font-semibold mb-2">Experience</h3>
                <p className="text-gray-300">3+ Years</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="text-purple-400 font-semibold mb-2">Projects</h3>
                <p className="text-gray-300">50+ Completed</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
              <div className="text-6xl text-purple-400">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
