'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HorizontalScroll({ children }: { children: React.ReactNode }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children) || 6;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Calculate the x translation based on the number of slides
  const maxTranslate = `${-100 * ((totalSlides - 1) / totalSlides)}%`;
  const x = useTransform(scrollYProgress, [0, 1], ['0%', maxTranslate]);

  // Update currentSlide based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const maxIndex = totalSlides - 1;
      const index = Math.round(latest * maxIndex);
      if (index !== currentSlide) {
        setCurrentSlide(index);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, totalSlides, currentSlide]);

  const scrollToSlide = useCallback((index: number) => {
    if (!targetRef.current || typeof window === 'undefined') return;
    const maxIndex = totalSlides - 1;
    const clampedIndex = Math.max(0, Math.min(index, maxIndex));
    
    const elementTop = targetRef.current.offsetTop;
    const maxScroll = targetRef.current.scrollHeight - window.innerHeight;
    const targetScroll = elementTop + (maxScroll * (clampedIndex / maxIndex));
    
    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  }, [totalSlides]);

  // Keyboard navigation (Arrow keys / Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        scrollToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSlide(currentSlide - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, scrollToSlide]);

  return (
    <section ref={targetRef} style={{ height: `${totalSlides * 100}vh` }} className="relative bg-slate-50">
      <div className="sticky top-0 flex h-screen w-screen items-center overflow-hidden">
        <motion.div style={{ width: `${totalSlides * 100}vw`, x }} className="flex h-full">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="w-screen h-full shrink-0 flex-none overflow-hidden">
              {child}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full border border-slate-200/80 shadow-xl">
        <button
          onClick={() => scrollToSlide(currentSlide - 1)}
          disabled={currentSlide === 0}
          aria-label="Previous slide"
          className={`p-1.5 rounded-full transition-colors ${
            currentSlide === 0
              ? 'text-slate-300 cursor-not-allowed opacity-40'
              : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200 cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentSlide
                  ? 'w-8 bg-slate-900'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <div className="h-4 w-[1px] bg-slate-200 mx-1" />

        <span className="text-xs font-semibold text-slate-600 font-mono select-none min-w-[32px] text-center">
          {currentSlide + 1} / {totalSlides}
        </span>

        <button
          onClick={() => scrollToSlide(currentSlide + 1)}
          disabled={currentSlide === totalSlides - 1}
          aria-label="Next slide"
          className={`p-1.5 rounded-full transition-colors ${
            currentSlide === totalSlides - 1
              ? 'text-slate-300 cursor-not-allowed opacity-40'
              : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200 cursor-pointer'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
