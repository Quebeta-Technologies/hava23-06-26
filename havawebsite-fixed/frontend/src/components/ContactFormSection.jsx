import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { quoteCTAData, footerData } from '../data/mock';

const WEB3FORMS_KEY = '94a23b9f-d1ad-421f-b494-fd28c967af94'; // 👈 paste your key here

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    requirement: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Contact Enquiry - HAVA',
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Enquiry sent! We\'ll get back to you within 24 hours.');
        setFormData({ name: '', email: '', mobile: '', company: '', requirement: '', message: '' });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-trust-blue to-charcoal" />

      <motion.div
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-96 h-96 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, hsl(var(--hava-red)) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />
      <motion.div
        animate={{ x: [0, -80, 0], y: [0, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-20 w-96 h-96 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, hsl(var(--accent-orange)) 0%, transparent 70%)', filter: 'blur(100px)' }}
      />

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full mb-4 font-bold text-xs uppercase tracking-wider w-fit">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </div>

            <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
              {quoteCTAData.heading}
            </h2>
            <p className="text-base text-white/80 mb-8 leading-relaxed">
              {quoteCTAData.body}
            </p>

            <div className="space-y-4">
              <a href={`tel:${footerData.contact.mobile}`} className="flex items-center gap-4 text-white/90 hover:text-accent-orange transition-colors group">
                <div className="w-11 h-11 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange group-hover:border-accent-orange transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Call us</div>
                  <div className="font-bold">{footerData.contact.mobile}</div>
                </div>
              </a>

              <a href={`mailto:${footerData.contact.email}`} className="flex items-center gap-4 text-white/90 hover:text-accent-orange transition-colors group">
                <div className="w-11 h-11 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange group-hover:border-accent-orange transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Email us</div>
                  <div className="font-bold">{footerData.contact.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white/90">
                <div className="w-11 h-11 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/60">Visit us</div>
                  <div className="font-bold text-sm">Pune, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 lg:p-8 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-hava-red/20 to-accent-orange/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-trust-blue/20 to-trust-blue/10 rounded-full blur-2xl" />

              <div className="relative">
                <h3 className="text-2xl font-black text-charcoal mb-2">Request a Free Quote</h3>
                <p className="text-sm text-gray-600 mb-6">Fill in the form below and our team will get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-4" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cf-name" className="text-charcoal font-semibold text-xs uppercase tracking-wider">Name *</Label>
                      <Input
                        id="cf-name" name="name" value={formData.name} onChange={handleChange} required
                        className="mt-1.5 border-steel-gray focus:border-hava-red focus-visible:ring-hava-red/30 h-11"
                        placeholder="Your full name" data-testid="contact-form-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cf-mobile" className="text-charcoal font-semibold text-xs uppercase tracking-wider">Mobile *</Label>
                      <Input
                        id="cf-mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required
                        className="mt-1.5 border-steel-gray focus:border-hava-red focus-visible:ring-hava-red/30 h-11"
                        placeholder="+91 XXXXX XXXXX" data-testid="contact-form-mobile"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cf-email" className="text-charcoal font-semibold text-xs uppercase tracking-wider">Email *</Label>
                      <Input
                        id="cf-email" name="email" type="email" value={formData.email} onChange={handleChange} required
                        className="mt-1.5 border-steel-gray focus:border-hava-red focus-visible:ring-hava-red/30 h-11"
                        placeholder="you@company.com" data-testid="contact-form-email"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cf-company" className="text-charcoal font-semibold text-xs uppercase tracking-wider">Company</Label>
                      <Input
                        id="cf-company" name="company" value={formData.company} onChange={handleChange}
                        className="mt-1.5 border-steel-gray focus:border-hava-red focus-visible:ring-hava-red/30 h-11"
                        placeholder="Your company" data-testid="contact-form-company"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="cf-req" className="text-charcoal font-semibold text-xs uppercase tracking-wider">What do you need?</Label>
                    <Input
                      id="cf-req" name="requirement" value={formData.requirement} onChange={handleChange}
                      className="mt-1.5 border-steel-gray focus:border-hava-red focus-visible:ring-hava-red/30 h-11"
                      placeholder="e.g., Rock Drills, Spare Parts, Dealership" data-testid="contact-form-requirement"
                    />
                  </div>

                  <div>
                    <Label htmlFor="cf-msg" className="text-charcoal font-semibold text-xs uppercase tracking-wider">Message</Label>
                    <Textarea
                      id="cf-msg" name="message" value={formData.message} onChange={handleChange}
                      className="mt-1.5 border-steel-gray focus:border-hava-red focus-visible:ring-hava-red/30"
                      placeholder="Tell us briefly about your requirement..." rows={3} data-testid="contact-form-message"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold py-6 text-base shadow-xl rounded-xl group"
                      data-testid="contact-form-submit"
                    >
                      <span className="flex items-center gap-2">
                        {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </motion.div>

                  <p className="text-[11px] text-gray-500 text-center">
                    By submitting, you agree to be contacted about your enquiry. Your data is kept confidential.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};