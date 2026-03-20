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
              Food &amp; Beverage Revenue Agency
            </p>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">
                in
              </a>
              <a href="mailto:lana@tamadagroup.com" aria-label="Email">
                &#9993;
              </a>
            </div>
          </div>
          <div className="footer-center">
            <div className="footer-locations">
              Las Vegas &middot; Miami &middot; Fort Lauderdale &middot; San
              Diego &middot; International
            </div>
            <div className="footer-tagline">
              Rooted in Georgian hospitality. Built for the world.
            </div>
          </div>
          <div className="footer-right">
            <Link href="/contact" className="btn-secondary">
              Book A Strategy Call
            </Link>
            <div className="footer-contact-info">
              <a href="mailto:lana@tamadagroup.com">lana@tamadagroup.com</a>
              <br />
              <a href="tel:+15550000000">+1 (555) 000-0000</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Tamada Group — Where Georgian Hospitality Meets AI-Powered Revenue
            Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
