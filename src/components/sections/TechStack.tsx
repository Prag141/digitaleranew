import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  {
    category: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    tools: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    category: "DevOps",
    tools: ["AWS", "Docker", "Kubernetes", "Jenkins"]
  },
  {
    category: "Social Media",
    tools: ["Facebook", "Instagram", "Twitter", "LinkedIn"]
  }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-black text-white" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Powered by cutting-edge technologies and tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
              <div className="space-y-2">
                {tech.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (toolIndex * 0.1) }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-white/60 rounded-full" />
                    <span className="text-gray-300">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}