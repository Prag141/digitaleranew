import React from 'react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "The Future of Web Development",
    category: "Technology",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
    excerpt: "Exploring the latest trends and technologies shaping the future of web development."
  },
  {
    title: "Cloud Computing Essentials",
    category: "Cloud",
    date: "March 12, 2024",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800",
    excerpt: "Understanding the fundamentals of cloud computing and its business impact."
  },
  {
    title: "Digital Marketing Strategies",
    category: "Marketing",
    date: "March 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    excerpt: "Effective digital marketing strategies for modern businesses."
  }
];

export default function BlogPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Insights and updates from the world of technology and digital innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/5 rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">{post.category}</span>
                    <span className="text-sm text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}