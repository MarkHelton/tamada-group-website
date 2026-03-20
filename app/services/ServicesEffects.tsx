'use client';

import { useEffect } from 'react';

export default function ServicesEffects() {
  useEffect(() => {
    // =======================================
    // HERO HEADLINE - WORD-BY-WORD ANIMATION
    // =======================================
    const heroHeadline = document.getElementById('heroHeadline');
    if (heroHeadline) {
      const text = heroHeadline.textContent?.trim() || '';
      heroHeadline.innerHTML = text
        .split(' ')
        .map(
          (word, i) =>
            `<span class="word" style="animation-delay: ${0.4 + i * 0.08}s">${word}</span>`
        )
        .join(' ');
    }

    // =======================================
    // INTERSECTION OBSERVER - REVEAL ON SCROLL
    // =======================================
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

    // =======================================
    // SERVICE CARD - PARALLAX TILT ON HOVER
    // =======================================
    const cards = document.querySelectorAll<HTMLElement>('.service-card');

    const cardMouseMoveHandlers: Array<(e: MouseEvent) => void> = [];
    const cardMouseLeaveHandlers: Array<() => void> = [];
    const cardMouseEnterHandlers: Array<() => void> = [];

    cards.forEach((card, idx) => {
      const moveHandler = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * -6;
        const rotateY = (x - 0.5) * 6;
        card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };

      const leaveHandler = () => {
        card.style.transform = '';
        card.style.transition = 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      };

      const enterHandler = () => {
        card.style.transition = 'all 0.1s ease';
      };

      cardMouseMoveHandlers[idx] = moveHandler;
      cardMouseLeaveHandlers[idx] = leaveHandler;
      cardMouseEnterHandlers[idx] = enterHandler;

      card.addEventListener('mousemove', moveHandler);
      card.addEventListener('mouseleave', leaveHandler);
      card.addEventListener('mouseenter', enterHandler);
    });

    // =======================================
    // STAT COUNTER ANIMATION
    // =======================================
    function easeOutQuart(t: number) {
      return 1 - Math.pow(1 - t, 4);
    }

    function animateCounter(
      el: Element,
      target: number,
      duration = 2000,
      suffix = ''
    ) {
      const start = performance.now();

      function update(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutQuart(progress);
        const current = Math.floor(eased * target);
        el.textContent = current + suffix;

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
            const suffix = el.getAttribute('data-suffix') || '';

            if (count) {
              animateCounter(el, parseInt(count), 2000, suffix);
            }

            counterObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('[data-count]').forEach((el) => {
      counterObserver.observe(el);
    });

    // =======================================
    // OBJECTION ITEMS - PROGRESSIVE REVEAL
    // =======================================
    const objectionItems = document.querySelectorAll('.objection-item');
    const objectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const answer = entry.target.querySelector('.objection-answer');
            if (answer) {
              const paragraphs = answer.querySelectorAll<HTMLElement>(
                'p, .answer-highlight'
              );
              paragraphs.forEach((p, i) => {
                p.style.opacity = '0';
                p.style.transform = 'translateY(20px)';
                p.style.transition = `opacity 0.6s ease ${0.2 + i * 0.15}s, transform 0.6s ease ${0.2 + i * 0.15}s`;
                requestAnimationFrame(() => {
                  p.style.opacity = '';
                  p.style.transform = '';
                });
              });
            }
            objectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    objectionItems.forEach((item) => {
      objectionObserver.observe(item);
    });

    // =======================================
    // SECTION PARALLAX - HERO BACKGROUND
    // =======================================
    let parallaxTicking = false;

    function updateSectionParallax() {
      const scrollY = window.scrollY;
      const hero = document.getElementById('hero');
      if (hero && scrollY < hero.offsetHeight) {
        const offset = scrollY * 0.15;
        hero.style.backgroundPositionY = offset + 'px';
      }
      parallaxTicking = false;
    }

    const parallaxHandler = () => {
      if (!parallaxTicking) {
        requestAnimationFrame(updateSectionParallax);
        parallaxTicking = true;
      }
    };

    window.addEventListener('scroll', parallaxHandler, { passive: true });

    // =======================================
    // MAGNETIC BUTTON HOVER EFFECT
    // =======================================
    const magneticBtns = document.querySelectorAll<HTMLElement>(
      '.btn-primary, .btn-secondary, .service-card-link'
    );

    const btnMoveHandlers: Array<(e: MouseEvent) => void> = [];
    const btnLeaveHandlers: Array<() => void> = [];

    magneticBtns.forEach((btn, idx) => {
      const moveHandler = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      };

      const leaveHandler = () => {
        btn.style.transform = '';
      };

      btnMoveHandlers[idx] = moveHandler;
      btnLeaveHandlers[idx] = leaveHandler;

      btn.addEventListener('mousemove', moveHandler);
      btn.addEventListener('mouseleave', leaveHandler);
    });

    // =======================================
    // CLEANUP
    // =======================================
    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      objectionObserver.disconnect();
      window.removeEventListener('scroll', parallaxHandler);

      cards.forEach((card, idx) => {
        card.removeEventListener('mousemove', cardMouseMoveHandlers[idx]);
        card.removeEventListener('mouseleave', cardMouseLeaveHandlers[idx]);
        card.removeEventListener('mouseenter', cardMouseEnterHandlers[idx]);
      });

      magneticBtns.forEach((btn, idx) => {
        btn.removeEventListener('mousemove', btnMoveHandlers[idx]);
        btn.removeEventListener('mouseleave', btnLeaveHandlers[idx]);
      });
    };
  }, []);

  return null;
}
