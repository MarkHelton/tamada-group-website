'use client';

import { useEffect } from 'react';

export default function AiVideoMenusEffects() {
  useEffect(() => {
    // =============================================
    // PARALLAX HERO BACKGROUND
    // =============================================
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

    function onScrollParallax() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScrollParallax, { passive: true });

    // =============================================
    // PROCESS LINE FILL — HORIZONTAL
    // =============================================
    const processLineFill = document.getElementById('processLineFill');
    let processObserver: IntersectionObserver | null = null;

    if (processLineFill && processLineFill.parentElement) {
      processObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              processLineFill.classList.add('animate');
              processObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      processObserver.observe(processLineFill.parentElement);
    }

    // =============================================
    // VIDEO THUMB CINEMATIC HOVER
    // =============================================
    const videoThumbs = document.querySelectorAll('.video-thumb');

    function handleThumbEnter(this: HTMLElement) {
      const img = this.querySelector('img') as HTMLImageElement | null;
      if (img) {
        img.style.transition = 'transform 8s ease, filter 0.6s ease';
        img.style.transform = 'scale(1.15)';
      }
    }

    function handleThumbLeave(this: HTMLElement) {
      const img = this.querySelector('img') as HTMLImageElement | null;
      if (img) {
        img.style.transition = 'transform 0.6s ease, filter 0.6s ease';
        img.style.transform = 'scale(1)';
      }
    }

    videoThumbs.forEach((thumb) => {
      thumb.addEventListener('mouseenter', handleThumbEnter as EventListener);
      thumb.addEventListener('mouseleave', handleThumbLeave as EventListener);
    });

    // =============================================
    // DEPLOY CARD TILT EFFECT
    // =============================================
    const deployCards = document.querySelectorAll('.deploy-card');

    function handleCardMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3;
      const rotateY = ((x - centerX) / centerX) * 3;
      this.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function handleCardLeave(this: HTMLElement) {
      this.style.transform = '';
      this.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    function handleCardEnter(this: HTMLElement) {
      this.style.transition = 'box-shadow 0.4s ease, border-color 0.4s ease';
    }

    deployCards.forEach((card) => {
      card.addEventListener('mousemove', handleCardMove as EventListener);
      card.addEventListener('mouseleave', handleCardLeave as EventListener);
      card.addEventListener('mouseenter', handleCardEnter as EventListener);
    });

    // =============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // =============================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    function handleAnchorClick(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        const offset = 100;
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }

    anchorLinks.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    // =============================================
    // CLEANUP
    // =============================================
    return () => {
      window.removeEventListener('scroll', onScrollParallax);

      if (processObserver) {
        processObserver.disconnect();
      }

      videoThumbs.forEach((thumb) => {
        thumb.removeEventListener('mouseenter', handleThumbEnter as EventListener);
        thumb.removeEventListener('mouseleave', handleThumbLeave as EventListener);
      });

      deployCards.forEach((card) => {
        card.removeEventListener('mousemove', handleCardMove as EventListener);
        card.removeEventListener('mouseleave', handleCardLeave as EventListener);
        card.removeEventListener('mouseenter', handleCardEnter as EventListener);
      });

      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
    };
  }, []);

  return null;
}
