import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { headerData } from '../data/mock';
import { Button } from './ui/button';

const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English', flagUrl: 'https://flagcdn.com/16x12/gb.png' },
  { code: 'es', label: 'ES', name: 'Español', flagUrl: 'https://flagcdn.com/16x12/es.png' },
  { code: 'fr', label: 'FR', name: 'Français', flagUrl: 'https://flagcdn.com/16x12/fr.png' },
  { code: 'de', label: 'DE', name: 'Deutsch', flagUrl: 'https://flagcdn.com/16x12/de.png' },
];

const LanguageSwitcher = ({ variant = 'desktop' }) => {
  const { i18n } = useTranslation();

  const current = LANGUAGES.find((l) => l.code === i18n.language) || LANGUAGES[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  if (variant === 'mobile') {
    return (
      <div className="grid grid-cols-4 gap-2">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`py-2 rounded-lg text-sm font-semibold border transition-colors flex flex-col items-center gap-0.5 ${
              lang.code === current.code
                ? 'border-hava-red text-hava-red bg-hava-red/5'
                : 'border-steel-gray text-charcoal hover:border-trust-blue'
            }`}
          >
            <img src={lang.flagUrl} alt={lang.name} className="w-5 h-3.5 object-cover rounded-sm" />
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {LANGUAGES.map((lang, i) => (
        <React.Fragment key={lang.code}>
          <button
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-1 text-xs sm:text-sm font-medium transition-colors ${
              lang.code === current.code
                ? 'text-accent-orange font-semibold'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <img src={lang.flagUrl} alt={lang.name} className="w-4 h-3 object-cover rounded-sm" />
            <span>{lang.label}</span>
          </button>
          {i < LANGUAGES.length - 1 && (
            <span className="text-white/40 text-xs">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export const Header = ({ onQuoteClick }) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const location = useLocation();

  // Navigation built from translation keys, paths kept from mock.js
  const navigation = [
    { name: t('header.nav.home'), path: '/' },
    { name: t('header.nav.whyHava'), path: '/why-hava' },
    {
      name: t('header.nav.aboutUs'),
      path: '/about',
      submenu: [
        { name: t('header.nav.aboutUs'), path: '/about' },
        { name: 'Infra & Quality', path: '/infra-quality' },
      ],
    },
    { name: t('header.nav.products'), path: '/products' },
    { name: t('header.nav.services'), path: '/services' },
    { name: t('header.nav.dealers'), path: '/dealers' },
    { name: t('header.nav.gallery'), path: '/gallery' },
    { name: t('header.nav.contact'), path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;
  const isAboutActive = (item) =>
    item.submenu && item.submenu.some((s) => location.pathname === s.path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar - hidden on mobile */}
      <div className="hidden lg:block bg-trust-blue text-white py-2">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
            <span className="font-medium">{t('header.topBar.certification')}</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {t('header.topBar.location')}
              </span>
              <button
                onClick={onQuoteClick}
                className="text-accent-orange font-semibold hover:underline cursor-pointer"
              >
                {t('header.topBar.exportText')}
              </button>
              <a href="/assets/Draft_Annual_Return.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-trust-blue hover:bg-gray-100 font-semibold px-4 py-1 text-xs shadow h-auto">
                  Draft Annual Return
                </Button>
              </a>
              {/* Language Switcher - Desktop */}
              <LanguageSwitcher variant="desktop" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-steel-gray">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo — HAVA only */}
            <Link to="/" className="flex items-center">
              <img
                src={headerData.havaLogo}
                alt="HAVA"
                className="h-12 lg:h-14 w-auto object-contain"
                data-testid="header-hava-logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                if (item.submenu) {
                  return (
                    <div key={item.path} className="relative group">
                      <button
                        type="button"
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                          isAboutActive(item) ? 'text-hava-red' : 'text-charcoal hover:text-trust-blue'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                      </button>
                      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="bg-white rounded-2xl shadow-2xl border border-steel-gray overflow-hidden min-w-[200px]">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={`block px-5 py-3 text-sm font-medium transition-colors border-l-2 ${
                                isActive(sub.path)
                                  ? 'border-hava-red text-hava-red bg-hava-red/5'
                                  : 'border-transparent text-charcoal hover:border-hava-red hover:text-hava-red hover:bg-hava-red/5'
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive(item.path) ? 'text-hava-red' : 'text-charcoal hover:text-trust-blue'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={onQuoteClick}
                className="bg-hava-red hover:bg-hava-red/90 text-white font-semibold px-6 py-2 shadow-lg"
              >
                {t('header.primaryCTA')}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-trust-blue"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Left-side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-steel-gray">
          <img
            src={headerData.havaLogo}
            alt="HAVA"
            className="h-10 w-auto object-contain"
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-charcoal hover:text-hava-red transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Nav */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navigation.map((item) => {
            if (item.submenu) {
              return (
                <div key={item.path}>
                  <button
                    type="button"
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className={`flex items-center justify-between w-full px-3 py-2.5 text-base font-medium transition-colors rounded-lg ${
                      isAboutActive(item) ? 'text-hava-red bg-hava-red/5' : 'text-charcoal hover:text-trust-blue hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileAboutOpen && (
                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-hava-red/30 ml-3">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className={`block px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                            isActive(sub.path) ? 'text-hava-red' : 'text-charcoal hover:text-trust-blue'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2.5 text-base font-medium transition-colors rounded-lg ${
                  isActive(item.path) ? 'text-hava-red bg-hava-red/5' : 'text-charcoal hover:text-trust-blue hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Drawer Footer */}
        <div className="px-4 py-4 border-t border-steel-gray space-y-3">
          {/* Language Switcher - Mobile */}
          <LanguageSwitcher variant="mobile" />

          <a href="/assets/Draft_Annual_Return.pdf" target="_blank" rel="noopener noreferrer" className="block">
            <Button className="w-full bg-trust-blue hover:bg-trust-blue/90 text-white font-semibold">
              Draft Annual Return
            </Button>
          </a>
          <Button
            onClick={() => {
              onQuoteClick();
              setMobileMenuOpen(false);
            }}
            className="w-full bg-hava-red hover:bg-hava-red/90 text-white font-semibold"
          >
            {t('header.primaryCTA')}
          </Button>
        </div>
      </div>
    </header>
  );
};