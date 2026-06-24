import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Camera,
  Factory,
  ShieldCheck,
  PlayCircle,
  Users,
  Award,
  Sparkles,
  Filter,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { PageHero } from '../components/PageHero';
import { SectionHeader, SectionBadge } from '../components/SectionBadge';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';

const galleryData = {
  hero: {
    eyebrow: "Gallery",
    title: "Inside HAVA's",
    titleGradient: "Manufacturing Excellence",
    body: "Explore our manufacturing facility, products, quality processes, and industry applications — visual proof of the engineering behind the HAVA brand. Every photo is from our real factory, our real products, and our real customers across India and 20+ export countries.",
    isoNote: "ISO 9001:2015 – Quality Management System | Cert No. V3QC/QMS/D26/0031",
  },
  manufacturing: {
    label: "Manufacturing Facility",
    title: "Built for Precision.",
    titleGradient: "Designed for Performance.",
    body: "Our 25,000 sq. ft. manufacturing facility in Pimpri, Pune is equipped with advanced CNC machining centres, precision tooling systems, dedicated assembly areas, and rigorous quality inspection stations.",
    photos: [
      { num: "Photo 1", title: "Production Floor Overview" },
      { num: "Photo 2", title: "Precision CNC Operations" },
      { num: "Photo 3", title: "Rock Drill Assembly Line" },
      { num: "Photo 4", title: "Finished Goods Inventory" },
      { num: "Photo 5", title: "Export-Ready Packaging" },
      { num: "Photo 6", title: "Precision Parts Manufacturing" },
    ],
    filters: ["CNC Machining", "Production Floor", "Assembly", "Inventory Management", "Dispatch & Packaging"],
  },
  quality: {
    label: "Quality & Testing",
    title: "Quality",
    titleGradient: "You Can See",
    body: "Every product is tested before dispatch. Our in-house quality procedures ensure dimensional accuracy, functional reliability, and consistent product performance.",
    photos: [
      { num: "Photo 1", title: "Functional Testing" },
      { num: "Photo 2", title: "Dimensional Inspection" },
      { num: "Photo 3", title: "Precision Measurement" },
      { num: "Photo 4", title: "Final Pre-Dispatch Verification" },
    ],
  },
  videos: {
    label: "Videos",
    title: "See HAVA",
    titleGradient: "in Action",
    body: "Watch our manufacturing processes, quality systems, and products operating in real-world environments.",
    items: [
      { num: "Video 1", title: "Factory Tour" },
      { num: "Video 2", title: "Manufacturing Process" },
      { num: "Video 3", title: "Quality Testing" },
      { num: "Video 4", title: "Product Demonstrations" },
    ],
    note: "All video slots: Replace placeholders with actual YouTube embed URLs or MP4 links.",
  },
  team: {
    label: "Our People",
    title: "The Team Behind",
    titleGradient: "Every HAVA Product",
    cards: [
      { title: "Production Team", text: "Experienced machinists and assembly specialists with hands-on manufacturing expertise." },
      { title: "Quality Team", text: "Dedicated inspectors ensuring every product meets strict quality standards." },
      { title: "Engineering Team", text: "Design and development specialists focused on continuous innovation." },
      { title: "Management Team", text: "Leadership driving operational excellence and global growth." },
    ],
  },
  finalCta: {
    title: "Looking for Reliable",
    titleGradient: "Rock Drilling Solutions?",
  },
};

// Placeholder image component for photo slots
const PhotoPlaceholder = ({ num, title, large = false }) => (
  <div className={`relative ${large ? 'aspect-[16/10]' : 'aspect-[4/3]'} rounded-2xl overflow-hidden bg-gradient-to-br from-slate-200 via-slate-100 to-blue-50 border-2 border-steel-gray group cursor-pointer hover:shadow-2xl hover:border-hava-red/40 transition-all`}>
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
      <Camera className="w-10 h-10 text-trust-blue/30 mb-3 group-hover:scale-110 group-hover:text-hava-red/60 transition-all" />
      <span className="text-[10px] font-bold uppercase tracking-[2px] text-trust-blue/40 mb-1">{num}</span>
      <p className="text-sm font-bold text-charcoal/70 text-center">{title}</p>
    </div>
    {/* Decorative corner accent */}
    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-hava-red/30 rounded-tr-lg" />
    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-accent-orange/30 rounded-bl-lg" />
  </div>
);

const VideoPlaceholder = ({ num, title }) => (
  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal via-trust-blue/80 to-charcoal border-2 border-steel-gray group cursor-pointer hover:shadow-2xl transition-all">
    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
      <div className="w-16 h-16 bg-gradient-to-br from-hava-red to-accent-orange rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-2xl">
        <PlayCircle className="w-8 h-8 text-white" />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[2px] text-accent-orange mb-1">{num}</span>
      <p className="text-sm font-bold text-white text-center">{title}</p>
    </div>
  </div>
);

export const GalleryPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* HERO */}
      <PageHero
        eyebrow={galleryData.hero.eyebrow}
        title={galleryData.hero.title}
        titleGradient={galleryData.hero.titleGradient}
        body={galleryData.hero.body}
      >
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-hava-red/10 via-accent-orange/10 to-hava-red/10 border-l-4 border-hava-red rounded-r-2xl p-4 flex items-start gap-3 mb-6 text-left">
          <div className="w-10 h-10 bg-gradient-to-br from-hava-red to-accent-orange rounded-xl flex items-center justify-center flex-shrink-0">
            <Award className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong className="text-charcoal">ISO Certified:</strong> {galleryData.hero.isoNote}
          </p>
        </div>
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
              Contact Us
            </Button>
          </motion.div>
        </div>
      </PageHero>

      {/* MANUFACTURING FACILITY */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={galleryData.manufacturing.label}
            badgeColor="hava-red"
            badgeIcon={Factory}
            title={galleryData.manufacturing.title}
            titleGradient={galleryData.manufacturing.titleGradient}
            intro={galleryData.manufacturing.body}
          />

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-8">
            <span className="flex items-center gap-1 text-xs font-bold text-charcoal uppercase tracking-wider mr-2">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {galleryData.manufacturing.filters.map((filter, i) => (
              <button
                key={i}
                className="text-xs font-bold uppercase tracking-wider bg-white border-2 border-steel-gray text-charcoal px-3 py-1.5 rounded-full hover:border-hava-red hover:bg-hava-red hover:text-white transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {galleryData.manufacturing.photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <PhotoPlaceholder num={photo.num} title={photo.title} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & TESTING */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={galleryData.quality.label}
            badgeColor="trust-blue"
            badgeIcon={ShieldCheck}
            title={galleryData.quality.title}
            titleGradient={galleryData.quality.titleGradient}
            intro={galleryData.quality.body}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {galleryData.quality.photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <PhotoPlaceholder num={photo.num} title={photo.title} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-white">
        <div className="absolute top-20 left-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={galleryData.videos.label}
            badgeColor="accent-orange"
            badgeIcon={PlayCircle}
            title={galleryData.videos.title}
            titleGradient={galleryData.videos.titleGradient}
            intro={galleryData.videos.body}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            {galleryData.videos.items.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <VideoPlaceholder num={video.num} title={video.title} />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 max-w-3xl mx-auto bg-accent-orange/10 border-l-4 border-accent-orange rounded-r-xl p-4 flex items-start gap-3"
          >
            <Sparkles className="w-4 h-4 text-accent-orange flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700"><strong className="text-accent-orange uppercase tracking-wider">Note:</strong> {galleryData.videos.note}</p>
          </motion.div>
        </div>
      </section>

      {/* OUR PEOPLE */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge={galleryData.team.label}
            badgeColor="hava-red"
            badgeIcon={Users}
            title={galleryData.team.title}
            titleGradient={galleryData.team.titleGradient}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {galleryData.team.cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-6 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-hava-red transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-charcoal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">
              {galleryData.finalCta.title} <span className="gradient-text">{galleryData.finalCta.titleGradient}</span>
            </h2>
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              <Button onClick={() => (window.location.href = '/products')} className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-6 py-3 rounded-xl group">
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl">
                Get a Quote
              </Button>
              <Button onClick={() => (window.location.href = '/contact')} className="bg-accent-orange hover:bg-accent-orange/90 text-charcoal font-bold px-6 py-3 rounded-xl">
                Contact Us
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
