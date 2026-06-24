import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Download, ArrowRight, CheckCircle, Building2, Mountain, HardHat, Pickaxe, Gem, Phone, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { toast, Toaster } from 'sonner';
import {
  heroData,
  trustStripData,
  productCategories,
  whyHavaData,
  industriesData,
  featuredProducts,
  manufacturingData,
  statsData,
  testimonials,
  quoteCTAData
} from '../data/mock';

const industryIcons = {
  'Mining': Pickaxe,
  'Tunnelling': Mountain,
  'Construction': HardHat,
  'Quarrying': Building2,
  'Marble & Granite': Gem
};

export const HomePage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const productScrollRef = useRef(null);

  const scrollProducts = (direction) => {
    if (productScrollRef.current) {
      const scrollAmount = 400;
      productScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleInquireNow = () => {
    setQuoteModalOpen(true);
  };

  const handleReadMore = () => {
    toast.info('Product details page coming soon!');
  };

  const handleDownloadBrochure = () => {
    setBrochureModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-6 leading-tight">
              {heroData.headline}
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed">
              {heroData.subheadline}
            </p>
            <p className="text-base text-gray-600 mb-10 max-w-3xl mx-auto">
              {heroData.supportCopy}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-hava-red hover:bg-hava-red/90 text-white font-bold px-8 py-6 text-lg shadow-xl"
              >
                {heroData.primaryCTA}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-8 py-6 text-lg"
              >
                {heroData.secondaryCTA}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-trust-blue text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
            {trustStripData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-orange" />
                <span className="text-sm sm:text-base font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HAVA offers a complete range of pneumatic rock drilling equipment, demolition tools, drilling accessories, and spare parts engineered for rugged field performance, technical reliability, and dependable supply.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollProducts('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-steel-gray transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-trust-blue" />
            </button>
            <button
              onClick={() => scrollProducts('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-steel-gray transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-trust-blue" />
            </button>

            <div
              ref={productScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-12 pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productCategories.map((product) => (
                <Card key={product.id} className="flex-shrink-0 w-80 border-steel-gray card-hover">
                  <div className="h-48 overflow-hidden bg-steel-gray">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-charcoal mb-3">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3">{product.description}</p>
                    <div className="flex flex-col gap-2">
                      <Button
                        onClick={handleInquireNow}
                        className="w-full bg-hava-red hover:bg-hava-red/90 text-white font-semibold"
                      >
                        Inquire Now
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          onClick={handleReadMore}
                          variant="outline"
                          className="flex-1 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
                        >
                          Read More
                        </Button>
                        <Button
                          onClick={handleDownloadBrochure}
                          variant="outline"
                          className="flex-1 border-steel-gray text-charcoal hover:bg-steel-gray"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Brochure
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why HAVA */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">{whyHavaData.heading}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{whyHavaData.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyHavaData.points.map((point, index) => (
              <Card key={index} className="border-steel-gray bg-white card-hover">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-hava-red/10 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-hava-red" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal mb-3">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">{industriesData.heading}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{industriesData.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.industries.map((industry, index) => {
              const Icon = industryIcons[industry.name];
              return (
                <Card key={index} className="border-2 border-steel-gray hover:border-trust-blue transition-all card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-trust-blue" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-charcoal mb-2">{industry.name}</h3>
                        <p className="text-sm text-gray-600">{industry.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-steel-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our key products developed to support real drilling, demolition, and mining applications with dependable field performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="border-steel-gray bg-white card-hover overflow-hidden">
                <div className="h-52 overflow-hidden bg-steel-gray">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-charcoal mb-3">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <Button
                    onClick={handleInquireNow}
                    className="w-full bg-hava-red hover:bg-hava-red/90 text-white font-semibold"
                  >
                    Request Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Strength */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-6">{manufacturingData.heading}</h2>
              <p className="text-lg text-gray-700 leading-relaxed text-left">{manufacturingData.body}</p>
            </div>
            <div className="text-center mt-8">
              <Button
                onClick={() => toast.info('Infrastructure gallery coming soon!')}
                variant="outline"
                className="border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white font-semibold px-8 py-6 text-lg"
              >
                {manufacturingData.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Reach / Stats */}
      <section className="py-20 bg-trust-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">{statsData.heading}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {statsData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-accent-orange mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-lg max-w-3xl mx-auto">{statsData.supportCopy}</p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our products are trusted by users who value consistent performance, durability, and practical reliability in demanding field environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-steel-gray bg-white">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="text-4xl text-hava-red mb-2">“</div>
                    <p className="text-gray-700 leading-relaxed italic">{testimonial.text}</p>
                  </div>
                  <div className="mt-6 pt-6 border-t border-steel-gray">
                    <p className="font-bold text-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-sm text-trust-blue font-medium mt-1">Using: {testimonial.product}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-20 bg-gradient-to-r from-hava-red to-hava-red/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">{quoteCTAData.heading}</h2>
          <p className="text-lg mb-10 text-white/90">{quoteCTAData.body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setQuoteModalOpen(true)}
              className="bg-white text-hava-red hover:bg-steel-gray font-bold px-8 py-6 text-lg shadow-xl"
            >
              {quoteCTAData.primaryCTA}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => toast.info('Sales team contact coming soon!')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-hava-red font-bold px-8 py-6 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              {quoteCTAData.secondaryCTA}
            </Button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        type="quote"
      />
      <QuoteModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        type="brochure"
      />
    </div>
  );
};