import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Target,
  Eye,
  Award,
  Factory,
  Globe,
  Quote as QuoteIcon,
  CheckCircle2,
  Calendar,
  Briefcase,
  Layers,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SectionHeader, SectionBadge } from '../components/SectionBadge';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';
import { aboutPageData as d } from '../data/pagesData';

export const AboutPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* ── HERO — left text, right buttons + stat boxes ── */}
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
                Engineering Rock Drilling{' '}
                <span className="gradient-text">Excellence Since 1970</span>
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">{d.hero.body}</p>
            </div>

            {/* RIGHT — buttons + 4 stat boxes */}
            <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4">
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-5 text-sm shadow-xl rounded-xl group"
                  >
                    Get a Quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => (window.location.href = '/products')}
                    className="w-full glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-6 py-5 text-sm rounded-xl shadow-lg backdrop-blur-xl"
                  >
                    Explore Products
                  </Button>
                </motion.div>
              </div>

              {/* 4 stat boxes */}
              <div className="grid grid-cols-2 gap-2">
                {d.hero.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="bg-white border-2 border-steel-gray rounded-xl px-3 py-2.5 shadow-sm"
                  >
                    <div className="text-base font-black text-charcoal leading-tight">{stat.value}</div>
                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-0.5 leading-tight">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white" id="overview">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Sub-Page 1 of 5" badgeColor="hava-red" title="Company" titleGradient="Overview" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-2 space-y-6">
              <div>
                <span className="inline-block text-xs font-bold text-accent-orange uppercase tracking-[2px] mb-3">Introduction</span>
                <p className="text-base text-gray-700 leading-relaxed">{d.companyOverview.intro}</p>
              </div>
              <div>
                <span className="inline-block text-xs font-bold text-accent-orange uppercase tracking-[2px] mb-3">Brand Story</span>
                <p className="text-base text-gray-700 leading-relaxed">{d.companyOverview.brandStory}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-gradient-to-br from-charcoal to-trust-blue rounded-3xl p-7 text-white relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-hava-red/20 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-accent-orange text-xs font-bold uppercase tracking-wider mb-2">Corporate Office & Factory</h4>
                <p className="font-bold text-white mb-2">{d.companyOverview.address.company}</p>
                <p className="text-sm text-white/80 leading-relaxed mb-4">{d.companyOverview.address.line}</p>
                <div className="space-y-2 mb-4 pt-4 border-t border-white/10">
                  <a href={`tel:${d.companyOverview.address.phone}`} className="flex items-center gap-2 text-white/90 hover:text-accent-orange text-sm transition-colors">
                    <Phone className="w-4 h-4" /> {d.companyOverview.address.phone}
                  </a>
                  <a href={`mailto:${d.companyOverview.address.email}`} className="flex items-center gap-2 text-white/90 hover:text-accent-orange text-sm transition-colors">
                    <Mail className="w-4 h-4" /> {d.companyOverview.address.email}
                  </a>
                </div>
                <a href={d.companyOverview.address.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent-orange hover:text-white text-sm font-bold group transition-colors">
                  📍 View on Google Maps <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* MISSION & VISION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white border-2 border-hava-red/20 rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-hava-red/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-charcoal mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Our Mission</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{d.companyOverview.mission}</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white border-2 border-trust-blue/20 rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-trust-blue/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-2xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-charcoal mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Our Vision</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{d.companyOverview.vision}</p>
              </div>
            </motion.div>
          </div>

          {/* MANUFACTURING CAPABILITY */}
          <div className="mt-10">
            <SectionBadge color="accent-orange" icon={Factory} className="mb-4">Manufacturing Capability</SectionBadge>
            <h3 className="text-2xl lg:text-3xl font-black text-charcoal mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              25,000 Sq. Ft. <span className="gradient-text">Fully Equipped</span> Facility
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">{d.companyOverview.manufacturingCapability}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {d.companyOverview.capabilityCards.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-gradient-to-br from-slate-50 to-blue-50 border-l-4 border-hava-red rounded-2xl p-5 hover:shadow-xl transition-all">
                  <h5 className="font-bold text-charcoal text-sm mb-2 uppercase tracking-wide">{c.title}</h5>
                  <p className="text-xs text-gray-600 leading-relaxed">{c.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPORT PRESENCE */}
          <div className="mt-10">
            <SectionBadge color="trust-blue" icon={Globe} className="mb-4">Export Presence</SectionBadge>
            <h3 className="text-2xl lg:text-3xl font-black text-charcoal mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Equipment Working in <span className="gradient-text">20+ Countries</span>
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-4xl">{d.companyOverview.exportPresence}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {d.companyOverview.exportRegions.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white border-2 border-steel-gray rounded-2xl p-5 hover:border-accent-orange/40 hover:shadow-xl transition-all group">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent-orange to-hava-red rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h5 className="font-bold text-charcoal text-sm mb-2">{r.region}</h5>
                  <p className="text-xs text-gray-600 leading-snug">{r.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50" id="journey">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Sub-Page 2 of 5" badgeColor="hava-red" badgeIcon={Calendar} title="Our" titleGradient="Journey / Timeline" intro={d.journey.intro} />
          <div className="relative mt-12">
            <div className="hidden lg:block absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-hava-red via-accent-orange to-trust-blue rounded-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-3">
              {d.journey.timeline.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative">
                  <div className={`relative z-10 w-12 h-12 mx-auto rounded-full flex items-center justify-center text-white font-black text-xs shadow-lg ${t.highlighted ? 'bg-gradient-to-br from-hava-red to-accent-orange' : 'bg-charcoal'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className={`mt-4 bg-white rounded-2xl p-5 border-t-4 shadow-md hover:shadow-2xl transition-all text-center ${t.highlighted ? 'border-hava-red' : 'border-steel-gray'}`}>
                    <div className={`text-2xl font-black mb-2 ${t.highlighted ? 'text-hava-red' : 'text-trust-blue'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t.year}</div>
                    <h4 className="font-bold text-charcoal text-sm uppercase tracking-wide mb-2">{t.title}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white" id="leadership">
        <div className="absolute top-20 left-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Sub-Page 3 of 5" badgeColor="hava-red" badgeIcon={Briefcase} title="Leadership" titleGradient="Team" intro={d.leadership.intro} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mt-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-7 border-2 border-steel-gray shadow-lg hover:shadow-2xl transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-hava-red/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-hava-red uppercase tracking-wider">{d.leadership.founder.role}</span>
                    <h3 className="text-2xl font-black text-charcoal mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{d.leadership.founder.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-5">{d.leadership.founder.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {d.leadership.founder.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold uppercase tracking-wider bg-white border border-steel-gray px-3 py-1.5 rounded-full text-charcoal">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-charcoal to-trust-blue rounded-3xl p-7 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-orange/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black text-white mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Contact</h3>
                <div className="space-y-3 mb-5">
                  <a href={`tel:${d.leadership.contact.phone1}`} className="flex items-center gap-3 text-white/90 hover:text-accent-orange text-sm transition-colors"><Phone className="w-4 h-4" /> {d.leadership.contact.phone1}</a>
                  <a href={`tel:${d.leadership.contact.phone2}`} className="flex items-center gap-3 text-white/90 hover:text-accent-orange text-sm transition-colors"><Phone className="w-4 h-4" /> {d.leadership.contact.phone2}</a>
                  <a href={`mailto:${d.leadership.contact.email}`} className="flex items-center gap-3 text-white/90 hover:text-accent-orange text-sm transition-colors"><Mail className="w-4 h-4" /> {d.leadership.contact.email}</a>
                </div>
                <div className="pt-4 border-t border-white/10 mb-4">
                  <p className="text-sm text-white/80 leading-relaxed whitespace-pre-line">{d.leadership.contact.address}</p>
                </div>
                <a href={d.leadership.contact.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent-orange hover:text-white text-sm font-bold group transition-colors">
                  📍 View on Google Maps <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-5xl mx-auto mt-10 bg-gradient-to-br from-hava-red/5 via-white to-accent-orange/5 border-l-4 border-hava-red rounded-r-3xl p-8 lg:p-10 relative">
            <QuoteIcon className="absolute top-6 right-8 w-16 h-16 text-hava-red/10" />
            <p className="text-lg lg:text-xl text-charcoal leading-relaxed italic mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>"{d.leadership.quote}"</p>
            <cite className="text-sm font-bold text-hava-red uppercase tracking-wider not-italic">{d.leadership.quoteCite}</cite>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50" id="certifications">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Sub-Page 5 of 5" badgeColor="hava-red" badgeIcon={ShieldCheck} title="Certifications &" titleGradient="Compliance" intro={d.certifications.intro} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-3xl border-2 border-steel-gray shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-hava-red to-accent-orange p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8" />
                  <div>
                    <h3 className="font-black text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ISO 9001:2015</h3>
                    <p className="text-xs uppercase tracking-wider text-white/80">Certificate Details</p>
                  </div>
                </div>
              </div>
              <div className="divide-y divide-steel-gray">
                {d.certifications.details.map((row, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-5 gap-2 px-5 py-3 hover:bg-slate-50 transition-colors">
                    <div className="md:col-span-2 text-xs font-bold text-hava-red uppercase tracking-wider">{row.label}</div>
                    <div className="md:col-span-3 text-sm text-charcoal">{row.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
              <h3 className="text-lg font-black text-charcoal" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Compliance & <span className="gradient-text">Export Standards</span></h3>
              {d.certifications.compliance.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-white border-l-4 border-hava-red rounded-r-2xl p-5 shadow-md hover:shadow-xl transition-all flex items-start gap-3">
                  <div className="text-2xl flex-shrink-0">{c.icon}</div>
                  <div>
                    <h5 className="font-bold text-charcoal text-sm mb-1">{c.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{c.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* HAVA PROMISE */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={d.promise.label} badgeColor="hava-red" badgeIcon={Sparkles} title="Dependable Rock Drilling Solutions." titleGradient="Every Time. Every Year." intro={d.promise.body} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {d.promise.cards.map((card, i) => {
              const icons = [ShieldCheck, Layers, Globe, CheckCircle2];
              const Icon = icons[i % icons.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group">
                  <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-hava-red transition-colors">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
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
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
              Looking for Reliable <span className="gradient-text">Drilling Equipment?</span>
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto">{d.finalCta.body}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-8 py-6 text-base shadow-2xl rounded-xl group w-full sm:w-auto">
                  Get a Quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => (window.location.href = '/products')} variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-6 text-base rounded-xl w-full sm:w-auto">
                  Explore Products
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} type="quote" />
    </div>
  );
};