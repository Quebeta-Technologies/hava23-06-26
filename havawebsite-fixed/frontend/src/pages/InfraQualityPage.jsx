import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Factory,
  Award,
  CheckCircle2,
  Settings,
  Layers,
  Flame,
  Wrench,
  ShieldCheck,
  Truck,
  ClipboardCheck,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Hammer,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { PageHero } from '../components/PageHero';
import { SectionHeader, SectionBadge } from '../components/SectionBadge';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';
import { infraQualityPageData as d } from '../data/pagesData';

const stageIcons = [Layers, Settings, Flame, Hammer, ClipboardCheck, CheckCircle2, Wrench, Truck];

const ProcessChart = ({ data }) => {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setActive(p => (p + 1) % data.stages.length), 3500);
    return () => clearInterval(t);
  }, [autoPlay, data.stages.length]);

  const select = (i) => { setActive(i); setAutoPlay(false); };

  const stepColors = [
    '#d33f24', '#185FA5', '#e88c30', '#0F6E56', '#534AB7', '#d33f24', '#185FA5', '#e88c30'
  ];

  return (
    <div className="mt-10">
      {/* Vertical Accordion */}
      <div className="flex flex-col gap-1.5">
        {data.stages.map((s, i) => {
          const isOpen = i === active;
          const isDone = i < active;
          const Icon = stageIcons[i];
          const col = stepColors[i];

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl overflow-hidden"
            >
              {/* Row header */}
              <button
                onClick={() => select(i)}
                className={`w-full flex items-center gap-4 px-5 py-4 text-left transition-all ${
                  isOpen
                    ? 'bg-white border-t-0 rounded-t-2xl'
                    : 'bg-slate-50 hover:bg-white rounded-2xl'
                }`}
                style={{
                  border: isOpen ? `2px solid ${col}` : '1.5px solid #e2e4e8',
                  borderBottom: isOpen ? 'none' : undefined,
                  borderRadius: isOpen ? '16px 16px 0 0' : '16px',
                }}
              >
                {/* Icon */}
                <div
                  className="relative w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{ background: isOpen || isDone ? col : '#e8eaee' }}
                >
                  {isDone ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : (
                    <Icon className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-gray-400'} transition-colors`} />
                  )}
                  {isOpen && (
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{ background: col, opacity: 0.2 }}
                      animate={{ scale: [1, 1.5, 1.5], opacity: [0.3, 0, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-[1.5px] transition-colors"
                      style={{ color: isOpen ? col : '#9ca3af' }}
                    >
                      {s.num}
                    </span>
                    {isDone && (
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                        style={{ background: col + '20', color: col }}
                      >
                        Done
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-bold text-charcoal">{s.title}</p>
                  <p className="text-xs text-gray-500">{s.sub || s.label}</p>
                </div>

                {/* Chevron */}
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-gray-400 flex-shrink-0"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.div>
              </button>

              {/* Expandable detail */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    style={{
                      border: `2px solid ${col}`,
                      borderTop: 'none',
                      borderRadius: '0 0 16px 16px',
                      background: 'white',
                    }}
                  >
                    <div className="px-5 pb-5 pt-2">
                      {/* Animated fill bar */}
                      <div className="h-0.5 rounded-full mb-4 overflow-hidden bg-steel-gray">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${col}, ${col}80)` }}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.6, ease: 'easeOut' }}
                        />
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.body}</p>

                      <div className="flex flex-wrap gap-2">
                        {s.activities.split(' · ').map((a, ai) => (
                          <span
                            key={ai}
                            className="text-xs font-bold px-3 py-1.5 rounded-full"
                            style={{
                              color: col,
                              background: col + '12',
                              border: `1px solid ${col}30`,
                            }}
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6 px-1">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => { setAutoPlay(!autoPlay); }}
            variant="outline"
            className="text-xs font-bold border-2 border-steel-gray px-4 py-2 rounded-xl"
          >
            {autoPlay ? '⏸ Pause' : '▶ Auto-Play'}
          </Button>
          <div className="flex gap-1.5">
            {data.stages.map((_, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                className="rounded-full transition-all"
                style={{
                  width: i === active ? '24px' : '8px',
                  height: '8px',
                  background: i === active ? stepColors[i] : i < active ? stepColors[i] + '60' : '#d1d5db',
                }}
              />
            ))}
          </div>
        </div>
        <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">
          ISO 9001:2015 Certified
        </span>
      </div>
    </div>
  );
};


export const InfraQualityPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* HERO */}
      <PageHero
        eyebrow={d.hero.eyebrow}
        title="Inside the HAVA"
        titleGradient="25,000 Sq. Ft. Manufacturing Facility"
        body={d.hero.body}
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => (window.location.href = '/products')}
              className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-8 py-6 text-base shadow-2xl rounded-xl group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-8 py-6 text-base rounded-xl shadow-lg backdrop-blur-xl w-full sm:w-auto"
            >
              Schedule a Factory Visit
            </Button>
          </motion.div>
        </div>
      </PageHero>

      {/* FACTORY OVERVIEW */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Factory Overview"
            badgeColor="hava-red"
            badgeIcon={Factory}
            title="MIDC Pimpri"
            titleGradient="Manufacturing Plant"
            intro={d.factoryOverview.body}
          />

          {/* Capability grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {d.factoryOverview.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-gradient-to-br from-slate-50 to-blue-50 border-l-4 border-hava-red rounded-2xl p-5 hover:shadow-xl transition-all group"
              >
                <h5 className="font-bold text-charcoal text-sm mb-2 uppercase tracking-wide group-hover:text-hava-red transition-colors">{card.title}</h5>
                <p className="text-xs text-gray-600 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Address Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 bg-gradient-to-br from-charcoal to-trust-blue rounded-3xl p-8 text-white relative overflow-hidden max-w-4xl mx-auto"
          >
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-hava-red/20 rounded-full blur-3xl" />
            <div className="relative flex items-start gap-5 flex-wrap">
              <div className="w-14 h-14 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-[250px]">
                <h4 className="text-accent-orange text-xs font-bold uppercase tracking-wider mb-2">Facility Location</h4>
                <p className="font-bold text-white mb-1">{d.factoryOverview.location.company}</p>
                <p className="text-sm text-white/80 leading-relaxed mb-3">{d.factoryOverview.location.line}</p>
                <div className="flex flex-wrap gap-4 mb-4">
                  <a href={`tel:${d.factoryOverview.location.phone}`} className="flex items-center gap-2 text-white/90 hover:text-accent-orange text-sm transition-colors">
                    <Phone className="w-4 h-4" /> {d.factoryOverview.location.phone}
                  </a>
                  <a href={`mailto:${d.factoryOverview.location.email}`} className="flex items-center gap-2 text-white/90 hover:text-accent-orange text-sm transition-colors">
                    <Mail className="w-4 h-4" /> {d.factoryOverview.location.email}
                  </a>
                </div>
                <a
                  href={d.factoryOverview.location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-orange hover:text-white text-sm font-bold group transition-colors"
                >
                  📍 View Facility on Google Maps
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS CHART */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Manufacturing Process Chart"
            badgeColor="trust-blue"
            badgeIcon={Settings}
            title="Eight Stages."
            titleGradient="Zero Compromise."
            intro={d.processChart.body}
          />
          <ProcessChart data={d.processChart} />
        </div>
      </section>

      {/* QC STANDARDS TABLE */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
        <div className="absolute top-20 left-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Quality Standards"
            badgeColor="hava-red"
            badgeIcon={ShieldCheck}
            title="What We Inspect —"
            titleGradient="And When"
            intro={d.qcStandards.body}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-steel-gray"
          >
            {/* Table header */}
            <div className="hidden md:grid grid-cols-12 bg-charcoal text-white">
              <div className="col-span-3 p-4 font-bold text-xs uppercase tracking-wider border-r border-white/10">Inspection Type</div>
              <div className="col-span-4 p-4 font-bold text-xs uppercase tracking-wider border-r border-white/10">What Is Checked</div>
              <div className="col-span-2 p-4 font-bold text-xs uppercase tracking-wider border-r border-white/10">Stage</div>
              <div className="col-span-3 p-4 font-bold text-xs uppercase tracking-wider">Method</div>
            </div>
            {/* Table rows */}
            {d.qcStandards.rows.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`grid grid-cols-1 md:grid-cols-12 border-t border-steel-gray ${i % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}`}
              >
                <div className="md:col-span-3 p-4 font-bold text-charcoal text-sm md:border-r border-steel-gray flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-hava-red flex-shrink-0 mt-0.5" />
                  {row.type}
                </div>
                <div className="md:col-span-4 p-4 text-sm text-gray-700 md:border-r border-steel-gray">{row.check}</div>
                <div className="md:col-span-2 p-4 text-xs text-trust-blue font-bold uppercase tracking-wider md:border-r border-steel-gray">{row.stage}</div>
                <div className="md:col-span-3 p-4 text-sm text-gray-600">{row.method}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* ISO note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-gradient-to-r from-hava-red/10 via-accent-orange/10 to-hava-red/10 border-l-4 border-hava-red rounded-r-2xl p-5 flex items-start gap-4 max-w-5xl mx-auto"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{d.qcStandards.isoNote}</p>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-charcoal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              Want to See Our <span className="gradient-text">Facility in Person?</span>
            </h2>
            <p className="text-base lg:text-lg text-white/70 mb-8 max-w-2xl mx-auto">{d.finalCta.body}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="https://share.google/eJDTDWB6XWYJowsS3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-6 py-3 text-sm shadow-xl rounded-xl transition-transform hover:scale-105"
              >
                📍 Get Directions on Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Button
                onClick={() => setQuoteModalOpen(true)}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl"
              >
                Schedule a Factory Visit
              </Button>
              <Button
                onClick={() => setQuoteModalOpen(true)}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl"
              >
                Download Company Profile
              </Button>
              <Button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-accent-orange hover:bg-accent-orange/90 text-charcoal font-bold px-6 py-3 rounded-xl"
              >
                Get a Quote
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