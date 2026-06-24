import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { featuredProducts } from '../data/mock';

export const FeaturedProductsCarousel = ({ onEnquireClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredProducts.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const product = featuredProducts[currentIndex];

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-trust-blue/10 text-trust-blue px-4 py-2 rounded-full mb-3 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Featured Products
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-2">
            Our <span className="gradient-text">Featured Products</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Key products developed to support real drilling, demolition, and mining applications.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl rounded-full p-3 hover:bg-hava-red hover:text-white transition-all border border-steel-gray"
            data-testid="featured-prev-btn"
          >
            <ChevronLeft className="w-5 h-5 text-trust-blue group-hover:text-white" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl rounded-full p-3 hover:bg-hava-red hover:text-white transition-all border border-steel-gray"
            data-testid="featured-next-btn"
          >
            <ChevronRight className="w-5 h-5 text-trust-blue" />
          </motion.button>

          {/* Carousel Card */}
          <div className="relative h-[420px] lg:h-[380px] overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full bg-white border border-steel-gray rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image */}
                  <div className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 flex items-center justify-center p-8 overflow-hidden">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative z-10"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-72 w-auto object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                    {/* Decorative ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      className="absolute w-80 h-80 border-2 border-dashed border-hava-red/20 rounded-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <motion.div
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <div className="text-xs font-bold text-hava-red uppercase tracking-wider mb-2">
                        Product {String(currentIndex + 1).padStart(2, '0')} / {String(featuredProducts.length).padStart(2, '0')}
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-black text-charcoal mb-4">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {product.description}
                      </p>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                        <Button
                          onClick={onEnquireClick}
                          className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-6 py-5 shadow-xl rounded-xl group"
                          data-testid="featured-enquire-btn"
                        >
                          Request Details
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {featuredProducts.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-hava-red'
                    : 'w-2 h-2 bg-steel-gray hover:bg-trust-blue'
                }`}
                data-testid={`featured-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
