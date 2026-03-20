import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from './components/Ticker';
import {
  HomeEffects,
  RevenueCalculator,
  ContactForm,
} from './components/HomeEffects';

export const metadata: Metadata = {
  title: 'Georgian Restaurant Marketing Agency | Tamada Group — Revenue Strategy & Marketing',
  description:
    'Tamada Group is the marketing agency built by and for Georgian restaurants in America. Revenue strategy, menu engineering, local SEO, social media, and paid ads — all designed for Georgian cuisine.',
  keywords:
    'Georgian restaurant marketing, Georgian restaurant consulting, khachapuri restaurant marketing, Georgian food marketing agency, restaurant revenue consultant, supra event marketing',
};

export default function HomePage() {
  return (
    <>
      <HomeEffects />

      {/* Georgian Ticker */}
      <Ticker />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-label">
            The Georgian Restaurant Agency &middot; Built By One Of Your Own
          </div>

          <h1 className="hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>
              Your
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.5s' }}>
              Georgian
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.6s' }}>
              Restaurant
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.7s' }}>
              Deserves
            </span>
            <br />
            <span className="word" style={{ animationDelay: '0.8s' }}>
              An
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.9s' }}>
              Agency
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.0s' }}>
              That
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.1s' }}>
              Understands
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.2s' }}>
              It.
            </span>
          </h1>

          <div className="hero-gold-line"></div>

          <p className="hero-subheadline">
            Most marketing agencies don&apos;t understand Georgian food, Georgian
            culture, or Georgian hospitality. Tamada Group does &mdash; because
            our founder is Georgian. She built restaurants in Batumi before she
            built this agency in America.
          </p>

          <p className="hero-body">
            We&apos;ve helped Georgian restaurants across America generate over
            $10M in combined revenue. From supra dinner marketing to khachapuri
            going viral on TikTok &mdash; we know how to grow your restaurant
            because we know who you are.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Book A Free Strategy Call
            </Link>
            <a href="#results" className="btn-secondary">
              See The Results
            </a>
          </div>

          <div className="hero-proof">
            <div className="hero-proof-item">
              <div className="hero-proof-icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <div className="hero-proof-text">
                <strong>20+ Years in Georgian Hospitality</strong>
                Born in Batumi. Built restaurants in Georgia. Now serving Georgian restaurants in America.
              </div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                </svg>
              </div>
              <div className="hero-proof-text">
                <strong>$10M+ Revenue Generated</strong>
                Across 40+ Georgian restaurant properties in America.
              </div>
            </div>
            <div className="hero-proof-item">
              <div className="hero-proof-icon">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div className="hero-proof-text">
                <strong>Revenue Strategy + Full Marketing</strong>
                The only agency that does both &mdash; for Georgian restaurants specifically.
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           THE PROBLEM — WHY GEORGIAN RESTAURANTS NEED THIS
           ═══════════════════════════════════════════ */}
      <section className="section agitation">
        <div className="container">
          <div className="reveal">
            <div className="section-label">The Challenge Georgian Restaurants Face</div>
            <h2 className="section-headline">
              You Brought Georgian Hospitality
              <br />
              To America. But America Doesn&apos;t
              <br />
              Know You Exist Yet.
            </h2>
            <p className="section-subheadline">
              The food is extraordinary. The culture is magnetic. But without the right marketing, you&apos;re invisible.
            </p>
          </div>

          <div className="agitation-grid">
            <div className="agitation-copy reveal">
              <p>
                You opened a Georgian restaurant in America because you believe
                in this food and this culture. You know that when Americans try
                khachapuri for the first time, they fall in love. You know that
                a properly hosted supra dinner is unlike anything in American
                dining. You know that Georgian wine, Georgian hospitality, and
                Georgian cuisine are ready for their moment.
              </p>

              <p>
                But here&apos;s the problem: the generic marketing agencies
                don&apos;t understand you. They&apos;ll post the same food
                photos they post for every Italian or Mexican restaurant.
                They&apos;ll run the same Google ads with the same targeting.
                They don&apos;t know what a supra is. They don&apos;t know why
                the tamada matters. They don&apos;t know that your khachapuri
                is different from your neighbor&apos;s pizza &mdash; and they
                certainly can&apos;t explain that to an American foodie.
              </p>

              <p>
                Meanwhile, the Georgian restaurants that ARE growing &mdash;
                the ones booking out their supra dinners, filling tables on
                Tuesday nights, going viral on TikTok &mdash; they&apos;re not
                working harder than you. They have the right marketing partner.
                One that speaks Georgian, thinks Georgian, and markets Georgian.
              </p>

              <p>
                That&apos;s what Tamada Group was built to be.
              </p>
            </div>

            <div className="stat-blocks">
              <div className="stat-block reveal stagger-1">
                <div className="stat-number" data-count="40">
                  0
                </div>
                <div className="stat-label">Georgian Restaurants</div>
                <div className="stat-desc">
                  We&apos;ve worked with over 40 Georgian restaurant properties
                  across America &mdash; from New York to Los Angeles, Chicago
                  to Miami.
                </div>
              </div>
              <div className="stat-block reveal stagger-2">
                <div className="stat-number">18%</div>
                <div className="stat-label">Higher Average Check</div>
                <div className="stat-desc">
                  Our AI menu engineering increases average order value by up
                  to 18%. That&apos;s more revenue from every guest who already
                  walks through your door.
                </div>
              </div>
              <div className="stat-block reveal stagger-3">
                <div className="stat-number">#1</div>
                <div className="stat-label">In Local Search</div>
                <div className="stat-desc">
                  &ldquo;Georgian restaurant near me&rdquo; is a low-competition,
                  high-intent search. We put our clients at the top &mdash;
                  where the walk-ins come from.
                </div>
              </div>
            </div>
          </div>

          <div className="agitation-close reveal">
            <div
              className="section-divider"
              style={{ margin: '60px auto' }}
            ></div>
            <p>
              Georgian food is having its moment in America. The restaurants
              that capture that moment will define the category for the next
              decade. The question is whether your restaurant will be one of
              them &mdash; or whether you&apos;ll watch from the sidelines
              while someone else tells the story of Georgian food to America.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           PROOF / RESULTS SECTION
           ═══════════════════════════════════════════ */}
      <section className="section proof-section" id="results">
        <div className="proof-bg"></div>
        <div className="proof-overlay"></div>
        <div className="container proof-content">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <div className="section-label">Proven Results</div>
            <h2 className="section-headline">
              One Agency. 40+ Georgian Restaurants.
              <br />
              $10M+ In Revenue.
            </h2>
            <p className="section-subheadline">
              Not borrowed numbers. Not theoretical projections.
              <br />Real results from real Georgian restaurants across America.
            </p>
          </div>

          <div className="proof-counter-row reveal">
            <div className="proof-counter-box">
              <div className="proof-counter-value" data-target="10000000">
                $0
              </div>
              <div className="proof-counter-label">Combined Revenue Generated</div>
            </div>
            <div className="proof-arrow">&rarr;</div>
            <div className="proof-counter-box">
              <div className="proof-counter-value" data-count="40">
                0
              </div>
              <div className="proof-counter-label">Properties Transformed</div>
            </div>
          </div>

          <div className="proof-grid">
            <div className="proof-card reveal stagger-1">
              <div className="proof-card-number" data-count="40">
                0
              </div>
              <div className="proof-card-label">
                Georgian restaurant properties across America &mdash; from
                intimate family restaurants to large-format supra dining halls.
              </div>
            </div>
            <div className="proof-card reveal stagger-2">
              <div className="proof-card-number" data-count="30">
                0
              </div>
              <div className="proof-card-label">
                Restaurant and nightlife concepts launched from the ground up.
                Different formats, different cities, same proven methodology.
              </div>
            </div>
            <div className="proof-card reveal stagger-3">
              <div className="proof-card-number">50+</div>
              <div className="proof-card-label">
                F&amp;B concepts developed. From traditional Georgian to
                modern fusion, wine bars to supra event venues.
              </div>
            </div>
            <div className="proof-card reveal stagger-4">
              <div className="proof-card-number" data-count="20">
                0
              </div>
              <div className="proof-card-label">
                Years in Georgian hospitality. Not theory. Not borrowed
                frameworks. Born in Batumi. Built in America.
              </div>
            </div>
          </div>

          <div className="proof-close reveal">
            <div
              className="section-divider"
              style={{ margin: '60px auto' }}
            ></div>
            <p className="proof-close-text">
              Every number above was earned on the floor of a real Georgian
              restaurant, behind the bar of a real Georgian venue, in the
              middle of a real supra &mdash; with real revenue at stake and
              a cultural standard that demanded excellence.
            </p>
            <Link
              href="/results"
              className="btn-primary"
              style={{ marginTop: '32px' }}
            >
              See Full Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           AUTHORITY / LANA INTRO
           ═══════════════════════════════════════════ */}
      <section className="section authority-section" id="about">
        <div className="container">
          <div className="authority-grid">
            <div className="authority-image-wrap reveal">
              <img
                src="/lana-photo.jpg"
                alt="Lana Chikhladze, Founder of Tamada Group - Georgian Restaurant Marketing Agency"
                className="authority-image"
              />
              <div className="authority-image-border"></div>
              <div className="authority-image-accent"></div>
            </div>
            <div className="authority-copy reveal">
              <div className="section-label">Meet Lana</div>
              <h2>
                She Didn&apos;t Study
                <br />
                Georgian Restaurants.
                <br />
                She Built Them.
              </h2>
              <p>
                Lana Chikhladze grew up in Batumi, Georgia &mdash; a port city
                on the Black Sea where hospitality isn&apos;t just a business,
                it&apos;s a way of life. She built and managed restaurants,
                hotels, and nightclubs in Georgia before bringing that
                experience to America.
              </p>

              <p>
                When she saw Georgian restaurant owners in America struggling
                with generic marketing agencies that didn&apos;t understand
                their food, their culture, or their guests &mdash; she built
                Tamada Group. An agency by a Georgian, for Georgians.
              </p>

              <p>
                With 20+ years of hospitality operations, an MBA in Executive
                Management, and AI-powered marketing tools, Lana has helped
                40+ Georgian restaurants across America grow their revenue,
                fill their tables, and tell their story to the American market.
              </p>

              <div className="authority-badges">
                <div className="authority-badge">
                  Born in Batumi, Georgia
                </div>
                <div className="authority-badge">
                  MBA &middot; Executive Management
                </div>
                <div className="authority-badge">20+ Years Hospitality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           TWO-TIER SERVICES PREVIEW
           ═══════════════════════════════════════════ */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="reveal">
            <div className="section-label">What We Do</div>
            <h2 className="section-headline">
              We Fix Your Revenue Foundation.
              <br />
              Then We Build The Marketing Engine.
            </h2>
            <p className="section-subheadline">
              Most agencies offer one or the other. We do both &mdash; because
              strategy without marketing is a report, and marketing without
              strategy is waste.
            </p>
          </div>

          {/* TIER 1 — Revenue Strategy */}
          <div className="reveal" style={{ marginTop: '48px' }}>
            <span className="tier-tag tier-tag-start">Start Here</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--gold)', marginBottom: '8px' }}>
              Revenue Strategy
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px' }}>
              Project-based engagements that fix your foundation. We audit your operation, engineer your menu, and optimize your events before spending a dollar on marketing.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal stagger-1">
              <span className="service-icon">&#x2B21;</span>
              <span className="service-tag">Diagnostic</span>
              <h3>The Revenue Audit</h3>
              <p>
                A complete diagnostic of your Georgian restaurant &mdash; menu
                profitability, pricing, events, and guest flow. We find the
                revenue your operation is already producing but your P&amp;L
                isn&apos;t capturing. Delivered in two weeks.
              </p>
              <Link href="/revenue-audit" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="service-card reveal stagger-2">
              <span className="service-icon">&#x25C8;</span>
              <span className="service-tag">Optimization</span>
              <h3>AI Menu Engineering</h3>
              <p>
                Your khachapuri, your khinkali, your chakapuli &mdash; positioned
                and priced to maximize revenue. AI analysis of your POS data
                combined with menu psychology that guides guests toward your
                highest-margin dishes. Up to 18% increase in average check.
              </p>
              <Link href="/menu-engineering" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="service-card reveal stagger-3">
              <span className="service-icon">&#x25C6;</span>
              <span className="service-tag">Revenue System</span>
              <h3>Supra Event Strategy</h3>
              <p>
                Supra dinners are your highest-margin opportunity. We build
                your event pricing, upsell architecture, and 12-month
                programming calendar &mdash; turning traditional Georgian
                feasts into a reliable revenue engine.
              </p>
              <Link href="/event-strategy" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="video-callout reveal">
            <div>
              <h3>AI Video Menu Production</h3>
              <p>
                Cinematic AI videos of your signature Georgian dishes &mdash;
                khachapuri cheese stretching, khinkali being folded, ketsi
                sizzling tableside. Deployed on QR menus, Instagram, TikTok,
                and your website. Guests who see a dish in motion order it more.
              </p>
            </div>
            <Link href="/ai-video-menus" className="btn-secondary">
              See AI Video Menus &rarr;
            </Link>
          </div>

          {/* TIER 2 — Marketing Agency */}
          <div className="reveal" style={{ marginTop: '64px' }}>
            <span className="tier-tag tier-tag-ongoing">Ongoing Growth</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', color: 'var(--gold)', marginBottom: '8px' }}>
              Marketing Agency Services
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px' }}>
              Once your revenue system is solid, we run your full marketing operation &mdash; so you can run your restaurant instead of your Instagram.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card reveal stagger-1">
              <span className="service-icon">&#x1F4CD;</span>
              <span className="service-tag">Discovery</span>
              <h3>Local SEO &amp; Google</h3>
              <p>
                When someone searches &ldquo;Georgian restaurant near me&rdquo;
                &mdash; you appear first. Google Business Profile optimization,
                Maps ranking, review strategy, and AI search optimization.
              </p>
              <Link href="/local-seo" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="service-card reveal stagger-2">
              <span className="service-icon">&#x1F4F1;</span>
              <span className="service-tag">Growth</span>
              <h3>Social Media</h3>
              <p>
                Georgian food goes viral. Khachapuri cheese pulls, khinkali
                folding, supra tables &mdash; we manage your Instagram, TikTok,
                and Facebook to reach both the diaspora and American foodies.
              </p>
              <Link href="/social-media" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="service-card reveal stagger-3">
              <span className="service-icon">&#x1F4B0;</span>
              <span className="service-tag">Accelerator</span>
              <h3>Paid Advertising</h3>
              <p>
                Google and Meta ads targeting the Georgian diaspora, American
                foodies, and food travelers in your city. Event promotion,
                retargeting, and transparent reporting.
              </p>
              <Link href="/paid-advertising" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="service-card reveal stagger-4">
              <span className="service-icon">&#x2B50;</span>
              <span className="service-tag">Reputation</span>
              <h3>Reputation Management</h3>
              <p>
                Review monitoring, professional responses, and a systematic
                strategy to get more 5-star reviews from happy guests across
                Google, Yelp, and TripAdvisor.
              </p>
              <Link href="/marketing-services" className="service-link">
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div
            className="reveal"
            style={{ textAlign: 'center', marginTop: '48px' }}
          >
            <Link href="/services" className="btn-secondary" style={{ marginRight: '16px' }}>
              See All Services
            </Link>
            <Link href="/marketing-services" className="btn-secondary">
              See All Marketing Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           AI VIDEO TEASER — GEORGIAN FOOD SPECIFIC
           ═══════════════════════════════════════════ */}
      <section className="section video-teaser">
        <div className="container">
          <div className="video-teaser-header reveal">
            <div className="section-label">Georgian Food, Brought To Life</div>
            <h2 className="section-headline">
              Imagine Your Khachapuri
              <br />
              Going Viral.
            </h2>
            <p className="section-subheadline">
              Cinematic AI video of your signature Georgian dishes &mdash;
              deployed everywhere your guests already are.
            </p>
            <p
              className="section-body"
              style={{
                margin: '20px auto 0',
                textAlign: 'center',
                maxWidth: '620px',
              }}
            >
              The cheese pull on a fresh Imeretian khachapuri. Khinkali being
              folded by hand. A ketsi dish arriving at the table, still
              sizzling. These are the visuals that stop the scroll on Instagram
              and TikTok &mdash; and we produce them using AI video technology
              that turns your dish photography into cinematic motion.
            </p>
          </div>

          <div className="video-grid">
            <div className="video-thumb reveal stagger-1">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&auto=format&fit=crop"
                alt="Georgian khachapuri - AI video menu preview"
              />
              <div className="video-thumb-overlay">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24">
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="video-thumb reveal stagger-2">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&auto=format&fit=crop"
                alt="Georgian feast spread - AI video menu preview"
              />
              <div className="video-thumb-overlay">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24">
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="video-thumb reveal stagger-3">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80&auto=format&fit=crop"
                alt="Georgian wine and table setting - AI video menu preview"
              />
              <div className="video-thumb-overlay">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24">
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="video-capabilities reveal">
            <div className="video-cap">
              <div className="video-cap-icon">&#x1F4F1;</div>
              <h4>QR Menu Ready</h4>
              <p>
                Guests scan and watch your khachapuri come to life before the
                server arrives. The visual sell does the work.
              </p>
            </div>
            <div className="video-cap">
              <div className="video-cap-icon">&#x1F3AC;</div>
              <h4>Social-First Production</h4>
              <p>
                Formatted for Instagram Reels and TikTok. Georgian food is
                what American foodies are discovering right now.
              </p>
            </div>
            <div className="video-cap">
              <div className="video-cap-icon">&#x1F4CA;</div>
              <h4>Strategy-Driven Selection</h4>
              <p>
                We video the dishes your menu engineering data says matter most
                &mdash; high-margin, high-impact Georgian specialties.
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }} className="reveal">
            <Link href="/ai-video-menus" className="btn-primary">
              Request A Sample Video
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           PROCESS SECTION
           ═══════════════════════════════════════════ */}
      <section className="section process-section">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <div className="section-label">How It Works</div>
            <h2 className="section-headline">
              Four Steps. No Complexity.
              <br />
              Just Results.
            </h2>
            <p className="section-subheadline">
              From first conversation to revenue growth &mdash; here&apos;s how
              we work with Georgian restaurants.
            </p>
          </div>

          <div className="process-steps">
            <div className="process-line">
              <div className="process-line-fill" id="processLineFill"></div>
            </div>

            <div className="process-step reveal stagger-1">
              <div className="process-number">01</div>
              <h3>We Talk</h3>
              <p>
                A 30-minute strategy conversation. Free. No pitch. We learn
                about your restaurant, your challenges, and where you think the
                gaps are. You learn whether we&apos;re the right fit.
              </p>
            </div>
            <div className="process-step reveal stagger-2">
              <div className="process-number">02</div>
              <h3>We Audit</h3>
              <p>
                AI-powered analytics meet 20+ years of Georgian hospitality
                expertise. We analyze your menu, pricing, events, and marketing
                &mdash; finding revenue and growth opportunities specific to
                your Georgian restaurant.
              </p>
            </div>
            <div className="process-step reveal stagger-3">
              <div className="process-number">03</div>
              <h3>We Build Your Plan</h3>
              <p>
                A custom revenue and marketing roadmap with specific changes,
                projected impact, and priorities. Revenue strategy first, then
                marketing engine. Both designed for Georgian restaurants.
              </p>
            </div>
            <div className="process-step reveal stagger-4">
              <div className="process-number">04</div>
              <h3>We Execute Together</h3>
              <p>
                You focus on your restaurant. We run the marketing. From local
                SEO to social media to paid ads &mdash; we handle the growth
                engine while you handle the hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CALCULATOR SECTION
           ═══════════════════════════════════════════ */}
      <section className="section calculator-section" id="calculator">
        <div className="container">
          <div className="calculator-wrap">
            <div className="calculator-header reveal">
              <div className="section-label">Revenue Calculator</div>
              <h2 className="section-headline">
                How Much Revenue Is Sitting
                <br />
                On Your Table Right Now?
              </h2>
              <p className="section-subheadline">
                Five questions. Your personalized revenue opportunity &mdash; in
                seconds.
              </p>
              <p
                className="section-body"
                style={{ textAlign: 'center', margin: '16px auto 0' }}
              >
                Answer five questions about your Georgian restaurant and
                we&apos;ll show you where the revenue gaps are &mdash; using
                the same benchmarks and methodology we apply to every client
                engagement.
              </p>
            </div>

            <RevenueCalculator />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CONTACT CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="section contact-cta-section" id="contact">
        <div className="contact-cta-bg"></div>
        <div className="contact-cta-overlay"></div>
        <div className="container contact-cta-content">
          <div className="contact-cta-header reveal">
            <div className="section-label">Start Here</div>
            <h2 className="section-headline">
              Your Georgian Restaurant
              <br />
              Deserves To Be Discovered.
            </h2>
            <p className="section-subheadline">
              The first conversation is free. And it will change how you think
              about marketing your restaurant.
            </p>
          </div>

          <div className="contact-options">
            <div className="contact-option reveal stagger-1">
              <div className="contact-option-icon">&#x1F4C5;</div>
              <h3>Schedule A Strategy Session</h3>
              <p>
                30 minutes. Free. No pitch. Just an honest conversation about
                your Georgian restaurant and where the growth opportunities are.
              </p>
              <Link href="/contact" className="btn-primary">
                Book Now
              </Link>
            </div>
            <div className="contact-option reveal stagger-2">
              <div className="contact-option-icon">&#x1F4DE;</div>
              <h3>Call Directly</h3>
              <p>
                Prefer to talk? Call Lana directly. She speaks your language
                &mdash; literally and figuratively.
              </p>
              <a href="tel:+17027664304" className="btn-secondary">
                +1 (702) 766-4304
              </a>
            </div>
            <div className="contact-option reveal stagger-3">
              <div className="contact-option-icon">&#x1F1EC;&#x1F1EA;</div>
              <h3>We Speak Georgian</h3>
              <p>
                Tamada Group was founded by a Georgian for Georgians. We
                understand your culture, your food, and your business.
              </p>
              <Link href="/about" className="btn-secondary">
                Meet Lana
              </Link>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            <ContactForm />
          </div>

          <p className="form-note reveal">
            We work exclusively with Georgian restaurants. If that&apos;s you,
            you&apos;ll hear back within 24 hours.
          </p>
        </div>
      </section>
    </>
  );
}
