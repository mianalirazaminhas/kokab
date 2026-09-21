/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './components/Navigation';
import { 
  CoverSlide, 
  IntroSlide, 
  CategoriesSlide, 
  PillarsOverviewSlide, 
  PillarDetailSlide, 
  ProductionCapacitiesSlide, 
  WarehouseSlide, 
  CertificationsSlide, 
  ThankYouSlide 
} from './components/Slides';
import { PILLARS_DATA } from './data';
import { Sparkles, Info, Star, Compass } from 'lucide-react';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  // Navigation & Screen Modes
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'deck' | 'scroll'>('deck');
  
  // Total Slides Matrix:
  // index 0: Cover
  // index 1: Intro & Background
  // index 2: Categories
  // index 3: Pillars Overview
  // index 4 - 11: Pillars Details (8 pillars)
  // index 12: Production Capacities Section
  // index 13: Warehouse Management
  // index 14: Certifications
  // index 15: Thank You Concluding
  const totalSlides = 16;

  // Refs for element selectors & GSAP targeting
  const deckContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Swipe Gestures Tracking
  const touchStartXRef = useRef<number | null>(null);

  // Keyboard navigation & handlers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== 'deck') return; // only intercept keys in Slide Deck Mode
      
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, viewMode]);

  // Touch handlers for responsive swiping on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (viewMode !== 'deck') return;
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (viewMode !== 'deck' || touchStartXRef.current === null) return;
    const diff = touchStartXRef.current - e.touches[0].clientX;

    // Minimum swipe threshold 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      touchStartXRef.current = null; // reset
    }
  };

  // Deck Mode GSAP transition slide animations
  useEffect(() => {
    if (viewMode === 'deck' && deckContainerRef.current) {
      // Create a smooth entering layout reveal
      gsap.fromTo(
        deckContainerRef.current,
        { opacity: 0, x: 25, scale: 0.985 },
        { 
          opacity: 1, 
          x: 0, 
          scale: 1, 
          duration: 0.6, 
          ease: "power2.out",
          clearProps: "transform" 
        }
      );
    }
  }, [currentSlide, viewMode]);

  // Scroll Mode GSAP ScrollTrigger active bindings
  useEffect(() => {
    let ctx = gsap.context(() => {});

    if (viewMode === 'scroll' && scrollContainerRef.current) {
      // Find all vertical slide segments from the DOM
      const segments = scrollContainerRef.current.querySelectorAll('.scroll-slide-segment');
      
      ctx = gsap.context(() => {
        segments.forEach((segment) => {
          // Fade and Slide elements as they enter the browser viewport
          gsap.fromTo(
            segment.querySelectorAll('.animate-on-scroll'),
            { opacity: 0, y: 40, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: segment,
                start: "top 75%", // triggers when top of slide enters 75% depth of screen
                toggleActions: "play none none none"
              }
            }
          );

          // Add clean parallax floating background indicators
          gsap.fromTo(
            segment.querySelectorAll('.parallax-decor'),
            { y: -30 },
            {
              y: 30,
              ease: "none",
              scrollTrigger: {
                trigger: segment,
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
          );
        });
      }, scrollContainerRef);
    }

    // Clean up ScrollTriggers on viewMode toggles to prevent double memory layout leaks
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [viewMode]);

  // Handlers for slide increments
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  const jumpToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  // Dynamic slide renderer for Presentation Deck Mode
  const renderCurrentSlide = () => {
    if (currentSlide === 0) {
      return <CoverSlide onNext={nextSlide} />;
    }
    if (currentSlide === 1) {
      return <IntroSlide onNext={nextSlide} />;
    }
    if (currentSlide === 2) {
      return <CategoriesSlide onNext={nextSlide} />;
    }
    if (currentSlide === 3) {
      return (
        <PillarsOverviewSlide 
          onPillarSelect={(idx) => jumpToSlide(idx + 4)} 
          onNext={nextSlide} 
        />
      );
    }
    
    // Pillar details ranges (index 4 to 11 matches pillars 0 to 7)
    if (currentSlide >= 4 && currentSlide <= 11) {
      const pillarIndex = currentSlide - 4;
      const pillar = PILLARS_DATA[pillarIndex];
      return (
        <PillarDetailSlide 
          pillar={pillar} 
          activeIndex={pillarIndex}
          onPrev={prevSlide}
          onNext={nextSlide}
        />
      );
    }

    if (currentSlide === 12) {
      return <ProductionCapacitiesSlide onNext={nextSlide} />;
    }
    if (currentSlide === 13) {
      return <WarehouseSlide onNext={nextSlide} />;
    }
    if (currentSlide === 14) {
      return <CertificationsSlide onNext={nextSlide} />;
    }
    if (currentSlide === 15) {
      return <ThankYouSlide OnRestart={() => jumpToSlide(0)} />;
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      
      {/* Universal Sticky Header Navigation */}
      <Navigation 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
        viewMode={viewMode}
        onSetViewMode={(mode) => setViewMode(mode)}
        onJumpToSlide={jumpToSlide}
      />

      {/* Main Sandbox Section Screen Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 flex flex-col justify-center">
        
        {/* VIEW MODE 1: Classical Slide Deck Mode */}
        {viewMode === 'deck' && (
          <div 
            id="slide-deck-arena"
            ref={deckContainerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="w-full relative select-none"
          >
            {/* Display Active Slide */}
            {renderCurrentSlide()}

            {/* Float quick interactive slider indicator */}
            <div className="mt-4 flex justify-between items-center px-4">
              {/* Pagination text matching top-right details */}
              <div className="flex gap-1 items-center">
                <span className="text-xs font-mono font-bold text-brand-blue">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-brand-gray/60 font-mono">/</span>
                <span className="text-xs text-brand-gray/80 font-mono">
                  {totalSlides}
                </span>
              </div>

              {/* Progress Bar Indicator */}
              <div className="flex-1 mx-6 bg-gray-200/80 h-1.5 rounded-full overflow-hidden max-w-md hidden sm:block">
                <div 
                  className="bg-brand-blue h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                />
              </div>

              {/* Direct Arrows controls overlayed safely */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`p-2 rounded-xl border border-gray-200 bg-white shadow-xs transition-colors cursor-pointer ${
                    currentSlide === 0 
                      ? 'opacity-35 cursor-not-allowed' 
                      : 'hover:bg-brand-blue/5 text-brand-blue'
                  }`}
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === totalSlides - 1}
                  className={`p-2 rounded-xl border border-gray-200 bg-white shadow-xs transition-colors cursor-pointer ${
                    currentSlide === totalSlides - 1 
                      ? 'opacity-35 cursor-not-allowed' 
                      : 'hover:bg-brand-blue/5 text-brand-blue'
                  }`}
                  aria-label="Next Slide"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: Continuous GSAP Scroll-Triggered Portfolio Narrative */}
        {viewMode === 'scroll' && (
          <div 
            id="storytelling-scroll-vault"
            ref={scrollContainerRef}
            className="w-full space-y-16 py-8"
          >
            {/* Information Toast explaining Scroll mechanics */}
            <div className="flex justify-between items-center p-4 bg-brand-blue/10 border border-brand-blue/15 text-brand-blue text-xs rounded-2xl max-w-xl mx-auto">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
                <span>
                  <strong>Interactive GSAP Scroll Mode Active:</strong> Scroll down to trigger luxury fade releases.
                </span>
              </div>
              <button 
                onClick={() => setViewMode('deck')}
                className="font-bold underline cursor-pointer hover:text-brand-light-blue"
              >
                Switch to Slide Deck
              </button>
            </div>

            {/* Stack every page dynamically, wrapped in ScrollTrigger segment divisions */}
            <div className="scroll-slide-segment relative">
              <div className="animate-on-scroll">
                <CoverSlide onNext={() => setViewMode('deck')} />
              </div>
            </div>

            <div className="scroll-slide-segment relative">
              <div className="animate-on-scroll">
                <IntroSlide onNext={nextSlide} />
              </div>
            </div>

            <div className="scroll-slide-segment relative">
              <div className="animate-on-scroll">
                <CategoriesSlide onNext={nextSlide} />
              </div>
            </div>

            <div className="scroll-slide-segment relative">
              <div className="animate-on-scroll">
                <PillarsOverviewSlide onPillarSelect={(idx) => {}} onNext={nextSlide} />
              </div>
            </div>

            {/* All 8 pillars listed continuously */}
            {PILLARS_DATA.map((pillar, idx) => (
              <div key={pillar.id} className="scroll-slide-segment relative">
                <div className="animate-on-scroll">
                  <PillarDetailSlide 
                    pillar={pillar}
                    activeIndex={idx}
                    onPrev={() => {}}
                    onNext={() => {}}
                  />
                </div>
              </div>
            ))}

            <div className="scroll-slide-segment relative">
              <div className="animate-on-scroll">
                <ProductionCapacitiesSlide onNext={nextSlide} />
              </div>
            </div>

            <div className="scroll-slide-segment relative">
              <div className="animate-on-scroll">
                <WarehouseSlide onNext={nextSlide} />
              </div>
            </div>

            <div className="scroll-slide-segment relative">
              <div className="animate-on-scroll">
                <CertificationsSlide onNext={nextSlide} />
              </div>
            </div>

            <div className="scroll-slide-segment relative">
              <div className="animate-on-scroll">
                <ThankYouSlide OnRestart={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} />
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Floating Small Prompt warning and credits */}
      <footer className="py-6 border-t border-gray-200/50 text-center text-[10px] text-brand-gray/60 font-mono tracking-widest uppercase">
        Designed for Kokab Industries Pvt Ltd &bull; Rivaj Group Partnership &bull; Powered by Google AI Studio
      </footer>
    </div>
  );
}

// Low level Arrow helpers if needed for individual components
function ArrowLeft(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function ArrowRight(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}
