import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '99%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="py-24 bg-black text-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Ideas into Digital Reality
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              With over a decade of experience in digital innovation, we've helped businesses
              of all sizes achieve their digital transformation goals. Our team of experts
              combines creativity with technical excellence to deliver outstanding results.
            </p>
            
            <div className="space-y-4">
              {[
                'Innovative Solutions',
                'Expert Team',
                'Latest Technologies',
                'Proven Track Record',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}