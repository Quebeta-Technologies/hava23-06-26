import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ExternalLink, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { footerData, headerData } from '../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-white text-charcoal relative overflow-hidden border-t-2 border-steel-gray">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-hava-red via-accent-orange to-trust-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            <div className="lg:col-span-1 bg-gradient-to-br from-hava-red/10 to-accent-orange/10 border border-steel-gray rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-charcoal" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Visit Our Facility
                </h3>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-accent-orange text-xs font-bold uppercase tracking-wider mb-2">
                    {footerData.contact.company}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {footerData.contact.address}
                  </p>
                </div>
                <a
                  href={footerData.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-hava-red hover:text-accent-orange font-semibold text-sm group transition-colors"
                  data-testid="footer-get-directions-link"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-6 pt-5 border-t border-steel-gray space-y-2.5">
                <a href={`tel:${footerData.contact.mobile}`} className="flex items-center gap-3 text-gray-600 hover:text-hava-red transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{footerData.contact.mobile}</span>
                </a>
                <a href={`mailto:${footerData.contact.email}`} className="flex items-center gap-3 text-gray-600 hover:text-hava-red transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{footerData.contact.email}</span>
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{footerData.contact.hours}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl border border-steel-gray min-h-[380px]">
              <iframe
                src={footerData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haryrock Engineering Location"
                data-testid="footer-google-map"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8 border-b border-steel-gray">
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="bg-white border border-steel-gray rounded-2xl p-3 shadow-md inline-flex items-center justify-center" data-testid="footer-hava-logo-wrap">
                <img src={headerData.havaLogo} alt="HAVA" className="h-12 w-auto object-contain" data-testid="footer-hava-logo" />
              </div>
              <div className="bg-white border border-steel-gray rounded-2xl p-3 shadow-md inline-flex items-center justify-center" data-testid="footer-haryrock-logo-wrap">
                <img src={headerData.haryrockLogo} alt="Haryrock Engineering" className="h-12 w-auto object-contain" data-testid="footer-haryrock-logo" />
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">{footerData.brandSummary}</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-hava-red/10 text-hava-red px-3 py-1.5 rounded-full text-xs font-semibold border border-hava-red/20">ISO 9001:2015</span>
              <span className="bg-trust-blue/10 text-trust-blue px-3 py-1.5 rounded-full text-xs font-semibold border border-trust-blue/20">Export Ready</span>
              <span className="bg-accent-orange/10 text-accent-orange px-3 py-1.5 rounded-full text-xs font-semibold border border-accent-orange/20">15+ Countries</span>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold mb-3 text-charcoal" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-1.5">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-hava-red text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-3 text-charcoal" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Products</h4>
            <ul className="space-y-1.5">
              {footerData.productCategories.map((category, i) => {
                const codes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                return (
                  <li key={category}>
                    <Link to={`/products?category=${codes[i]}`} className="text-gray-600 hover:text-hava-red text-sm transition-colors">
                      {category}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel-gray bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">
            <p>{footerData.copyright}</p>
            <div className="flex flex-col items-center md:items-end gap-1.5">
              <Link to="/privacy" className="hover:text-hava-red transition-colors">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="hover:text-hava-red transition-colors">
                Sitemap
              </Link>
              <span className="flex items-center gap-1.5" data-testid="footer-quebeta-credit">
                Made With
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  className="inline-flex"
                >
                  <Heart className="w-4 h-4 text-hava-red fill-hava-red" />
                </motion.span>
                From{' '}
                <a
                  href="https://www.quebeta.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-accent-orange hover:text-hava-red transition-colors"
                  data-testid="footer-quebeta-link"
                >
                  Quebeta
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};