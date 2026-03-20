import type { Metadata } from 'next';
import Link from 'next/link';
import LocalSeoEffects from './LocalSeoEffects';

export const metadata: Metadata = {
  title: 'Local SEO for Georgian Restaurants | Google Maps Ranking | Tamada Group',
  description:
    'Dominate local search for Georgian restaurants. Google Business Profile optimization, Maps ranking, AI search optimization, and review strategy built for Georgian cuisine.',
  keywords:
    'Georgian restaurant SEO, restaurant local SEO, Google Maps restaurant marketing',
};

export default function LocalSeoPage() {
  return (
    <>
      <LocalSeoEffects />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-label">Local SEO &mdash; Tamada Group</div>

          <h1 className="hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>When</span>{' '}
            <span className="word" style={{ animationDelay: '0.48s' }}>Someone</span>{' '}
            <span className="word" style={{ animationDelay: '0.56s' }}>Searches</span>{' '}
            <span className="word" style={{ animationDelay: '0.64s' }}>&lsquo;Georgian</span>{' '}
            <span className="word" style={{ animationDelay: '0.72s' }}>Restaurant</span>{' '}
            <span className="word" style={{ animationDelay: '0.80s' }}>Near</span>{' '}
            <span className="word" style={{ animationDelay: '0.88s' }}>Me&rsquo;</span>{' '}
            <span className="word" style={{ animationDelay: '0.96s' }}>&mdash;</span>{' '}
            <span className="word" style={{ animationDelay: '1.04s' }}>Your</span>{' '}
            <span className="word" style={{ animationDelay: '1.12s' }}>Restaurant</span>{' '}
            <span className="word" style={{ animationDelay: '1.20s' }}>Needs</span>{' '}
            <span className="word" style={{ animationDelay: '1.28s' }}>To</span>{' '}
            <span className="word" style={{ animationDelay: '1.36s' }}>Appear</span>{' '}
            <span className="word" style={{ animationDelay: '1.44s' }}>First.</span>
          </h1>

          <div className="hero-gold-line" />

          <p className="hero-subheadline">
            Local SEO built specifically for Georgian restaurants &mdash; the highest-intent, lowest-competition opportunity in restaurant marketing.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Get A Free SEO Audit
            </Link>
            <a href="#why-seo" className="btn-secondary">
              Why Local SEO Matters
            </a>
          </div>
        </div>

        <div className="hero-accent hero-accent-1"></div>
        <div className="hero-accent hero-accent-2"></div>
        <div className="hero-accent hero-accent-3"></div>
      </section>

      {/* ═══════════════════════════════════════════
           WHY LOCAL SEO MATTERS
           ═══════════════════════════════════════════ */}
      <section className="section" id="why-seo">
        <div className="container">
          <div className="section-label reveal">Why Local SEO</div>
          <h2 className="section-headline reveal">
            The people searching for you
            <br />
            are ready to eat right now.
          </h2>
          <p className="section-subheadline reveal">
            Local search is the single highest-converting marketing channel for restaurants. When someone types &ldquo;Georgian restaurant near me&rdquo; into Google, they are not browsing. They are hungry, they have their wallet out, and they are making a decision in the next 15 minutes.
          </p>

          <div className="services-cards">
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">76%</div>
              <div className="service-card-tag">Local Intent</div>
              <h3 className="service-card-name">Search-to-Visit Rate</h3>
              <div className="service-card-desc">
                <p>
                  76% of people who search for a restaurant on their phone visit within 24 hours. This is not awareness marketing. This is demand capture &mdash; catching people at the exact moment they are ready to spend money.
                </p>
              </div>
            </div>

            <div className="service-card reveal stagger-2">
              <div className="service-card-number">Top 3</div>
              <div className="service-card-tag">Google Maps</div>
              <h3 className="service-card-name">The Map Pack Is Everything</h3>
              <div className="service-card-desc">
                <p>
                  The top 3 results in Google Maps receive 30&ndash;70% of all clicks. If you are not in the map pack, you are invisible to the majority of people searching for restaurants in your area. Position four might as well be page ten.
                </p>
              </div>
            </div>

            <div className="service-card reveal stagger-3">
              <div className="service-card-number">Low</div>
              <div className="service-card-tag">Competition</div>
              <h3 className="service-card-name">The Georgian Advantage</h3>
              <div className="service-card-desc">
                <p>
                  Most Georgian restaurants are the only one in their neighborhood &mdash; often the only one in their entire city. While Italian restaurants compete against 200 listings, you may be competing against two or three. Proper SEO in a low-competition category is the closest thing to a guaranteed result in marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           WHAT WE DO
           ═══════════════════════════════════════════ */}
      <section className="section" id="what-we-do">
        <div className="container">
          <div className="section-label reveal">What We Do</div>
          <h2 className="section-headline reveal">
            A complete local SEO strategy
            <br />
            built for Georgian restaurants.
          </h2>
          <p className="section-subheadline reveal">
            Every tactic is designed for the unique positioning of Georgian cuisine in the American market.
          </p>

          <div className="services-cards">
            <div className="deliverable-card reveal stagger-1">
              <h3 className="service-card-name">Google Business Profile Optimization</h3>
              <div className="service-card-desc">
                <p>
                  We fully optimize your Google Business Profile &mdash; categories, attributes, photos, posts, Q&amp;A, menu links, and every field Google uses to determine ranking. For Georgian restaurants, we ensure proper categorization so you appear in searches for both &ldquo;Georgian restaurant&rdquo; and broader terms like &ldquo;Eastern European restaurant&rdquo; and &ldquo;Mediterranean restaurant.&rdquo;
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-2">
              <h3 className="service-card-name">Google Maps Ranking</h3>
              <div className="service-card-desc">
                <p>
                  We build the signals Google needs to rank you in the top 3 map results: consistent NAP citations across 60+ directories, geo-targeted content, strategic review generation, and local link building. We track your position weekly and adjust strategy based on real ranking data.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-3">
              <h3 className="service-card-name">Local Website SEO</h3>
              <div className="service-card-desc">
                <p>
                  We optimize your website for local search terms &mdash; location-specific pages, schema markup for restaurants, menu structured data, and content that targets the exact phrases your potential guests are searching. We make sure Google understands what you serve, where you are, and why you are the best option.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-4">
              <h3 className="service-card-name">AI Search Optimization</h3>
              <div className="service-card-desc">
                <p>
                  More people are using ChatGPT, Google AI Overviews, and Perplexity to find restaurants. We optimize your online presence so AI-powered search tools recommend your restaurant when someone asks &ldquo;Where can I get authentic Georgian food?&rdquo; This is the next frontier of local SEO, and most restaurants are not prepared for it.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-1">
              <h3 className="service-card-name">Review Strategy &amp; Management</h3>
              <div className="service-card-desc">
                <p>
                  Reviews are the most important ranking factor for Google Maps and the most important trust signal for guests trying an unfamiliar cuisine. We build systematic review generation campaigns, monitor every platform, and craft responses that build trust with future guests reading your reviews.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-2">
              <h3 className="service-card-name">Citation Building &amp; Cleanup</h3>
              <div className="service-card-desc">
                <p>
                  We ensure your restaurant&apos;s name, address, and phone number are consistent across every directory, map, and listing site on the internet. Inconsistent citations confuse Google and hurt your ranking. We audit, clean, and build citations across 60+ platforms so your data is bulletproof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           STATS SECTION
           ═══════════════════════════════════════════ */}
      <div className="proof-bar">
        <div className="container">
          <div className="proof-bar-inner reveal">
            <div className="proof-bar-item">
              <div className="proof-bar-value">30&ndash;70%</div>
              <div className="proof-bar-label">More Walk-Ins From Top 3 Maps</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">76%</div>
              <div className="proof-bar-label">Visit Within 24 Hours</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">Low</div>
              <div className="proof-bar-label">Competition for Georgian Searches</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">60+</div>
              <div className="proof-bar-label">Citation Directories Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
           THE GEORGIAN ADVANTAGE
           ═══════════════════════════════════════════ */}
      <section className="section" id="advantage">
        <div className="container">
          <div className="section-label reveal">The Georgian Advantage</div>
          <h2 className="section-headline reveal">
            You are not competing against
            <br />
            200 Italian restaurants.
          </h2>
          <p className="section-subheadline reveal">
            In most American cities, Georgian restaurants have a massive SEO advantage that almost none of them are using.
          </p>

          <div className="reveal" style={{ maxWidth: '800px', margin: '2rem auto 0' }}>
            <p className="section-subheadline" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              When someone searches for &ldquo;Italian restaurant near me&rdquo; in any major city, they are competing against hundreds of listings. The cost per click is high, the map pack is crowded, and standing out requires a massive budget. Georgian restaurants face none of those problems.
            </p>
            <p className="section-subheadline" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
              In most neighborhoods, you are the only Georgian restaurant. In most cities, there are fewer than five. That means with proper optimization, you can dominate local search results at a fraction of the cost &mdash; and capture every single person searching for your cuisine.
            </p>
            <p className="section-subheadline" style={{ textAlign: 'left' }}>
              But the window is closing. As Georgian cuisine grows in popularity across the globe, more restaurants are opening. The operators who invest in local SEO now will lock in their position before the competition arrives.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content reveal">
            <div className="section-label">Ready to Rank?</div>
            <h2 className="cta-headline">
              Find out where your restaurant ranks today
              <br />
              and what it will take to reach the top.
            </h2>
            <p className="cta-subtext">
              We will pull your current Google Maps ranking, audit your Business Profile, review your citations, and show you exactly what needs to happen to get into the top 3. Free. No obligation.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary cta-btn">
                Get A Free SEO Audit
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
