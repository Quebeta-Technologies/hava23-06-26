import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Settings,
  Layers,
  Factory,
  Globe,
  Award,
  Phone,
  Mail,
  Download,
  TrendingUp,
  Wrench,
  Users,
  Flame,
  Truck,
  FlaskConical,
  Hammer,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SectionHeader, SectionBadge } from '../components/SectionBadge';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';
import { whyHavaPageData as d } from '../data/pagesData';

// Maps step index -> translation key + icon/style (icon/color/bg stay local, text comes from i18n)
const qualityStepsMeta = [
  { key: 's1', icon: Factory, color: 'from-hava-red to-accent-orange', activitiesKey: 'Grade check|Dimensional verification|Supplier cert review|Traceability tagging'.split('|') },
  { key: 's2', icon: Settings, color: 'from-trust-blue to-trust-blue/80' },
  { key: 's3', icon: Flame, color: 'from-accent-orange to-accent-orange/80' },
  { key: 's4', icon: Hammer, color: 'from-trust-blue/80 to-charcoal' },
  { key: 's5', icon: FlaskConical, color: 'from-hava-red/90 to-trust-blue' },
  { key: 's6', icon: CheckCircle2, color: 'from-trust-blue to-hava-red/80' },
  { key: 's7', icon: Wrench, color: 'from-accent-orange/90 to-trust-blue' },
  { key: 's8', icon: Truck, color: 'from-hava-red to-accent-orange' },
];

// Activities per stage (kept as translation-independent short tag lists matching original content)
const activitiesByKey = {
  s1: ['Grade check', 'Dimensional verification', 'Supplier cert review', 'Traceability tagging'],
  s2: ['Turning & boring', 'Milling & threading', 'Surface grinding', 'CNC dimensional verification'],
  s3: ['Case hardening', 'Through hardening', 'Tempering', 'Hardness verification'],
  s4: ['Cylindrical grinding', 'Surface grinding', 'Internal grinding', 'Finish verification'],
  s5: ['Dimensional inspection', 'Leak test & rotation check', 'Impact rate measurement', 'Test results documented'],
  s6: ['Acceptance sign-off', 'Performance validation', 'Visual inspection', 'Rework loop if needed'],
  s7: ['Surface cleaning', 'Painting & drying', 'Component wrapping', 'Export-grade packing'],
  s8: ['Documentation prep', 'Invoice & cert of origin', 'Shipment release', 'Tracking to customer'],
};

const QualityProcess = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setActive(prev => (prev + 1) % qualityStepsMeta.length), 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleSelect = (i) => {
    setActive(i);
    setAutoPlay(false);
  };

  const meta = qualityStepsMeta[active];
  const Icon = meta.icon;
  const stageTitle = t(`whyHavaPage.section3.stages.${meta.key}`);
  const activities = activitiesByKey[meta.key];

  return (
    <div className="mt-10">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-8">
        {qualityStepsMeta.map((step, i) => {
          const StepIcon = step.icon;
          const isActive = i === active;
          return (
            <motion.button
              key={step.key}
              onClick={() => handleSelect(i)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`relative rounded-2xl p-4 text-center transition-all border-2 ${
                isActive ? 'border-hava-red shadow-xl bg-white' : 'border-steel-gray bg-white hover:border-hava-red/40 hover:shadow-lg'
              }`}
            >
              {isActive && <motion.div layoutId="activeGlow" className="absolute inset-0 rounded-2xl bg-hava-red/5" />}
              <div className="relative">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[1.5px] mb-2">{String(i + 1).padStart(2, '0')}</div>
                <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-2 ${isActive ? 'scale-110' : ''} transition-transform`}>
                  <StepIcon className="w-5 h-5 text-white" />
                </div>
                <p className={`text-xs font-bold leading-tight ${isActive ? 'text-hava-red' : 'text-charcoal'} transition-colors`}>{t(`whyHavaPage.section3.stages.${step.key}`)}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="h-1 bg-steel-gray rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-hava-red to-accent-orange rounded-full"
          animate={{ width: `${((active + 1) / qualityStepsMeta.length) * 100}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-charcoal to-trust-blue rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-hava-red/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-orange/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 bg-gradient-to-br ${meta.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold text-accent-orange uppercase tracking-[2px] mb-1">Stage {active + 1} of 08</div>
                <p className="text-xl lg:text-2xl font-black text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{stageTitle}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-5">{t('whyHavaPage.section3.body')}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {activities.map((a, ai) => (
                <span key={ai} className="text-xs font-bold text-white/90 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">{a}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">{t('whyHavaPage.section3.iso')}</p>
              <div className="flex items-center gap-2">
                <button onClick={() => handleSelect(Math.max(0, active - 1))} disabled={active === 0} className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30">
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <span className="text-xs text-white/60 font-bold">{active + 1}/{qualityStepsMeta.length}</span>
                <button onClick={() => handleSelect(Math.min(qualityStepsMeta.length - 1, active + 1))} disabled={active === qualityStepsMeta.length - 1} className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30">
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-2 mt-5">
        {qualityStepsMeta.map((_, i) => (
          <button key={i} onClick={() => handleSelect(i)} className={`rounded-full transition-all ${i === active ? 'w-6 h-2 bg-hava-red' : 'w-2 h-2 bg-steel-gray hover:bg-hava-red/40'}`} />
        ))}
      </div>
    </div>
  );
};

export const WhyHavaPage = () => {
  const { t } = useTranslation();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const trustItems = [
    { icon: '🏭', text: t('infraQualityPage.factoryOverview.cards.area.text', '25,000 Sq. Ft. Facility') },
    { icon: '✅', text: t('header.topBar.certification') },
    { icon: '🌍', text: t('whyHava.floatingTags.countries') !== 'whyHava.floatingTags.countries' ? `${t('whyHava.floatingTags.countries')}` : 'Exported to 20+ Countries' },
    { icon: '🔧', text: t('whyHavaPage.section1.points.spareParts.title', 'In-House Manufacturing') },
  ];

  const section1Points = ['quality', 'accuracy', 'spareParts', 'delivery'];
  const section4Cards = ['mining', 'tunnelling', 'construction', 'marble', 'quarrying', 'export'];
  const section5Rows = ['facility', 'qc', 'testing', 'consistency', 'spareParts', 'support', 'pricing'];
  const section6Cards = ['performance', 'value', 'expertise', 'spareParts', 'export', 'partnership'];
  const section6Icons = [Award, TrendingUp, Settings, Layers, Globe, Users];

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
                <span className="text-xs font-bold uppercase tracking-[2px] text-charcoal">{t('whyHavaPage.hero.eyebrow')}</span>
                <span className="w-2 h-2 bg-accent-orange rounded-full" />
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-charcoal leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t('whyHavaPage.hero.heading')}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">{t('whyHavaPage.hero.subheading')}</p>
            </div>
            <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button onClick={() => setQuoteModalOpen(true)} className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-5 text-sm shadow-xl rounded-xl group animate-pulse-glow">
                    {t('whyHavaPage.hero.primaryCTA')} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button onClick={() => (window.location.href = '/products')} className="w-full glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-6 py-5 text-sm rounded-xl shadow-lg backdrop-blur-xl">
                    {t('whyHavaPage.hero.secondaryCTA')}
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

      {/* SECTION 1 — Our Difference */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — image with floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto lg:mx-0"
              style={{ width: '100%', maxWidth: 500 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: 700 }}>
                <img
                  src="/assets/hava-factory.png"
                  alt="HAVA Manufacturing Facility"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="absolute top-4 right-4 w-16 h-16 border-2 border-accent-orange/40 rounded-2xl rotate-12 pointer-events-none" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-2 border-white/10 rounded-2xl -rotate-12 pointer-events-none" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-6 left-[-18px] z-10 bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-2xl min-w-[148px]"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <Factory className="w-4 h-4 text-white" />
                </div>
                <div className="text-white font-black text-xl leading-none">25,000</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider font-medium mt-0.5">{t('video.badges.facility.sublabel')}</div>
                <div className="text-accent-orange text-xs font-bold mt-1">In-House Manufacturing</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute top-6 right-[-18px] z-10 bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-2xl min-w-[140px]"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-trust-blue to-trust-blue/70 rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                <div className="text-white font-black text-xl leading-none">Tight</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider font-medium mt-0.5">Tolerances</div>
                <div className="text-accent-orange text-xs font-bold mt-1">CNC Precision</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-6 left-[-18px] z-10 bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-2xl min-w-[140px]"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <ShieldCheck className="w-4 h-4 text-white" />
                </div>
                <div className="text-white font-black text-xl leading-none">ISO</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider font-medium mt-0.5">9001:2015</div>
                <div className="text-accent-orange text-xs font-bold mt-1">Quality Assured</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-6 right-[-18px] z-10 bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-2xl min-w-[140px]"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-trust-blue to-charcoal rounded-xl flex items-center justify-center mb-2 shadow-lg">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div className="text-white font-black text-xl leading-none">20+</div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider font-medium mt-0.5">Countries</div>
                <div className="text-accent-orange text-xs font-bold mt-1">Global Export</div>
              </motion.div>
            </motion.div>

            {/* RIGHT — text */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <SectionBadge color="hava-red" className="mb-5">{t('whyHavaPage.section1.label')}</SectionBadge>
              <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-5 leading-tight">
                {t('whyHavaPage.section1.title')}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-7">{t('whyHavaPage.section1.body')}</p>
              <div className="space-y-3">
                {section1Points.map((key, i) => (
                  <motion.div key={key} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 border-l-4 border-hava-red pl-4 py-2">
                    <CheckCircle2 className="w-5 h-5 text-hava-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-charcoal">{t(`whyHavaPage.section1.points.${key}.title`)}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{t(`whyHavaPage.section1.points.${key}.text`)}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Compatibility */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t('whyHavaPage.section2.label')} badgeColor="trust-blue" badgeIcon={ShieldCheck} title={t('whyHavaPage.section2.title')} intro={t('whyHavaPage.section2.body')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {['p1', 'p2', 'p3', 'p4', 'p5'].map((key, i) => (
              <motion.div key={key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white border-2 border-steel-gray rounded-2xl p-5 hover:border-hava-red/40 hover:shadow-xl transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-charcoal font-medium leading-snug">{t(`whyHavaPage.section2.points.${key}`)}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-8 max-w-4xl mx-auto bg-accent-orange/10 border-l-4 border-accent-orange rounded-r-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">!</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed"><strong className="text-charcoal">Disclaimer:</strong> {t('whyHavaPage.section2.disclaimer')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — Quality Process */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t('whyHavaPage.section3.label')} badgeColor="hava-red" badgeIcon={Award} title={t('whyHavaPage.section3.title')} intro={t('whyHavaPage.section3.body')} />
          <QualityProcess />
        </div>
      </section>

      {/* SECTION 4 — Where We Work */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t('whyHavaPage.section4.label')} badgeColor="accent-orange" badgeIcon={Globe} title={t('whyHavaPage.section4.title')} intro={t('whyHavaPage.section4.body')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {section4Cards.map((key, i) => (
              <motion.div key={key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-3xl p-6 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group">
                <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-charcoal text-lg mb-2 group-hover:text-hava-red transition-colors">{t(`whyHavaPage.section4.cards.${key}.title`)}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{t(`whyHavaPage.section4.cards.${key}.text`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HAVA vs Trader */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 left-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t('whyHavaPage.section5.label')} badgeColor="hava-red" badgeIcon={TrendingUp} title={t('whyHavaPage.section5.title')} intro={t('whyHavaPage.section5.body')} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-2xl border-2 border-steel-gray mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-charcoal text-white">
              <div className="p-5 font-bold text-sm uppercase tracking-wider border-b md:border-b-0 md:border-r border-white/10">Category</div>
              <div className="p-5 font-bold text-sm uppercase tracking-wider bg-gradient-to-br from-hava-red to-accent-orange border-b md:border-b-0 md:border-r border-white/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> HAVA — In-House Manufacturer
              </div>
              <div className="p-5 font-bold text-sm uppercase tracking-wider text-white/60">Typical Reseller / Trader</div>
            </div>
            {section5Rows.map((key, i) => (
              <div key={key} className={`grid grid-cols-1 md:grid-cols-3 border-t border-steel-gray ${i % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}`}>
                <div className="p-5 font-bold text-charcoal text-sm border-b md:border-b-0 md:border-r border-steel-gray">{t(`whyHavaPage.section5.rows.${key}.category`)}</div>
                <div className="p-5 text-sm text-charcoal bg-hava-red/5 border-b md:border-b-0 md:border-r border-steel-gray flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-hava-red flex-shrink-0 mt-0.5" /><span>{t(`whyHavaPage.section5.rows.${key}.hava`)}</span>
                </div>
                <div className="p-5 text-sm text-gray-500">{t(`whyHavaPage.section5.rows.${key}.reseller`)}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — Why Buyers Return */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={t('whyHavaPage.section6.label')} badgeColor="trust-blue" badgeIcon={Users} title={t('whyHavaPage.section6.title')} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {section6Cards.map((key, i) => {
              const Icon = section6Icons[i % section6Icons.length];
              return (
                <motion.div key={key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-3xl p-6 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-hava-red/5 to-accent-orange/5 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-charcoal text-lg mb-2 group-hover:text-hava-red transition-colors">{t(`whyHavaPage.section6.cards.${key}.title`)}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{t(`whyHavaPage.section6.cards.${key}.text`)}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-charcoal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-10">
            <p className="text-3xl lg:text-4xl font-black text-white mb-4">{t('whyHavaPage.finalCta.title')}</p>
            <p className="text-base text-white/70 max-w-2xl mx-auto">{t('whyHavaPage.finalCta.body')}</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-hava-red/20 to-accent-orange/20 backdrop-blur-xl border border-white/10 rounded-3xl p-7">
              <p className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Contact Us Directly</p>
              <div className="space-y-3 mb-5">
                <a href={`tel:${d.finalCta.phone}`} className="flex items-center gap-3 text-white/90 hover:text-accent-orange transition-colors">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                  <span className="text-sm">{d.finalCta.phone}</span>
                </a>
                <a href={`mailto:${d.finalCta.email}`} className="flex items-center gap-3 text-white/90 hover:text-accent-orange transition-colors">
                  <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                  <span className="text-sm">{d.finalCta.email}</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => setQuoteModalOpen(true)} className="bg-hava-red hover:bg-hava-red/90 text-white text-xs font-bold">{t('header.primaryCTA')}</Button>
                <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xs font-bold">Contact Our Team</Button>
                <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="border-white/30 text-white hover:bg-white/10 text-xs font-bold"><Download className="w-3 h-3 mr-1" /> Catalogue</Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7">
              <p className="text-xl font-bold text-accent-orange mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Quick Enquiry</p>
              <p className="text-sm text-white/70 mb-5">Share your requirement and our team will get back to you with a tailored solution.</p>
              <Button onClick={() => setQuoteModalOpen(true)} className="w-full bg-gradient-to-r from-hava-red to-accent-orange hover:from-hava-red/90 hover:to-accent-orange/90 text-white font-bold py-6 text-base shadow-xl rounded-xl group">
                Submit Enquiry <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} type="quote" />
    </div>
  );
};