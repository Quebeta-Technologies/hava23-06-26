import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../data/mock';

const ITEMS_PER_SLIDE = 3;

export const TestimonialsCarousel = () => {
  const totalSlides = Math.ceil(testimonials.length / ITEMS_PER_SLIDE);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const visibleTestimonials = testimonials.slice(
    currentSlide * ITEMS_PER_SLIDE,
    currentSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hava-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-accent-orange/10 text-accent-orange px-4 py-2 rounded-full mb-3 font-bold text-xs uppercase tracking-wider">
            <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-2">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Trusted by users who value consistent performance, durability, and reliability.
          </p>
        </motion.div>

        <div className="relative">
          {/* Nav buttons */}
          <motion.button
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 hover:bg-hava-red hover:text-white transition-all border border-steel-gray group"
            data-testid="testimonials-prev"
          >
            <ChevronLeft className="w-5 h-5 text-trust-blue group-hover:text-white transition-colors" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-3 hover:bg-hava-red hover:text-white transition-all border border-steel-gray group"
            data-testid="testimonials-next"
          >
            <ChevronRight className="w-5 h-5 text-trust-blue group-hover:text-white transition-colors" />
          </motion.button>

          {/* Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-steel-gray rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 relative group flex flex-col"
                  data-testid={`testimonial-card-${testimonial.id}`}
                >
                  {/* Top bar gradient */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-hava-red via-accent-orange to-trust-blue rounded-t-2xl" />

                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-hava-red/15" fill="currentColor" />

                  {/* Company logo at top */}
                  <div className="flex items-center justify-between mb-4">
                    <img
                      src={testimonial.companyLogo}
                      alt={testimonial.company}
                      className="w-12 h-12 rounded-xl shadow-md ring-1 ring-steel-gray"
                    />
                    {/* Star rating */}
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-accent-orange fill-accent-orange" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-sm text-gray-700 leading-relaxed mb-5 flex-1 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-steel-gray to-transparent mb-4" />

                  {/* Customer info with avatar */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-hava-red/20 shadow-md"
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-charcoal text-sm truncate">{testimonial.name}</p>
                      <p className="text-xs text-gray-500 truncate">{testimonial.role} · {testimonial.company}</p>
                      <p className="text-xs text-trust-blue font-semibold mt-0.5 truncate">
                        <span className="text-gray-400">Using:</span> {testimonial.product}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-2 bg-hava-red'
                    : 'w-2 h-2 bg-steel-gray hover:bg-trust-blue'
                }`}
                data-testid={`testimonial-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
