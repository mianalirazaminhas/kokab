/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Play, Layers, Compass, HelpCircle } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  viewMode: 'deck' | 'scroll';
  onSetViewMode: (mode: 'deck' | 'scroll') => void;
  onJumpToSlide: (index: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  viewMode,
  onSetViewMode,
  onJumpToSlide
}) => {
  // Helper to get name of corresponding slide index
  const getSlideName = (idx: number) => {
    if (idx === 0) return "Cover Screen";
    if (idx === 1) return "Background & Intro";
    if (idx === 2) return "Cosmetics Range";
    if (idx === 3) return "Eight Pillars Info";
    if (idx >= 4 && idx <= 11) return `Pillar 0${idx - 3} Detail`;
    if (idx === 12) return "Machinery Capacities";
    if (idx === 13) return "Warehouse Systems";
    if (idx === 14) return "Accredited Certifications";
    return "Thank You Concluding";
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200/80 px-4 md:px-8 py-4 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo and Brand Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-blue flex items-center justify-center rounded-xl shadow-md text-white font-display font-extrabold text-xl tracking-tighter">
            K
          </div>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-bold text-lg text-brand-blue tracking-tight">KOKAB</span>
              <span className="font-display font-medium text-xs text-brand-gray tracking-wide uppercase">INDUSTRIES</span>
            </div>
            <div className="text-[9px] text-brand-gray font-mono font-bold tracking-wider -mt-1 uppercase">
              Official Interactive Presentation &bull; Rivaj
            </div>
          </div>
        </div>

        {/* View Mode Switcher and Quick Navigation Jump */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-center md:justify-end">
          
          {/* Mode Badges */}
          <div className="flex items-center bg-gray-100 p-0.5 rounded-full border border-gray-250">
            <button
              onClick={() => onSetViewMode('deck')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-semibold transition-all duration-200 cursor-pointer ${
                viewMode === 'deck' 
                  ? 'bg-brand-blue text-white shadow-sm' 
                  : 'text-brand-gray hover:text-brand-blue'
              }`}
              title="Classic slide presentation with transition slides"
            >
              <Play className="w-3.5 h-3.5" />
              Interactive Deck
            </button>
            <button
              onClick={() => onSetViewMode('scroll')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-semibold transition-all duration-200 cursor-pointer ${
                viewMode === 'scroll' 
                  ? 'bg-brand-blue text-white shadow-sm' 
                  : 'text-brand-gray hover:text-brand-blue'
              }`}
              title="Continuous linear story reveal using GSAP ScrollTrigger timelines"
            >
              <Compass className="w-3.5 h-3.5" />
              GSAP Scroll mode
            </button>
          </div>

          {/* Quick jump slide dropdown list */}
          {viewMode === 'deck' && (
            <div className="flex items-center gap-2">
              <label htmlFor="slide-jump" className="text-[10px] font-mono uppercase text-brand-gray font-bold">
                Jump to:
              </label>
              <select
                id="slide-jump"
                value={currentSlide}
                onChange={(e) => onJumpToSlide(Number(e.target.value))}
                className="bg-gray-50 border border-gray-250 hover:bg-white text-xs font-display font-medium text-brand-dark px-3 py-1.5 rounded-lg focus:outline-none focus:border-brand-blue cursor-pointer transition-colors"
                aria-label="Select a slide to navigate to"
              >
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <option key={idx} value={idx}>
                    {idx + 1}. {getSlideName(idx)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Guidelines info popup indicator */}
          <div className="group relative">
            <button className="p-1.5 text-brand-gray hover:text-brand-blue rounded-lg hover:bg-gray-100 transition-colors cursor-help" aria-label="Help and keyboard shortcuts">
              <HelpCircle className="w-4.5 h-4.5" />
            </button>
            <div className="absolute right-0 top-full mt-2 w-64 p-4 bg-brand-dark text-white text-xs rounded-xl shadow-xl hidden group-hover:block z-50 pointer-events-none transition-all duration-200 border border-slate-700 leading-snug">
              <div className="font-bold border-b border-slate-700 pb-1.5 mb-1.5 text-brand-silver">
                Keyboard Navigation
              </div>
              <ul className="space-y-1 font-mono text-white/80">
                <li>&bull; <span className="text-amber-400">Right Arrow</span>/Space: Next slide</li>
                <li>&bull; <span className="text-amber-400">Left Arrow</span>: Previous slide</li>
                <li>&bull; Touch: Swipe left/right on mobile</li>
                <li>&bull; Scroll-Mode: Scroll smoothly down to watch GSAP slide reveals!</li>
              </ul>
            </div>
          </div>
          
        </div>

      </div>
    </header>
  );
};
