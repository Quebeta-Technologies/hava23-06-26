import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  Award,
  ShieldCheck,
  HeadphonesIcon,
  Layers,
  Package,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Globe,
  Quote as QuoteIcon,
  Sparkles,
  Briefcase,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SectionHeader, SectionBadge } from '../components/SectionBadge';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';

const dealersData = {
  hero: {
    eyebrow: "Dealers & Distributors",
    title: "Grow With a Trusted",
    titleGradient: "Manufacturing Partner",
    body: "HAVA works with dealers, distributors, and industrial supply partners across India and 20+ international markets to deliver reliable rock drilling equipment to customers who demand quality and performance.",
    stats: [
      { value: "50+", label: "Years of Manufacturing" },
      { value: "20+", label: "Export Countries" },
      { value: "ISO 9001:2015", label: "Certified" },
      { value: "Direct", label: "Manufacturer — No Middlemen" },
    ],
  },
  philosophy: {
    label: "Partnership Philosophy",
    title: "Building Strong Partnerships",
    titleGradient: "Since 1970",
    body: "At HAVA, we believe successful business relationships are built on trust, consistency, and long-term support. For decades, dealers and distributors have worked with us because they know what to expect: reliable products, fair pricing, and responsive service from people who stand behind everything we manufacture.",
    quote: "HAVA's partnership philosophy is built on trust, reliability, and mutual growth. Their support and product quality have consistently exceeded our expectations.",
    quoteCite: "— Dealer Partner Group",
  },
  reasons: {
    label: "Why Partner With HAVA",
    title: "Six Reasons Dealers",
    titleGradient: "Choose HAVA",
    cards: [
      { num: "01", title: "Manufacturer Direct", text: "No unnecessary markups, faster support, better product availability control.", icon: Building2 },
      { num: "02", title: "Proven Experience", text: "Decades of expertise in mining, infrastructure, construction, and industrial sectors.", icon: Award },
      { num: "03", title: "Complete Portfolio", text: "Rock drills, accessories, consumables, spare parts from a single trusted source.", icon: Layers },
      { num: "04", title: "ISO 9001:2015", text: "Manufacturing processes ensuring consistent product performance and reliability.", icon: ShieldCheck },
      { num: "05", title: "Technical Support", text: "Responsive technical assistance and product guidance whenever needed.", icon: HeadphonesIcon },
      { num: "06", title: "Long-Term Growth", text: "Sustainable business relationship with a manufacturer committed to innovation.", icon: TrendingUp },
    ],
  },
  idealPartners: {
    label: "Ideal Partners",
    title: "Who Should",
    titleGradient: "Partner With HAVA",
    cards: [
      { title: "Industrial Equipment Dealers", text: "Established dealers adding ISO-certified pneumatic drilling equipment to their portfolio." },
      { title: "Mining Equipment Suppliers", text: "Suppliers serving mining and quarrying companies needing Atlas Copco-compatible alternatives." },
      { title: "Aftermarket Spare Parts Suppliers", text: "Businesses specialising in spare parts and aftermarket components." },
      { title: "International Importers / Traders", text: "Companies sourcing quality Indian-manufactured pneumatic mining equipment." },
      { title: "Construction Equipment Distributors", text: "Distributors serving construction, demolition, and infrastructure companies." },
      { title: "Infrastructure Supply Companies", text: "Companies involved in tunnel and underground construction projects." },
    ],
  },
  enquiry: {
    label: "Partner Enquiry",
    title: "Become a HAVA",
    titleGradient: "Dealer or Distributor",
    body: "Interested in representing HAVA products in your region? Complete the enquiry form and our team will evaluate potential partnership opportunities based on your market presence and business profile.",
    address: {
      company: "Haryrock Engineering Pvt. Ltd.",
      line: "A-55, H Block, MIDC Pimpri, Pune – 411018, Maharashtra, India",
      phone: "+91 20 2744 0025 / 26",
      email: "sales.haryrock@gmail.com",
      mapLink: "https://share.google/eJDTDWB6XWYJowsS3",
    },
    formFields: ["Company Name", "Contact Person", "Email Address", "Phone", "Business Type", "Country", "State / Region", "Industry", "Products You Currently Deal In", "Brief Business Description & Partnership Interest"],
  },
  finalCta: {
    title: "Let's Build Stronger",
    titleGradient: "Markets Together",
    body: "Whether you're an established distributor, industrial supplier, or growing equipment dealer, HAVA is ready to support your success with reliable products, manufacturing expertise, and long-term partnership opportunities.",
  },
};

const trustItems = [
  { icon: '🏭', text: 'Direct Manufacturer' },
  { icon: '✅', text: 'ISO 9001:2015 Certified' },
  { icon: '🌍', text: '20+ Export Countries' },
  { icon: '🤝', text: '50+ Years Experience' },
];

export const DealersPage = () => {
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
                <span className="text-xs font-bold uppercase tracking-[2px] text-charcoal">{dealersData.hero.eyebrow}</span>
                <span className="w-2 h-2 bg-accent-orange rounded-full" />
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-charcoal leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {dealersData.hero.title}{' '}
                <span className="gradient-text">{dealersData.hero.titleGradient}</span>
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">{dealersData.hero.body}</p>
            </div>

            {/* RIGHT — buttons + 4 stat boxes */}
            <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-5 text-sm shadow-xl rounded-xl group"
                  >
                    Become a Partner <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-6 py-5 text-sm rounded-xl shadow-lg backdrop-blur-xl"
                  >
                    Send an Enquiry
                  </Button>
                </motion.div>
              </div>

              {/* 4 stat/trust boxes */}
              <div className="grid grid-cols-2 gap-2">
                {dealersData.hero.stats.map((stat, i) => (
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

      {/* PARTNERSHIP PHILOSOPHY */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={dealersData.philosophy.label} badgeColor="hava-red" badgeIcon={Briefcase} title={dealersData.philosophy.title} titleGradient={dealersData.philosophy.titleGradient} intro={dealersData.philosophy.body} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-hava-red/5 via-white to-accent-orange/5 border-l-4 border-hava-red rounded-r-3xl p-8 lg:p-10 relative">
            <QuoteIcon className="absolute top-6 right-8 w-16 h-16 text-hava-red/10" />
            <p className="text-lg lg:text-xl text-charcoal leading-relaxed italic mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>"{dealersData.philosophy.quote}"</p>
            <cite className="text-sm font-bold text-hava-red uppercase tracking-wider not-italic">{dealersData.philosophy.quoteCite}</cite>
          </motion.div>
        </div>
      </section>

      {/* SIX REASONS */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={dealersData.reasons.label} badgeColor="accent-orange" badgeIcon={Sparkles} title={dealersData.reasons.title} titleGradient={dealersData.reasons.titleGradient} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {dealersData.reasons.cards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-3xl p-6 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-hava-red/5 to-accent-orange/5 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                  <div className="absolute -top-3 -right-3 text-7xl font-black text-hava-red/5 leading-none">{card.num}</div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[10px] font-bold text-trust-blue uppercase tracking-[2px]">Reason {card.num}</span>
                    <h3 className="font-bold text-charcoal text-lg mt-1 mb-2 group-hover:text-hava-red transition-colors">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IDEAL PARTNERS */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 left-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={dealersData.idealPartners.label} badgeColor="trust-blue" badgeIcon={Users} title={dealersData.idealPartners.title} titleGradient={dealersData.idealPartners.titleGradient} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {dealersData.idealPartners.cards.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-gradient-to-br from-slate-50 to-blue-50 border-l-4 border-accent-orange rounded-r-2xl p-5 hover:shadow-xl transition-all group">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-orange to-hava-red rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h5 className="font-bold text-charcoal text-sm mb-2 uppercase tracking-wide group-hover:text-hava-red transition-colors">{c.title}</h5>
                <p className="text-xs text-gray-600 leading-relaxed">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER ENQUIRY */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge={dealersData.enquiry.label} badgeColor="hava-red" badgeIcon={Mail} title={dealersData.enquiry.title} titleGradient={dealersData.enquiry.titleGradient} intro={dealersData.enquiry.body} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gradient-to-br from-charcoal to-trust-blue rounded-3xl p-7 text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-hava-red/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-accent-orange text-xs font-bold uppercase tracking-wider mb-2">Contact for Dealership Enquiries</h4>
                <p className="font-bold text-white mb-2">{dealersData.enquiry.address.company}</p>
                <p className="text-sm text-white/80 leading-relaxed mb-4">{dealersData.enquiry.address.line}</p>
                <div className="space-y-2 pt-4 border-t border-white/10 mb-4">
                  <a href={`tel:${dealersData.enquiry.address.phone}`} className="flex items-center gap-2 text-white/90 hover:text-accent-orange text-sm transition-colors"><Phone className="w-4 h-4" /> {dealersData.enquiry.address.phone}</a>
                  <a href={`mailto:${dealersData.enquiry.address.email}`} className="flex items-center gap-2 text-white/90 hover:text-accent-orange text-sm transition-colors"><Mail className="w-4 h-4" /> {dealersData.enquiry.address.email}</a>
                </div>
                <a href={dealersData.enquiry.address.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent-orange hover:text-white text-sm font-bold group transition-colors">
                  📍 Get Directions on Google Maps <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-white rounded-3xl p-7 border-2 border-steel-gray shadow-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-trust-blue to-trust-blue/80 rounded-2xl flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-trust-blue text-xs font-bold uppercase tracking-wider mb-2">Partnership Enquiry Form</h4>
              <h3 className="font-black text-charcoal text-lg mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Required Information</h3>
              <div className="grid grid-cols-2 gap-2 mb-5">
                {dealersData.enquiry.formFields.map((field, i) => (
                  <div key={i} className="text-xs text-charcoal bg-slate-50 px-3 py-2 rounded-lg border border-steel-gray">• {field}</div>
                ))}
              </div>
              <Button onClick={() => setQuoteModalOpen(true)} className="w-full bg-gradient-to-r from-hava-red to-accent-orange hover:from-hava-red/90 hover:to-accent-orange/90 text-white font-bold py-6 text-base shadow-xl rounded-xl group">
                Submit Partnership Enquiry <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
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
              {dealersData.finalCta.title} <span className="gradient-text">{dealersData.finalCta.titleGradient}</span>
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-2xl mx-auto">{dealersData.finalCta.body}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-6 py-3 rounded-xl group">
                Become a Partner <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl">Contact Our Team</Button>
              <Button onClick={() => setQuoteModalOpen(true)} className="bg-accent-orange hover:bg-accent-orange/90 text-charcoal font-bold px-6 py-3 rounded-xl">Download Company Profile</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} type="quote" />
    </div>
  );
};