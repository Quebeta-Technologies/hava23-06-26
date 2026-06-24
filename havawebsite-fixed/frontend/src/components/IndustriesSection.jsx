import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pickaxe, Mountain, HardHat, Building2, Gem, ArrowUpRight } from 'lucide-react';
import { industriesData } from '../data/mock';

const industryIcons = {
  'Mining': Pickaxe,
  'Tunnelling': Mountain,
  'Construction': HardHat,
  'Quarrying': Building2,
  'Marble & Granite': Gem
};

export const IndustriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-charcoal">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} 
      />
      
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--hava-red)) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.3
        }}
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-orange)) 0%, transparent 70%)',
          filter: 'blur(100px)',
          opacity: 0.25
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full mb-3 font-bold text-xs uppercase tracking-wider">
            <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
            Industries We Serve
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
            Engineered for <span className="bg-gradient-to-r from-accent-orange to-hava-red bg-clip-text text-transparent">Core Industrial</span> Applications
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">{industriesData.intro}</p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[180px]">
          {industriesData.industries.map((industry, index) => {
            const Icon = industryIcons[industry.name];
            const isActive = activeIndex === index;
            
            // Different sizes for bento layout
            const sizeClasses = [
              "md:col-span-3 lg:col-span-5 row-span-2",  // Mining - large
              "md:col-span-3 lg:col-span-4 row-span-1",  // Tunnelling
              "md:col-span-3 lg:col-span-3 row-span-1",  // Construction
              "md:col-span-3 lg:col-span-4 row-span-1",  // Quarrying
              "md:col-span-6 lg:col-span-3 row-span-1",  // Marble & Granite
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`${sizeClasses[index]} group relative overflow-hidden rounded-3xl cursor-pointer`}
                data-testid={`industry-card-${index}`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`} />
                
                {/* Pattern overlay */}
                <div 
                  className="absolute inset-0 opacity-10" 
                  style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                  }} 
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                
                {/* Animated corner accent */}
                <motion.div
                  className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"
                  animate={{ scale: isActive ? 1.5 : 1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  {/* Top: Icon */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30"
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </motion.div>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </motion.div>
                  </div>

                  {/* Bottom: Content */}
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black mb-2">{industry.name}</h3>
                    <p className="text-sm text-white/80 mb-3 line-clamp-2">{industry.description}</p>
                    
                    {/* Stat highlight */}
                    <div className="flex items-baseline gap-2 pt-3 border-t border-white/20">
                      <span className="text-2xl font-black">{industry.stat}</span>
                      <span className="text-xs text-white/70 uppercase tracking-wider">{industry.statLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-x-1/2 -top-1/2 h-full w-1/2 transform translate-x-0 group-hover:translate-x-[400%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
