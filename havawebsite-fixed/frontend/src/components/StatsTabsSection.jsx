import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Factory, GraduationCap, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { statsData } from '../data/mock';

const tabIcons = {
  reach: Globe,
  manufacturing: Factory,
  expertise: GraduationCap,
};

export const StatsTabsSection = () => {
  const [activeTab, setActiveTab] = useState(statsData.tabs[0].id);

  const activeTabData = statsData.tabs.find(t => t.id === activeTab);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
      {/* Decorative shapes */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-orange)) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.25
        }}
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--trust-blue)) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.2
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-trust-blue/10 border border-trust-blue/20 text-trust-blue px-4 py-2 rounded-full mb-3 font-bold text-xs uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            By The Numbers
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-3">
            {statsData.heading}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {statsData.supportCopy}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex bg-white border border-steel-gray rounded-2xl p-1.5 gap-1 shadow-md">
            {statsData.tabs.map((tab) => {
              const Icon = tabIcons[tab.id];
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-5 py-2.5 rounded-xl flex items-center gap-2 font-semibold text-sm transition-colors ${
                    isActive ? 'text-white' : 'text-charcoal hover:text-trust-blue'
                  }`}
                  data-testid={`stats-tab-${tab.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-trust-blue to-trust-blue/90 rounded-xl shadow-lg"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <Icon className="relative z-10 w-4 h-4" />
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {activeTabData.stats.map((stat, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="relative group"
                data-testid={`stat-card-${activeTab}-${index}`}
              >
                <div className="relative bg-white border border-steel-gray rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
                  {/* Subtle gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-hava-red via-accent-orange to-trust-blue opacity-60" />

                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-hava-red/0 to-accent-orange/0 group-hover:from-hava-red/5 group-hover:to-accent-orange/5 transition-all duration-500" />

                  <div className="relative">
                    {/* Number - reduced size, gradient text */}
                    <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-hava-red to-accent-orange bg-clip-text text-transparent mb-1.5 leading-none">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    {/* Label */}
                    <div className="text-xs lg:text-sm text-charcoal font-semibold tracking-wide">
                      {stat.label}
                    </div>
                    {/* Decorative line */}
                    <div className="mt-3 h-0.5 w-8 bg-gradient-to-r from-hava-red to-accent-orange rounded-full group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
