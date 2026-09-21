/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Sparkles, 
  Sun, 
  Palette, 
  UserCheck, 
  Scissors, 
  Baby, 
  ArrowRight, 
  ArrowLeft, 
  Building2, 
  ShieldAlert, 
  Wrench, 
  FlaskConical, 
  Users, 
  CheckCircle2, 
  Calculator, 
  HardHat, 
  Truck, 
  FileText, 
  Check, 
  Layers,
  Heart,
  Droplet
} from 'lucide-react';
import { COSMETIC_CATEGORIES, MANUFACTURING_SECTION, PACKING_SECTION, WAREHOUSE_HIGHLIGHTS } from '../data';
import { PillarData } from '../types';

// Helper to resolve Icons dynamically
const categoryIcons: {[key: string]: any} = {
  Sparkles,
  Flower: Droplet, // Fallback for Flower with Droplet which exists and looks high-end
  Sun,
  ShieldAlert,
  Palette,
  UserCheck,
  Scissors,
  Baby
};

// 1. Cover Slide
export const CoverSlide: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-gradient-to-br from-gray-50 to-gray-150 rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      {/* Decorative background grid and blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(#0f4c81_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Slide Top Metadata */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-brand-blue flex items-center justify-center rounded-xl shadow-md text-white font-display font-bold text-2xl tracking-tighter">
            K
          </div>
          <div>
            <div className="text-xl font-display font-bold tracking-tight text-brand-blue">KOKAB</div>
            <div className="text-[10px] uppercase tracking-widest text-brand-gray font-semibold -mt-1">Industries Pvt Ltd</div>
          </div>
        </div>
        <div className="text-sm font-display uppercase tracking-widest text-brand-gray font-semibold">
          (Rivaj)
        </div>
      </div>

      {/* Main Title Content */}
      <div className="my-auto py-12 text-center md:text-left z-10 max-w-4xl">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-mono tracking-widest uppercase bg-brand-blue/10 text-brand-blue font-semibold rounded-full border border-brand-blue/10">
          Corporate Portfolio & Presentation
        </span>
        <h1 className="font-display font-normal text-5xl md:text-7xl lg:text-8xl text-brand-gray tracking-tight leading-none mb-1">
          KOKAB
        </h1>
        <h2 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-brand-blue tracking-[2px] leading-tight flex flex-wrap items-baseline gap-x-4">
          INDUSTRIES
        </h2>
        <div className="text-xl md:text-3xl font-display text-brand-gray font-semibold tracking-wider mt-2 opacity-80">
          PVT LTD.
        </div>
        <p className="mt-8 text-base md:text-lg text-brand-gray max-w-2xl leading-relaxed">
          Sovereign cosmetics manufacturer and distributor, specializing in globally recognized, premium skincare, makeup, and personal care formulations.
        </p>
      </div>

      {/* Bottom controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-200/60 pt-6 z-10">
        <div className="text-sm font-mono text-brand-gray">
          Company Profile &bull; 2026 Edition
        </div>
        
        <button 
          onClick={onNext}
          className="group flex items-center gap-3 bg-brand-blue hover:bg-brand-light-blue text-white px-8 py-3.5 rounded-full font-display font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          Begin Presentation
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// 2. Introduction & Background
export const IntroSlide: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/[0.02] border-l border-gray-100 hidden lg:block" />
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-150 pb-6">
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-brand-blue" />
          <span className="text-sm font-mono text-brand-gray">KOKAB INDUSTRIES &bull; BACKGROUND</span>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-gray-100 text-brand-gray rounded-md">
          01 / 26
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 my-auto py-8">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h3 className="text-sm font-mono tracking-widest text-brand-light-blue uppercase font-bold mb-3">
            01. Corporate Background
          </h3>
          <h2 className="font-display font-medium text-4xl md:text-5xl text-brand-dark tracking-tight leading-tight mb-8">
            INTRODUCTION & <br className="hidden md:inline" />
            <span className="font-bold text-brand-blue">BACKGROUND</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-gray text-sm md:text-base leading-relaxed">
            <div className="space-y-4">
              <p className="font-medium text-brand-dark/90">
                We are a trusted cosmetics manufacturer and distributor, specializing in high-quality skincare, makeup, and personal care products.
              </p>
              <p>
                With years of industry expertise, Kokab Industries stands as a pioneer of regulatory compliance and high-performance beauty standards in the region.
              </p>
            </div>
            <div className="space-y-4 border-l-0 md:border-l md:pl-6 border-brand-blue/10">
              <p>
                We use innovative formulations and premium ingredients to meet the diverse needs of our global customers.
              </p>
              <p className="font-medium">
                Committed to sustainability, worker safety, and continuous customer satisfaction, we deliver reliable, effective beauty solutions that stand out in the market.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-center items-center">
          {/* Custom visually striking mockup grid representing actual products */}
          <div className="relative w-full max-w-sm aspect-square bg-gradient-to-tr from-brand-blue/5 to-amber-500/5 rounded-3xl p-6 border border-gray-150 shadow-inner flex items-center justify-center">
            
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xs rounded-3xl" />
            
            {/* Visual Cosmestics Mockup Cards stack with rich shadows */}
            <div className="relative z-10 w-full grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-24 bg-rose-50 rounded-lg flex items-center justify-center text-rose-500 font-display font-bold uppercase text-xs tracking-wider">
                  Rivaj Bright
                </div>
                <div className="mt-2 text-xs font-bold text-brand-dark">SUNBLOCK SPF 60</div>
                <div className="text-[9px] text-brand-gray">Water Resistant</div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform translate-y-6 rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-24 bg-indigo-50 rounded-lg flex items-center justify-center text-brand-blue font-display font-bold uppercase text-xs tracking-wider">
                  VITAMIN C
                </div>
                <div className="mt-2 text-xs font-bold text-brand-dark">BRIGHTENING WASH</div>
                <div className="text-[9px] text-brand-gray">Natural Active Extracts</div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform -translate-y-2 rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-24 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 font-display font-bold uppercase text-[9px] tracking-wider text-center">
                  ARGAN COLD WAX
                </div>
                <div className="mt-2 text-xs font-bold text-brand-dark">BEAUTY CARE</div>
                <div className="text-[9px] text-brand-gray">Smooth Pure Finish</div>
              </div>

              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 transform translate-y-4 -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="w-full h-24 bg-zinc-100 rounded-lg flex items-center justify-center text-brand-dark font-display font-bold uppercase text-xs tracking-wider">
                  Rivaj Bold
                </div>
                <div className="mt-2 text-xs font-bold text-brand-dark">EYESHADOW PALETTE</div>
                <div className="text-[9px] text-brand-gray">24 Matte Colors</div>
              </div>
            </div>

            {/* Glowing active circle tag strictly matching professional layouts */}
            <div className="absolute top-2 right-2 bg-brand-blue text-white text-[9px] font-mono tracking-widest uppercase px-2 py-1 rounded-full shadow-md">
              RIVAJ PREMIUM
            </div>
          </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="flex justify-between items-center border-t border-gray-150 pt-6">
        <span className="text-xs font-mono text-brand-gray">KOKAB INDUSTRIES PROFILE</span>
        <button 
          onClick={onNext}
          className="group flex items-center gap-2 text-brand-blue font-display font-semibold hover:text-brand-light-blue text-sm transition-colors cursor-pointer"
        >
          Check Categories
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// 3. Categories Slide
export const CategoriesSlide: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-150 pb-6">
        <div className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-brand-blue" />
          <span className="text-sm font-mono text-brand-gray">KOKAB INDUSTRIES &bull; PORTFOLIO RANGE</span>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-gray-100 text-brand-gray rounded-md">
          02 / 26
        </div>
      </div>

      {/* Content */}
      <div className="my-auto py-6">
        <div className="text-center md:text-left mb-10">
          <span className="text-xs font-mono tracking-widest text-brand-light-blue uppercase font-bold">
            Full Market Coverage
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-brand-blue uppercase tracking-tight mt-1">
            CATEGORIES
          </h2>
          <p className="text-brand-gray text-sm md:text-base mt-2 max-w-xl">
            We manufacture highly certified, premium products across eight dedicated cosmetics and skincare consumer categories.
          </p>
        </div>

        {/* 8 Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {COSMETIC_CATEGORIES.map((cat, i) => {
            const IconComponent = categoryIcons[cat.icon] || Sparkles;
            return (
              <div 
                key={cat.title}
                className="group relative bg-gray-50 hover:bg-gradient-to-b hover:from-white hover:to-brand-blue/5 p-5 rounded-2xl border border-gray-150 hover:border-brand-blue/35 transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-1 overflow-hidden"
              >
                {/* Seeded photo container from Picsum as fallback for mock-up visual */}
                <div className="w-full h-24 mb-4 rounded-xl overflow-hidden relative bg-brand-blue/5">
                  <img 
                    src={`${cat.image}`} 
                    alt={cat.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60" />
                  
                  {/* Category icon */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-xs p-1.5 rounded-lg text-brand-blue shadow-xs">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-[10px] font-mono tracking-wider text-brand-light-blue uppercase font-bold">
                    {cat.arabic}
                  </div>
                  <h3 className="font-display font-bold text-lg text-brand-dark group-hover:text-brand-blue transition-colors mt-0.5">
                    {cat.title}
                  </h3>
                  <p className="text-brand-gray text-[11px] leading-tight mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-gray-150 pt-6">
        <span className="text-xs font-mono text-brand-gray">RIVAJ COSMETIC CATEGORIES</span>
        <button 
          onClick={onNext}
          className="group flex items-center gap-2 text-brand-blue font-display font-semibold hover:text-brand-light-blue text-sm transition-colors cursor-pointer"
        >
          Explore Core Pillars
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// 4. Pillars Overview Slide (The 8 Columns Infographic)
export const PillarsOverviewSlide: React.FC<{ onPillarSelect: (index: number) => void, onNext: () => void }> = ({ onPillarSelect, onNext }) => {
  const pillarsList = [
    { num: '01', title: 'Health, Safety & Environment', color: 'bg-indigo-650' },
    { num: '02', title: 'Production Section', color: 'bg-sky-650' },
    { num: '03', title: 'Supply Chain Management', color: 'bg-blue-650' },
    { num: '04', title: 'Engineering & Maintenance', color: 'bg-emerald-650' },
    { num: '05', title: 'Quality Control Lab', color: 'bg-teal-650' },
    { num: '06', title: 'HR / Administration', color: 'bg-amber-650' },
    { num: '07', title: 'Quality Assurance', color: 'bg-rose-650' },
    { num: '08', title: 'Internal Audit & Accounts', color: 'bg-slate-650' }
  ];

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-150 pb-4">
        <div className="flex items-center gap-2">
          <Building2 className="w-6 h-6 text-brand-blue" />
          <span className="text-sm font-mono text-brand-gray">KOKAB INDUSTRIES &bull; FOUNDATION</span>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-gray-100 text-brand-gray rounded-md">
          03 / 26
        </div>
      </div>

      {/* Main Content */}
      <div className="my-auto py-6">
        <div className="text-center mb-10 max-w-xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-brand-light-blue uppercase font-bold">
            Corporate Integrity & Excellence
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-dark uppercase tracking-tight leading-none mt-1">
            COMPANY STANDS ON<br />
            <span className="text-brand-blue">FOLLOWING PILLARS</span>
          </h2>
          <p className="text-brand-gray text-xs md:text-sm mt-3">
            Our governance rests on eight foundational operational divisions, ensuring absolute control over safety, formulation efficacy, and client fulfillment.
          </p>
        </div>

        {/* 8 Pillars Columns Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5 pt-4">
          {pillarsList.map((item, index) => (
            <div
              key={item.num}
              onClick={() => onPillarSelect(index)}
              className="group cursor-pointer flex flex-col justify-between bg-gradient-to-b from-gray-50 to-gray-100/50 hover:from-white hover:to-brand-blue/5 p-4 rounded-xl border border-gray-150 hover:border-brand-blue/45 transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-2 relative"
            >
              {/* Highlight top pointer line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-blue/10 group-hover:bg-brand-blue rounded-t-xl transition-all duration-300" />
              
              <div className="pt-2">
                <span className="font-mono text-3xl md:text-4xl font-extrabold text-brand-blue/20 group-hover:text-brand-blue transition-colors">
                  {item.num}
                </span>
              </div>

              {/* Title Section wrapping text cleanly */}
              <div className="mt-8 pb-3">
                <h3 className="font-display font-semibold text-xs md:text-[13px] text-brand-dark group-hover:text-brand-blue tracking-tight leading-snug transition-colors line-clamp-3">
                  {item.title}
                </h3>
                <div className="w-6 h-0.5 bg-brand-blue/10 group-hover:w-full transition-all duration-500 mt-2" />
              </div>

              <div className="flex justify-between items-center text-[10px] text-brand-gray font-mono group-hover:text-brand-blue transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-gray-150 pt-5">
        <span className="text-xs font-mono text-brand-gray">INTEGRATED INDUSTRIAL PILLARS</span>
        <button 
          onClick={onNext}
          className="group flex items-center gap-2 text-brand-blue font-display font-semibold hover:text-brand-light-blue text-sm transition-colors cursor-pointer"
        >
          Detailed Pillar Reviews
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// 5. Pillar Detail Slides Wrapper
export const PillarDetailSlide: React.FC<{ pillar: PillarData, activeIndex: number, onPrev: () => void, onNext: () => void }> = ({ pillar, activeIndex, onPrev, onNext }) => {
  
  // Specific renderers for various visuals based on visualType
  const renderVisual = () => {
    switch (pillar.visualType) {
      case "list": // Health, Safety & Environment (01)
        return (
          <div className="bg-gradient-to-br from-indigo-50/50 to-emerald-50/30 p-6 rounded-2xl border border-indigo-100/50 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-indigo-100/50">
              <span className="text-xs font-mono font-bold text-indigo-700 uppercase tracking-widest">HSE CORE METRIC</span>
              <HardHat className="w-5 h-5 text-indigo-600 animate-bounce" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/80 p-4 rounded-xl border border-indigo-100/30">
                <div className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-1">HEALTH</div>
                <div className="text-md font-bold text-brand-dark">Aseptic Protection</div>
                <p className="text-xs text-brand-gray mt-1 leading-relaxed">Medical checks and protective gear requirements strict policies.</p>
              </div>
              <div className="bg-white/80 p-4 rounded-xl border border-indigo-100/30">
                <div className="text-xs text-emerald-600 font-bold uppercase tracking-wider mb-1">SAFETY</div>
                <div className="text-md font-bold text-brand-dark">Incident-Free Record</div>
                <p className="text-xs text-brand-gray mt-1 leading-relaxed">Daily checks and zero critical hazard incidents reported.</p>
              </div>
            </div>
            
            <div className="bg-white/80 p-4 rounded-xl border border-indigo-100/30">
              <div className="text-[10px] font-mono text-brand-gray font-bold uppercase tracking-widest mb-2">Pillars of Safe Implementation</div>
              <ul className="text-xs text-brand-gray space-y-1">
                {pillar.highlights.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
        
      case "grid": // Production Section (02)
        return (
          <div className="p-6 bg-gradient-to-br from-sky-50 to-blue-50/50 rounded-2xl border border-sky-150 space-y-4">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-widest">STATE-OF-THE-ART INFRASTRUCTURE</span>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-sm">
                <div className="text-xs font-mono text-brand-gray">Vessel Capacity</div>
                <div className="text-xl font-display font-bold text-brand-blue">2,000 Liters</div>
                <div className="text-[10px] text-brand-gray">Upgraded Mixers</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-sky-100 shadow-sm">
                <div className="text-xs font-mono text-brand-gray">Packaging</div>
                <div className="text-xl font-display font-bold text-sky-600">60 pcs/min</div>
                <div className="text-[10px] text-brand-gray">Continuous Output</div>
              </div>
            </div>
            <div className="bg-white/90 p-4 rounded-xl border border-sky-100/50">
              <p className="text-xs text-brand-gray italic">
                Our facilities run around the clock under ISO standards, creating pure blends for the signature Rivaj collections.
              </p>
            </div>
          </div>
        );

      case "stats": // Supply Chain Management (03)
        return (
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-2xl border border-blue-150 space-y-4">
            <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest">SUPPLY LOGISTICS</span>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-brand-dark">Dedicated Fleet</span>
                </div>
                <span className="text-xs font-mono font-bold text-brand-blue">Active Dispatch</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-brand-dark">Pallet Tracking</span>
                </div>
                <span className="text-xs font-mono font-bold text-brand-blue">5,000 Capacity</span>
              </div>
              <div className="flex justify-between items-center bg-white p-3 rounded-xl border border-blue-100">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-bold text-brand-dark">Integration</span>
                </div>
                <span className="text-xs font-mono font-bold text-brand-blue">Dynamics 360</span>
              </div>
            </div>
          </div>
        );

      case "blueprints": // Engineering (04)
        return (
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 p-6 rounded-2xl border border-emerald-150 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-emerald-100/50">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest">MAINTENANCE CYCLE</span>
              <Wrench className="w-5 h-5 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div className="bg-white p-4 rounded-xl border border-emerald-100/50">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-brand-dark">Calibration Health</span>
                <span className="font-mono text-emerald-600">100% Verified</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-emerald-100/50">
              <div className="flex justify-between text-xs mb-1">
                <span className="font-bold text-brand-dark">Maintenance SLA</span>
                <span className="font-mono text-emerald-600">99.8%</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '99.8%' }} />
              </div>
            </div>
          </div>
        );

      case "lab": // Quality Control (05)
        return (
          <div className="bg-gradient-to-br from-teal-50 to-emerald-50/30 p-6 rounded-2xl border border-teal-150 space-y-4">
            <span className="text-xs font-mono font-bold text-teal-700 uppercase tracking-widest">INSTRUMENT LOG BOOK</span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-white p-2 rounded-lg border border-teal-100/50">Viscometers</div>
              <div className="bg-white p-2 rounded-lg border border-teal-100/50">Density Meters</div>
              <div className="bg-white p-2 rounded-lg border border-teal-100/50">pH Testers</div>
              <div className="bg-white p-2 rounded-lg border border-teal-100/50">Distillation Kit</div>
              <div className="bg-white p-2 rounded-lg border border-teal-100/50">TDS meters</div>
              <div className="bg-white p-2 rounded-lg border border-teal-100/50">Leak Tester</div>
            </div>
            <div className="bg-white p-2.5 rounded-lg border border-teal-100 flex items-center justify-center gap-2">
              <FlaskConical className="w-4 h-4 text-teal-600 animate-pulse" />
              <span className="text-[11px] text-teal-600 font-bold uppercase tracking-wider">Certified Clean Lab</span>
            </div>
          </div>
        );

      case "admin": // HR Admin (06)
        return (
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50/50 p-6 rounded-2xl border border-amber-150 space-y-4">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">RELIABILITY METRICS</span>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-xl border border-amber-100 flex justify-between items-center">
                <span className="text-xs font-medium text-brand-dark">Legal Compliance</span>
                <span className="px-2 py-0.5 bg-emerald-50 text-[10px] text-emerald-700 font-bold uppercase rounded-md border border-emerald-200">100% Pass</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-amber-100 flex justify-between items-center">
                <span className="text-xs font-medium text-brand-dark">Personnel Audits</span>
                <span className="px-2 py-0.5 bg-amber-50 text-[10px] text-amber-700 font-bold uppercase rounded-md border border-amber-200">On Schedule</span>
              </div>
            </div>
          </div>
        );

      case "shield": // QA (07)
        return (
          <div className="bg-gradient-to-br from-rose-50 to-pink-50/50 p-6 rounded-2xl border border-rose-150 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 bg-rose-100 flex items-center justify-center rounded-2xl text-rose-600 shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-dark">Quality Assured Standard</div>
              <p className="text-xs text-brand-gray mt-1 max-w-xs">
                SOP adherence, strict visual, composition and seal audits for every batch produced.
              </p>
            </div>
          </div>
        );

      case "finance": // Internal Audit & Accounts (08)
        return (
          <div className="bg-gradient-to-br from-slate-100 to-gray-50 p-6 rounded-2xl border border-slate-250 space-y-3">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-widest">BUDGET GOVERNANCE</span>
            <div className="bg-white p-3 rounded-xl border border-slate-150 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-slate-600" />
                <span className="text-xs text-brand-dark font-medium">Compliance Audits</span>
              </div>
              <span className="text-xs font-mono text-emerald-600 font-bold">Compliant</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-slate-150 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-600" />
                <span className="text-xs text-brand-dark font-medium">Tax Operations</span>
                <span className="bg-slate-100 px-1 py-0.5 rounded text-[8px] text-brand-gray font-mono">FBR/PRA</span>
              </div>
              <span className="text-xs font-mono text-emerald-600 font-bold">Up to Date</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-150 pb-6">
        <div className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-brand-blue animate-pulse" />
          <span className="text-sm font-mono text-brand-gray">KOKAB CORE PILLARS &bull; {pillar.number} OF 08</span>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-gray-100 text-brand-gray rounded-md">
          {parseInt(pillar.number) + 3} / 26
        </div>
      </div>

      {/* Slide main split content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 my-auto py-8">
        
        {/* Left Side: Information */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-5xl md:text-6xl font-extrabold text-brand-blue/30 leading-none">
              {pillar.number}
            </span>
            <div>
              {pillar.arabicName && (
                <div className="text-right text-xs text-brand-blue font-semibold tracking-wider opacity-60">
                  {pillar.arabicName}
                </div>
              )}
              <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-blue uppercase tracking-tight">
                {pillar.name}
              </h2>
            </div>
          </div>

          <p className="text-brand-gray text-sm md:text-base leading-relaxed mb-8">
            {pillar.description}
          </p>

          <div className="space-y-3.5">
            <h4 className="text-[11px] font-mono tracking-wider font-bold text-brand-dark uppercase">
              Operational Protocols:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pillar.highlights.map((point, index) => (
                <div key={index} className="flex items-start gap-2.5 bg-gray-50/70 p-3 rounded-xl border border-gray-100 hover:bg-brand-blue/[0.02] hover:border-brand-blue/10 transition-colors">
                  <div className="bg-brand-blue/10 p-1 rounded-md text-brand-blue text-xs font-bold leading-none shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-xs text-brand-gray leading-tight font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Specialized visualizer */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          {renderVisual()}
        </div>
      </div>

      {/* Footer controls */}
      <div className="flex justify-between items-center border-t border-gray-150 pt-6">
        <button 
          onClick={onPrev}
          className="group flex items-center gap-2 text-brand-gray hover:text-brand-blue text-sm transition-colors cursor-pointer font-medium"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Previous Pillar
        </button>
        <button 
          onClick={onNext}
          className="group flex items-center gap-2 text-brand-blue font-display font-semibold hover:text-brand-light-blue text-sm transition-colors cursor-pointer"
        >
          Next Component
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// 6. Production Capacities Section
export const ProductionCapacitiesSlide: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState<'manufacturing' | 'packing'>('manufacturing');

  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-150 pb-6">
        <div className="flex items-center gap-2">
          <Layers className="w-6 h-6 text-brand-blue" />
          <span className="text-sm font-mono text-brand-gray">KOKAB CAPACITIES &bull; DETAILED NUMBERS</span>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-gray-100 text-brand-gray rounded-md">
          12 / 26
        </div>
      </div>

      {/* Content */}
      <div className="my-auto py-4">
        <div className="text-center md:text-left mb-6">
          <span className="text-xs font-mono tracking-widest text-brand-light-blue uppercase font-bold">
            High Scale Machinery Profile
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-brand-blue uppercase tracking-tight leading-none mt-1">
            PRODUCTION CAPACITIES
          </h2>
          <p className="text-brand-gray text-xs md:text-sm mt-1">
            Detailed asset list highlighting current capacities and forward planned upcoming industrial expansions.
          </p>
        </div>

        {/* Tab selector */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl max-w-md">
          <button
            onClick={() => setActiveTab('manufacturing')}
            className={`w-1/2 py-2.5 rounded-lg text-xs font-display font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              activeTab === 'manufacturing' 
                ? 'bg-brand-blue text-white shadow-md' 
                : 'text-brand-gray hover:text-brand-blue hover:bg-gray-50'
            }`}
          >
            MANUFACTURING SECTION
          </button>
          <button
            onClick={() => setActiveTab('packing')}
            className={`w-1/2 py-2.5 rounded-lg text-xs font-display font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              activeTab === 'packing' 
                ? 'bg-brand-blue text-white shadow-md' 
                : 'text-brand-gray hover:text-brand-blue hover:bg-gray-50'
            }`}
          >
            PACKING SECTION
          </button>
        </div>

        {/* Dynamic Table Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-inner">
          <div className="bg-brand-blue/5 border-b border-gray-200 px-6 py-4 flex justify-between items-center text-brand-dark">
            <span className="text-xs font-bold tracking-widest uppercase font-mono">
              {activeTab === 'manufacturing' ? 'Vessel Mixers & Emulsifiers' : 'Automated Production Lines'}
            </span>
            <span className="bg-brand-blue text-white text-[10px] font-mono px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">
              {activeTab === 'manufacturing' ? 'Active Formulation' : 'Active Seal Lines'}
            </span>
          </div>

          <div className="overflow-x-auto max-h-[35vh] overflow-y-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100/80 border-b border-gray-200 font-mono font-bold text-brand-gray uppercase tracking-wider sticky top-0 bg-gray-100">
                  <th className="px-6 py-3 text-center w-16">S.No</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3 text-center w-20">Qty</th>
                  <th className="px-6 py-3 text-right w-40">Operating Capacity</th>
                  <th className="px-6 py-3 text-center w-28">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(activeTab === 'manufacturing' ? MANUFACTURING_SECTION : PACKING_SECTION).map((item) => (
                  <tr 
                    key={item.id}
                    className={`hover:bg-white transition-colors ${
                      item.isUpcoming ? 'bg-amber-50/40 font-semibold' : ''
                    }`}
                  >
                    <td className="px-6 py-3.5 text-center font-mono opacity-65 font-bold">
                      {item.sn}
                    </td>
                    <td className="px-6 py-3.5 font-medium text-brand-dark">
                      {item.description}
                    </td>
                    <td className="px-6 py-3.5 text-center font-bold">
                      {item.qty}
                    </td>
                    <td className="px-6 py-3.5 text-right font-mono font-bold text-brand-blue">
                      {item.capacity}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      <span className={`inline-block text-[10px] uppercase font-bold font-mono tracking-wider px-2 py-0.5 rounded-md ${
                        item.isUpcoming 
                          ? 'bg-amber-100 text-amber-800 border border-amber-200 animate-pulse'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-250'
                      }`}>
                        {item.isUpcoming ? 'Upcoming' : 'Installed'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Footer controls */}
      <div className="flex justify-between items-center border-t border-gray-150 pt-6">
        <span className="text-xs font-mono text-brand-gray">HIGH PRESSURE PRODUCTION SPECIFICATIONS</span>
        <button 
          onClick={onNext}
          className="group flex items-center gap-2 text-brand-blue font-display font-semibold hover:text-brand-light-blue text-sm transition-colors cursor-pointer"
        >
          Check Warehouse Systems
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// 7. Warehouse Management
export const WarehouseSlide: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-150 pb-6">
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-brand-blue" />
          <span className="text-sm font-mono text-brand-gray">KOKAB STORAGE SYSTEMS &bull; PROFILE</span>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-gray-100 text-brand-gray rounded-md">
          16 / 26
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 my-auto py-8">
        
        {/* Left: Detailed Points */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-xs font-mono tracking-widest text-brand-light-blue uppercase font-bold">
            Precision Logistics & Warehousing
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-blue uppercase tracking-tight leading-none mt-1 mb-6">
            WAREHOUSE<br />
            MANAGEMENT
          </h2>

          <div className="space-y-3.5">
            {WAREHOUSE_HIGHLIGHTS.map((item, index) => {
              const isMotto = item.includes("ON TIME DELIVER");
              return (
                <div 
                  key={index}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-300 ${
                    isMotto 
                      ? 'bg-brand-blue text-white border-brand-blue shadow-lg font-bold scale-102 -translate-y-0.5' 
                      : 'bg-gray-50 text-brand-gray border-gray-150 hover:bg-brand-blue/[0.02] hover:border-brand-blue/15'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-mono font-bold shrink-0 shadow-xs ${
                    isMotto ? 'bg-white text-brand-blue' : 'bg-brand-blue/10 text-brand-blue'
                  }`}>
                    {index + 1}
                  </div>
                  <p className={isMotto ? 'text-sm' : 'text-xs md:text-sm leading-relaxed'}>
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Storage Stats visual blocks */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-6">
          <div className="bg-gradient-to-tr from-brand-blue to-indigo-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
            <span className="text-xs font-mono uppercase tracking-widest text-white/70 font-semibold">
              Storage Footprint
            </span>
            <div className="text-5xl md:text-6xl font-display font-bold mt-2 tracking-tight">
              5,000+
            </div>
            <div className="text-lg font-display text-white/90 font-medium tracking-wide">
              Pallets Capacity
            </div>
            <p className="text-xs text-white/75 mt-4 leading-relaxed">
              Equipped with high-volume racking, humidity controllers, and real-time scanning checkpoints to secure sensitive cosmetic ingredients.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
              <span className="text-xs font-mono text-brand-gray uppercase font-bold tracking-wider">ERP Software</span>
              <div className="text-xl font-display font-bold text-indigo-700 mt-2">Dynamics 360</div>
              <span className="text-[10px] text-brand-gray leading-tight mt-1">Sustains complete inventory audits</span>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between">
              <span className="text-xs font-mono text-brand-gray uppercase font-bold tracking-wider">Storage Env</span>
              <div className="text-xl font-display font-bold text-emerald-700 mt-2">Temp Sensitive</div>
              <span className="text-[10px] text-brand-gray leading-tight mt-1">Preserves chemical formulation integrity</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer controls */}
      <div className="flex justify-between items-center border-t border-gray-150 pt-6">
        <span className="text-xs font-mono text-brand-gray">RIVAJ SECURED LOGISTICS SYSTEM</span>
        <button 
          onClick={onNext}
          className="group flex items-center gap-2 text-brand-blue font-display font-semibold hover:text-brand-light-blue text-sm transition-colors cursor-pointer"
        >
          Check Certifications
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// 8. Certifications Slide
export const CertificationsSlide: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-150 pb-6">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6 text-brand-blue" />
          <span className="text-sm font-mono text-brand-gray">KOKAB COMPLIANCE &bull; AUDITS</span>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-gray-100 text-brand-gray rounded-md">
          17 / 26
        </div>
      </div>

      {/* Content */}
      <div className="my-auto py-8">
        <div className="text-center mb-12 max-w-xl mx-auto">
          <span className="text-xs font-mono tracking-widest text-brand-light-blue uppercase font-bold">
            Global Accreditations
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-brand-blue uppercase tracking-tight leading-none mt-1">
            CERTIFICATIONS
          </h2>
          <p className="text-brand-gray text-xs md:text-sm mt-3">
            We are strongly committed towards quality, safety, and sustainability. Together, these certifications reinforce our absolute dedication to superior consumer values.
          </p>
        </div>

        {/* Dynamic Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Badge 1: Pest Agency */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-brand-blue/30 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col items-center justify-between text-center min-h-[250px]">
            <div className="w-20 h-20 bg-indigo-50 border border-indigo-150 rounded-full flex items-center justify-center p-3 text-indigo-700">
              {/* Specialized pest-shield SVG representation */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M12 8v8"/>
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            
            <div className="mt-4">
              <h3 className="text-base font-display font-bold text-brand-dark">Pest Control Protocol</h3>
              <p className="text-xs text-brand-gray mt-2 leading-relaxed">
                Registered binding agreement with certified environmental biological defense agencies.
              </p>
            </div>
            <div className="mt-4 px-3 py-1 bg-indigo-50 text-[10px] uppercase font-mono tracking-wider font-bold rounded text-indigo-700">
              Certified Agreement
            </div>
          </div>

          {/* Badge 2: GMP standard */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-brand-blue/30 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col items-center justify-between text-center min-h-[250px] relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-emerald-500 text-white font-mono text-[8px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              Passed
            </div>
            <div className="w-20 h-20 bg-emerald-50 border border-emerald-150 rounded-full flex items-center justify-center p-3 text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="25" className="w-12 h-12 stroke-[2]">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-display font-bold text-brand-dark">GMP Audit Standard</h3>
              <p className="text-xs text-brand-gray mt-2 leading-relaxed">
                Fully compliant with Good Manufacturing Practice Audit criteria &bull; ISO 22716:2007.
              </p>
            </div>
            <div className="mt-4 px-3 py-1 bg-emerald-50 text-[10px] uppercase font-mono tracking-wider font-bold rounded text-emerald-700">
              ISO 22716:2007 REGISTERED
            </div>
          </div>

          {/* Badge 3: Incineration */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-brand-blue/30 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col items-center justify-between text-center min-h-[250px]">
            <div className="w-20 h-20 bg-amber-50 border border-amber-150 rounded-full flex items-center justify-center p-3 text-amber-700">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-display font-bold text-brand-dark">Hazardous Incineration</h3>
              <p className="text-xs text-brand-gray mt-2 leading-relaxed">
                Ecologically audited contracts ensuring safe incinerative disposal of hazardous wastes with third party compliance.
              </p>
            </div>
            <div className="mt-4 px-3 py-1 bg-amber-50 text-[10px] uppercase font-mono tracking-wider font-bold rounded text-amber-600">
              Hazard Waste Certified
            </div>
          </div>

        </div>
      </div>

      {/* Footer controls */}
      <div className="flex justify-between items-center border-t border-gray-150 pt-6">
        <span className="text-xs font-mono text-brand-gray">KOKAB ENVIRONMENT AND CHEMICAL HEALTH LAWS</span>
        <button 
          onClick={onNext}
          className="group flex items-center gap-2 text-brand-blue font-display font-semibold hover:text-brand-light-blue text-sm transition-colors cursor-pointer"
        >
          Wrap Up Portfolio
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

// 9. Thank You Slide
export const ThankYouSlide: React.FC<{ OnRestart: () => void }> = ({ OnRestart }) => {
  return (
    <div className="relative min-h-[85vh] flex flex-col justify-between p-8 md:p-16 bg-gradient-to-br from-brand-blue to-indigo-950 text-white rounded-3xl border border-gray-900 shadow-xl overflow-hidden text-center md:text-left">
      <div className="absolute inset-0 bg-white/[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-25 pointer-events-none" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-brand-light-blue/20 rounded-full filter blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-20 -left-25 w-80 h-80 bg-emerald-600/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Top logo */}
      <div className="flex justify-between items-center z-10 mx-auto md:mx-0">
        <div className="flex items-center gap-2 text-white">
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg text-brand-blue font-display font-bold text-2xl tracking-tighter">
            K
          </div>
          <div className="text-left">
            <div className="text-lg font-display font-bold tracking-tight">KOKAB</div>
            <div className="text-[9px] uppercase tracking-wider text-white/70">Industries</div>
          </div>
        </div>
      </div>

      {/* Main text centered */}
      <div className="my-auto py-12 z-10 max-w-2xl mx-auto text-center space-y-6">
        <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-mono uppercase tracking-widest rounded-full border border-white/10">
          CONCLUDING PORTFOLIO PRESENTATION
        </span>
        <h1 className="font-display font-bold text-6xl md:text-8xl tracking-tight text-white leading-none">
          THANK YOU
        </h1>
        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-md mx-auto">
          We appreciate your evaluation of Kokab Industries Pvt Ltd. We continue to design, refine, and deliver premium global beauty products.
        </p>

        <div className="flex justify-center gap-3 pt-4">
          <button
            onClick={OnRestart}
            className="flex items-center gap-2 bg-white text-brand-blue hover:bg-brand-silver px-6 py-2.5 rounded-full font-display font-semibold text-xs transition duration-200 cursor-pointer shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            Go to Cover Section
          </button>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 z-10">
        <span>© 2026 Kokab Industries Pvt Ltd. All Rights Reserved.</span>
        <span className="font-mono">RIVAJ BEAUTY PARTNER &bull; GLOBAL STANDARDS</span>
      </div>
    </div>
  );
};
