import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  MessageCircle,
  Globe,
  Send,
  HeadphonesIcon,
  DollarSign,
  Wrench,
  Users,
  Briefcase,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SectionHeader, SectionBadge } from '../components/SectionBadge';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';

const contactData = {
  hero: {
    eyebrow: "Contact Us",
    title: "Let's Discuss Your",
    titleGradient: "Requirements",
    body: "Whether you're looking for rock drilling equipment, spare parts, dealership opportunities, or export partnerships, our team is ready to assist.",
  },
  quickContact: [
    { icon: Phone, label: "Call Us", value: "+91 20 2744 0025", href: "tel:+912027440025", color: "hava-red" },
    { icon: Phone, label: "Call Us", value: "+91 20 2744 0026", href: "tel:+912027440026", color: "hava-red" },
    { icon: MessageCircle, label: "WhatsApp", value: "Message Us", href: "https://wa.me/912027440025", color: "accent-orange" },
    { icon: Mail, label: "Email", value: "sales.haryrock@gmail.com", href: "mailto:sales.haryrock@gmail.com", color: "trust-blue" },
    { icon: MapPin, label: "Directions", value: "Get Directions on Google Maps", href: "https://share.google/eJDTDWB6XWYJowsS3", color: "hava-red", external: true },
    { icon: Clock, label: "Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM | Sunday: Closed", color: "trust-blue" },
  ],
  address: {
    company: "Haryrock Engineering Pvt. Ltd.",
    line1: "A-55, H Block, MIDC Pimpri,",
    line2: "Pune – 411018, Maharashtra, India",
    phone: "+91 20 2744 0025  |  +91 20 2744 0026",
    email: "sales.haryrock@gmail.com",
    hours: "Monday–Saturday: 9:00 AM – 6:00 PM  |  Sunday: Closed",
    mapLink: "https://share.google/eJDTDWB6XWYJowsS3",
  },
  form: {
    sections: [
      {
        title: "Personal Information",
        fields: [
          { label: "Full Name", required: true },
          { label: "Company Name", required: false },
          { label: "Designation", required: false },
          { label: "Phone Number", required: true },
          { label: "Email Address", required: true },
        ],
      },
      {
        title: "Business Information",
        fields: [
          { label: "Country", required: false },
          { label: "Industry", required: false },
          { label: "Product Interested In", required: false },
        ],
      },
      {
        title: "Message",
        fields: [
          { label: "Requirement, application, quantity, technical specifications, or additional details", required: false, textarea: true },
        ],
      },
    ],
  },
  helpOptions: [
    { title: "Product Information", text: "Specifications, features, and applications for your specific requirements.", icon: Briefcase },
    { title: "Pricing & Quotations", text: "Commercial information tailored to your quantity and requirements.", icon: DollarSign },
    { title: "Spare Parts Support", text: "Genuine replacement parts and maintenance requirements.", icon: Wrench },
    { title: "Technical Support", text: "Operation, troubleshooting, and maintenance guidance.", icon: HeadphonesIcon },
    { title: "Dealer Enquiries", text: "Explore partnership opportunities with HAVA.", icon: Users },
    { title: "Export Enquiries", text: "International supply requirements and documentation.", icon: Globe },
  ],
  globalSupport: [
    { flag: "🇮🇳", region: "India", text: "Pan-India dealer and direct customer network" },
    { flag: "🌍", region: "Africa", text: "South Africa · Tanzania · Kenya · Zambia · Botswana" },
    { flag: "🌍", region: "Scandinavia", text: "Norway · Finland · Sweden" },
    { flag: "🌍", region: "Middle East & CIS", text: "Saudi Arabia · Russia" },
    { flag: "🌍", region: "South Asia", text: "Nepal · Sri Lanka · Bhutan" },
    { flag: "🌍", region: "More Markets", text: "Enquiries welcome from all regions" },
  ],
};

const trustItems = [
  { icon: '📞', text: '+91 20 2744 0025 / 26' },
  { icon: '📧', text: 'sales.haryrock@gmail.com' },
  { icon: '🕐', text: 'Mon–Sat 9AM–6PM' },
  { icon: '🌍', text: '20+ Countries Served' },
];

export const ContactPage = () => {
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
                <span className="text-xs font-bold uppercase tracking-[2px] text-charcoal">{contactData.hero.eyebrow}</span>
                <span className="w-2 h-2 bg-accent-orange rounded-full" />
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-charcoal leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {contactData.hero.title}{' '}
                <span className="gradient-text">{contactData.hero.titleGradient}</span>
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">{contactData.hero.body}</p>
            </div>

            {/* RIGHT — buttons + 4 trust boxes */}
            <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-5 text-sm shadow-xl rounded-xl group"
                  >
                    Request a Quote <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <a href="tel:+912027440025" className="block w-full">
                    <Button className="w-full glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-6 py-5 text-sm rounded-xl shadow-lg backdrop-blur-xl">
                      <Phone className="w-4 h-4 mr-2" /> Call Us Now
                    </Button>
                  </a>
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

      {/* QUICK CONTACT GRID */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Quick Contact" badgeColor="hava-red" badgeIcon={Phone} title="Get in Touch" titleGradient="Right Now" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {contactData.quickContact.map((c, i) => {
              const Icon = c.icon;
              const colorMap = {
                'hava-red': 'from-hava-red to-accent-orange',
                'trust-blue': 'from-trust-blue to-trust-blue/80',
                'accent-orange': 'from-accent-orange to-hava-red',
              };
              const Content = (
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="bg-white rounded-2xl p-5 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all group h-full">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colorMap[c.color]} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-trust-blue uppercase tracking-[2px]">{c.label}</span>
                      <p className="text-sm font-bold text-charcoal mt-1 group-hover:text-hava-red transition-colors break-words">{c.value}</p>
                    </div>
                  </div>
                </motion.div>
              );
              return c.href ? (
                <a key={i} href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined}>{Content}</a>
              ) : <div key={i}>{Content}</div>;
            })}
          </div>
        </div>
      </section>

      {/* CORPORATE OFFICE */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Get In Touch" badgeColor="trust-blue" badgeIcon={MapPin} title="Corporate Office" titleGradient="& Factory" />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-charcoal to-trust-blue rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-hava-red/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-accent-orange/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-start gap-5 flex-wrap">
                <div className="w-14 h-14 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-[250px]">
                  <h4 className="text-accent-orange text-xs font-bold uppercase tracking-wider mb-2">Registered & Manufacturing Address</h4>
                  <p className="font-bold text-white text-lg mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{contactData.address.company}</p>
                  <p className="text-base text-white/80 leading-relaxed mb-4">{contactData.address.line1}<br />{contactData.address.line2}</p>
                  <div className="space-y-2 pt-4 border-t border-white/10 mb-4">
                    <div className="flex items-start gap-3 text-white/90 text-sm"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span>{contactData.address.phone}</span></div>
                    <a href={`mailto:${contactData.address.email}`} className="flex items-start gap-3 text-white/90 hover:text-accent-orange text-sm transition-colors"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span>{contactData.address.email}</span></a>
                    <div className="flex items-start gap-3 text-white/90 text-sm"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0" /> <span>{contactData.address.hours}</span></div>
                  </div>
                  <a href={contactData.address.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent-orange hover:bg-white text-charcoal text-sm font-bold px-5 py-3 rounded-xl transition-all group hover:scale-105">
                    📍 Get Directions on Google Maps <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 left-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-72 h-72 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Request a Quote" badgeColor="hava-red" badgeIcon={Send} title="Send Us Your" titleGradient="Enquiry" intro="Fill out the form below — our team will get back to you within one business day." />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mt-10 bg-white rounded-3xl border-2 border-steel-gray shadow-2xl p-6 lg:p-8">
            {contactData.form.sections.map((section, si) => (
              <div key={si} className="mb-8 last:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-gradient-to-br from-hava-red to-accent-orange text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm">{si + 1}</span>
                  <h4 className="font-black text-charcoal text-base uppercase tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{section.title}</h4>
                </div>
                <div className={`grid grid-cols-1 ${section.fields.length > 1 ? 'md:grid-cols-2' : ''} gap-4`}>
                  {section.fields.map((field, fi) => (
                    <div key={fi} className={field.textarea ? 'md:col-span-2' : ''}>
                      <label className="block text-xs font-bold text-charcoal mb-1.5 uppercase tracking-wider">
                        {field.label}{field.required && <span className="text-hava-red ml-1">*</span>}
                      </label>
                      {field.textarea ? (
                        <textarea rows={4} className="w-full px-4 py-3 border-2 border-steel-gray rounded-xl text-sm focus:outline-none focus:border-hava-red transition-colors resize-none" placeholder="Tell us about your requirements..." />
                      ) : (
                        <input type="text" className="w-full px-4 py-3 border-2 border-steel-gray rounded-xl text-sm focus:outline-none focus:border-hava-red transition-colors" placeholder={`Enter ${field.label.toLowerCase()}`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <Button onClick={() => setQuoteModalOpen(true)} className="w-full bg-gradient-to-r from-hava-red to-accent-orange hover:from-hava-red/90 hover:to-accent-orange/90 text-white font-bold py-6 text-base shadow-xl rounded-xl group mt-4">
              Submit Enquiry <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* VISIT FACILITY */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Schedule a Visit" badgeColor="accent-orange" badgeIcon={MapPin} title="Visit Our" titleGradient="Facility" intro="Visit our 25,000 sq. ft. manufacturing facility in Pimpri, Pune to see our production capabilities, quality systems, and engineering expertise firsthand." />
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <a href={contactData.address.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-8 py-3 text-sm shadow-xl rounded-xl transition-transform hover:scale-105">
              📍 Get Directions on Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-8 py-3 rounded-xl">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* HOW CAN WE HELP */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-white">
        <div className="absolute top-20 right-0 w-72 h-72 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Support Options" badgeColor="hava-red" badgeIcon={Sparkles} title="How Can We" titleGradient="Help You?" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {contactData.helpOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bg-white rounded-3xl p-6 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group">
                  <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal text-base mb-2 group-hover:text-hava-red transition-colors">{opt.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{opt.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GLOBAL SUPPORT */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader badge="Global Support" badgeColor="trust-blue" badgeIcon={Globe} title="Serving Customers" titleGradient="Across 20+ Countries" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {contactData.globalSupport.map((g, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }} className="bg-white border-2 border-steel-gray rounded-2xl p-5 hover:border-accent-orange/40 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-3">
                  <div className="text-3xl flex-shrink-0">{g.flag}</div>
                  <div>
                    <h5 className="font-bold text-charcoal text-sm mb-1 group-hover:text-hava-red transition-colors">{g.region}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed">{g.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} type="quote" />
    </div>
  );
};