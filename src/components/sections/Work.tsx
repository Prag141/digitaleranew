import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    title: 'Financial Dashboard',
    category: 'SaaS Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    title: 'Healthcare App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

export default function Work() {
  return (
    <section className="py-24 bg-white" id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our Work</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Showcasing our finest projects and success stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[300px] rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-xl transition-colors duration-500 z-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}