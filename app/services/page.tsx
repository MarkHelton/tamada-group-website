import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '../components/Ticker';
import ServicesEffects from './ServicesEffects';

export const metadata: Metadata = {
  title: 'Marketing & Revenue Services for Georgian Restaurants | Tamada Group',
  description:
    'Full-service marketing agency for Georgian restaurants in America. Revenue strategy, AI menu engineering, supra event planning, local SEO, social media, and paid advertising.',
  keywords:
    'Georgian restaurant marketing, restaurant consulting services, F&B revenue audit, AI menu engineering, supra event strategy, local SEO, social media management, paid advertising, Georgian restaurant agency',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesEffects />

      {/* GEORGIAN TICKER */}
      <Ticker />

      {/* HERO SECTION */}
      <section className="services-hero" id="hero">
        <div className="container">
          <div className="services-hero-content">
            <div className="services-hero-label">Our Services</div>

            <h1 className="services-hero-headline" id="heroHeadline">
              We Start By Finding Your Hidden Revenue. Then We Build The Marketing Engine That Grows It.
            </h1>

            <div className="services-hero-gold-line"></div>

            <div className="services-hero-body">
              <p>
                Georgian restaurants in America face a unique challenge: you are
                serving one of the world&apos;s greatest cuisines to an audience
                that is still discovering it. That means your marketing has to do
                more than promote — it has to educate, entice, and convert. But
                marketing a restaurant that is not optimized on the inside is
                expensive and wasteful.
              </p>
              <p>
                That is why we built Tamada Group as two things in one: a revenue
                strategy firm and a full-service marketing agency. We fix the
                foundation first. Then we build the engine that grows it. Most
                agencies offer one or the other. We do both — because your
                khachapuri deserves more than a boosted Instagram post.
              </p>
            </div>
          </div>
        </div>

        {/* Floating accents */}
        <div className="hero-accent hero-accent-1"></div>
        <div className="hero-accent hero-accent-2"></div>
        <div className="hero-accent hero-accent-3"></div>
      </section>

      {/* PROOF BAR - TOP */}
      <div className="proof-bar">
        <div className="container">
          <div className="proof-bar-inner reveal">
            <div className="proof-bar-item">
              <div
                className="proof-bar-value"
                data-count="20"
                data-suffix="+"
              >
                20+
              </div>
              <div className="proof-bar-label">Years in F&amp;B Operations</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">$10M+</div>
              <div className="proof-bar-label">Revenue Generated</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div
                className="proof-bar-value"
                data-count="18"
                data-suffix="%"
              >
                18%
              </div>
              <div className="proof-bar-label">Average AOV Increase</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div
                className="proof-bar-value"
                data-count="40"
                data-suffix="+"
              >
                40+
              </div>
              <div className="proof-bar-label">Properties Transformed</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== TIER 1: REVENUE STRATEGY ===================== */}
      <section className="section services-section" id="tier-1">
        <div className="container">
          <div className="section-label reveal">
            <span className="tier-tag tier-tag-start">Start Here</span>
            Tier 1 — Revenue Strategy
          </div>
          <h2 className="section-headline reveal">
            The Foundation: Fix What&apos;s Broken Before You Market It.
          </h2>
          <p className="section-subheadline reveal">
            Most agencies start with marketing. We start with your numbers —
            because marketing a restaurant that is not optimized is expensive. We
            fix the foundation first. Then we build the engine.
          </p>

          <div className="services-cards">
            {/* Card 1: The Revenue Audit */}
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">01</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="1" />
                  <path d="M9 14l2 2 4-4" />
                </svg>
              </div>
              <div className="service-card-tag">Diagnostic</div>
              <h3 className="service-card-name">The Revenue Audit</h3>
              <div className="service-card-desc">
                <p>
                  Before we recommend anything, we need to see what is actually
                  happening inside your operation. The Revenue Audit is a
                  comprehensive diagnostic that maps every dollar flowing through
                  your Georgian restaurant — from khachapuri pricing and ticket
                  averages to labor scheduling, supra booking capture rates, and
                  per-seat profitability.
                </p>
                <p>
                  Most operators know something is off. They can feel it in the
                  gap between how busy the floor looks and what the P&amp;L
                  actually says. The audit closes that gap with data. We examine
                  your POS reports, menu mix analyses, cost structures, staffing
                  models, and guest flow patterns. Then we build a prioritized
                  roadmap — not a 60-page report that sits in a drawer, but a
                  clear, ranked list of the changes that will recover the most
                  revenue in the least time.
                </p>
                <p>
                  This is where every engagement should start. You cannot fix
                  what you have not measured.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">2 weeks</div>
                <div className="service-card-stat-text">
                  Average time from kickoff to a completed roadmap with ranked
                  revenue opportunities
                </div>
              </div>
              <Link href="/revenue-audit" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 2: AI Menu Engineering */}
            <div className="service-card reveal stagger-2">
              <div className="service-card-number">02</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="service-card-tag">Optimization</div>
              <h3 className="service-card-name">AI Menu Engineering</h3>
              <div className="service-card-desc">
                <p>
                  Your menu is not a list of dishes. It is the single most
                  powerful sales tool in your operation — the one piece of
                  marketing that 100% of your guests interact with. Most Georgian
                  restaurant menus are organized by tradition: starters, khinkali,
                  khachapuri, grilled meats, desserts. But tradition does not
                  optimize for margin.
                </p>
                <p>
                  Our AI Menu Engineering service rebuilds your menu from the
                  economics up. We analyze your current menu mix data to identify
                  which items are stars, which are puzzles, which are workhorses,
                  and which are dead weight. Then we restructure descriptions,
                  placement, pricing, and visual anchoring to shift guest behavior
                  toward the items that make you money — without removing the
                  lobiani your regulars love.
                </p>
                <p>
                  The difference between a menu that was &ldquo;designed&rdquo;
                  and a menu that was engineered is typically 12% to 18% in
                  average check size.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">18%</div>
                <div className="service-card-stat-text">
                  Measured average order value increase after AI-driven menu
                  restructuring
                </div>
              </div>
              <Link href="/menu-engineering" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 3: Supra Event Revenue Strategy */}
            <div className="service-card reveal stagger-3">
              <div className="service-card-number">03</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4" />
                  <path d="M8 2v4" />
                  <path d="M3 10h18" />
                  <path d="M8 14h.01" />
                  <path d="M12 14h.01" />
                  <path d="M16 14h.01" />
                  <path d="M8 18h.01" />
                  <path d="M12 18h.01" />
                </svg>
              </div>
              <div className="service-card-tag">Revenue System</div>
              <h3 className="service-card-name">
                Supra Event Revenue Strategy
              </h3>
              <div className="service-card-desc">
                <p>
                  The Georgian supra is not just a dinner — it is one of the most
                  powerful event formats in the restaurant industry. A tamada
                  leading toasts, communal feasting, wine flowing from a kantsi.
                  No other cuisine offers this kind of built-in theatrical
                  experience. But most Georgian restaurants in America treat
                  private events as one-off requests that get handled when they
                  come in. That is not a strategy. That is order-taking.
                </p>
                <p>
                  We build supra event revenue systems. That means creating a
                  12-month programming calendar around Georgian holidays, wine
                  dinners, and corporate supra experiences. We develop tiered
                  pricing models, write the proposals that close deals faster,
                  train your team on upselling and package structuring, and build
                  the follow-up sequences that turn a one-time booking into a
                  recurring relationship.
                </p>
                <p>
                  When events go from reactive to systematic, the revenue impact
                  is transformational. The supra format gives you a competitive
                  advantage no Italian or French restaurant can replicate.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">$1M+</div>
                <div className="service-card-stat-text">
                  Annual event revenue generated for a single hospitality group
                  across multiple properties
                </div>
              </div>
              <Link href="/event-strategy" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 4: AI Video Menu Production */}
            <div className="service-card reveal stagger-4">
              <div className="service-card-number">04</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>
              </div>
              <div className="service-card-tag">Visual Selling</div>
              <h3 className="service-card-name">AI Video Menu Production</h3>
              <div className="service-card-desc">
                <p>
                  Static menus describe food. Video menus sell it. This is the
                  difference between reading about khachapuri and watching the
                  cheese pull apart in slow motion — the golden crust breaking,
                  the egg yolk swirling into molten cheese. Guests do not order
                  based on rational evaluation. They order based on desire. And
                  video creates desire in a way that no description can replicate.
                </p>
                <p>
                  Our AI Video Menu Production service creates cinematic,
                  short-form video content for your highest-margin items. These
                  are professionally produced, AI-enhanced visual stories that can
                  be embedded in digital menus, displayed on tabletop tablets,
                  featured on your website, and deployed across social channels.
                  Each video is engineered to highlight the sensory qualities that
                  drive ordering decisions — the sizzle of a ketsi, the fold of a
                  khinkali, the pour of a Saperavi.
                </p>
                <p>
                  The ROI is immediate and measurable. Properties using AI video
                  menus have seen a 22% increase in orders for featured items.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">22%</div>
                <div className="service-card-stat-text">
                  Increase in orders for items featured with AI-produced video
                  content
                </div>
              </div>
              <Link href="/ai-video-menus" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TIER 2: MARKETING AGENCY SERVICES ===================== */}
      <section className="section services-section" id="tier-2">
        <div className="container">
          <div className="section-label reveal">
            <span className="tier-tag tier-tag-ongoing">Ongoing Growth</span>
            Tier 2 — Marketing Agency Services
          </div>
          <h2 className="section-headline reveal">
            The Engine: Full-Service Marketing So You Can Run Your Restaurant.
          </h2>
          <p className="section-subheadline reveal">
            Once your revenue system is solid, we run your full marketing
            operation — so you can run your restaurant instead of your Instagram.
          </p>

          <div className="services-cards">
            {/* Card 5: Local SEO & Google Optimization */}
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">05</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <div className="service-card-tag">Visibility</div>
              <h3 className="service-card-name">Local SEO &amp; Google Optimization</h3>
              <div className="service-card-desc">
                <p>
                  When someone in your city searches &ldquo;Georgian restaurant
                  near me&rdquo; or &ldquo;best khachapuri,&rdquo; you need to
                  be the first result — not the third. We optimize your Google
                  Business Profile, build local citations, manage your review
                  strategy, and ensure your restaurant dominates the local map
                  pack for every relevant search term.
                </p>
                <p>
                  For Georgian restaurants, this is especially critical. Many
                  potential guests are searching for the cuisine for the first
                  time. If they cannot find you, they will find the Mediterranean
                  place down the street instead.
                </p>
              </div>
              <Link href="/local-seo" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 6: Social Media Management */}
            <div className="service-card reveal stagger-2">
              <div className="service-card-number">06</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <div className="service-card-tag">Engagement</div>
              <h3 className="service-card-name">Social Media Management</h3>
              <div className="service-card-desc">
                <p>
                  Georgian food is inherently photogenic — the cheese pull of an
                  Acharuli, the pleats of hand-folded khinkali, the color of a
                  walnut-stuffed eggplant. But turning that visual appeal into a
                  consistent social media presence that actually drives
                  reservations requires strategy, not just pretty pictures.
                </p>
                <p>
                  We manage your entire social presence: content calendars,
                  caption writing, community management, story strategy, and
                  performance reporting. Every post is designed to educate
                  American diners about Georgian cuisine while driving them to
                  your door.
                </p>
              </div>
              <Link href="/social-media" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 7: Paid Advertising */}
            <div className="service-card reveal stagger-3">
              <div className="service-card-number">07</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div className="service-card-tag">Acquisition</div>
              <h3 className="service-card-name">Paid Advertising (Google &amp; Meta)</h3>
              <div className="service-card-desc">
                <p>
                  Targeted ad campaigns on Google and Meta platforms that put your
                  Georgian restaurant in front of the right diners at the right
                  moment — whether they are searching for a weekend dinner spot,
                  planning a group event, or discovering Georgian cuisine for the
                  first time.
                </p>
                <p>
                  We manage everything from campaign strategy and audience
                  building to creative production and ongoing optimization. Every
                  dollar is tracked back to reservations, orders, and revenue.
                </p>
              </div>
              <Link href="/paid-advertising" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 8: Reputation Management */}
            <div className="service-card reveal stagger-4">
              <div className="service-card-number">08</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="service-card-tag">Trust</div>
              <h3 className="service-card-name">Reputation Management</h3>
              <div className="service-card-desc">
                <p>
                  Reviews are the new word-of-mouth, and for Georgian restaurants
                  introducing a cuisine to new audiences, they are make-or-break.
                  We monitor, respond to, and strategically grow your reviews
                  across Google, Yelp, and TripAdvisor — turning every happy
                  guest into a public advocate and addressing negative feedback
                  before it costs you covers.
                </p>
              </div>
              <Link href="/marketing-services" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 9: Email & SMS Marketing */}
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">09</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="service-card-tag">Retention</div>
              <h3 className="service-card-name">Email &amp; SMS Marketing</h3>
              <div className="service-card-desc">
                <p>
                  Your past guests are your most profitable audience. We build
                  automated email and SMS campaigns that keep your Georgian
                  restaurant top-of-mind — promoting supra dinner events,
                  seasonal menu launches, Georgian holiday celebrations, and
                  special offers that bring guests back again and again.
                </p>
              </div>
              <Link href="/marketing-services" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 10: Website Design & Management */}
            <div className="service-card reveal stagger-2">
              <div className="service-card-number">10</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <div className="service-card-tag">Digital Home</div>
              <h3 className="service-card-name">Website Design &amp; Management</h3>
              <div className="service-card-desc">
                <p>
                  Your website is the digital front door of your Georgian
                  restaurant. We design and manage high-converting restaurant
                  websites that tell your story, showcase your menu, make
                  reservations effortless, and rank in search — all while
                  educating first-time visitors about the beauty of Georgian
                  cuisine and culture.
                </p>
              </div>
              <Link href="/marketing-services" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 11: Content Creation & Photography */}
            <div className="service-card reveal stagger-3">
              <div className="service-card-number">11</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
              <div className="service-card-tag">Visual Identity</div>
              <h3 className="service-card-name">Content Creation &amp; Photography</h3>
              <div className="service-card-desc">
                <p>
                  Professional food photography and video content that captures
                  what makes Georgian cuisine extraordinary — the bubbling cheese
                  of a fresh khachapuri, the steam rising from a clay pot of
                  chanakhi, the ritual of a supra table laden with dishes. Content
                  that makes people who have never tried Georgian food need to try
                  it tonight.
                </p>
              </div>
              <Link href="/marketing-services" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>

            {/* Card 12: Brand Development */}
            <div className="service-card reveal stagger-4">
              <div className="service-card-number">12</div>
              <div className="service-card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="service-card-tag">Identity</div>
              <h3 className="service-card-name">Brand Development</h3>
              <div className="service-card-desc">
                <p>
                  Georgian culture is rich, ancient, and deeply compelling — but
                  most Georgian restaurants in America have not translated that
                  heritage into a cohesive brand that resonates with American
                  diners. We develop brand identities, messaging frameworks, and
                  visual systems that honor your Georgian roots while making your
                  restaurant feel essential to your local community.
                </p>
              </div>
              <Link href="/marketing-services" className="service-card-link">
                Learn More <span className="arrow">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING QUOTE */}
      <div className="proof-bar">
        <div className="container">
          <div className="proof-bar-inner reveal" style={{ display: 'block', textAlign: 'center', padding: '2rem 1rem' }}>
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.7, maxWidth: '48rem', margin: '0 auto', color: 'var(--gold)' }}>
              &ldquo;Most agencies offer one or the other. We built Tamada Group
              to do both — because strategy without marketing is a report.
              Marketing without strategy is waste.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* DECISION GUIDE */}
      <section className="section decision-section" id="decision-guide">
        <div className="container">
          <div className="section-label reveal">Decision Guide</div>
          <h2 className="section-headline reveal">
            Which Tier Is Right For You?
          </h2>
          <p className="section-subheadline reveal">
            Start with the situation that sounds most like yours.
          </p>

          <div className="decision-grid">
            <div className="decision-card reveal stagger-1">
              <div className="decision-card-condition">
                We have never had a formal revenue review of our Georgian restaurant
              </div>
              <div className="decision-card-arrow">Start with &darr;</div>
              <div className="decision-card-recommendation">
                <Link href="/revenue-audit">Tier 1: The Revenue Audit</Link>
              </div>
              <div className="decision-card-desc">
                This is where every engagement starts. Before we run your
                marketing, we need to make sure your menu pricing, event
                strategy, and operations are optimized. The audit gives you a
                ranked list of opportunities so you know exactly what to fix
                first and what it is worth.
              </div>
            </div>

            <div className="decision-card reveal stagger-2">
              <div className="decision-card-condition">
                Our khachapuri and khinkali are incredible, but our check
                average does not reflect it
              </div>
              <div className="decision-card-arrow">Start with &darr;</div>
              <div className="decision-card-recommendation">
                <Link href="/menu-engineering">Tier 1: AI Menu Engineering</Link>
              </div>
              <div className="decision-card-desc">
                If your menu layout, pricing structure, and item positioning have
                not been reworked based on current sales data, you are almost
                certainly leaving 12% to 18% of potential check average on the
                table. This is the highest-ROI fix for any Georgian restaurant.
              </div>
            </div>

            <div className="decision-card reveal stagger-3">
              <div className="decision-card-condition">
                We want to turn our supra dinners and private events into a
                serious revenue stream
              </div>
              <div className="decision-card-arrow">Start with &darr;</div>
              <div className="decision-card-recommendation">
                <Link href="/event-strategy">
                  Tier 1: Supra Event Revenue Strategy
                </Link>
              </div>
              <div className="decision-card-desc">
                The Georgian supra is the ultimate private dining experience —
                no other cuisine has anything like it. If your event calendar has
                gaps, if proposals go out late, or if you do not have a 12-month
                supra programming plan, there is significant untapped revenue
                waiting.
              </div>
            </div>

            <div className="decision-card reveal stagger-4">
              <div className="decision-card-condition">
                Our food and operations are solid — we need more guests in the
                door
              </div>
              <div className="decision-card-arrow">Move to &darr;</div>
              <div className="decision-card-recommendation">
                <Link href="/local-seo">
                  Tier 2: Full Marketing Agency Services
                </Link>
              </div>
              <div className="decision-card-desc">
                If your revenue foundation is strong and you need consistent
                growth, our Tier 2 marketing services — SEO, social media, paid
                ads, reputation management, and more — become the engine that
                fills your dining room night after night. This is where we scale
                your Georgian restaurant.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTION HANDLING */}
      <section className="section objections-section" id="objections">
        <div className="container">
          <div className="section-label reveal">Before You Decide</div>
          <h2 className="section-headline reveal">
            Questions We Hear Before Every Engagement
          </h2>
          <p className="section-subheadline reveal">
            The honest answers, not the sales pitch.
          </p>

          <div className="objections-list">
            {/* Objection 1 */}
            <div className="objection-item reveal">
              <div className="objection-question">
                <div className="objection-q-mark">Q</div>
                <div className="objection-q-text">
                  &ldquo;We already tried a marketing agency and it did not
                  work.&rdquo;
                </div>
              </div>
              <div className="objection-answer">
                <p>
                  We hear this constantly from Georgian restaurant owners. Most
                  marketing agencies treat your restaurant the same as any other
                  account — generic social posts, stock templates, cookie-cutter
                  ad campaigns. They do not understand that Georgian cuisine
                  requires education, not just promotion. They do not know what a
                  supra is. They cannot explain the difference between Imeretian
                  and Megrelian khachapuri. And they definitely are not looking at
                  your P&amp;L before they start spending your ad budget.
                </p>
                <p>
                  Tamada Group was built specifically for Georgian restaurants.
                  Lana comes from the industry — over 20 years in F&amp;B
                  operations. When she walks into your operation, she is not
                  observing from the outside. She is reading the floor the way an
                  operator reads it — seeing the timing gaps, the menu blind
                  spots, the missed upsell moments that only someone who has done
                  the job would recognize.
                </p>
                <div className="answer-highlight">
                  The difference is not the framework. It is the fact that we fix
                  your revenue foundation before we spend a dollar on marketing.
                  That is why our clients see results — because we are not
                  marketing a broken system.
                </div>
              </div>
            </div>

            {/* Objection 2 */}
            <div className="objection-item reveal">
              <div className="objection-question">
                <div className="objection-q-mark">Q</div>
                <div className="objection-q-text">
                  &ldquo;We cannot afford both consulting and a marketing
                  agency.&rdquo;
                </div>
              </div>
              <div className="objection-answer">
                <p>
                  That is a completely understandable concern. Restaurant margins
                  are thin, and the idea of paying for both revenue strategy and
                  ongoing marketing feels like a lot. We get it.
                </p>
                <p>
                  But here is how our model works: Tier 1 is project-based. You
                  start with one engagement — typically The Revenue Audit — and
                  it pays for itself within the first month through immediate
                  pricing adjustments, menu repositioning, and scheduling
                  changes. The revenue we find in Tier 1 funds your Tier 2
                  marketing. You are not spending more. You are investing money
                  you did not know you had.
                </p>
                <div className="answer-highlight">
                  The Revenue Audit is specifically designed to pay for itself
                  within the first month. We identify opportunities that generate
                  returns before our invoice is due. Then those returns fund
                  everything that comes after.
                </div>
                <p>
                  We also do not require you to buy everything at once. Start
                  with one Tier 1 service. See the results. Then decide if
                  ongoing marketing makes sense. No pressure, no long-term
                  contracts required to get started.
                </p>
              </div>
            </div>

            {/* Objection 3 */}
            <div className="objection-item reveal">
              <div className="objection-question">
                <div className="objection-q-mark">Q</div>
                <div className="objection-q-text">
                  &ldquo;Do you actually understand Georgian restaurants, or are
                  you just another agency?&rdquo;
                </div>
              </div>
              <div className="objection-answer">
                <p>
                  This is the right question to ask, and the answer is what makes
                  us different. Tamada Group exists for one reason: Georgian
                  restaurants in America deserve an agency that understands both
                  the cuisine and the business. We know that a supra dinner is
                  not just &ldquo;private dining&rdquo; — it is a cultural
                  experience that can command premium pricing when positioned
                  correctly. We know that khinkali is not &ldquo;dumplings&rdquo;
                  — it is a signature dish that needs its own marketing story.
                </p>
                <p>
                  We understand the unique challenge Georgian restaurants face:
                  serving one of the world&apos;s oldest and richest culinary
                  traditions to an American audience that is largely unfamiliar
                  with it. That means every piece of marketing has to do double
                  duty — educate and entice. Most agencies cannot do that
                  because they have no context for the culture.
                </p>
                <div className="answer-highlight">
                  We did not name ourselves Tamada by accident. We understand the
                  role, the tradition, and the responsibility. That understanding
                  is in everything we do — from the copy we write to the revenue
                  strategies we build.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAR - BOTTOM */}
      <div className="proof-bar">
        <div className="container">
          <div className="proof-bar-inner reveal">
            <div className="proof-bar-item">
              <div className="proof-bar-value">20+ years</div>
              <div className="proof-bar-label">
                Hands-On F&amp;B Experience
              </div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">$10M+</div>
              <div className="proof-bar-label">Revenue Generated</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">18% AOV</div>
              <div className="proof-bar-label">Average Check Increase</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">40+</div>
              <div className="proof-bar-label">Properties Transformed</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <div className="section-label">Ready to Start?</div>
            <h2 className="cta-headline">
              Not sure which tier is right for you?
              <br />
              The first call is free.
            </h2>
            <p className="cta-subtext">
              No pitch deck. No pressure. Just a conversation about where your
              Georgian restaurant is today, where it could be, and whether we
              start with strategy, marketing, or both.
            </p>
            <Link href="/contact" className="btn-primary cta-btn">
              Book A Free Strategy Call
            </Link>
            <p className="cta-subtext" style={{ marginTop: '1rem', fontSize: '0.95rem' }}>
              Or call us directly:{' '}
              <a href="tel:7027664304" style={{ color: 'var(--gold)' }}>
                (702) 766-4304
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
