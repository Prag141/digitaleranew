import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "per month",
    features: [
      "5 Web Pages",
      "Basic SEO",
      "Mobile Responsive",
      "Contact Form",
      "Analytics"
    ]
  },
  {
    name: "Professional",
    price: "$199",
    period: "per month",
    features: [
      "10 Web Pages",
      "Advanced SEO",
      "Mobile Responsive",
      "Contact Form",
      "Analytics",
      "E-commerce Integration",
      "Custom Features"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    features: [
      "Unlimited Pages",
      "Enterprise SEO",
      "Mobile Responsive",
      "Advanced Features",
      "Priority Support",
      "Custom Integration",
      "Dedicated Manager"
    ]
  }
];

export default function PricingPage() {
  return (
    <main className="pt-20">
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pricing Plans</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative p-8 rounded-xl ${
                  plan.popular
                    ? 'bg-white/10 border-2 border-white/20'
                    : 'bg-white/5'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-white/60" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-lg font-medium transition-colors duration-300 border border-white/20 hover:bg-white hover:text-black">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}