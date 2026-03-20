'use client';

import { useEffect } from 'react';

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function animateCounter(el: HTMLElement, target: number, duration = 2000, prefix = '', suffix = '') {
  const start = performance.now();
  function update(now: number) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuart(progress);
    const current = Math.floor(eased * target);
    if (prefix === '$') {
      el.textContent = '$' + current.toLocaleString();
    } else {
      el.textContent = prefix + current + suffix;
    }
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export default function ResultsEffects() {
  useEffect(() => {
    // ═══════════════════════════════════════════
    // REVEAL OBSERVER — FADE IN ON SCROLL
    // ═══════════════════════════════════════════
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    // ═══════════════════════════════════════════
    // COUNTER OBSERVER — ANIMATE NUMBERS ON VIEW
    // ═══════════════════════════════════════════
    const counterEls = document.querySelectorAll<HTMLElement>('[data-count]');
    const targetEls = document.querySelectorAll<HTMLElement>('[data-target]');

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const countVal = el.getAttribute('data-count');
            const targetVal = el.getAttribute('data-target');
            const suffix = el.getAttribute('data-suffix') || '';
            const prefix = el.getAttribute('data-prefix') || '';

            if (countVal) {
              animateCounter(el, parseInt(countVal, 10), 2000, prefix, suffix);
            } else if (targetVal) {
              animateCounter(el, parseInt(targetVal, 10), 2500, prefix, suffix);
            }

            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    counterEls.forEach((el) => counterObserver.observe(el));
    targetEls.forEach((el) => counterObserver.observe(el));

    // ═══════════════════════════════════════════
    // CLEANUP
    // ═══════════════════════════════════════════
    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return null;
}
