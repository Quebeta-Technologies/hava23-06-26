import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Target,
  HeadphonesIcon,
  Wrench,
  Users,
  Globe,
  Settings,
  ClipboardCheck,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { PageHero } from '../components/PageHero';
import { SectionHeader, SectionBadge } from '../components/SectionBadge';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';

const servicesData = {
  hero: {
    eyebrow: "Our Services",
    title: "Supporting Your Operations",
    titleGradient: "Beyond the Product",
    body: "At HAVA, delivering a quality product is only the beginning. Our team works closely with customers, distributors, contractors, and industrial buyers to provide technical guidance, spare parts support, and dependable service throughout the equipment lifecycle.",
  },
  services: [
    {
      num: "S 01",
      label: "Service 1",
      title: "Product Selection & Application Guidance",
      body: "Choosing the right equipment is critical. Our team helps you identify the most suitable product based on your application, working conditions, drilling method, and project objectives.",
      tags: ["Product Selection", "Application Matching", "Drilling Requirements", "Equipment Recommendations", "Operational Guidance"],
      icon: Target,
    },
    {
      num: "S 02",
      label: "Service 2",
      title: "Technical Support",
      body: "Our technical team provides guidance to help you get the best performance from HAVA equipment — installation recommendations, operating guidance, compatibility information, and maintenance advice.",
      tags: ["Equipment Operation Guidance", "Technical Documentation", "Compatibility Assistance", "Maintenance Recommendations", "Troubleshooting Support"],
      icon: HeadphonesIcon,
    },
    {
      num: "S 03",
      label: "Service 3",
      title: "Spare Parts Support",
      body: "Reliable spare parts reduce downtime and maintain productivity. HAVA manufactures and supplies genuine spare parts designed to maintain original equipment performance.",
      tags: ["Rock Drills", "Drifters", "Pavement Breakers", "Pusher Legs", "Atlas Copco Compatible"],
      icon: Wrench,
      highlight: "Benefits: Faster Maintenance · Reduced Downtime · Reliable Performance · Longer Equipment Life",
    },
    {
      num: "S 04",
      label: "Service 4",
      title: "Dealer & Distributor Support",
      body: "We work closely with dealers and distribution partners to ensure they have access to quality products, technical knowledge, and ongoing support — helping them build long-term customer relationships.",
      tags: ["Product Training", "Technical Assistance", "Sales Support", "Product Information", "Marketing Materials"],
      icon: Users,
      cta: "Become a Dealer",
    },
    {
      num: "S 05",
      label: "Service 5",
      title: "Export Assistance",
      body: "With experience across multiple international markets, HAVA supports export buyers with documentation, product specifications, and communication required for smooth international transactions.",
      tags: ["Export Documentation", "Quotation Support", "Product Specifications", "Shipping Coordination", "International Buyer Support"],
      icon: Globe,
      highlight: "Export Regions: Africa · Middle East · Europe (Scandinavia) · South Asia",
    },
    {
      num: "S 06",
      label: "Service 6",
      title: "Product Customization Support",
      body: "Certain projects require equipment tailored to specific operating conditions. Our team works with you to understand your requirements and recommend suitable configurations wherever possible.",
      tags: ["Mining", "Quarrying", "Infrastructure", "Tunnelling", "Specialized Industrial"],
      icon: Settings,
    },
    {
      num: "S 07",
      label: "Service 7",
      title: "Maintenance Guidance",
      body: "Regular maintenance maximizes equipment performance and lifespan. We help customers understand best practices for lubrication, inspection, spare parts replacement, and preventive care.",
      tags: ["Lubrication Practices", "Inspection Procedures", "Spare Parts Replacement", "Preventive Maintenance", "Operational Best Practices"],
      icon: ClipboardCheck,
    },
  ],
  finalCta: {
    title: "Need Technical Assistance or Product Support?",
    body: "Whether you need equipment recommendations, spare parts information, export assistance, or technical guidance — our team is ready to help.",
  },
};

export const ServicesPage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      <PageHero
        eyebrow={servicesData.hero.eyebrow}
        title={servicesData.hero.title}
        titleGradient={servicesData.hero.titleGradient}
        body={servicesData.hero.body}
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-8 py-6 text-base shadow-2xl rounded-xl group w-full sm:w-auto"
            >
              <span className="flex items-center justify-center gap-2">
                Request Support
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-8 py-6 text-base rounded-xl shadow-lg backdrop-blur-xl w-full sm:w-auto"
            >
              Contact Our Team
            </Button>
          </motion.div>
        </div>
      </PageHero>

      {/* SERVICES GRID */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="7 Service Areas"
            badgeColor="hava-red"
            badgeIcon={Sparkles}
            title="Complete Support"
            titleGradient="Through Every Stage"
            intro="From product selection and technical support through to export assistance, maintenance guidance, and dealer support — we cover the complete service lifecycle."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {servicesData.services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-6 lg:p-7 border-2 border-steel-gray hover:border-hava-red/40 shadow-md hover:shadow-2xl transition-all card-hover group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-hava-red/5 to-accent-orange/5 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
                  <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold text-trust-blue uppercase tracking-[2px]">{service.num}</span>
                          <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-2 py-0.5 rounded-full">{service.label}</span>
                        </div>
                        <h3 className="font-black text-charcoal text-lg lg:text-xl group-hover:text-hava-red transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed mb-4">{service.body}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag, ti) => (
                        <span key={ti} className="text-xs font-medium bg-slate-100 text-charcoal px-3 py-1 rounded-full border border-steel-gray">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {service.highlight && (
                      <div className="bg-gradient-to-r from-accent-orange/10 to-hava-red/5 border-l-4 border-accent-orange rounded-r-xl p-3 mb-3">
                        <p className="text-xs text-charcoal"><strong className="text-accent-orange uppercase tracking-wider">Key:</strong> {service.highlight}</p>
                      </div>
                    )}

                    {service.cta && (
                      <Button
                        onClick={() => setQuoteModalOpen(true)}
                        className="bg-gradient-to-r from-hava-red to-accent-orange text-white text-xs font-bold rounded-lg group/btn"
                      >
                        {service.cta}
                        <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}
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
              Need Technical Assistance or <span className="gradient-text">Product Support?</span>
            </h2>
            <p className="text-base lg:text-lg text-white/70 mb-8 max-w-2xl mx-auto">{servicesData.finalCta.body}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-6 py-3 rounded-xl group">
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl">
                Request a Quote
              </Button>
              <Button onClick={() => (window.location.href = '/products')} className="bg-accent-orange hover:bg-accent-orange/90 text-charcoal font-bold px-6 py-3 rounded-xl">
                Explore Products
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
