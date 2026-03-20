'use client';

import { useEffect } from 'react';

export default function ContactEffects() {
  useEffect(() => {
    // ═══════════════════════════════════════════
    // INTERSECTION OBSERVER FOR .reveal ELEMENTS
    // ═══════════════════════════════════════════
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    // ═══════════════════════════════════════════
    // CLEANUP
    // ═══════════════════════════════════════════
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
