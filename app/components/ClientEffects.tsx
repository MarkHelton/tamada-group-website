'use client';

import { useEffect, useRef } from 'react';

export default function ClientEffects() {
  const grainRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // -----------------------------------------------
    // INTERSECTION OBSERVER — REVEAL ON SCROLL
    // -----------------------------------------------
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    document.querySelectorAll('.reveal').forEach((el) => {
      revealObserver.observe(el);
    });

    // -----------------------------------------------
    // STICKY NAV — TRANSPARENT TO DARK ON SCROLL
    // -----------------------------------------------
    const nav = document.getElementById('mainNav');

    const handleNavScroll = () => {
      if (!nav) return;
      if (window.scrollY > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // -----------------------------------------------
    // PROGRESS BAR
    // -----------------------------------------------
    const progressBar = progressRef.current;

    const handleProgressScroll = () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      progressBar.style.width = progress + '%';
    };

    window.addEventListener('scroll', handleProgressScroll, { passive: true });

    // -----------------------------------------------
    // CURSOR GLOW EFFECT
    // -----------------------------------------------
    const cursorGlow = cursorGlowRef.current;
    let mouseTimer: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorGlow) return;
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
      cursorGlow.classList.add('visible');

      clearTimeout(mouseTimer);
      mouseTimer = setTimeout(() => {
        cursorGlow.classList.remove('visible');
      }, 2000);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Hide cursor glow on touch devices
    if ('ontouchstart' in window && cursorGlow) {
      cursorGlow.style.display = 'none';
    }

    // -----------------------------------------------
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // -----------------------------------------------
    const handleAnchorClick = function (this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (!href) return;
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    // -----------------------------------------------
    // MAGNETIC BUTTON HOVER EFFECT
    // -----------------------------------------------
    const handleBtnMouseMove = function (this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      this.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    };

    const handleBtnMouseLeave = function (this: HTMLElement) {
      this.style.transform = '';
    };

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach((btn) => {
      btn.addEventListener(
        'mousemove',
        handleBtnMouseMove as EventListener
      );
      btn.addEventListener(
        'mouseleave',
        handleBtnMouseLeave as EventListener
      );
    });

    // -----------------------------------------------
    // STAT COUNTERS — ANIMATED COUNT UP
    // -----------------------------------------------
    function easeOutQuart(t: number) {
      return 1 - Math.pow(1 - t, 4);
    }

    function animateCounter(
      el: Element,
      target: number,
      duration = 2000,
      prefix = '',
      suffix = ''
    ) {
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

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const count = el.getAttribute('data-count');
            const target = el.getAttribute('data-target');

            if (target) {
              animateCounter(el, parseInt(target), 2500, '$');
            } else if (count) {
              animateCounter(el, parseInt(count), 2000);
            }

            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-count], [data-target]').forEach((el) => {
      counterObserver.observe(el);
    });

    // -----------------------------------------------
    // PROCESS LINE ANIMATION
    // -----------------------------------------------
    const processLineFill = document.getElementById('processLineFill');
    let processObserver: IntersectionObserver | null = null;
    if (processLineFill) {
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

      if (processLineFill.parentElement) {
        processObserver.observe(processLineFill.parentElement);
      }
    }

    // -----------------------------------------------
    // CLEANUP
    // -----------------------------------------------
    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      processObserver?.disconnect();

      window.removeEventListener('scroll', handleNavScroll);
      window.removeEventListener('scroll', handleProgressScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimer);

      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener(
          'click',
          handleAnchorClick as EventListener
        );
      });

      buttons.forEach((btn) => {
        btn.removeEventListener(
          'mousemove',
          handleBtnMouseMove as EventListener
        );
        btn.removeEventListener(
          'mouseleave',
          handleBtnMouseLeave as EventListener
        );
      });
    };
  }, []);

  return (
    <>
      {/* Grain texture overlay */}
      <div className="grain" ref={grainRef} />

      {/* Page progress bar */}
      <div className="progress-bar" id="progressBar" ref={progressRef} />

      {/* Cursor glow effect */}
      <div className="cursor-glow" id="cursorGlow" ref={cursorGlowRef} />
    </>
  );
}
