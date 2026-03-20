'use client';

import { useEffect } from 'react';

export default function AboutEffects() {
  useEffect(() => {
    // ═══════════════════════════════════════════
    // PARALLAX ELEMENTS ON SCROLL
    // ═══════════════════════════════════════════
    let ticking = false;

    function updateParallax() {
      // Parallax for philosophy card subtle shift
      const philCard = document.querySelector<HTMLElement>('.philosophy-card');
      if (philCard) {
        const rect = philCard.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (rect.top / window.innerHeight) * 20;
          philCard.style.transform = `translateY(${offset}px)`;
        }
      }

      // Parallax for team photo
      const teamPhoto = document.querySelector<HTMLElement>('.team-photo-wide img');
      if (teamPhoto) {
        const rect = teamPhoto.parentElement!.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = (rect.top / window.innerHeight) * 30;
          teamPhoto.style.transform = `translateY(${offset}px) scale(1.1)`;
        }
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // ═══════════════════════════════════════════
    // BIO IMAGE REVEAL — WIPE ANIMATION
    // ═══════════════════════════════════════════
    const bioImage = document.querySelector<HTMLElement>('.bio-image');
    let bioObserver: IntersectionObserver | null = null;
    if (bioImage) {
      bioImage.style.clipPath = 'inset(0 100% 0 0)';
      bioImage.style.transition =
        'clip-path 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, filter 0.6s ease';

      bioObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              bioImage.style.clipPath = 'inset(0 0% 0 0)';
              bioObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      bioObserver.observe(bioImage);
    }

    // ═══════════════════════════════════════════
    // PHILOSOPHY CARD — BORDER GLOW ANIMATION
    // ═══════════════════════════════════════════
    const philCard = document.querySelector<HTMLElement>('.philosophy-card');

    function philMouseMove(e: MouseEvent) {
      if (!philCard) return;
      const rect = philCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      philCard.style.borderColor = 'var(--gold)';
      philCard.style.boxShadow = '0 0 60px -20px rgba(200, 169, 81, 0.15)';
      philCard.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200, 169, 81, 0.03) 0%, var(--bg-card) 40%)`;
    }

    function philMouseLeave() {
      if (!philCard) return;
      philCard.style.borderColor = '';
      philCard.style.boxShadow = '';
      philCard.style.background = '';
    }

    if (philCard) {
      philCard.addEventListener('mousemove', philMouseMove as EventListener);
      philCard.addEventListener('mouseleave', philMouseLeave);
    }

    // ═══════════════════════════════════════════
    // TEAM CARD TILT EFFECT ON HOVER
    // ═══════════════════════════════════════════
    const teamCards = document.querySelectorAll<HTMLElement>('.team-card');

    function teamCardMouseMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      this.style.transform = `translateY(-8px) perspective(600px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
    }

    function teamCardMouseLeave(this: HTMLElement) {
      this.style.transform = '';
    }

    teamCards.forEach((card) => {
      card.addEventListener('mousemove', teamCardMouseMove as EventListener);
      card.addEventListener('mouseleave', teamCardMouseLeave as EventListener);
    });

    // ═══════════════════════════════════════════
    // VALUE CARDS — GLOW ON HOVER
    // ═══════════════════════════════════════════
    const valueCards = document.querySelectorAll<HTMLElement>('.value-card');

    function valueCardMouseMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(200, 169, 81, 0.04) 0%, var(--bg-card) 50%)`;
    }

    function valueCardMouseLeave(this: HTMLElement) {
      this.style.background = '';
    }

    valueCards.forEach((card) => {
      card.addEventListener('mousemove', valueCardMouseMove as EventListener);
      card.addEventListener('mouseleave', valueCardMouseLeave as EventListener);
    });

    // ═══════════════════════════════════════════
    // CLEANUP
    // ═══════════════════════════════════════════
    return () => {
      window.removeEventListener('scroll', onScroll);

      if (bioObserver) {
        bioObserver.disconnect();
      }

      if (philCard) {
        philCard.removeEventListener('mousemove', philMouseMove as EventListener);
        philCard.removeEventListener('mouseleave', philMouseLeave);
      }

      teamCards.forEach((card) => {
        card.removeEventListener('mousemove', teamCardMouseMove as EventListener);
        card.removeEventListener('mouseleave', teamCardMouseLeave as EventListener);
      });

      valueCards.forEach((card) => {
        card.removeEventListener('mousemove', valueCardMouseMove as EventListener);
        card.removeEventListener('mouseleave', valueCardMouseLeave as EventListener);
      });
    };
  }, []);

  return null;
}
