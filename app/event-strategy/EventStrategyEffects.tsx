'use client';

import { useEffect } from 'react';

export default function EventStrategyEffects() {
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
    // EVENT TYPE CARDS — TILT EFFECT
    // -----------------------------------------------
    const eventTypeCards = document.querySelectorAll('.event-type-card');

    const handleCardMouseMove = function (this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      this.style.transform = `translateY(-6px) perspective(600px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
    };

    const handleCardMouseLeave = function (this: HTMLElement) {
      this.style.transform = '';
    };

    eventTypeCards.forEach((card) => {
      card.addEventListener('mousemove', handleCardMouseMove as EventListener);
      card.addEventListener('mouseleave', handleCardMouseLeave as EventListener);
    });

    // -----------------------------------------------
    // DELIVERABLE CARDS — GLOW ON HOVER
    // -----------------------------------------------
    const deliverableCards = document.querySelectorAll('.deliverable-card');

    const handleDeliverableMouseMove = function (this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200, 169, 81, 0.04) 0%, var(--bg-card) 60%)`;
    };

    const handleDeliverableMouseLeave = function (this: HTMLElement) {
      this.style.background = '';
    };

    deliverableCards.forEach((card) => {
      card.addEventListener('mousemove', handleDeliverableMouseMove as EventListener);
      card.addEventListener('mouseleave', handleDeliverableMouseLeave as EventListener);
    });

    // -----------------------------------------------
    // CLEANUP
    // -----------------------------------------------
    return () => {
      window.removeEventListener('scroll', handleParallaxScroll);

      eventTypeCards.forEach((card) => {
        card.removeEventListener('mousemove', handleCardMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleCardMouseLeave as EventListener);
      });

      deliverableCards.forEach((card) => {
        card.removeEventListener('mousemove', handleDeliverableMouseMove as EventListener);
        card.removeEventListener('mouseleave', handleDeliverableMouseLeave as EventListener);
      });
    };
  }, []);

  return null;
}
