import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { AnimatedBackground } from './AnimatedBackground';

/**
 * PageHero — shared hero block for inner pages.
 * Matches home-page hero language (eyebrow badge, gradient text, animated bg, glass morphism)
 * but lighter-weight (no split image) so it works for content-heavy pages.
 */
export const PageHero = ({
  eyebrow,
  title,
  titleGradient,
  body,
  badge = "ISO 9001:2015 Certified Manufacturer",
  children,
}) => {
  return (
    <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <AnimatedBackground />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-5"
        >
          <div className="glass-morphism px-5 py-2.5 rounded-full inline-flex items-center gap-2 border-2 border-white/40 shadow-xl">
            <Sparkles className="w-4 h-4 text-accent-orange" />
            <span className="text-xs font-bold text-trust-blue uppercase tracking-wider">{eyebrow || badge}</span>
            <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-charcoal mb-5 leading-[1.05] max-w-4xl mx-auto"
        >
          {title}{' '}
          {titleGradient && (
            <span className="gradient-text animate-gradient bg-gradient-to-r from-hava-red via-accent-orange to-hava-red bg-[length:200%_auto]">
              {titleGradient}
            </span>
          )}
        </motion.h1>

        {body && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            {body}
          </motion.p>
        )}

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
};
