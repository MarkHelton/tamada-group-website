import type { Metadata } from 'next';
import Link from 'next/link';
import MarketingServicesEffects from './MarketingServicesEffects';

export const metadata: Metadata = {
  title: 'Georgian Restaurant Marketing Agency | Tamada Group',
  description:
    'Full-service marketing agency built exclusively for Georgian restaurants worldwide. Local SEO, social media, paid ads, reputation management, and more.',
  keywords:
    'Georgian restaurant marketing agency, restaurant marketing agency, F&B marketing agency',
};

export default function MarketingServicesPage() {
  return (
    <>
      <MarketingServicesEffects />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-label">Marketing Agency &mdash; Tamada Group</div>

          <h1 className="hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>We</span>{' '}
            <span className="word" style={{ animationDelay: '0.48s' }}>Start</span>{' '}
            <span className="word" style={{ animationDelay: '0.56s' }}>By</span>{' '}
            <span className="word" style={{ animationDelay: '0.64s' }}>Finding</span>{' '}
            <span className="word" style={{ animationDelay: '0.72s' }}>Your</span>{' '}
            <span className="word" style={{ animationDelay: '0.80s' }}>Hidden</span>{' '}
            <span className="word" style={{ animationDelay: '0.88s' }}>Revenue.</span>
            <br />
            <span className="word" style={{ animationDelay: '0.96s' }}>Then</span>{' '}
            <span className="word" style={{ animationDelay: '1.04s' }}>We</span>{' '}
            <span className="word" style={{ animationDelay: '1.12s' }}>Build</span>{' '}
            <span className="word" style={{ animationDelay: '1.20s' }}>The</span>{' '}
            <span className="word" style={{ animationDelay: '1.28s' }}>Marketing</span>{' '}
            <span className="word" style={{ animationDelay: '1.36s' }}>Engine</span>{' '}
            <span className="word" style={{ animationDelay: '1.44s' }}>That</span>{' '}
            <span className="word" style={{ animationDelay: '1.52s' }}>Grows</span>{' '}
            <span className="word" style={{ animationDelay: '1.60s' }}>It.</span>
          </h1>

          <div className="hero-gold-line" />

          <p className="hero-subheadline">
            A full-service marketing agency built exclusively for Georgian restaurants worldwide &mdash; by the team that already understands your revenue, your menu, and your guests.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Get A Free Marketing Audit
            </Link>
            <a href="#services" className="btn-secondary">
              See All Services
            </a>
          </div>
        </div>

        {/* Floating accents */}
        <div className="hero-accent hero-accent-1"></div>
        <div className="hero-accent hero-accent-2"></div>
        <div className="hero-accent hero-accent-3"></div>
      </section>

      {/* ═══════════════════════════════════════════
           TWO-TIER APPROACH
           ═══════════════════════════════════════════ */}
      <section className="section" id="approach">
        <div className="container">
          <div className="section-label reveal">Our Approach</div>
          <h2 className="section-headline reveal">
            Two tiers. One goal: fill your restaurant
            <br />
            and make every seat more profitable.
          </h2>
          <p className="section-subheadline reveal">
            Most agencies skip straight to ads. We start with the foundation.
          </p>

          <div className="services-cards">
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">Tier 1</div>
              <div className="service-card-tag">Foundation</div>
              <h3 className="service-card-name">Revenue Strategy</h3>
              <div className="service-card-desc">
                <p>
                  Before we spend a dollar on marketing, we make sure your operation is ready to convert the traffic we send you. This is where we audit your numbers, engineer your menu for maximum margin, build your event revenue system, and create AI video content that sells your highest-profit dishes.
                </p>
                <p>
                  <strong>Includes:</strong> Revenue Audit, AI Menu Engineering, Event &amp; F&amp;B Revenue Strategy, AI Video Menu Production.
                </p>
              </div>
              <Link href="/services" className="service-card-link">
                Explore Tier 1 Services <span className="arrow">&rarr;</span>
              </Link>
            </div>

            <div className="service-card reveal stagger-2">
              <div className="service-card-number">Tier 2</div>
              <div className="service-card-tag">Growth Engine</div>
              <h3 className="service-card-name">Marketing Agency</h3>
              <div className="service-card-desc">
                <p>
                  Once the foundation is set, we turn on the engine. Ongoing monthly marketing services designed to drive new guests through your door and keep them coming back. Every campaign is built on the revenue intelligence we gathered in Tier 1 &mdash; so every dollar we spend on marketing is informed by real operational data.
                </p>
                <p>
                  <strong>Includes:</strong> Local SEO, Social Media, Paid Advertising, Reputation Management, Email &amp; SMS, Website Design, Content Creation, Brand Development.
                </p>
              </div>
              <a href="#services" className="service-card-link">
                See All Marketing Services <span className="arrow">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           WHY WE ARE DIFFERENT
           ═══════════════════════════════════════════ */}
      <section className="section" id="difference">
        <div className="container">
          <div className="section-label reveal">Why Tamada Group</div>
          <h2 className="section-headline reveal">
            We are not a generic marketing agency
            <br />
            that happens to work with restaurants.
          </h2>
          <div className="reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p className="section-subheadline" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              Most marketing agencies don&apos;t understand Georgian restaurants. They&apos;ll post generic food photos, run the same ad they run for every other restaurant, and hand you a report full of vanity metrics. Tamada Group is different. We started as revenue strategists &mdash; which means we understand your menu, your events, your cost structure, and your guest behavior before we spend a dollar on marketing.
            </p>
            <p className="section-subheadline" style={{ textAlign: 'left' }}>
              That is the advantage. When your marketing agency already knows which menu items have the highest margin, which dayparts are underperforming, and which guest segments drive the most lifetime value &mdash; every campaign is sharper, every ad is smarter, and every dollar works harder.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           MARKETING SERVICE CARDS
           ═══════════════════════════════════════════ */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-label reveal">Tier 2: Marketing Services</div>
          <h2 className="section-headline reveal">
            Eight services. One integrated engine.
          </h2>
          <p className="section-subheadline reveal">
            Each service is available individually or as part of a monthly retainer. All are built specifically for Georgian restaurants.
          </p>

          <div className="services-cards">
            {/* Card 1: Local SEO */}
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">01</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <div className="service-card-tag">Search &amp; Discovery</div>
              <h3 className="service-card-name">Local SEO &amp; Google Optimization</h3>
              <div className="service-card-desc">
                <p>
                  &ldquo;Georgian restaurant near me&rdquo; is a low-competition, high-intent search. In most American cities, there are only one or two Georgian restaurants &mdash; which means with proper optimization, you can own the top position on Google Maps and Search without competing against hundreds of listings. We optimize your Google Business Profile, build local citations, manage your review strategy, and ensure you appear in AI-powered search results.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">Top 3</div>
                <div className="service-card-stat-text">
                  Google Maps position = 30&ndash;70% more walk-ins for restaurants
                </div>
              </div>
              <Link href="/local-seo" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 2: Social Media */}
            <div className="service-card reveal stagger-2">
              <div className="service-card-number">02</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </div>
              <div className="service-card-tag">Content &amp; Community</div>
              <h3 className="service-card-name">Social Media Management</h3>
              <div className="service-card-desc">
                <p>
                  Georgian food is inherently viral &mdash; the khachapuri cheese pull, khinkali being folded by hand, the theatrical chacha pour at a supra table. We manage your Instagram, TikTok, and Facebook with content that speaks to both the Georgian diaspora who misses home and the American foodie discovering your cuisine for the first time.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">2 Audiences</div>
                <div className="service-card-stat-text">
                  Georgian diaspora + American foodies &mdash; each requires different content strategy
                </div>
              </div>
              <Link href="/social-media" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 3: Paid Advertising */}
            <div className="service-card reveal stagger-3">
              <div className="service-card-number">03</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="service-card-tag">Paid Growth</div>
              <h3 className="service-card-name">Paid Advertising (Google &amp; Meta)</h3>
              <div className="service-card-desc">
                <p>
                  When you need to fill tables fast, paid ads are the accelerator. We run Google Search and Maps ads targeting high-intent local searches, and Meta ads on Facebook and Instagram targeting Georgian and Eastern European diaspora communities, American food enthusiasts, and event-driven audiences looking for unique dining experiences like supra dinners.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">Targeted</div>
                <div className="service-card-stat-text">
                  Diaspora communities, foodies, and event seekers &mdash; not generic restaurant audiences
                </div>
              </div>
              <Link href="/paid-advertising" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 4: Reputation Management */}
            <div className="service-card reveal stagger-4">
              <div className="service-card-number">04</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="service-card-tag">Trust &amp; Reviews</div>
              <h3 className="service-card-name">Reputation Management</h3>
              <div className="service-card-desc">
                <p>
                  For a cuisine many Americans are trying for the first time, reviews are everything. We build systems to generate consistent 5-star reviews on Google, Yelp, and TripAdvisor. We monitor and respond to every review, handle negative feedback before it spreads, and turn your happiest guests into your most powerful marketing channel.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">First-Timers</div>
                <div className="service-card-stat-text">
                  New guests read 10+ reviews before trying an unfamiliar cuisine
                </div>
              </div>
            </div>

            {/* Card 5: Email & SMS */}
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">05</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13 2 4" />
                </svg>
              </div>
              <div className="service-card-tag">Retention</div>
              <h3 className="service-card-name">Email &amp; SMS Marketing</h3>
              <div className="service-card-desc">
                <p>
                  The most profitable guest is the one who has already eaten with you. We build automated email and SMS sequences that bring guests back &mdash; supra dinner invitations, holiday event announcements, chef&apos;s specials, and loyalty campaigns. Every message is timed to your operational calendar and designed to drive reservations, not just opens.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">Repeat</div>
                <div className="service-card-stat-text">
                  Returning guests spend 67% more than first-time visitors
                </div>
              </div>
            </div>

            {/* Card 6: Website Design */}
            <div className="service-card reveal stagger-2">
              <div className="service-card-number">06</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <div className="service-card-tag">Digital Presence</div>
              <h3 className="service-card-name">Website Design &amp; Management</h3>
              <div className="service-card-desc">
                <p>
                  Your website is often the first impression for someone who has never tried Georgian food. We design and maintain fast, mobile-first websites that educate unfamiliar guests about your cuisine, showcase your atmosphere, make reservations effortless, and rank on Google. No template sites &mdash; every design is built around your brand and your menu.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">Mobile</div>
                <div className="service-card-stat-text">
                  78% of restaurant searches happen on a phone &mdash; your site must convert on mobile
                </div>
              </div>
            </div>

            {/* Card 7: Content Creation */}
            <div className="service-card reveal stagger-3">
              <div className="service-card-number">07</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <div className="service-card-tag">Visual Storytelling</div>
              <h3 className="service-card-name">Content Creation &amp; Photography</h3>
              <div className="service-card-desc">
                <p>
                  Georgian food is one of the most photogenic cuisines in the world &mdash; but only if it is shot correctly. We produce professional photography and video content that captures the drama of your dishes: the cheese pull of khachapuri, the steam rising from freshly folded khinkali, the amber glow of a chacha toast. Content that stops the scroll and fills the reservation book.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">Visual</div>
                <div className="service-card-stat-text">
                  Posts with professional food photography get 2.3x more engagement
                </div>
              </div>
            </div>

            {/* Card 8: Brand Development */}
            <div className="service-card reveal stagger-4">
              <div className="service-card-number">08</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="service-card-tag">Identity</div>
              <h3 className="service-card-name">Brand Development</h3>
              <div className="service-card-desc">
                <p>
                  Georgian restaurants need a brand identity that honors tradition while feeling fresh and accessible to American diners. We develop brand positioning, visual identity, voice guidelines, and messaging frameworks that help you stand out &mdash; not as &ldquo;another ethnic restaurant&rdquo; but as a destination dining experience rooted in one of the world&apos;s oldest and most celebrated culinary traditions.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">Identity</div>
                <div className="service-card-stat-text">
                  Position your restaurant as a destination, not just another dining option
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <div className="section-label">Ready to Grow?</div>
            <h2 className="cta-headline">
              Get A Free Marketing Audit
              <br />
              For Your Georgian Restaurant.
            </h2>
            <p className="cta-subtext">
              We will review your current online presence, identify the biggest opportunities, and show you exactly where your marketing dollars should go first. No pitch deck. No obligation.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary cta-btn">
                Get A Free Marketing Audit
              </Link>
              <a href="tel:7027664304" className="btn-secondary">
                Call 702-766-4304
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
