import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-black text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Building digital excellence since 2010, we've been at the forefront of technological innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {[
              {
                icon: Users,
                title: "Our Team",
                description: "Expert developers, designers, and strategists working together."
              },
              {
                icon: Target,
                title: "Our Mission",
                description: "To transform businesses through innovative digital solutions."
              },
              {
                icon: Award,
                title: "Our Values",
                description: "Excellence, innovation, and client satisfaction drive everything we do."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-white/5 rounded-full mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}