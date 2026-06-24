import React from 'react';
import { motion } from 'framer-motion';
import { Award, Factory, Globe, Shield, Truck } from 'lucide-react';
import { trustStripData } from '../data/mock';

const iconMap = { Award, Factory, Globe, Shield, Truck };

export const TrustStrip = () => {
  return (
    <section className="relative py-8 overflow-hidden bg-white">
      {/* Animated gradient line on top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-hava-red via-accent-orange to-trust-blue animate-gradient bg-[length:200%_auto]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {trustStripData.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative"
                data-testid={`trust-badge-${index}`}
              >
                <div className="relative bg-white border-2 border-steel-gray rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient hover background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon with gradient bg */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-center">
                    <p className="text-sm font-bold text-charcoal leading-tight">
                      {item.label}
                    </p>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -inset-x-1/2 -top-1/2 h-full w-1/2 transform translate-x-0 group-hover:translate-x-[400%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
