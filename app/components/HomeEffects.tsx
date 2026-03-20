'use client';

import { useEffect, useRef, useCallback } from 'react';

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

function animateCounter(
  el: HTMLElement,
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

export function HomeEffects() {
  useEffect(() => {
    // Reveal on scroll
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

    // Parallax hero background
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

    function onScrollParallax() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScrollParallax, { passive: true });

    // Counter animations
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
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

    // Process line animation
    const processLineFill = document.getElementById('processLineFill');
    let processObserverInstance: IntersectionObserver | null = null;
    if (processLineFill) {
      processObserverInstance = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              processLineFill.classList.add('animate');
              processObserverInstance?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      if (processLineFill.parentElement) {
        processObserverInstance.observe(processLineFill.parentElement);
      }
    }

    // Smooth scroll for anchor links
    function handleAnchorClick(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    // Magnetic button hover effect
    function handleBtnMouseMove(this: HTMLElement, e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      this.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    }

    function handleBtnMouseLeave(this: HTMLElement) {
      this.style.transform = '';
    }

    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach((btn) => {
      btn.addEventListener('mousemove', handleBtnMouseMove as EventListener);
      btn.addEventListener('mouseleave', handleBtnMouseLeave as EventListener);
    });

    // Cleanup
    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      processObserverInstance?.disconnect();
      window.removeEventListener('scroll', onScrollParallax);
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
      buttons.forEach((btn) => {
        btn.removeEventListener('mousemove', handleBtnMouseMove as EventListener);
        btn.removeEventListener('mouseleave', handleBtnMouseLeave as EventListener);
      });
    };
  }, []);

  return null;
}

export function RevenueCalculator() {
  const formRef = useRef<HTMLFormElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const totalRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const aovRef = useRef<HTMLDivElement>(null);
  const eventRef = useRef<HTMLDivElement>(null);

  const calculateRevenue = useCallback(() => {
    const monthlyRevenue =
      parseFloat(
        (document.getElementById('monthlyRevenue') as HTMLInputElement)?.value
      ) || 0;
    const seatCount =
      parseFloat(
        (document.getElementById('seatCount') as HTMLInputElement)?.value
      ) || 0;
    const avgCheck =
      parseFloat(
        (document.getElementById('avgCheck') as HTMLInputElement)?.value
      ) || 0;
    const monthlyEvents =
      parseFloat(
        (document.getElementById('monthlyEvents') as HTMLInputElement)?.value
      ) || 0;
    const menuReviewed = (
      document.getElementById('menuReviewed') as HTMLSelectElement
    )?.value;

    if (monthlyRevenue === 0 && seatCount === 0) return;

    let menuOpportunity = monthlyRevenue * 12 * 0.12;
    let aovOpportunity = seatCount * avgCheck * 0.15 * 250;
    let eventOpportunity = monthlyEvents * 12 * avgCheck * seatCount * 0.08;

    if (menuReviewed === '3-5') {
      menuOpportunity *= 1.3;
    } else if (menuReviewed === '5+') {
      menuOpportunity *= 1.6;
    }

    let total = menuOpportunity + aovOpportunity + eventOpportunity;
    if (total > 500000) total = 500000;

    // Show results with loading state
    const resultsDiv = resultsRef.current;
    const loadingDiv = loadingRef.current;
    const innerDiv = innerRef.current;

    if (resultsDiv) resultsDiv.classList.add('show');
    if (loadingDiv) loadingDiv.style.display = 'block';
    if (innerDiv) innerDiv.style.display = 'none';

    // Smooth scroll to results
    resultsDiv?.scrollIntoView({ behavior: 'smooth', block: 'center' });

    setTimeout(() => {
      if (loadingDiv) loadingDiv.style.display = 'none';
      if (innerDiv) innerDiv.style.display = 'block';

      // Animate the total
      if (totalRef.current) {
        animateCounter(totalRef.current, Math.round(total), 2500, '$');
      }

      if (menuRef.current) {
        menuRef.current.textContent =
          '$' + Math.round(menuOpportunity).toLocaleString();
      }
      if (aovRef.current) {
        aovRef.current.textContent =
          '$' + Math.round(aovOpportunity).toLocaleString();
      }
      if (eventRef.current) {
        eventRef.current.textContent =
          '$' + Math.round(eventOpportunity).toLocaleString();
      }
    }, 1500);
  }, []);

  return (
    <>
      <form
        className="calc-form reveal"
        id="calcForm"
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="calc-field">
          <label htmlFor="monthlyRevenue">Monthly Revenue ($)</label>
          <input
            type="number"
            id="monthlyRevenue"
            placeholder="e.g. 150000"
            min="0"
          />
        </div>
        <div className="calc-field">
          <label htmlFor="seatCount">Seat Count</label>
          <input
            type="number"
            id="seatCount"
            placeholder="e.g. 120"
            min="0"
          />
        </div>
        <div className="calc-field">
          <label htmlFor="avgCheck">Average Check Per Guest ($)</label>
          <input
            type="number"
            id="avgCheck"
            placeholder="e.g. 65"
            min="0"
          />
        </div>
        <div className="calc-field">
          <label htmlFor="monthlyEvents">Monthly Private Events</label>
          <input
            type="number"
            id="monthlyEvents"
            placeholder="e.g. 4"
            min="0"
          />
        </div>
        <div className="calc-field full-width">
          <label htmlFor="menuReviewed">
            When Was Your Menu Last Reviewed?
          </label>
          <select id="menuReviewed" defaultValue="">
            <option value="" disabled>
              Select one&hellip;
            </option>
            <option value="recent">Within the last 12 months</option>
            <option value="1-2">1&ndash;2 years ago</option>
            <option value="3-5">3&ndash;5 years ago</option>
            <option value="5+">More than 5 years / Never</option>
            <option value="unsure">Not sure</option>
          </select>
        </div>
        <div className="calc-submit">
          <button
            type="button"
            className="calc-btn"
            id="calcBtn"
            onClick={calculateRevenue}
          >
            Calculate My Revenue Opportunity
          </button>
        </div>
      </form>

      <div className="calc-results" id="calcResults" ref={resultsRef}>
        <div id="calcLoading" className="calc-loading" ref={loadingRef}>
          Analyzing your operation&hellip;
        </div>
        <div id="calcResultsInner" style={{ display: 'none' }} ref={innerRef}>
          <div className="calc-total-label">
            Your Estimated Annual Revenue Opportunity
          </div>
          <div
            className="calc-total-value"
            id="calcTotal"
            ref={totalRef}
          >
            $0
          </div>
          <div className="calc-breakdowns">
            <div className="calc-breakdown">
              <div
                className="calc-breakdown-value"
                id="calcMenu"
                ref={menuRef}
              >
                $0
              </div>
              <div className="calc-breakdown-label">Menu Optimization</div>
            </div>
            <div className="calc-breakdown">
              <div
                className="calc-breakdown-value"
                id="calcAOV"
                ref={aovRef}
              >
                $0
              </div>
              <div className="calc-breakdown-label">
                Average Check Increase
              </div>
            </div>
            <div className="calc-breakdown">
              <div
                className="calc-breakdown-value"
                id="calcEvent"
                ref={eventRef}
              >
                $0
              </div>
              <div className="calc-breakdown-label">Event Revenue</div>
            </div>
          </div>
          <p className="calc-disclaimer">
            Estimates based on industry benchmarks from AI menu engineering
            research, Toast 2025 Restaurant Technology Report, and Tamada
            Group&apos;s operational methodology. Actual results vary by
            operation.
          </p>
          <a href="/contact" className="btn-primary" style={{ marginTop: '32px' }}>
            Book A Free Strategy Session
          </a>
        </div>
      </div>
    </>
  );
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const submitContactForm = useCallback(() => {
    const name = (document.getElementById('contactName') as HTMLInputElement)
      ?.value;
    const email = (document.getElementById('contactEmail') as HTMLInputElement)
      ?.value;

    if (!name || !email) {
      alert('Please fill in at least your name and email.');
      return;
    }

    if (formRef.current) formRef.current.style.display = 'none';
    if (successRef.current) successRef.current.classList.add('show');
  }, []);

  return (
    <>
      <form
        className="contact-form"
        id="contactForm"
        ref={formRef}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-field">
          <label htmlFor="contactName">Your Name</label>
          <input type="text" id="contactName" placeholder="Full name" />
        </div>
        <div className="form-field">
          <label htmlFor="contactProperty">Restaurant / Property</label>
          <input
            type="text"
            id="contactProperty"
            placeholder="Property name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contactEmail">Email</label>
          <input
            type="email"
            id="contactEmail"
            placeholder="your@email.com"
          />
        </div>
        <div className="form-field">
          <label htmlFor="contactPhone">Phone (Optional)</label>
          <input
            type="tel"
            id="contactPhone"
            placeholder="+1 (555) 000-0000"
          />
        </div>
        <div className="form-field full-width">
          <label htmlFor="contactRevenue">Annual Revenue Range</label>
          <select id="contactRevenue" defaultValue="">
            <option value="" disabled>
              Select range&hellip;
            </option>
            <option value="under-1m">Under $1M</option>
            <option value="1-2m">$1M &ndash; $2M</option>
            <option value="2-5m">$2M &ndash; $5M</option>
            <option value="5m+">$5M+</option>
          </select>
        </div>
        <div className="form-field full-width">
          <label htmlFor="contactChallenge">
            What&apos;s Your Biggest Challenge Right Now?
          </label>
          <textarea
            id="contactChallenge"
            rows={4}
            placeholder="Tell us about your operation and what you're working on&hellip;"
          ></textarea>
        </div>
        <button
          type="button"
          className="form-submit-btn"
          onClick={submitContactForm}
        >
          Send My Details &mdash; I&apos;m Ready To Find My Hidden Revenue
        </button>
      </form>

      <div className="form-success" id="formSuccess" ref={successRef}>
        <p>
          Thank you. I&apos;ve received your details and will be in touch within
          24 hours.
          <br />
          <br />
          &mdash; Lana
        </p>
      </div>
    </>
  );
}
