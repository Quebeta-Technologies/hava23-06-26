import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Globe, Zap, Shield } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { whyHavaData } from '../data/mock';

export const WhyHavaSection = () => {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-trust-blue/10 text-trust-blue px-4 py-2 rounded-full mb-4 font-bold text-sm uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Why Choose Us
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-3">
            Why Buyers Choose <span className="gradient-text">HAVA</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">{whyHavaData.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT - Image with floating tags */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={whyHavaData.image}
                alt="HAVA Manufacturing Excellence"
                className="w-full h-[550px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-trust-blue/60 via-transparent to-transparent" />
            </div>

            {/* Floating tag - Top Left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl border-2 border-white"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal">ISO 9001:2015</div>
                  <div className="text-[10px] text-gray-500 uppercase">Certified</div>
                </div>
              </div>
            </motion.div>

            {/* Floating tag - Top Right */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-20 right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl border-2 border-white"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-hava-red to-accent-orange rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal">Direct Manufacturer</div>
                  <div className="text-[10px] text-gray-500 uppercase">No Middleman</div>
                </div>
              </div>
            </motion.div>

            {/* Floating tag - Bottom Left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-4 bg-white rounded-2xl px-4 py-3 shadow-2xl border-2 border-white"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal">15+ Countries</div>
                  <div className="text-[10px] text-gray-500 uppercase">Global Reach</div>
                </div>
              </div>
            </motion.div>

            {/* Floating tag - Bottom Right */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-8 right-8 bg-white rounded-2xl px-4 py-3 shadow-2xl border-2 border-white"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal">Export Ready</div>
                  <div className="text-[10px] text-gray-500 uppercase">Worldwide</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent-orange/30 rounded-3xl rotate-12" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-trust-blue/20 rounded-3xl -rotate-12" />
          </motion.div>

          {/* RIGHT - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {whyHavaData.points.map((point, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 transition-all shadow-sm hover:shadow-xl data-[state=open]:shadow-xl data-[state=open]:border-hava-red overflow-hidden"
                >
                  <AccordionTrigger 
                    className="px-6 py-5 hover:no-underline group"
                    data-testid={`why-hava-accordion-${index}`}
                  >
                    <div className="flex items-center gap-4 text-left flex-1">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-data-[state=open]:from-trust-blue group-data-[state=open]:to-trust-blue/80 transition-all"
                      >
                        <span className="text-white font-black text-sm">{String(index + 1).padStart(2, '0')}</span>
                      </motion.div>
                      <span className="text-base lg:text-lg font-bold text-charcoal group-data-[state=open]:text-hava-red transition-colors">
                        {point.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-14"
                    >
                      <p className="text-gray-600 leading-relaxed">{point.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-hava-red">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Verified by our quality team</span>
                      </div>
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
