'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const servicesLinks = [
  { href: '/revenue-audit', label: 'Revenue Audit' },
  { href: '/menu-engineering', label: 'Menu Engineering' },
  { href: '/event-strategy', label: 'Supra Event Strategy' },
  { href: '/ai-video-menus', label: 'AI Video Menus' },
  { href: '/services', label: 'All Services \u2192' },
];

const marketingLinks = [
  { href: '/local-seo', label: 'Local SEO & Google' },
  { href: '/social-media', label: 'Social Media' },
  { href: '/paid-advertising', label: 'Paid Advertising' },
  { href: '/marketing-services', label: 'All Marketing Services \u2192' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [marketingOpen, setMarketingOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLLIElement>(null);
  const marketingRef = useRef<HTMLLIElement>(null);

  const toggleNav = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  const closeNav = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMarketingOpen(false);
    document.body.style.overflow = '';
  }, []);

  const isActive = (href: string) => {
    return pathname === href;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (marketingRef.current && !marketingRef.current.contains(e.target as Node)) {
        setMarketingOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="nav" id="mainNav">
        <div className="nav-inner">
          <div className="nav-brand">
            <Link href="/">
              <div className="nav-brand-name">Tamada Group</div>
              <div className="nav-brand-tagline">
                The Georgian Restaurant Agency
              </div>
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link
                href="/about"
                className={isActive('/about') ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li
              className="nav-dropdown"
              ref={servicesRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`nav-dropdown-trigger${
                  ['/services', '/revenue-audit', '/menu-engineering', '/event-strategy', '/ai-video-menus'].includes(pathname)
                    ? ' active'
                    : ''
                }`}
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
              >
                Services <span className="nav-chevron">&#9662;</span>
              </button>
              {servicesOpen && (
                <div className="nav-dropdown-menu">
                  {servicesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={isActive(link.href) ? 'active' : ''}
                      onClick={() => setServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li
              className="nav-dropdown"
              ref={marketingRef}
              onMouseEnter={() => setMarketingOpen(true)}
              onMouseLeave={() => setMarketingOpen(false)}
            >
              <button
                className={`nav-dropdown-trigger${
                  ['/marketing-services', '/local-seo', '/social-media', '/paid-advertising'].includes(pathname)
                    ? ' active'
                    : ''
                }`}
                onClick={() => setMarketingOpen((prev) => !prev)}
                aria-expanded={marketingOpen}
              >
                Marketing <span className="nav-chevron">&#9662;</span>
              </button>
              {marketingOpen && (
                <div className="nav-dropdown-menu">
                  {marketingLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={isActive(link.href) ? 'active' : ''}
                      onClick={() => setMarketingOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link
                href="/ai-video-menus"
                className={isActive('/ai-video-menus') ? 'active' : ''}
              >
                AI Video
              </Link>
            </li>
            <li>
              <Link
                href="/results"
                className={isActive('/results') ? 'active' : ''}
              >
                Results
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-cta">
                Book Strategy Call
              </Link>
            </li>
          </ul>
          <button
            className={`nav-toggle${isOpen ? ' open' : ''}`}
            id="navToggle"
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-overlay${isOpen ? ' open' : ''}`} id="mobileOverlay">
        <Link href="/about" onClick={closeNav}>
          About
        </Link>

        <div className="mobile-section-label">Revenue Strategy</div>
        {servicesLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeNav}>
            {link.label}
          </Link>
        ))}

        <div className="mobile-section-label">Marketing</div>
        {marketingLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeNav}>
            {link.label}
          </Link>
        ))}

        <Link href="/ai-video-menus" onClick={closeNav}>
          AI Video
        </Link>
        <Link href="/results" onClick={closeNav}>
          Results
        </Link>
        <Link href="/contact" onClick={closeNav}>
          Book Strategy Call
        </Link>
      </div>
    </>
  );
}
