'use client';

import { useEffect } from 'react';

export default function MenuEngineeringEffects() {
  useEffect(() => {
    // -----------------------------------------------
    // PARALLAX HERO BACKGROUND
    // -----------------------------------------------
    const heroBg = document.getElementById('heroBg');
    const hero = document.getElementById('hero');
    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      if (hero && heroBg && scrollY < hero.offsetHeight) {
        heroBg.style.transform = `translateY(${scrollY * 0.35}px) scale(1.1)`;
      }
      ticking = false;
    }

    const handleParallaxScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleParallaxScroll, { passive: true });

    // -----------------------------------------------
    // INSIGHT CARDS — STAGGERED ENTRANCE
    // -----------------------------------------------
    const insightsContainer = document.querySelector('.problem-insights');
    let cardObserver: IntersectionObserver | null = null;

    if (insightsContainer) {
      cardObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const cards = entry.target.querySelectorAll('.insight-card');
              cards.forEach((card, i) => {
                const el = card as HTMLElement;
                el.style.opacity = '0';
                el.style.transform = 'translateX(40px)';
                el.style.transition = `opacity 0.6s ease ${i * 200}ms, transform 0.6s ease ${i * 200}ms`;
                requestAnimationFrame(() => {
                  el.style.opacity = '1';
                  el.style.transform = 'translateX(0)';
                });
              });
              cardObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      cardObserver.observe(insightsContainer);
    }

    // -----------------------------------------------
    // COMPARISON COLUMNS — SLIDE IN ANIMATION
    // -----------------------------------------------
    const compGrid = document.querySelector('.comparison-grid');
    let compObserver: IntersectionObserver | null = null;

    if (compGrid) {
      compObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const cols = entry.target.querySelectorAll('.comparison-col');
              cols.forEach((col, i) => {
                const el = col as HTMLElement;
                el.style.opacity = '0';
                el.style.transform = i === 0 ? 'translateX(-40px)' : 'translateX(40px)';
                el.style.transition = `opacity 0.8s ease ${i * 300}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 300}ms`;
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateX(0)';
                  });
                });
              });
              compObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      compObserver.observe(compGrid);
    }

    // -----------------------------------------------
    // PROCESS STEPS — SEQUENTIAL REVEAL
    // -----------------------------------------------
    const processSteps = document.querySelectorAll('.process-step');
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            stepObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -60px 0px' }
    );

    processSteps.forEach((step, i) => {
      const el = step as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.7s ease ${i * 150}ms, transform 0.7s ease ${i * 150}ms`;
      stepObserver.observe(step);
    });

    // -----------------------------------------------
    // PARALLAX FLOATING ELEMENTS
    // -----------------------------------------------
    const handleSectionParallax = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const depth = (rect.top / window.innerHeight) * 30;
          (section as HTMLElement).style.setProperty('--parallax-y', depth + 'px');
        }
      });
    };

    window.addEventListener('scroll', handleSectionParallax, { passive: true });

    // -----------------------------------------------
    // CLEANUP
    // -----------------------------------------------
    return () => {
      window.removeEventListener('scroll', handleParallaxScroll);
      window.removeEventListener('scroll', handleSectionParallax);
      cardObserver?.disconnect();
      compObserver?.disconnect();
      stepObserver.disconnect();
    };
  }, []);

  return null;
}
