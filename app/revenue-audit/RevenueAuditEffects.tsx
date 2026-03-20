'use client';

import { useEffect } from 'react';

export default function RevenueAuditEffects() {
  useEffect(() => {
    // -----------------------------------------------
    // PARALLAX HERO BACKGROUND
    // -----------------------------------------------
    const heroBg = document.getElementById('heroBg');
    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      const hero = document.getElementById('hero');
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
    // PARALLAX PROOF BACKGROUND
    // -----------------------------------------------
    const proofBg = document.querySelector<HTMLElement>('.proof-bg');

    const handleProofParallax = () => {
      if (!proofBg || !proofBg.parentElement) return;
      const rect = proofBg.parentElement.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      if (rect.top < viewHeight && rect.bottom > 0) {
        const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
        proofBg.style.transform = `translateY(${(progress - 0.5) * 80}px)`;
      }
    };

    window.addEventListener('scroll', handleProofParallax, { passive: true });

    // -----------------------------------------------
    // MAGNETIC BUTTON EFFECT
    // -----------------------------------------------
    const magneticWraps = document.querySelectorAll('.magnetic-wrap');

    const handleMagneticMouseMove = function (this: HTMLElement, e: MouseEvent) {
      const btn = this.querySelector<HTMLElement>('a, button');
      if (!btn) return;
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMagneticMouseLeave = function (this: HTMLElement) {
      const btn = this.querySelector<HTMLElement>('a, button');
      if (!btn) return;
      btn.style.transform = 'translate(0, 0)';
      btn.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => {
        btn.style.transition = '';
      }, 400);
    };

    magneticWraps.forEach((wrap) => {
      wrap.addEventListener('mousemove', handleMagneticMouseMove as EventListener);
      wrap.addEventListener('mouseleave', handleMagneticMouseLeave as EventListener);
    });

    // -----------------------------------------------
    // DELIVERABLE CARD TILT EFFECT ON HOVER
    // -----------------------------------------------
    const deliverableCards = document.querySelectorAll('.deliverable-card');

    const handleCardMouseMove = function (this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      this.style.transform = `translateY(-8px) rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
    };

    const handleCardMouseLeave = function (this: HTMLElement) {
      this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
      this.style.transition =
        'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease';
      setTimeout(() => {
        this.style.transition = '';
      }, 500);
    };

    deliverableCards.forEach((card) => {
      card.addEventListener('mousemove', handleCardMouseMove as EventListener);
      card.addEventListener('mouseleave', handleCardMouseLeave as EventListener);
    });

    // -----------------------------------------------
    // OBJECTION NUMBER PARALLAX
    // -----------------------------------------------
    const objectionNumbers = document.querySelectorAll<HTMLElement>('.objection-number');

    const handleObjectionParallax = () => {
      const viewHeight = window.innerHeight;
      objectionNumbers.forEach((num) => {
        const rect = num.getBoundingClientRect();
        if (rect.top < viewHeight && rect.bottom > 0) {
          const progress = (viewHeight - rect.top) / viewHeight;
          num.style.transform = `translateY(${(progress - 0.5) * -30}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleObjectionParallax, { passive: true });

    // -----------------------------------------------
    // CLEANUP
    // -----------------------------------------------
    return () => {
      window.removeEventListener('scroll', handleParallaxScroll);
      window.removeEventListener('scroll', handleProofParallax);
      window.removeEventListener('scroll', handleObjectionParallax);

      magneticWraps.forEach((wrap) => {
        wrap.removeEventListener('mousemove', handleMagneticMouseMove as EventListener);
        wrap.removeEventListener('mouseleave', handleMagneticMouseLeave as EventListener);
      });

      deliverableCards.forEach((card) => {
        card.removeEventListener('mousemove', handleCardMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleCardMouseLeave as EventListener);
      });
    };
  }, []);

  return null;
}
