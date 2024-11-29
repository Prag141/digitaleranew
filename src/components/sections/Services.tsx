import React from 'react';
import { Globe, Code, Cloud, Smartphone, Megaphone, Database } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Design',
    description: 'Beautiful, responsive websites that capture your brand's essence.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions for your business needs.',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing to grow your online presence.',
  },
  {
    icon: Database,
    title: 'SaaS Solutions',
    description: 'Custom SaaS platforms tailored to your business requirements.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black text-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Comprehensive digital solutions to elevate your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <service.icon className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}