'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/about#team', label: 'Team' },
  { href: '/services', label: 'Services' },
  { href: '/ai-video-menus', label: 'AI Video' },
  { href: '/results', label: 'Results' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNav = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  const closeNav = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
  }, []);

  const isActive = (href: string) => {
    if (href.includes('#')) {
      return pathname === href.split('#')[0];
    }
    return pathname === href;
  };

  return (
    <>
      <nav className="nav" id="mainNav">
        <div className="nav-inner">
          <div className="nav-brand">
            <Link href="/">
              <div className="nav-brand-name">Tamada Group</div>
              <div className="nav-brand-tagline">
                Food &amp; Beverage Revenue Agency
              </div>
            </Link>
          </div>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive(link.href) ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeNav}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" onClick={closeNav}>
          Book Strategy Call
        </Link>
      </div>
    </>
  );
}
