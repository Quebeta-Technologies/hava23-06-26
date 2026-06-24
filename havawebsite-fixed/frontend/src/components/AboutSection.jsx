import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { aboutData } from '../data/mock';

export const AboutSection = ({ onCtaClick }) => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decorative grid */}
              <div className="absolute -top-6 -left-6 w-32 h-32 grid-pattern opacity-30" />
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={aboutData.image}
                  alt="About HAVA Manufacturing"
                  className="w-full h-[500px] object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-trust-blue/40 to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
                className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-steel-gray"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-charcoal">25,000+</div>
                    <div className="text-xs text-gray-600 uppercase tracking-wider">Sq. Ft. Facility</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative corner accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-orange rounded-2xl rotate-12 opacity-20" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-hava-red/10 text-hava-red px-4 py-2 rounded-full mb-6 font-bold text-sm uppercase tracking-wider">
              <div className="w-2 h-2 bg-hava-red rounded-full animate-pulse" />
              {aboutData.badge}
            </div>

            <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-6 leading-tight">
              Engineering <span className="gradient-text">Excellence</span> Since Inception
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {aboutData.intro}
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              {aboutData.description}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {aboutData.highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="border-l-4 border-hava-red pl-4 py-2"
                >
                  <div className="text-2xl font-black text-charcoal">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button
                onClick={onCtaClick}
                className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-8 py-6 text-base shadow-xl rounded-2xl group"
                data-testid="about-cta-btn"
              >
                {aboutData.cta}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
