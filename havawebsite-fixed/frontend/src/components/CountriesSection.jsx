import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { countriesData } from '../data/mock';

export const CountriesSection = () => {
  // Duplicate for seamless infinite scroll
  const duplicatedCountries = [...countriesData.countries, ...countriesData.countries];

  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-br from-slate-900 via-trust-blue to-slate-900">
      {/* Animated background glow */}
      <motion.div
        animate={{ x: [0, 100, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -100, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-hava-red/20 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full mb-3 font-bold text-xs uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            Global Presence
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-2">
            {countriesData.heading}
          </h2>
          <p className="text-sm text-white/70">{countriesData.subheading}</p>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade gradients on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-trust-blue to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-trust-blue to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Left to Right */}
          <motion.div
            className="flex gap-4 mb-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedCountries.map((country, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3 hover:bg-white/20 hover:border-accent-orange transition-all shadow-lg min-w-[190px]">
                  <img
                    src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                    alt={country.name}
                    className="w-12 h-9 object-cover rounded-md shadow-lg ring-1 ring-white/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{country.name}</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">{country.code}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 - Right to Left (reverse direction) */}
          <motion.div
            className="flex gap-4"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            {duplicatedCountries.slice().reverse().map((country, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-3 flex items-center gap-3 hover:bg-white/20 hover:border-hava-red transition-all shadow-lg min-w-[190px]">
                  <img
                    src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                    alt={country.name}
                    className="w-12 h-9 object-cover rounded-md shadow-lg ring-1 ring-white/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{country.name}</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-wider">{country.code}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
