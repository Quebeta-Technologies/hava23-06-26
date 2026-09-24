import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

const WEB3FORMS_KEY = '94a23b9f-d1ad-421f-b494-fd28c967af94'; // 👈 paste your key here

export const QuoteModal = ({ isOpen, onClose, type = 'quote' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
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
          subject: type === 'quote' ? 'New Quote Request - HAVA' : 'Brochure Download Request - HAVA',
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Request sent! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', mobile: '', company: '', message: '' });
        setTimeout(() => onClose(), 1500);
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" data-testid="quote-modal">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-trust-blue to-trust-blue/90 text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {type === 'quote' ? 'Get a Quote' : 'Download Brochure'}
          </h2>
          <button onClick={onClose} className="text-white hover:text-accent-orange transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Label htmlFor="name" className="text-charcoal font-medium">Name *</Label>
            <Input
              id="name" name="name" value={formData.name} onChange={handleChange} required
              className="mt-1 border-steel-gray focus:border-trust-blue" placeholder="Your full name"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-charcoal font-medium">Email *</Label>
            <Input
              id="email" name="email" type="email" value={formData.email} onChange={handleChange} required
              className="mt-1 border-steel-gray focus:border-trust-blue" placeholder="your.email@company.com"
            />
          </div>

          <div>
            <Label htmlFor="mobile" className="text-charcoal font-medium">Mobile Number *</Label>
            <Input
              id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required
              className="mt-1 border-steel-gray focus:border-trust-blue" placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <Label htmlFor="company" className="text-charcoal font-medium">Company</Label>
            <Input
              id="company" name="company" value={formData.company} onChange={handleChange}
              className="mt-1 border-steel-gray focus:border-trust-blue" placeholder="Your company name"
            />
          </div>

          {type === 'quote' && (
            <div>
              <Label htmlFor="message" className="text-charcoal font-medium">Message</Label>
              <Textarea
                id="message" name="message" value={formData.message} onChange={handleChange}
                className="mt-1 border-steel-gray focus:border-trust-blue"
                placeholder="Tell us about your requirements..." rows={4}
              />
            </div>
          )}

          <div className="pt-4">
            <Button
              type="submit" disabled={isSubmitting}
              className="w-full bg-hava-red hover:bg-hava-red/90 text-white font-semibold py-3 text-lg"
            >
              {isSubmitting ? 'Submitting...' : type === 'quote' ? 'Submit Quote Request' : 'Download Brochure'}
            </Button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-4">
            Your information will be kept confidential and used only to respond to your inquiry.
          </p>
        </form>
      </div>
    </div>
  );
};