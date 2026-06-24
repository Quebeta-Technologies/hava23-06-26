import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--hava-red)) 0%, transparent 70%)',
          filter: 'blur(80px)',
          top: '10%',
          left: '20%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(var(--trust-blue)) 0%, transparent 70%)',
          filter: 'blur(100px)',
          bottom: '10%',
          right: '15%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-orange)) 0%, transparent 70%)',
          filter: 'blur(60px)',
          top: '50%',
          left: '50%',
        }}
        animate={{
          x: [0, -60, 0],
          y: [0, -80, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent-orange/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -100, -20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};