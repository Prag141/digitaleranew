import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/[0.05] transition-all duration-500 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
          <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
}