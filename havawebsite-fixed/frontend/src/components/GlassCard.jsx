import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const GlassCard = ({ children, className = '', delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className={`backdrop-blur-xl bg-white/80 border border-white/20 shadow-2xl rounded-2xl ${className}`}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.25)'
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
};