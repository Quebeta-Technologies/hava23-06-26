import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Download, ArrowRight, Sparkles, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { CardContent } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { VideoSection } from '../components/VideoSection';
import { TrustStrip } from '../components/TrustStrip';
import { AboutSection } from '../components/AboutSection';
import { WhyHavaSection } from '../components/WhyHavaSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { StatsTabsSection } from '../components/StatsTabsSection';
import { FeaturedProductsCarousel } from '../components/FeaturedProductsCarousel';
import { CountriesSection } from '../components/CountriesSection';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { ContactFormSection } from '../components/ContactFormSection';
import { toast, Toaster } from 'sonner';
import {
  heroData,
  heroImage,
  productCategories,
} from '../data/mock';

export const ModernHomePage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const productScrollRef = useRef(null);

  const scrollProducts = (direction) => {
    if (productScrollRef.current) {
      const scrollAmount = 400;
      productScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleEnquireNow = () => setQuoteModalOpen(true);
  const handleReadMore = () => toast.info('Product details page coming soon!');
  const handleDownloadBrochure = () => setBrochureModalOpen(true);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* 1. VIDEO SECTION (first after header) */}
      <VideoSection />

      {/* 2. TRUST STRIP (between video and hero) */}
      <TrustStrip />

      {/* 3. HERO SECTION - 50/50 split: Text Left, Image Right */}
      <section ref={heroRef} className="relative py-8 lg:py-12 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="glass-morphism px-5 py-2.5 rounded-full inline-flex items-center gap-2 border-2 border-white/40 shadow-xl">
                  <Sparkles className="w-4 h-4 text-accent-orange" />
                  <span className="text-xs font-bold text-trust-blue">ISO 9001:2015 Certified Manufacturer</span>
                  <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-charcoal mb-5 leading-[1.05]"
              >
                <span className="block">Your Progressive</span>
                <span className="gradient-text block animate-gradient bg-gradient-to-r from-hava-red via-accent-orange to-hava-red bg-[length:200%_auto]">
                  Mining & Rock Drilling
                </span>
                <span className="block">Partner</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed"
              >
                {heroData.subheadline}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-sm text-gray-600 mb-8"
              >
                {heroData.supportCopy}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-8 py-6 text-base shadow-2xl rounded-xl animate-pulse-glow group relative overflow-hidden w-full sm:w-auto"
                    data-testid="hero-get-quote-btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {heroData.primaryCTA}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 shimmer" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    className="glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-8 py-6 text-base rounded-xl shadow-lg backdrop-blur-xl w-full sm:w-auto"
                    data-testid="hero-explore-products-btn"
                  >
                    {heroData.secondaryCTA}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* RIGHT - HAVA Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative glow behind image */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-hava-red/30 to-accent-orange/30 rounded-3xl blur-3xl"
                />

                {/* Main image */}
                <motion.img
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  src={heroImage}
                  alt="HAVA Mining and Rock Drilling Equipment"
                  className="relative w-full h-auto rounded-3xl shadow-2xl"
                  data-testid="hero-image"
                />

                {/* Floating tag - bottom left */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl border-2 border-white"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-charcoal">25,000+</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">Sq. Ft. Facility</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. About Us */}
      <AboutSection onCtaClick={() => setQuoteModalOpen(true)} />

      {/* 5. Product Categories */}
      <section id="products" className="py-10 lg:py-14 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-hava-red/10 text-hava-red px-4 py-2 rounded-full mb-3 font-bold text-xs uppercase tracking-wider">
              <div className="w-2 h-2 bg-hava-red rounded-full animate-pulse" />
              Product Range
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-2">
              Complete <span className="gradient-text">Product Range</span>
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              HAVA offers a complete range of pneumatic rock drilling equipment, demolition tools, accessories, and spare parts.
            </p>
          </motion.div>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollProducts('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 glass-morphism shadow-2xl rounded-full p-4 hover:bg-white transition-all"
              data-testid="products-scroll-left-btn"
            >
              <ChevronLeft className="w-6 h-6 text-trust-blue" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollProducts('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 glass-morphism shadow-2xl rounded-full p-4 hover:bg-white transition-all"
              data-testid="products-scroll-right-btn"
            >
              <ChevronRight className="w-6 h-6 text-trust-blue" />
            </motion.button>

            <div
              ref={productScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-12 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productCategories.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex-shrink-0 w-80 snap-center"
                  data-testid={`product-card-${index}`}
                >
                  <div className="bg-white border border-steel-gray rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group h-full">
                    <div className="h-56 overflow-hidden relative bg-gradient-to-br from-slate-100 to-blue-50">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-hava-red transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-6 line-clamp-3">{product.description}</p>
                      <div className="flex flex-col gap-3">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={handleEnquireNow}
                            className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-semibold shadow-lg"
                            data-testid={`product-enquire-btn-${index}`}
                          >
                            Enquire Now
                          </Button>
                        </motion.div>
                        <div className="flex gap-2">
                          <Button
                            onClick={handleReadMore}
                            variant="outline"
                            className="flex-1 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
                          >
                            Read More
                          </Button>
                          <Button
                            onClick={handleDownloadBrochure}
                            variant="outline"
                            className="flex-1 border-steel-gray text-charcoal hover:bg-steel-gray"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why HAVA */}
      <WhyHavaSection />

      {/* 7. Industries */}
      <IndustriesSection />

      {/* 8. Stats with Tabs */}
      <StatsTabsSection />

      {/* 9. Featured Products Carousel */}
      <FeaturedProductsCarousel onEnquireClick={handleEnquireNow} />

      {/* 10. Countries Served */}
      <CountriesSection />

      {/* 11. Testimonials Carousel - 3 per slide */}
      <TestimonialsCarousel />

      {/* 12. Contact Form (replaces final CTA) */}
      <ContactFormSection />

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        type="quote"
      />
      <QuoteModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        type="brochure"
      />
    </div>
  );
};
