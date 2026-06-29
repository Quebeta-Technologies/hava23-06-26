import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Wrench,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react';
import { Drill, Layers, Zap, Wind, Link, CircleDot, Package } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { PageHero } from '../components/PageHero';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';
import { productsPageData as d } from '../data/pagesData';

const categoryIcons = {
  A: Drill,
  B: Zap,
  C: Wrench,
  D: Wind,
  E: Link,
  F: Layers,
  G: CircleDot,
  H: Package,
};

// ─── Product Card (image left, details right) ───────────────────────────────
const ProductCard = ({ row, headers, image, catCode, onEnquire }) => {
  // Build spec pills from table row (skip first col which is model name)
  const specs = headers.slice(1).map((h, i) => ({ label: h, value: row[i + 1] })).filter(s => s.value);

  return (
    <div className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row gap-0">
      {/* LEFT — image */}
      <div className="w-full sm:w-48 lg:w-56 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center p-6 min-h-[160px]">
        {image ? (
          <img src={image} alt={row[0]} className="max-h-32 w-auto object-contain" />
        ) : (
          <div className="w-20 h-20 bg-gradient-to-br from-hava-red/20 to-accent-orange/20 rounded-2xl flex items-center justify-center">
            {(() => { const Icon = categoryIcons[catCode]; return <Icon className="w-10 h-10 text-hava-red/60" />; })()}
          </div>
        )}
      </div>

      {/* RIGHT — details */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          {/* Model name + badge */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <p className="font-black text-charcoal text-base lg:text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {row[0]}
            </p>
            <span className="text-[10px] font-bold bg-hava-red/10 text-hava-red border border-hava-red/20 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 uppercase tracking-wider">
              HAVA
            </span>
          </div>

          {/* Spec pills */}
          <div className="flex flex-wrap gap-2 mb-3">
            {specs.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-slate-50 border border-steel-gray rounded-lg px-2.5 py-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                <span className="text-[11px] font-bold text-charcoal">{s.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between pt-3 border-t border-steel-gray mt-2">
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">ISO 9001:2015 · Made in India</span>
          <button
            onClick={onEnquire}
            className="text-xs font-bold text-hava-red hover:text-accent-orange flex items-center gap-1 transition-colors"
          >
            Enquire Now <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Special card for non-table items (single row items like F, G rows, etc.)
const SimpleProductCard = ({ title, detail, image, catCode, onEnquire }) => (
  <div className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row gap-0">
    {/* LEFT — image */}
    <div className="w-full sm:w-48 lg:w-56 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center p-6 min-h-[140px]">
      {image ? (
        <img src={image} alt={title} className="max-h-28 w-auto object-contain" />
      ) : (
        <div className="w-16 h-16 bg-gradient-to-br from-hava-red/20 to-accent-orange/20 rounded-2xl flex items-center justify-center">
          {(() => { const Icon = categoryIcons[catCode]; return <Icon className="w-8 h-8 text-hava-red/60" />; })()}
        </div>
      )}
    </div>

    {/* RIGHT */}
    <div className="flex-1 p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between gap-3 mb-2">
          <p className="font-black text-charcoal text-base leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</p>
          <span className="text-[10px] font-bold bg-hava-red/10 text-hava-red border border-hava-red/20 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 uppercase tracking-wider">HAVA</span>
        </div>
        {detail && <p className="text-xs text-gray-600 leading-relaxed">{detail}</p>}
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-steel-gray mt-3">
        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">ISO 9001:2015 · Made in India</span>
        <button onClick={onEnquire} className="text-xs font-bold text-hava-red hover:text-accent-orange flex items-center gap-1 transition-colors">
          Enquire Now <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  </div>
);

// Two-col block
const TwoColBlock = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
    {items.map((item, i) => (
      <div key={i} className="bg-slate-50 border-t-2 border-accent-orange rounded-xl p-4">
        <p className="font-bold text-accent-orange text-xs uppercase tracking-wider mb-2">{item.heading}</p>
        <p className="text-sm text-charcoal leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
);

// Action bar
const CategoryActionBar = ({ name, onEnquire }) => (
  <div className="mt-6 flex flex-wrap gap-3 justify-end">
    <Button variant="outline" className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs h-9 px-4">
      <Download className="w-3 h-3 mr-1" /> Brochure
    </Button>
    <Button onClick={onEnquire} className="bg-gradient-to-r from-hava-red to-accent-orange text-white text-xs font-bold h-9 px-4 group">
      Request a Quote <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
    </Button>
  </div>
);

export const ProductsPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('A');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const handleEnquire = () => setQuoteModalOpen(true);
  const activeCat = d.categories.find(c => c.code === activeCategory);

  const handleCategorySelect = (code) => {
    setActiveCategory(code);
    setMobileSidebarOpen(false);
    setTimeout(() => {
      document.getElementById('product-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* HERO */}
      <PageHero
        eyebrow={d.hero.label}
        title="Complete Rock Drilling Solutions for"
        titleGradient="Mining, Quarrying & Construction"
        body={d.hero.body}
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => document.getElementById('products-main')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-8 py-6 text-base shadow-2xl rounded-xl group w-full sm:w-auto"
            >
              Explore Categories <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-8 py-6 text-base rounded-xl shadow-lg backdrop-blur-xl w-full sm:w-auto"
            >
              Request a Quote
            </Button>
          </motion.div>
        </div>
        <div className="bg-white/80 backdrop-blur-md border-2 border-steel-gray rounded-2xl p-4 max-w-4xl mx-auto shadow-lg">
          <p className="text-xs lg:text-sm text-charcoal font-medium">{d.hero.trustStrip}</p>
        </div>
      </PageHero>

      {/* MOBILE dropdown */}
      <div id="products-main" className="lg:hidden sticky top-20 z-30 bg-white border-b-2 border-steel-gray px-4 py-3 shadow-md">
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="w-full flex items-center justify-between bg-gradient-to-r from-charcoal to-trust-blue text-white px-4 py-3 rounded-xl font-bold text-sm"
        >
          <span className="flex items-center gap-3">
            {activeCat && (() => { const Icon = categoryIcons[activeCat.code]; return <Icon className="w-5 h-5 text-accent-orange" />; })()}
            {activeCat?.name}
          </span>
          {mobileSidebarOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        <AnimatePresence>
          {mobileSidebarOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 bg-white rounded-2xl border-2 border-steel-gray shadow-2xl overflow-hidden"
            >
              {d.categories.map((cat) => {
                const Icon = categoryIcons[cat.code];
                return (
                  <button
                    key={cat.code}
                    onClick={() => handleCategorySelect(cat.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b border-steel-gray last:border-b-0 transition-all ${
                      activeCategory === cat.code ? 'bg-hava-red/5 text-hava-red' : 'text-charcoal hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeCategory === cat.code ? 'bg-gradient-to-br from-hava-red to-accent-orange' : 'bg-charcoal'
                    }`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold">{cat.name}</span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MAIN LAYOUT */}
      <section className="relative py-8 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

            {/* LEFT SIDEBAR — desktop only */}
            <div className="hidden lg:block lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-3xl border-2 border-steel-gray shadow-xl overflow-hidden sticky top-36">
                <div className="bg-gradient-to-br from-charcoal to-trust-blue px-5 py-4">
                  <p className="text-accent-orange text-xs font-bold uppercase tracking-[2px]">Product Categories</p>
                  <p className="text-white font-black text-base mt-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8 Categories</p>
                </div>
                <div className="divide-y divide-steel-gray">
                  {d.categories.map((cat) => {
                    const Icon = categoryIcons[cat.code];
                    return (
                      <button
                        key={cat.code}
                        onClick={() => handleCategorySelect(cat.code)}
                        className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-all group ${
                          activeCategory === cat.code
                            ? 'bg-hava-red/5 border-l-4 border-hava-red'
                            : 'border-l-4 border-transparent hover:bg-slate-50 hover:border-hava-red/40'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          activeCategory === cat.code
                            ? 'bg-gradient-to-br from-hava-red to-accent-orange shadow-lg scale-110'
                            : 'bg-charcoal group-hover:bg-gradient-to-br group-hover:from-hava-red group-hover:to-accent-orange'
                        }`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className={`text-sm font-bold transition-colors ${
                          activeCategory === cat.code ? 'text-hava-red' : 'text-charcoal group-hover:text-hava-red'
                        }`}>{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="p-4 border-t border-steel-gray bg-slate-50">
                  <Button onClick={handleEnquire} className="w-full bg-gradient-to-r from-hava-red to-accent-orange text-white text-xs font-bold rounded-xl group">
                    Get a Quote <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div id="product-detail" className="flex-1 min-w-0 scroll-mt-32">
              <AnimatePresence mode="wait">
                {activeCat && (
                  <motion.div
                    key={activeCat.code}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-3xl shadow-xl border-2 border-steel-gray p-5 sm:p-6 lg:p-8"
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        {(() => { const Icon = categoryIcons[activeCat.code]; return <Icon className="w-6 h-6 text-white" />; })()}
                      </div>
                      <div>
                        <p className="text-xl sm:text-2xl lg:text-3xl font-black text-charcoal" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {activeCat.name}
                        </p>
                        <div className="w-10 h-1 bg-gradient-to-r from-hava-red to-accent-orange rounded-full mt-1.5" />
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{activeCat.description}</p>

                    {/* ── PRODUCT CARDS from table rows ── */}
                    {activeCat.table && activeCat.table.rows.length > 0 && (
                      <div className="space-y-4 mb-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[2px] mb-3">
                          {activeCat.table.rows.length} Model{activeCat.table.rows.length > 1 ? 's' : ''} Available
                        </p>
                        {activeCat.table.rows.map((row, ri) => (
                          <ProductCard
                            key={ri}
                            row={row}
                            headers={activeCat.table.headers}
                            image={activeCat.image}
                            catCode={activeCat.code}
                            onEnquire={handleEnquire}
                          />
                        ))}
                      </div>
                    )}

                    {/* ── F: Extension Equipment — SimpleProductCard per row ── */}
                    {activeCat.code === 'F' && activeCat.table && (
                      <div className="space-y-4 mb-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[2px] mb-3">6 Items Available</p>
                        {activeCat.table.rows.map((row, ri) => (
                          <SimpleProductCard
                            key={ri}
                            title={row[1]}
                            detail={row[2]}
                            image={activeCat.image}
                            catCode={activeCat.code}
                            onEnquire={handleEnquire}
                          />
                        ))}
                      </div>
                    )}

                    {/* ── G: Button Bits — cards from twoCol ── */}
                    {activeCat.code === 'G' && activeCat.twoCol && (
                      <div className="space-y-4 mb-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[2px] mb-3">2 Product Lines Available</p>
                        {activeCat.twoCol.map((item, i) => (
                          <div key={i} className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row">
                            <div className="w-full sm:w-48 lg:w-56 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center p-6 min-h-[140px]">
                              <img src={activeCat.image} alt={item.heading} className="max-h-28 w-auto object-contain" />
                            </div>
                            <div className="flex-1 p-5 flex flex-col justify-between">
                              <div>
                                <div className="flex items-start justify-between gap-3 mb-2">
                                  <p className="font-black text-charcoal text-base leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.heading}</p>
                                  <span className="text-[10px] font-bold bg-hava-red/10 text-hava-red border border-hava-red/20 px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 uppercase tracking-wider">HAVA</span>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {item.text.split(' / ').map((size, si) => (
                                    <span key={si} className="text-xs font-bold bg-slate-50 border border-steel-gray text-charcoal px-3 py-1.5 rounded-full">{size}</span>
                                  ))}
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-3 border-t border-steel-gray mt-3">
                                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">ISO 9001:2015 · Made in India</span>
                                <button onClick={handleEnquire} className="text-xs font-bold text-hava-red hover:text-accent-orange flex items-center gap-1 transition-colors">
                                  Enquire Now <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* ── E: Airline Accessories — SimpleProductCard per row ── */}
                    {activeCat.code === 'E' && activeCat.table && (
                      <div className="space-y-4 mb-6">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-[2px] mb-3">4 Products Available</p>
                        {activeCat.table.rows.map((row, ri) => (
                          <SimpleProductCard
                            key={ri}
                            title={row[1]}
                            detail={row[2]}
                            image={activeCat.image}
                            catCode={activeCat.code}
                            onEnquire={handleEnquire}
                          />
                        ))}
                      </div>
                    )}

                    {/* twoCol block — skip G (handled above) */}
                    {activeCat.twoCol && activeCat.code !== 'G' && (
                      <TwoColBlock items={activeCat.twoCol} />
                    )}

                    {/* Tags */}
                    {activeCat.tags && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {activeCat.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-bold uppercase tracking-wider bg-slate-50 border border-steel-gray text-charcoal px-3 py-1.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Notes */}
                    {activeCat.note && (
                      <div className="mt-5 bg-accent-orange/5 border-l-4 border-accent-orange rounded-r-xl p-4 flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-accent-orange flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700"><strong className="text-charcoal">Note:</strong> {activeCat.note}</p>
                      </div>
                    )}
                    {activeCat.criticalNote && (
                      <div className="mt-5 bg-hava-red/5 border-l-4 border-hava-red rounded-r-xl p-4 flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-hava-red flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700"><strong className="text-hava-red uppercase tracking-wider">Critical:</strong> {activeCat.criticalNote}</p>
                      </div>
                    )}

                    {/* H — Spare parts */}
                    {activeCat.code === 'H' && (
                      <>
                        <div className="mt-5 bg-gradient-to-br from-hava-red/5 to-accent-orange/5 border-l-4 border-hava-red rounded-r-2xl p-5">
                          <p className="font-bold text-hava-red text-sm uppercase tracking-wider mb-2">Why Genuine HAVA Spares Matter</p>
                          <p className="text-sm text-gray-700 leading-relaxed">{activeCat.whyGenuine}</p>
                        </div>
                        <p className="font-bold text-accent-orange text-xs uppercase tracking-[2px] mt-8 mb-4">Why Use Genuine HAVA Spare Parts</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {activeCat.whyCards.map((c, i) => (
                            <div key={i} className="bg-slate-50 border-l-2 border-hava-red rounded-r-xl p-4">
                              <p className="font-bold text-charcoal text-sm mb-1 uppercase tracking-wide">{c.title}</p>
                              <p className="text-xs text-gray-600 leading-relaxed">{c.text}</p>
                            </div>
                          ))}
                        </div>
                      </>
                    )}

                    {/* Action Bar */}
                    <CategoryActionBar name={activeCat.name} onEnquire={handleEnquire} />

                    {/* Prev / Next */}
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-steel-gray">
                      <Button
                        variant="outline"
                        className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs font-bold"
                        onClick={() => {
                          const idx = d.categories.findIndex(c => c.code === activeCategory);
                          if (idx > 0) handleCategorySelect(d.categories[idx - 1].code);
                        }}
                        disabled={activeCategory === d.categories[0].code}
                      >← Previous</Button>
                      <span className="text-xs text-gray-500 font-medium">
                        {d.categories.findIndex(c => c.code === activeCategory) + 1} / {d.categories.length}
                      </span>
                      <Button
                        variant="outline"
                        className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs font-bold"
                        onClick={() => {
                          const idx = d.categories.findIndex(c => c.code === activeCategory);
                          if (idx < d.categories.length - 1) handleCategorySelect(d.categories[idx + 1].code);
                        }}
                        disabled={activeCategory === d.categories[d.categories.length - 1].code}
                      >Next →</Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-charcoal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-2xl lg:text-5xl font-black text-white mb-4">
              Not Sure Which Product <span className="gradient-text">Suits Your Application?</span>
            </p>
            <p className="text-base lg:text-lg text-white/70 mb-8 max-w-2xl mx-auto">{d.finalCta.body}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-3 rounded-xl group">
                Speak With Our Team <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl">
                Request Product Recommendation
              </Button>
              <Button onClick={() => setQuoteModalOpen(true)} className="bg-accent-orange hover:bg-accent-orange/90 text-charcoal font-bold px-6 py-3 rounded-xl">
                <Download className="w-4 h-4 mr-2" /> Download Catalogue
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} type="quote" />
    </div>
  );
};