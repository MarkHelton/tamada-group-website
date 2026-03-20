import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p>
              &copy; 2026 Tamada Group
              <br />
              The Georgian Restaurant Agency
            </p>
            <div className="footer-social">
              <a href="tel:+17027664304" aria-label="Phone">
                &#9742;
              </a>
            </div>
          </div>
          <div className="footer-center">
            <div className="footer-links-grid">
              <div className="footer-link-column">
                <div className="footer-link-heading">Revenue Strategy</div>
                <Link href="/revenue-audit">Revenue Audit</Link>
                <Link href="/menu-engineering">Menu Engineering</Link>
                <Link href="/event-strategy">Event Strategy</Link>
                <Link href="/ai-video-menus">AI Video Menus</Link>
              </div>
              <div className="footer-link-column">
                <div className="footer-link-heading">Marketing</div>
                <Link href="/local-seo">Local SEO &amp; Google</Link>
                <Link href="/social-media">Social Media</Link>
                <Link href="/paid-advertising">Paid Advertising</Link>
                <Link href="/marketing-services">All Marketing Services</Link>
              </div>
              <div className="footer-link-column">
                <div className="footer-link-heading">Company</div>
                <Link href="/about">About Lana</Link>
                <Link href="/results">Results</Link>
                <Link href="/services">All Services</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <div className="footer-tagline">
              Rooted in Georgian hospitality. Built for Georgian restaurants in America.
            </div>
          </div>
          <div className="footer-right">
            <Link href="/contact" className="btn-secondary">
              Book A Strategy Call
            </Link>
            <div className="footer-contact-info">
              <a href="tel:+17027664304">+1 (702) 766-4304</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Tamada Group — The Marketing Agency Built By and For Georgian Restaurants in America
          </p>
        </div>
      </div>
    </footer>
  );
}
