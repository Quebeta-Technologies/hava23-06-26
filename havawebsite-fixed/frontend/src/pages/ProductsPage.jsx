import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  Download,
  Wrench,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Drill, Layers, Zap, Wind, Link, CircleDot, Package } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
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

const trustItems = [
  { icon: '✅', text: 'ISO 9001:2015 Certified' },
  { icon: '🇮🇳', text: 'Made in India' },
  { icon: '🔧', text: 'Atlas Copco Compatible' },
  { icon: '🌍', text: 'Exported to 20+ Countries' },
];

// ─── Generic Product Card ────────────────────────────────────────────────────
const ProductCard = ({ title, subtitle, image, specs, catCode, onEnquire, badge }) => {
  const Icon = categoryIcons[catCode];
  return (
    <div className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row">
      <div className="w-full sm:w-44 lg:w-52 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ minHeight: '220px', maxHeight: '280px' }}>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" style={{ minHeight: '220px', maxHeight: '280px' }} />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ minHeight: '220px' }}>
            <Icon className="w-12 h-12 text-hava-red/40" />
          </div>
        )}
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            {badge && (
              <span className="text-[10px] font-bold bg-trust-blue/10 text-trust-blue border border-trust-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                {badge}
              </span>
            )}
            <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</p>
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 mt-1 hover:opacity-90 transition-opacity">
            Enquire Now
          </button>
        </div>
        {specs && specs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {specs.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-slate-50 border border-steel-gray rounded-lg px-2.5 py-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                <span className="text-[11px] font-bold text-charcoal">{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const TwoColBlock = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    {items.map((item, i) => (
      <div key={i} className="bg-slate-50 border-t-2 border-accent-orange rounded-xl p-4">
        <p className="font-bold text-accent-orange text-xs uppercase tracking-wider mb-2">{item.heading}</p>
        <p className="text-sm text-charcoal leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
);

// ─── Reusable Video Panel ────────────────────────────────────────────────────
const VideoPanel = ({ src, mobile = false }) => (
  <div
    className={`${mobile ? 'w-full border-t-2 lg:hidden' : 'hidden lg:flex w-52 border-l-2'} flex-shrink-0 bg-slate-900 flex items-center justify-center border-steel-gray overflow-hidden`}
    style={{ minHeight: '220px' }}
  >
    {src ? (
      <video src={src} className="w-full h-full object-cover" controls style={{ minHeight: '220px' }} />
    ) : (
      <div className="flex flex-col items-center justify-center gap-2 text-white/40 p-4 text-center">
        <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/30"><path d="M8 5v14l11-7z" /></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider">Product Video<br />Coming Soon</span>
      </div>
    )}
  </div>
);

// ─── Reusable 3-col Product Row ──────────────────────────────────────────────
const VideoProductCard = ({ image, imageClass = 'object-cover object-left', title, subtitle, badge, specs, video, onEnquire, specsColumns = 2 }) => (
  <div className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden">
    <div className="flex flex-col sm:flex-row">
      <div className="w-full lg:w-64 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center overflow-hidden h-[340px] lg:h-auto" style={{ minHeight: '220px' }}>
        <img src={image} alt={title} className={`w-full h-full ${imageClass}`} style={{ minHeight: '220px' }} />
      </div>
      <div className="flex-1 p-5 flex flex-col min-w-0">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            {badge && (
              <span className="text-[10px] font-bold bg-trust-blue/10 text-trust-blue border border-trust-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                {badge}
              </span>
            )}
            <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</p>
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 hover:opacity-90 transition-opacity">
            Enquire Now
          </button>
        </div>
        {specs && specs.length > 0 && (
          <div className={`grid gap-2 ${specsColumns === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {specs.map((s, i) => (
              <div key={i} className="flex flex-col bg-slate-50 border border-steel-gray rounded-lg px-2.5 py-1.5">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                <span className="text-[11px] font-bold text-charcoal mt-0.5">{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <VideoPanel src={video} />
    </div>
    <VideoPanel src={video} mobile />
  </div>
);

const CategoryContent = ({ cat, onEnquire }) => {
  const Icon = categoryIcons[cat.code];

  const renderProducts = () => {
    if (cat.code === 'A') {
      const images = ['/products/wet.jpeg', '/products/wets.png'];
      const videos = [null, null];
      return (
        <div className="space-y-4">
          {cat.table.rows.map((row, ri) => {
            const specs = cat.table.headers.slice(2).map((h, i) => ({ label: h, value: row[i + 2] }));
            return (
              <VideoProductCard
                key={ri}
                image={images[ri]}
                title={row[0]}
                subtitle={row[1]}
                specs={specs}
                video={videos[ri]}
                onEnquire={onEnquire}
              />
            );
          })}
        </div>
      );
    }

    if (cat.code === 'B') {
      const images = ['/products/bbc.jpeg', '/products/shank.png', '/products/couple.png'];
      const videos = [null];
      return (
        <div className="space-y-4">
          {cat.table.rows.map((row, ri) => {
            if (ri === 0) {
              const specs = row[1]
                ? row[1].split(' | ').map((spec) => {
                    const [label, value] = spec.split(': ');
                    return { label, value };
                  })
                : [];
              return (
                <VideoProductCard
                  key={ri}
                  image={images[ri]}
                  title={row[0]}
                  specs={specs}
                  video={videos[0]}
                  onEnquire={onEnquire}
                />
              );
            }
            return (
              <ProductCard key={ri} catCode="B" image={images[ri] || cat.image} title={row[0]} subtitle={row[1]} specs={[]} onEnquire={onEnquire} />
            );
          })}
        </div>
      );
    }

    if (cat.code === 'C') {
      const models = [
        { title: 'CP-117 / HR-117', subtitle: 'Spring Retainer', badge: 'Spring Retainer', image: '/products/cp.jpeg',
          specs: cat.table.rows.map(r => ({ label: r[0], value: r[1] })).filter(s => s.label !== 'Model' && s.label !== 'Operating Pressure'), video: null },
        { title: 'CP-117', subtitle: 'Latch Retainer', badge: 'Latch Retainer', image: '/products/latch.png',
          specs: cat.table.rows.map(r => ({ label: r[0], value: r[2] })).filter(s => s.label !== 'Model' && s.label !== 'Operating Pressure'), video: null },
      ];
      return (
        <div className="space-y-4">
          {models.map((m, i) => (
            <VideoProductCard
              key={i}
              image={m.image}
              title={m.title}
              subtitle={m.subtitle}
              badge={m.badge}
              specs={m.specs}
              video={m.video}
              specsColumns={3}
              onEnquire={onEnquire}
            />
          ))}
        </div>
      );
    }

    if (cat.code === 'D') {
      const models = [
        { badge: 'Metric', specs: cat.table.rows.map(r => ({ label: r[0], value: r[1] })), video: null },
        { badge: 'Imperial', specs: cat.table.rows.map(r => ({ label: r[0], value: r[2] })), video: null },
      ];
      return (
        <div className="space-y-4">
          {models.map((m, i) => (
            <VideoProductCard
              key={i}
              image="/products/bmk.jpeg"
              title="BMK62S Air Leg"
              subtitle="Used with RH-656/4W Wet Rock Drill"
              badge={m.badge}
              specs={m.specs}
              video={m.video}
              onEnquire={onEnquire}
            />
          ))}
        </div>
      );
    }

    if (cat.code === 'E') {
      const products = [
        { title: 'Airline Lubricator BLG-30', image: '/products/blg.jpeg', specs: [{ label: 'Weight', value: '3 kg (6.6 lb)' }, { label: 'Volume', value: '1.3 ltr (44 oz)' }, { label: 'Air Flow', value: '25–134 l/S (53–284 cfm)' }, { label: 'Placement', value: '3M from drill' }] },
        { title: 'Clamps', image: '/products/clamp.png', specs: [{ label: 'Type', value: 'Air line clamp accessories' }] },
        { title: 'Hose Jointers', image: '/products/hose.png', specs: [{ label: 'Type', value: 'Joiner fittings for airline hose connections' }] },
        { title: 'Hose Pipe', image: '/products/hpipe.png', specs: [{ label: 'Type', value: 'High-pressure airline hose' }] },
      ];
      return (
        <div className="space-y-4">
          {products.map((p, i) => <ProductCard key={i} catCode="E" image={p.image} title={p.title} specs={p.specs} onEnquire={onEnquire} />)}
        </div>
      );
    }

    if (cat.code === 'F') {
      const items = ['Chisel & Moil Points', 'Integrated Drill Rods', 'Taper Drill Rods', 'R32 / R38 Shank Adapter', 'R32 & R38 Coupling Sleeve', 'R32 Extension Rods'];
      return (
        <div className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row">
          <div className="w-full sm:w-44 lg:w-52 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ minHeight: '220px' }}>
            <img src="/products/ex.jpeg" alt="Extension Equipment" className="w-full h-full object-cover" style={{ minHeight: '220px' }} />
          </div>
          <div className="flex-1 p-5 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-4">
              <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Extension Equipment — Full Range</p>
              <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 hover:opacity-90 transition-opacity">
                Enquire Now
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 border border-steel-gray rounded-xl px-3 py-2.5">
                  <div className="w-1.5 h-1.5 bg-hava-red rounded-full flex-shrink-0" />
                  <span className="text-sm font-bold text-charcoal">{item}</span>
                </div>
              ))}
            </div>
            {cat.tags && <div className="flex flex-wrap gap-2 mt-4">{cat.tags.map((tag, i) => <span key={i} className="text-xs font-bold uppercase tracking-wider bg-slate-50 border border-steel-gray text-charcoal px-3 py-1.5 rounded-full">{tag}</span>)}</div>}
          </div>
        </div>
      );
    }

    if (cat.code === 'G') {
      const images = ['/products/caribe.jpeg', '/products/r32.png'];
      return (
        <div className="space-y-4">
          {cat.twoCol.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row">
              <div className="w-full sm:w-44 lg:w-52 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ minHeight: '220px' }}>
                <img src={images[i] || cat.image} alt={item.heading} className="w-full h-full object-cover" style={{ minHeight: '220px' }} />
              </div>
              <div className="flex-1 p-5 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.heading}</p>
                  <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 hover:opacity-90 transition-opacity">
                    Enquire Now
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.text.split(' / ').map((size, si) => <span key={si} className="text-sm font-bold bg-slate-50 border-2 border-steel-gray text-charcoal px-4 py-2 rounded-xl">{size}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (cat.code === 'H') {
      return (
        <>
          <div className="bg-gradient-to-br from-hava-red/5 to-accent-orange/5 border-l-4 border-hava-red rounded-r-2xl p-5">
            <p className="font-bold text-hava-red text-sm uppercase tracking-wider mb-2">Why Genuine Spares Matter</p>
            <p className="text-sm text-gray-700 leading-relaxed">{cat.whyGenuine}</p>
          </div>
          <p className="font-bold text-accent-orange text-xs uppercase tracking-[2px] mt-6 mb-4">Why Use Genuine Spare Parts</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cat.whyCards.map((c, i) => (
              <div key={i} className="bg-slate-50 border-l-2 border-hava-red rounded-r-xl p-4">
                <p className="font-bold text-charcoal text-sm mb-1 uppercase tracking-wide">{c.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <motion.div
      key={cat.code}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-xl border-2 border-steel-gray p-5 sm:p-6"
    >
      <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-black text-charcoal" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{cat.name}</p>
            <div className="w-8 h-1 bg-gradient-to-r from-hava-red to-accent-orange rounded-full mt-1" />
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {cat.brochureUrl ? (
            <a href={cat.brochureUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs h-8 px-3">
                <Download className="w-3 h-3 mr-1" /> Brochure
              </Button>
            </a>
          ) : null}
          <Button onClick={onEnquire} className="bg-gradient-to-r from-hava-red to-accent-orange text-white text-xs font-bold h-8 px-3 group">
            Request a Quote <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">{cat.description}</p>

      {renderProducts()}

      {cat.twoCol && !['G'].includes(cat.code) && <TwoColBlock items={cat.twoCol} />}

      {cat.note && (
        <div className="mt-4 bg-accent-orange/5 border-l-4 border-accent-orange rounded-r-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-accent-orange flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700"><strong className="text-charcoal">Note:</strong> {cat.note}</p>
        </div>
      )}
      {cat.criticalNote && (
        <div className="mt-4 bg-hava-red/5 border-l-4 border-hava-red rounded-r-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-hava-red flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700"><strong className="text-hava-red uppercase tracking-wider">Critical:</strong> {cat.criticalNote}</p>
        </div>
      )}
    </motion.div>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────
export const ProductsPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('A');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const handleEnquire = () => setQuoteModalOpen(true);
  const activeCat = d.categories.find(c => c.code === activeCategory);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat && d.categories.find(c => c.code === cat)) {
      setActiveCategory(cat);
      setTimeout(() => {
        document.getElementById('product-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [location.search]);

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

      {/* ── HERO ── */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 bg-white border border-steel-gray rounded-full px-4 py-2 mb-4 shadow-sm">
                <span className="text-accent-orange text-sm">✦</span>
                <span className="text-xs font-bold uppercase tracking-[2px] text-charcoal">{d.hero.label}</span>
                <span className="w-2 h-2 bg-accent-orange rounded-full" />
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-charcoal leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Complete Rock Drilling Solutions for{' '}
                <span className="gradient-text">Mining, Quarrying & Construction</span>
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">{d.hero.body}</p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => document.getElementById('products-main')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-5 text-sm shadow-xl rounded-xl group"
                  >
                    Explore Categories <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-6 py-5 text-sm rounded-xl shadow-lg backdrop-blur-xl"
                  >
                    Request a Quote
                  </Button>
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {trustItems.map((item, i) => (
                  <div key={i} className="bg-white border-2 border-steel-gray rounded-xl px-3 py-2.5 flex items-center gap-2 shadow-sm">
                    <span className="text-base flex-shrink-0">{item.icon}</span>
                    <span className="text-[11px] font-bold text-charcoal leading-tight">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
      <section className="relative py-6 lg:py-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-7 items-start">

            {/* LEFT SIDEBAR */}
            <div className="hidden lg:block lg:w-60 flex-shrink-0">
              <div className="bg-white rounded-3xl border-2 border-steel-gray shadow-xl overflow-hidden sticky top-28">
                <div className="bg-gradient-to-br from-charcoal to-trust-blue px-5 py-3">
                  <p className="text-accent-orange text-xs font-bold uppercase tracking-[2px]">Product Categories</p>
                  <p className="text-white font-black text-sm mt-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8 Categories</p>
                </div>
                <div className="divide-y divide-steel-gray">
                  {d.categories.map((cat) => {
                    const Icon = categoryIcons[cat.code];
                    return (
                      <button
                        key={cat.code}
                        onClick={() => handleCategorySelect(cat.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all group ${
                          activeCategory === cat.code ? 'bg-hava-red/5 border-l-4 border-hava-red' : 'border-l-4 border-transparent hover:bg-slate-50 hover:border-hava-red/40'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          activeCategory === cat.code ? 'bg-gradient-to-br from-hava-red to-accent-orange shadow-lg scale-110' : 'bg-charcoal group-hover:bg-gradient-to-br group-hover:from-hava-red group-hover:to-accent-orange'
                        }`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-sm font-bold transition-colors ${activeCategory === cat.code ? 'text-hava-red' : 'text-charcoal group-hover:text-hava-red'}`}>{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="p-3 border-t border-steel-gray bg-slate-50">
                  <Button onClick={handleEnquire} className="w-full bg-gradient-to-r from-hava-red to-accent-orange text-white text-xs font-bold rounded-xl group">
                    Get a Quote <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div id="product-detail" className="flex-1 min-w-0 scroll-mt-28">
              <AnimatePresence mode="wait">
                {activeCat && <CategoryContent cat={activeCat} onEnquire={handleEnquire} />}
              </AnimatePresence>

              {activeCat && (
                <div className="flex justify-between items-center mt-3 px-1">
                  <Button variant="outline" className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs font-bold"
                    onClick={() => { const idx = d.categories.findIndex(c => c.code === activeCategory); if (idx > 0) handleCategorySelect(d.categories[idx - 1].code); }}
                    disabled={activeCategory === d.categories[0].code}>← Previous</Button>
                  <span className="text-xs text-gray-500 font-medium">
                    {d.categories.findIndex(c => c.code === activeCategory) + 1} / {d.categories.length}
                  </span>
                  <Button variant="outline" className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs font-bold"
                    onClick={() => { const idx = d.categories.findIndex(c => c.code === activeCategory); if (idx < d.categories.length - 1) handleCategorySelect(d.categories[idx + 1].code); }}
                    disabled={activeCategory === d.categories[d.categories.length - 1].code}>Next →</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-charcoal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-2xl lg:text-4xl font-black text-white mb-3">
              Not Sure Which Product <span className="gradient-text">Suits Your Application?</span>
            </p>
            <p className="text-base text-white/70 mb-6 max-w-2xl mx-auto">{d.finalCta.body}</p>
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