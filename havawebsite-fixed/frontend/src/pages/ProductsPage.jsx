import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowRight,
  Download,
  Wrench,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Drill, Layers, Zap, Wind, Link, CircleDot, Package } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { Button } from '../components/ui/button';
import { Toaster } from 'sonner';
import { productsPageData as d } from '../data/pagesData';

const categoryIcons = { A: Drill, B: Zap, C: Wrench, D: Wind, E: Link, F: Layers, G: CircleDot, H: Package };
const categoryTransKey = { A: 'categoryA', B: 'categoryB', C: 'categoryC', D: 'categoryD', E: 'categoryE', F: 'categoryF', G: 'categoryG', H: 'categoryH' };

// ─── Generic Product Card ────────────────────────────────────────────────────
const ProductCard = ({ title, subtitle, image, specs, catCode, onEnquire, badge, t }) => {
  const Icon = categoryIcons[catCode];
  return (
    <div className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row">
      <div className="w-full sm:w-44 lg:w-52 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ minHeight: '220px', maxHeight: '280px' }}>
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" style={{ minHeight: '220px', maxHeight: '280px' }} />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ minHeight: '220px' }}>
            <Icon className="w-12 h-12 text-hava-red/40" />
          </div>
        )}
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            {badge && (
              <span className="text-[10px] font-bold bg-trust-blue/10 text-trust-blue border border-trust-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                {badge}
              </span>
            )}
            <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</p>
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 mt-1 hover:opacity-90 transition-opacity">
            {t('header.primaryCTA')}
          </button>
        </div>
        {specs && specs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {specs.map((s, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-slate-50 border border-steel-gray rounded-lg px-2.5 py-1">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                <span className="text-[11px] font-bold text-charcoal">{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const TwoColBlock = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    {items.map((item, i) => (
      <div key={i} className="bg-slate-50 border-t-2 border-accent-orange rounded-xl p-4">
        <p className="font-bold text-accent-orange text-xs uppercase tracking-wider mb-2">{item.heading}</p>
        <p className="text-sm text-charcoal leading-relaxed">{item.text}</p>
      </div>
    ))}
  </div>
);

// ─── Reusable 3-col Product Row ──────────────────────────────────────────────
const VideoProductCard = ({ image, imageClass = 'object-cover object-left', title, subtitle, badge, specs, video, onEnquire, specsColumns = 2, t }) => (
  <div className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden">
    {/* Desktop: fixed height 3-col row */}
    <div className="hidden sm:flex h-[280px]">
      <div className="w-64 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden">
        <img src={image} alt={title} className={`w-full h-full ${imageClass}`} />
      </div>
      <div className="flex-1 p-5 flex flex-col min-w-0 overflow-hidden">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            {badge && (
              <span className="text-[10px] font-bold bg-trust-blue/10 text-trust-blue border border-trust-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                {badge}
              </span>
            )}
            <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</p>
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 hover:opacity-90 transition-opacity">
            {t('header.primaryCTA')}
          </button>
        </div>
        {specs && specs.length > 0 && (
          <div className={`grid gap-2 ${specsColumns === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {specs.map((s, i) => (
              <div key={i} className="flex flex-col bg-slate-50 border border-steel-gray rounded-lg px-2.5 py-1.5">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                <span className="text-[11px] font-bold text-charcoal mt-0.5">{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-52 flex-shrink-0 bg-slate-900 border-l-2 border-steel-gray overflow-hidden">
        {video ? (
          <video src={video} className="w-full h-full object-cover" controls />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-white/40 p-4 text-center">
            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/30"><path d="M8 5v14l11-7z" /></svg>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">Product Video<br />Coming Soon</span>
          </div>
        )}
      </div>
    </div>

    {/* Mobile: stacked */}
    <div className="flex flex-col sm:hidden">
      <div className="w-full bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ height: '220px' }}>
        <img src={image} alt={title} className={`w-full h-full ${imageClass}`} />
      </div>
      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            {badge && (
              <span className="text-[10px] font-bold bg-trust-blue/10 text-trust-blue border border-trust-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                {badge}
              </span>
            )}
            <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{title}</p>
            {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 hover:opacity-90 transition-opacity">
            {t('header.primaryCTA')}
          </button>
        </div>
        {specs && specs.length > 0 && (
          <div className={`grid gap-2 ${specsColumns === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {specs.map((s, i) => (
              <div key={i} className="flex flex-col bg-slate-50 border border-steel-gray rounded-lg px-2.5 py-1.5">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                <span className="text-[11px] font-bold text-charcoal mt-0.5">{s.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {video && (
        <div className="w-full border-t-2 border-steel-gray bg-slate-900" style={{ height: '200px' }}>
          <video src={video} className="w-full h-full object-cover" controls />
        </div>
      )}
    </div>
  </div>
);

const CategoryContent = ({ cat, onEnquire, t }) => {
  const Icon = categoryIcons[cat.code];
  const tKey = categoryTransKey[cat.code];

  const renderProducts = () => {
    if (cat.code === 'A') {
      const images = ['/products/R2DRY.jpeg', '/products/wet.jpeg', '/products/wets.png'];
      const videos = ["/products/Rock Drill T Handle.mp4", "/products/tdrilleditt.mp4", "/products/Rock Drill Spade Handle.mp4"];
      const headers = ['model', 'type', 'weight', 'impactRate', 'drillingRate', 'airHose', 'waterHose'];
      const rowTypeKeys = ['dryFlushed', 'wetFlushed', 'wetFlushed'];
      return (
        <div className="space-y-4">
          {cat.table.rows.map((row, ri) => {
            const specs = headers.slice(2).map((hk) => ({
              label: t(`productsPage.categoryA.table.headers.${hk}`),
              value: row[headers.indexOf(hk)],
            }));
            return (
              <VideoProductCard
                key={ri}
                image={images[ri]}
                title={row[0]}
                subtitle={t(`productsPage.categoryA.table.rowLabels.${rowTypeKeys[ri]}`)}
                specs={specs}
                video={videos[ri]}
                onEnquire={onEnquire}
                t={t}
              />
            );
          })}
        </div>
      );
    }

    if (cat.code === 'B') {
      const images = ['/products/bbc.jpeg', '/products/shank.png', '/products/couple.png'];
      const videos = ["/products/Drifter.mp4"];
      const rowKeys = ['r1', 'r2', 'r3'];
      return (
        <div className="space-y-4">
          {rowKeys.map((rk, ri) => {
            const item = t(`productsPage.categoryB.table.rows.${rk}.item`);
            const detail = t(`productsPage.categoryB.table.rows.${rk}.detail`);
            if (ri === 0) {
              const specs = detail
                ? detail.split(' | ').map((spec) => {
                    const [label, value] = spec.split(': ');
                    return { label, value };
                  })
                : [];
              return (
                <VideoProductCard
                  key={rk}
                  image={images[ri]}
                  title={item}
                  specs={specs}
                  video={videos[0]}
                  onEnquire={onEnquire}
                  t={t}
                />
              );
            }
            return (
              <ProductCard key={rk} catCode="B" image={images[ri] || cat.image} title={item} subtitle={detail} specs={[]} onEnquire={onEnquire} t={t} />
            );
          })}
        </div>
      );
    }

    if (cat.code === 'C') {
      const rowLabelKeys = ['model', 'weight', 'airConsumption', 'pistonDiameter', 'overallLength', 'frequency', 'airHose', 'pressure'];
      const models = [
        {
          title: 'CP-117 / HR-117',
          subtitleKey: 'springRetainer',
          badgeKey: 'springRetainer',
          image: '/products/cp.jpeg',
          brochureUrl: '/assets/Hava Breaker s.pdf',
          col: 'springRetainer',
        },
        {
          title: 'CP-117',
          subtitleKey: 'latchRetainer',
          badgeKey: 'latchRetainer',
          image: '/products/latch.png',
          brochureUrl: '/assets/Hava Pavement Breaker Catalog.pdf',
          col: 'latchRetainer',
        },
      ];
      return (
        <div className="space-y-4">
          {models.map((m, i) => {
            const badge = t(`productsPage.categoryC.table.headers.${m.badgeKey}`);
            // Spec labels are translated; values come from the raw data rows (matched by position, since row[0] in the
            // source data is the English label used only as a lookup key, not displayed directly here).
            const rowLabelKeyByEnglish = {
              'Weight': 'weight', 'Air Consumption': 'airConsumption', 'Piston Diameter': 'pistonDiameter',
              'Overall Length': 'overallLength', 'Frequency': 'frequency', 'Air Hose Connection': 'airHose',
            };
            const rawSpecs = cat.table.rows
              .filter((r) => r[0] !== 'Model' && r[0] !== 'Operating Pressure')
              .map((r) => ({
                label: t(`productsPage.categoryC.table.rows.${rowLabelKeyByEnglish[r[0]] || 'weight'}`),
                value: m.col === 'springRetainer' ? r[1] : r[2],
              }));
            return (
              <div key={i} className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden">
                <div className="hidden sm:flex h-[280px]">
                  <div className="w-64 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden">
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover object-left" />
                  </div>
                  <div className="flex-1 p-5 flex flex-col min-w-0 overflow-hidden">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[10px] font-bold bg-trust-blue/10 text-trust-blue border border-trust-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                          {badge}
                        </span>
                        <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{badge}</p>
                      </div>
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity">
                          {t('header.primaryCTA')}
                        </button>
                        <a href={m.brochureUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center justify-center gap-1 transition-colors">
                          <Download className="w-3 h-3" /> Brochure
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {rawSpecs.map((s, si) => (
                        <div key={si} className="flex flex-col bg-slate-50 border border-steel-gray rounded-lg px-2.5 py-1.5">
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                          <span className="text-[11px] font-bold text-charcoal mt-0.5">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-52 flex-shrink-0 bg-slate-900 border-l-2 border-steel-gray overflow-hidden">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-white/40 p-4 text-center">
                      <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white/30"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider">Product Video<br />Coming Soon</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:hidden">
                  <div className="w-full bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ height: '220px' }}>
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover object-left" />
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold bg-trust-blue/10 text-trust-blue border border-trust-blue/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-1.5 inline-block">
                          {badge}
                        </span>
                        <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{badge}</p>
                      </div>
                      <div className="flex flex-col gap-2 flex-shrink-0">
                        <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity">
                          {t('header.primaryCTA')}
                        </button>
                        <a href={m.brochureUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red px-3 py-1.5 rounded-lg whitespace-nowrap flex items-center justify-center gap-1 transition-colors">
                          <Download className="w-3 h-3" /> Brochure
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {rawSpecs.map((s, si) => (
                        <div key={si} className="flex flex-col bg-slate-50 border border-steel-gray rounded-lg px-2.5 py-1.5">
                          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{s.label}</span>
                          <span className="text-[11px] font-bold text-charcoal mt-0.5">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (cat.code === 'D') {
      const rowKeys = ['netWeight', 'length', 'lengthExtended', 'extensionLength', 'pistonDiameter'];
      const specs = rowKeys.map((rk, i) => ({
        label: t(`productsPage.categoryD.table.rows.${rk}`),
        value: cat.table.rows[i] ? cat.table.rows[i][1] : '',
      }));
      return (
        <div className="space-y-4">
          <VideoProductCard
            image="/products/bmk.jpeg"
            title={t('productsPage.categoryD.summaryLine')}
            subtitle="Used with RH-656/4W Wet Rock Drill"
            specs={specs}
            video="/products/pusher.mp4"
            onEnquire={onEnquire}
            t={t}
          />
        </div>
      );
    }

    if (cat.code === 'E') {
      const productKeys = ['e1', 'e3', 'e4', 'e5'];
      const images = { e1: '/products/blg.jpeg', e3: '/products/CAMP.jpeg', e4: '/products/HORSE.jpeg', e5: '/products/hpipe.png' };
      return (
        <div className="space-y-4">
          {productKeys.map((pk) => {
            const product = t(`productsPage.categoryE.table.rows.${pk}.product`);
            const detail = t(`productsPage.categoryE.table.rows.${pk}.detail`);
            const specs = pk === 'e1'
              ? detail.split(' | ').map((spec) => {
                  const [label, value] = spec.split(': ');
                  return { label, value };
                })
              : [{ label: 'Detail', value: detail }];
            return <ProductCard key={pk} catCode="E" image={images[pk]} title={product} specs={specs} onEnquire={onEnquire} t={t} />;
          })}
        </div>
      );
    }

    if (cat.code === 'F') {
      const itemKeys = ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'];
      const tagKeys = ['t1', 't2', 't3', 't4'];
      return (
        <div className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row">
          <div className="w-full sm:w-56 lg:w-80 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ minHeight: '220px' }}>
            <img src="/products/ex.jpeg" alt="Extension Equipment" className="w-full h-full object-cover" style={{ minHeight: '220px' }} />
          </div>
          <div className="flex-1 p-5 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-4">
              <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{cat.name} — Full Range</p>
              <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 hover:opacity-90 transition-opacity">
                {t('header.primaryCTA')}
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {itemKeys.map((ik) => (
                <div key={ik} className="flex items-center gap-2 bg-slate-50 border border-steel-gray rounded-xl px-3 py-2.5">
                  <div className="w-1.5 h-1.5 bg-hava-red rounded-full flex-shrink-0" />
                  <span className="text-sm font-bold text-charcoal">{t(`productsPage.categoryF.table.rows.${ik}.product`)}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {tagKeys.map((tk) => (
                <span key={tk} className="text-xs font-bold uppercase tracking-wider bg-slate-50 border border-steel-gray text-charcoal px-3 py-1.5 rounded-full">{t(`productsPage.categoryF.tags.${tk}`)}</span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (cat.code === 'G') {
      const images = ['/products/caribe.jpeg', '/products/r32.png'];
      const twoColKeys = ['rockDrills', 'drifter'];
      return (
        <div className="space-y-4">
          {twoColKeys.map((tck, i) => {
            const heading = t(`productsPage.categoryG.twoCol.${tck}.heading`);
            const text = t(`productsPage.categoryG.twoCol.${tck}.text`);
            return (
              <div key={tck} className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden flex flex-col sm:flex-row">
                <div className="w-full sm:w-44 lg:w-52 flex-shrink-0 bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ minHeight: '220px' }}>
                  <img src={images[i] || cat.image} alt={heading} className="w-full h-full object-cover" style={{ minHeight: '220px' }} />
                </div>
                <div className="flex-1 p-5 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="font-black text-charcoal text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{heading}</p>
                    <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap flex-shrink-0 hover:opacity-90 transition-opacity">
                      {t('header.primaryCTA')}
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {text.split(' / ').map((size, si) => <span key={si} className="text-sm font-bold bg-slate-50 border-2 border-steel-gray text-charcoal px-4 py-2 rounded-xl">{size}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    if (cat.code === 'H') {
      const spareCategories = [
        { label: 'Rock Drill Spare Parts', image: '/products/rockd.jpg' },
        { label: 'Pusher Leg Spare Parts', image: '/products/leg.jpg' },
        { label: 'Drifter Spare Parts', image: '/products/drift.jpg' },
      ];
      const whyCardKeys = ['tolerances', 'materials', 'stock', 'downtime', 'life', 'compat'];
      return (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {spareCategories.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-steel-gray hover:border-hava-red/40 hover:shadow-xl transition-all overflow-hidden">
                <div className="w-full bg-gradient-to-br from-slate-100 to-blue-50 overflow-hidden" style={{ height: '200px' }}>
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 flex items-center justify-between gap-2">
                  <p className="font-black text-charcoal text-sm leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.label}</p>
                  <button onClick={onEnquire} className="text-xs font-bold bg-gradient-to-r from-hava-red to-accent-orange text-white px-3 py-1.5 rounded-lg whitespace-nowrap hover:opacity-90 transition-opacity flex-shrink-0">
                    {t('header.primaryCTA')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-hava-red/5 to-accent-orange/5 border-l-4 border-hava-red rounded-r-2xl p-5">
            <p className="font-bold text-hava-red text-sm uppercase tracking-wider mb-2">Why Genuine Spares Matter</p>
            <p className="text-sm text-gray-700 leading-relaxed">{t('productsPage.categoryH.whyGenuine')}</p>
          </div>
          <p className="font-bold text-accent-orange text-xs uppercase tracking-[2px] mt-6 mb-4">Why Use Genuine HAVA Spare Parts</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyCardKeys.map((wk) => (
              <div key={wk} className="bg-slate-50 border-l-2 border-hava-red rounded-r-xl p-4">
                <p className="font-bold text-charcoal text-sm mb-1 uppercase tracking-wide">{t(`productsPage.categoryH.whyCards.${wk}.title`)}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{t(`productsPage.categoryH.whyCards.${wk}.text`)}</p>
              </div>
            ))}
          </div>
        </>
      );
    }

    return null;
  };

  // twoCol block translation (categories A, B, C, D use twoCol)
  const twoColMap = {
    A: ['appDry', 'appWet', 'features'],
    B: ['applications', 'airSpecs'],
    C: ['applications', 'features'],
    D: ['applications', 'features'],
  };
  const translatedTwoCol = twoColMap[cat.code]
    ? twoColMap[cat.code].map((key) => ({
        heading: t(`productsPage.${tKey}.twoCol.${key}.heading`),
        text: t(`productsPage.${tKey}.twoCol.${key}.text`),
      }))
    : null;

  return (
    <motion.div
      key={cat.code}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-xl border-2 border-steel-gray p-5 sm:p-6"
    >
      <div className="flex items-center justify-between gap-4 mb-2 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-black text-charcoal" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{t(`productsPage.${tKey}.name`)}</p>
            <div className="w-8 h-1 bg-gradient-to-r from-hava-red to-accent-orange rounded-full mt-1" />
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          {cat.brochureUrl && cat.code !== 'C' ? (
            <a href={cat.brochureUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs h-8 px-3">
                <Download className="w-3 h-3 mr-1" /> Brochure
              </Button>
            </a>
          ) : null}
          <Button onClick={onEnquire} className="bg-gradient-to-r from-hava-red to-accent-orange text-white text-xs font-bold h-8 px-3 group">
            Request a Quote <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <p className="text-sm text-gray-600 leading-relaxed mb-4">{t(`productsPage.${tKey}.description`)}</p>

      {renderProducts()}

      {translatedTwoCol && !['G'].includes(cat.code) && <TwoColBlock items={translatedTwoCol} />}

      {cat.code === 'A' && (
        <div className="mt-4 bg-accent-orange/5 border-l-4 border-accent-orange rounded-r-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-accent-orange flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700"><strong className="text-charcoal">Note:</strong> {t('productsPage.categoryA.note')}</p>
        </div>
      )}
      {cat.code === 'E' && (
        <div className="mt-4 bg-hava-red/5 border-l-4 border-hava-red rounded-r-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-hava-red flex-shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700"><strong className="text-hava-red uppercase tracking-wider">Critical:</strong> {t('productsPage.categoryE.criticalNote')}</p>
        </div>
      )}
    </motion.div>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────
export const ProductsPage = () => {
  const { t } = useTranslation();
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('A');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();
  const handleEnquire = () => setQuoteModalOpen(true);
  const activeCat = d.categories.find(c => c.code === activeCategory);

  const trustItems = [
    { icon: '✅', text: t('header.topBar.certification') },
    { icon: '🇮🇳', text: t('productsPage.categoryF.tags.t1', 'Made in India') },
    { icon: '🔧', text: t('whyHava.floatingTags.directManufacturer') },
    { icon: '🌍', text: t('whyHava.floatingTags.countries') },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat && d.categories.find(c => c.code === cat)) {
      setActiveCategory(cat);
      setTimeout(() => {
        document.getElementById('product-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [location.search]);

  const handleCategorySelect = (code) => {
    setActiveCategory(code);
    setMobileSidebarOpen(false);
    setTimeout(() => {
      document.getElementById('product-detail')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* ── HERO ── */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 bg-white border border-steel-gray rounded-full px-4 py-2 mb-4 shadow-sm">
                <span className="text-accent-orange text-sm">✦</span>
                <span className="text-xs font-bold uppercase tracking-[2px] text-charcoal">{t('productsPage.hero.label')}</span>
                <span className="w-2 h-2 bg-accent-orange rounded-full" />
              </div>
              <h1 className="text-3xl lg:text-5xl font-black text-charcoal leading-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {t('productsPage.hero.heading')}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">{t('productsPage.hero.body')}</p>
            </div>

            <div className="flex-shrink-0 w-full lg:w-80 flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => document.getElementById('products-main')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-5 text-sm shadow-xl rounded-xl group"
                  >
                    Explore Categories <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full">
                  <Button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-6 py-5 text-sm rounded-xl shadow-lg backdrop-blur-xl"
                  >
                    Request a Quote
                  </Button>
                </motion.div>
              </div>

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

      {/* MOBILE dropdown */}
      <div id="products-main" className="lg:hidden sticky top-20 z-30 bg-white border-b-2 border-steel-gray px-4 py-3 shadow-md">
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="w-full flex items-center justify-between bg-gradient-to-r from-charcoal to-trust-blue text-white px-4 py-3 rounded-xl font-bold text-sm"
        >
          <span className="flex items-center gap-3">
            {activeCat && (() => { const Icon = categoryIcons[activeCat.code]; return <Icon className="w-5 h-5 text-accent-orange" />; })()}
            {activeCat && t(`productsPage.${categoryTransKey[activeCat.code]}.name`)}
          </span>
          {mobileSidebarOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
        <AnimatePresence>
          {mobileSidebarOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 bg-white rounded-2xl border-2 border-steel-gray shadow-2xl overflow-hidden"
            >
              {d.categories.map((cat) => {
                const Icon = categoryIcons[cat.code];
                return (
                  <button
                    key={cat.code}
                    onClick={() => handleCategorySelect(cat.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b border-steel-gray last:border-b-0 transition-all ${
                      activeCategory === cat.code ? 'bg-hava-red/5 text-hava-red' : 'text-charcoal hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      activeCategory === cat.code ? 'bg-gradient-to-br from-hava-red to-accent-orange' : 'bg-charcoal'
                    }`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold">{t(`productsPage.${categoryTransKey[cat.code]}.name`)}</span>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MAIN LAYOUT */}
      <section className="relative py-6 lg:py-10 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-7 items-start">

            {/* LEFT SIDEBAR */}
            <div className="hidden lg:block lg:w-60 flex-shrink-0">
              <div className="bg-white rounded-3xl border-2 border-steel-gray shadow-xl overflow-hidden sticky top-28">
                <div className="bg-gradient-to-br from-charcoal to-trust-blue px-5 py-3">
                  <p className="text-accent-orange text-xs font-bold uppercase tracking-[2px]">Product Categories</p>
                  <p className="text-white font-black text-sm mt-0.5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8 Categories</p>
                </div>
                <div className="divide-y divide-steel-gray">
                  {d.categories.map((cat) => {
                    const Icon = categoryIcons[cat.code];
                    return (
                      <button
                        key={cat.code}
                        onClick={() => handleCategorySelect(cat.code)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all group ${
                          activeCategory === cat.code ? 'bg-hava-red/5 border-l-4 border-hava-red' : 'border-l-4 border-transparent hover:bg-slate-50 hover:border-hava-red/40'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                          activeCategory === cat.code ? 'bg-gradient-to-br from-hava-red to-accent-orange shadow-lg scale-110' : 'bg-charcoal group-hover:bg-gradient-to-br group-hover:from-hava-red group-hover:to-accent-orange'
                        }`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <span className={`text-sm font-bold transition-colors ${activeCategory === cat.code ? 'text-hava-red' : 'text-charcoal group-hover:text-hava-red'}`}>{t(`productsPage.${categoryTransKey[cat.code]}.name`)}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="p-3 border-t border-steel-gray bg-slate-50">
                  <Button onClick={handleEnquire} className="w-full bg-gradient-to-r from-hava-red to-accent-orange text-white text-xs font-bold rounded-xl group">
                    {t('hero.primaryCTA')} <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div id="product-detail" className="flex-1 min-w-0 scroll-mt-28">
              <AnimatePresence mode="wait">
                {activeCat && <CategoryContent cat={activeCat} onEnquire={handleEnquire} t={t} />}
              </AnimatePresence>

              {activeCat && (
                <div className="flex justify-between items-center mt-3 px-1">
                  <Button variant="outline" className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs font-bold"
                    onClick={() => { const idx = d.categories.findIndex(c => c.code === activeCategory); if (idx > 0) handleCategorySelect(d.categories[idx - 1].code); }}
                    disabled={activeCategory === d.categories[0].code}>← Previous</Button>
                  <span className="text-xs text-gray-500 font-medium">
                    {d.categories.findIndex(c => c.code === activeCategory) + 1} / {d.categories.length}
                  </span>
                  <Button variant="outline" className="border-2 border-steel-gray text-charcoal hover:border-hava-red hover:text-hava-red text-xs font-bold"
                    onClick={() => { const idx = d.categories.findIndex(c => c.code === activeCategory); if (idx < d.categories.length - 1) handleCategorySelect(d.categories[idx + 1].code); }}
                    disabled={activeCategory === d.categories[d.categories.length - 1].code}>Next →</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-10 lg:py-14 overflow-hidden bg-charcoal">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hava-red/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-trust-blue/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-2xl lg:text-4xl font-black text-white mb-3">
              {t('productsPage.finalCta.title')}
            </p>
            <p className="text-base text-white/70 mb-6 max-w-2xl mx-auto">{t('productsPage.finalCta.body')}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={() => setQuoteModalOpen(true)} className="bg-gradient-to-r from-hava-red to-hava-red/90 text-white font-bold px-6 py-3 rounded-xl group">
                Speak With Our Team <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => setQuoteModalOpen(true)} variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl">
                Request Product Recommendation
              </Button>
              <Button onClick={() => setQuoteModalOpen(true)} className="bg-accent-orange hover:bg-accent-orange/90 text-charcoal font-bold px-6 py-3 rounded-xl">
                <Download className="w-4 h-4 mr-2" /> Download Catalogue
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