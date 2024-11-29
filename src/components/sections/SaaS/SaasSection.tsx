import React from 'react';
import { Sparkles, Rocket, Lock } from 'lucide-react';

export default function SaasSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900" id="saas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-2 bg-white/5 rounded-full mb-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon: SaaS Platform</h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Transform your business with our upcoming suite of powerful SaaS tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Rocket,
              title: 'Launch Fast',
              description: 'Deploy your solutions quickly with our intuitive platform',
            },
            {
              icon: Lock,
              title: 'Enterprise Security',
              description: 'Bank-grade security for your sensitive business data',
            },
            {
              icon: Sparkles,
              title: 'AI-Powered',
              description: 'Leverage cutting-edge AI to optimize your workflows',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block relative">
            <input
              type="email"
              placeholder="Enter your email for early access"
              className="w-full md:w-96 px-6 py-4 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-white/30"
            />
            <button className="mt-4 md:mt-0 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}