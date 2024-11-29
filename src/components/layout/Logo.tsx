import React from 'react';
import { Code } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Code className="w-8 h-8 text-white transform -rotate-12" />
      <span className="text-2xl font-bold tracking-tight">
        Digital<span className="text-white/80">Era</span>
      </span>
    </div>
  );
}