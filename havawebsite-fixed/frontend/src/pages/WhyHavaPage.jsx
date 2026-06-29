import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const qualitySteps = [
  {
    num: '01',
    icon: Factory,
    color: 'from-hava-red to-accent-orange',
    bg: 'bg-hava-red/10',
    title: 'Raw Material Verification',
    sub: 'Intake & quality check',
    detail: 'All raw materials — steel billets, alloy bars, castings, components — are verified against material specifications before entering production. Substandard material is rejected at intake. Full traceability maintained throughout.',
    activities: ['Grade check', 'Dimensional verification', 'Supplier cert review', 'Traceability tagging'],
  },
  {
    num: '02',
    icon: Settings,
    color: 'from-trust-blue to-trust-blue/80',
    bg: 'bg-trust-blue/10',
    title: 'CNC Precision Machining',
    sub: 'Multi-axis manufacturing',
    detail: 'Advanced multi-axis CNC machining centres produce all components to exact dimensional specifications. Every dimension is machine-verified — not manually estimated. This is the foundation of HAVA\'s consistent quality across every production run.',
    activities: ['Turning & boring', 'Milling & threading', 'Surface grinding', 'CNC dimensional verification'],
  },
  {
    num: '03',
    icon: Flame,
    color: 'from-accent-orange to-accent-orange/80',
    bg: 'bg-accent-orange/10',
    title: 'Heat Treatment',
    sub: 'Hardening & tempering',
    detail: 'In-house heat treatment achieves the required hardness, wear resistance, and fatigue strength. Piston, cylinder, rifle bar, and high-stress components are heat-treated to specific hardness specifications critical for rock drilling performance.',
    activities: ['Case hardening', 'Through hardening', 'Tempering', 'Hardness verification'],
  },
  {
    num: '04',
    icon: Hammer,
    color: 'from-trust-blue/80 to-charcoal',
    bg: 'bg-charcoal/10',
    title: 'Grinding',
    sub: 'Surface finishing & tolerances',
    detail: 'Precision grinding ensures all mating surfaces, bores, and shafts meet the tight tolerances required for smooth assembly and long service life. Surface finish is verified to specification before components proceed to assembly.',
    activities: ['Cylindrical grinding', 'Surface grinding', 'Internal grinding', 'Finish verification'],
  },
  {
    num: '05',
    icon: FlaskConical,
    color: 'from-hava-red/90 to-trust-blue',
    bg: 'bg-trust-blue/10',
    title: 'QC & Functional Testing',
    sub: 'Inspect & test every unit',
    detail: 'Every assembled unit goes through structured multi-point QC inspection then into the testing bay. Air pressure applied, impact rate, rotation, flushing, and all controls verified. Results documented. No unit dispatched without a passed test.',
    activities: ['Dimensional inspection', 'Leak test & rotation check', 'Impact rate measurement', 'Test results documented'],
  },
  {
    num: '06',
    icon: CheckCircle2,
    color: 'from-trust-blue to-hava-red/80',
    bg: 'bg-trust-blue/10',
    title: 'Accept & Testing',
    sub: 'Final acceptance check',
    detail: 'Units that pass QC are formally accepted into finished goods. A final verification pass confirms all specifications are met — performance, dimensional, and visual. Rejected units are returned for rework; no exceptions to acceptance criteria.',
    activities: ['Acceptance sign-off', 'Performance validation', 'Visual inspection', 'Rework loop if needed'],
  },
  {
    num: '07',
    icon: Wrench,
    color: 'from-accent-orange/90 to-trust-blue',
    bg: 'bg-accent-orange/10',
    title: 'Painting & Packing',
    sub: 'Finish & protection',
    detail: 'Accepted units are cleaned, primed, and painted to HAVA\'s standard finish. Components are then individually packed with protective wrapping and placed in export-grade packaging to prevent damage in transit.',
    activities: ['Surface cleaning', 'Painting & drying', 'Component wrapping', 'Export-grade packing'],
  },
  {
    num: '08',
    icon: Truck,
    color: 'from-hava-red to-accent-orange',
    bg: 'bg-hava-red/10',
    title: 'Dispatch',
    sub: 'Shipment & documentation',
    detail: 'Packed units are dispatched with full documentation — packing lists, commercial invoices, and certificates of origin — verified before release. Every shipment is tracked to the customer. No unit leaves without complete paperwork.',
    activities: ['Documentation prep', 'Invoice & cert of origin', 'Shipment release', 'Tracking to customer'],
  },
];

const trustItems = [
  { icon: '🏭', text: '25,000 Sq. Ft. Facility' },
  { icon: '✅', text: 'ISO 9001:2015 Certified' },
  { icon: '🌍', text: 'Exported to 20+ Countries' },
  { icon: '🔧', text: 'In-House Manufacturing' },
];

const QualityProcess = () => {
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setActive(prev => (prev + 1) % qualitySteps.length), 3000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const handleSelect = (i) => {
    setActive(i);
    setAutoPlay(false);
  };

  const s = qualitySteps[active];
  const Icon = s.icon;

  return (
    <div className="mt-10">
      <div className="grid grid-cols-4 md:grid-cols-8 gap-3 mb-8">
        {qualitySteps.map((step, i) => {
          const StepIcon = step.icon;
          const isActive = i === active;
          return (
            <motion.button
              key={i}
              onClick={() => handleSelect(i)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.97 }}
              className={`relative rounded-2xl p-4 text-center transition-all border-2 ${
                isActive ? 'border-hava-red shadow-xl bg-white' : 'border-steel-gray bg-white hover:border-hava-red/40 hover:shadow-lg'
              }`}
            >
              {isActive && <motion.div layoutId="activeGlow" className="absolute inset-0 rounded-2xl bg-hava-red/5" />}
              <div className="relative">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[1.5px] mb-2">{step.num}</div>
                <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mx-auto mb-2 ${isActive ? 'scale-110' : ''} transition-transform`}>
                  <StepIcon className="w-5 h-5 text-white" />
                </div>
                <p className={`text-xs font-bold leading-tight ${isActive ? 'text-hava-red' : 'text-charcoal'} transition-colors`}>{step.title}</p>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="h-1 bg-steel-gray rounded-full mb-6 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-hava-red to-accent-orange rounded-full"
          animate={{ width: `${((active + 1) / qualitySteps.length) * 100}%` }}
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
              <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold text-accent-orange uppercase tracking-[2px] mb-1">Stage {s.num} of 08 — {s.sub}</div>
                <p className="text-xl lg:text-2xl font-black text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.title}</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-5">{s.detail}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {s.activities.map((a, ai) => (
                <span key={ai} className="text-xs font-bold text-white/90 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">{a}</span>
              ))}
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">ISO 9001:2015 · Cert No. V3QC/QMS/D26/0031 · Every unit · No exceptions</p>
              <div className="flex items-center gap-2">
                <button onClick={() => handleSelect(Math.max(0, active - 1))} disabled={active === 0} className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30">
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
                <span className="text-xs text-white/60 font-bold">{active + 1}/{qualitySteps.length}</span>
                <button onClick={() => handleSelect(Math.min(qualitySteps.length - 1, active + 1))} disabled={active === qualitySteps.length - 1} className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30">
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-2 mt-5">
        {qualitySteps.map((_, i) => (
          <button key={i} onClick={() => handleSelect(i)} className={`rounded-full transition-all ${i === active ? 'w-6 h-2 bg-hava-red' : 'w-2 h-2 bg-steel-gray hover:bg-hava-red/40'}`} />
        ))}
      </div>
    </div>
  );
};

export const WhyHavaPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* ── HERO — left text, right buttons + trust boxes ── */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">

            {/* LEFT — eyebrow + title + body */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 bg-white border border-steel-gray rounded-full px-4 py-2 mb-4 shadow-sm">
                <span className="text-accent-orange text-sm">✦</span>
                <span className="text-xs font-bold uppercase tracking-[2px] text-charcoal">{d.hero.eyebrow}</span>
                <span className="w-2 h-2 bg-accent-orange rounded-full" />
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-charcoal leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Precision Manufacturing.{' '}
                <span className="gradient-text">Trusted Globally.</span>
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">{d.hero.subheading}</p>
            </div>

            {/* RIGHT — buttons + 4 trust boxes */}
            <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-5 text-sm shadow-xl rounded-xl group animate-pulse-glow"
                  >
                    {d.hero.primaryCTA} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => (window.location.href = '/products')}
                    className="w-full glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-6 py-5 text-sm rounded-xl shadow-lg backdrop-blur-xl"
                  >
                    {d.hero.secondaryCTA}
                  </Button>
                </motion.div>
              </div>

              {/* 4 trust boxes */}
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
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/assets/hava-factory.png')` }} />
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal/85 to-trust-blue/75" />
                <div className="relative p-10">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Factory, label: 'In-House Manufacturing', value: '25,000', sub: 'Sq. Ft. Facility' },
                      { icon: Settings, label: 'CNC Precision', value: 'Tight', sub: 'Tolerances' },
                      { icon: ShieldCheck, label: 'Quality Assured', value: 'ISO', sub: '9001:2015' },
                      { icon: Globe, label: 'Global Export', value: '20+', sub: 'Countries' },
                    ].map((card, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                        <div className="w-10 h-10 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center mb-3">
                          <card.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-2xl font-black text-white">{card.value}</div>
                        <div className="text-[10px] text-white/70 uppercase tracking-wider mt-1">{card.sub}</div>
                        <div className="text-xs text-accent-orange font-semibold mt-2">{card.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-accent-orange/30 rounded-3xl rotate-12" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-white/10 rounded-3xl -rotate-12" />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <SectionBadge color="hava-red" className="mb-5">{d.section1.label}</SectionBadge>
              <h2 className="text-3xl lg:text-4xl font-black text-charcoal mb-5 leading-tight">
                Designed, Machined & Tested <span className="gradient-text">In-House</span> — Every Product, Every Time.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed mb-7">{d.section1.body}</p>
              <div className="space-y-3">
                {d.section1.points.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 border-l-4 border-hava-red pl-4 py-2">
                    <CheckCircle2 className="w-5 h-5 text-hava-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-charcoal">{p.title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{p.text}</div>
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
          <SectionHeader badge={d.section2.label} badgeColor="trust-blue" badgeIcon={ShieldCheck} title="Atlas Copco" titleGradient="Compatible Solutions" intro={d.section2.body} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {d.section2.points.map((point, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white border-2 border-steel-gray rounded-2xl p-5 hover:border-hava-red/40 hover:shadow-xl transition-all">
                <div className="w-10 h-10 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <p className="text-sm text-charcoal font-medium leading-snug">{point}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-8 max-w-4xl mx-auto bg-accent-orange/10 border-l-4 border-accent-orange rounded-r-2xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">!</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed"><strong className="text-charcoal">Disclaimer:</strong> {d.section2.disclaimer}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — Quality Process */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={d.section3.label} badgeColor="hava-red" badgeIcon={Award} title="Every Product Is" titleGradient="Tested Before It Reaches You" intro={d.section3.body} />
          <QualityProcess />
        </div>
      </section>

      {/* SECTION 4 — Where We Work */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={d.section4.label} badgeColor="accent-orange" badgeIcon={Globe} title="Built for" titleGradient="Tough Working Conditions" intro={d.section4.body} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {d.section4.cards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-3xl p-6 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group">
                <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <p className="font-bold text-charcoal text-lg mb-2 group-hover:text-hava-red transition-colors">{card.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
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
          <SectionHeader badge={d.section5.label} badgeColor="hava-red" badgeIcon={TrendingUp} title="What Makes" titleGradient="HAVA Stand Out" intro={d.section5.body} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-2xl border-2 border-steel-gray mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-charcoal text-white">
              <div className="p-5 font-bold text-sm uppercase tracking-wider border-b md:border-b-0 md:border-r border-white/10">Category</div>
              <div className="p-5 font-bold text-sm uppercase tracking-wider bg-gradient-to-br from-hava-red to-accent-orange border-b md:border-b-0 md:border-r border-white/10 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> HAVA — In-House Manufacturer
              </div>
              <div className="p-5 font-bold text-sm uppercase tracking-wider text-white/60">Typical Reseller / Trader</div>
            </div>
            {d.section5.rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-1 md:grid-cols-3 border-t border-steel-gray ${i % 2 === 0 ? 'bg-slate-50/60' : 'bg-white'}`}>
                <div className="p-5 font-bold text-charcoal text-sm border-b md:border-b-0 md:border-r border-steel-gray">{row.category}</div>
                <div className="p-5 text-sm text-charcoal bg-hava-red/5 border-b md:border-b-0 md:border-r border-steel-gray flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-hava-red flex-shrink-0 mt-0.5" /><span>{row.hava}</span>
                </div>
                <div className="p-5 text-sm text-gray-500">{row.reseller}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 — Why Buyers Return */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={d.section6.label} badgeColor="trust-blue" badgeIcon={Users} title="Why Buyers Keep" titleGradient="Coming Back to HAVA" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {d.section6.cards.map((card, i) => {
              const icons = [Award, TrendingUp, Settings, Layers, Globe, Users];
              const Icon = icons[i % icons.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-3xl p-6 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-hava-red/5 to-accent-orange/5 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-charcoal text-lg mb-2 group-hover:text-hava-red transition-colors">{card.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
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
            <p className="text-3xl lg:text-4xl font-black text-white mb-4">Ready to Work With <span className="gradient-text">HAVA?</span></p>
            <p className="text-base text-white/70 max-w-2xl mx-auto">{d.finalCta.body}</p>
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
                <Button onClick={() => setQuoteModalOpen(true)} className="bg-hava-red hover:bg-hava-red/90 text-white text-xs font-bold">Request a Quote</Button>
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