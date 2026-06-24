import React from 'react';
import { motion } from 'framer-motion';

export const FloatingElement = ({ children, delay = 0, duration = 3 }) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};