import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '../components/Ticker';
import PaidAdvertisingEffects from './PaidAdvertisingEffects';

export const metadata: Metadata = {
  title: 'Paid Advertising for Georgian Restaurants | Google & Meta Ads | Tamada Group',
  description:
    'Google Ads and Meta (Facebook + Instagram) advertising for Georgian restaurants. Targeted campaigns for diaspora communities, American foodies, and event promotion.',
  keywords:
    'Georgian restaurant Google ads, restaurant Facebook ads, restaurant paid advertising',
};

export default function PaidAdvertisingPage() {
  return (
    <>
      <PaidAdvertisingEffects />

      {/* GEORGIAN TICKER */}
      <Ticker />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-label">Paid Advertising &mdash; Tamada Group</div>

          <h1 className="hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>When</span>{' '}
            <span className="word" style={{ animationDelay: '0.48s' }}>You</span>{' '}
            <span className="word" style={{ animationDelay: '0.56s' }}>Need</span>{' '}
            <span className="word" style={{ animationDelay: '0.64s' }}>To</span>{' '}
            <span className="word" style={{ animationDelay: '0.72s' }}>Fill</span>{' '}
            <span className="word" style={{ animationDelay: '0.80s' }}>Tables</span>{' '}
            <span className="word" style={{ animationDelay: '0.88s' }}>Fast</span>{' '}
            <span className="word" style={{ animationDelay: '0.96s' }}>&mdash;</span>{' '}
            <span className="word" style={{ animationDelay: '1.04s' }}>Paid</span>{' '}
            <span className="word" style={{ animationDelay: '1.12s' }}>Ads</span>{' '}
            <span className="word" style={{ animationDelay: '1.20s' }}>Are</span>{' '}
            <span className="word" style={{ animationDelay: '1.28s' }}>The</span>{' '}
            <span className="word" style={{ animationDelay: '1.36s' }}>Accelerator.</span>
          </h1>

          <div className="hero-gold-line" />

          <p className="hero-subheadline">
            Google and Meta advertising built for Georgian restaurants &mdash; targeting the exact audiences who are most likely to walk through your door.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Get A Free Ads Audit
            </Link>
            <a href="#google-ads" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </div>

        <div className="hero-accent hero-accent-1"></div>
        <div className="hero-accent hero-accent-2"></div>
        <div className="hero-accent hero-accent-3"></div>
      </section>

      {/* ═══════════════════════════════════════════
           GOOGLE SEARCH + MAPS ADS
           ═══════════════════════════════════════════ */}
      <section className="section" id="google-ads">
        <div className="container">
          <div className="section-label reveal">Google Ads</div>
          <h2 className="section-headline reveal">
            Capture every person searching
            <br />
            for Georgian food in your city.
          </h2>
          <p className="section-subheadline reveal">
            Google Search and Maps ads put your restaurant at the top of results the moment someone is looking for exactly what you serve.
          </p>

          <div className="services-cards">
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">01</div>
              <div className="service-card-tag">Search Ads</div>
              <h3 className="service-card-name">Google Search Campaigns</h3>
              <div className="service-card-desc">
                <p>
                  We run targeted search campaigns for high-intent keywords: &ldquo;Georgian restaurant,&rdquo; &ldquo;khachapuri near me,&rdquo; &ldquo;best khinkali,&rdquo; and broader discovery terms like &ldquo;unique restaurants near me&rdquo; and &ldquo;Eastern European food.&rdquo; Because Georgian restaurant searches have low competition, your cost per click is a fraction of what Italian or sushi restaurants pay.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">Low CPC</div>
                <div className="service-card-stat-text">
                  Georgian restaurant keywords cost significantly less than mainstream cuisine searches
                </div>
              </div>
            </div>

            <div className="service-card reveal stagger-2">
              <div className="service-card-number">02</div>
              <div className="service-card-tag">Maps Ads</div>
              <h3 className="service-card-name">Google Maps Advertising</h3>
              <div className="service-card-desc">
                <p>
                  Maps ads place your restaurant at the very top of Google Maps results with a promoted pin. When someone opens Google Maps and searches for restaurants nearby, you appear first &mdash; with directions, a call button, and your menu link. This is the highest-intent advertising placement in existence for restaurants.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">Pin #1</div>
                <div className="service-card-stat-text">
                  Promoted pins appear above all organic results in Google Maps
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           META ADS
           ═══════════════════════════════════════════ */}
      <section className="section" id="meta-ads">
        <div className="container">
          <div className="section-label reveal">Meta Ads</div>
          <h2 className="section-headline reveal">
            Facebook and Instagram ads that reach
            <br />
            the three audiences that matter most.
          </h2>
          <p className="section-subheadline reveal">
            Meta&apos;s targeting capabilities let us reach exactly the people most likely to become your guests &mdash; with creative built specifically for Georgian cuisine.
          </p>

          <div className="services-cards">
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">01</div>
              <div className="service-card-tag">Diaspora</div>
              <h3 className="service-card-name">Georgian &amp; Eastern European Communities</h3>
              <div className="service-card-desc">
                <p>
                  We target Georgian, Russian, Armenian, Ukrainian, and broader Eastern European diaspora communities within driving distance of your restaurant. These audiences are already familiar with the cuisine, have high lifetime value, and spread word-of-mouth within tight-knit community networks. We reach them through language targeting, interest targeting, and custom audiences built from community group engagement.
                </p>
              </div>
            </div>

            <div className="service-card reveal stagger-2">
              <div className="service-card-number">02</div>
              <div className="service-card-tag">Foodies</div>
              <h3 className="service-card-name">American Food Enthusiasts</h3>
              <div className="service-card-desc">
                <p>
                  We target food-obsessed Americans who follow food media, visit new restaurants frequently, and share dining experiences on social media. For this audience, Georgian food is a discovery &mdash; and the creative we build leans into curiosity and visual drama. The khachapuri cheese pull video ad consistently outperforms every other creative format we test.
                </p>
              </div>
            </div>

            <div className="service-card reveal stagger-3">
              <div className="service-card-number">03</div>
              <div className="service-card-tag">Events</div>
              <h3 className="service-card-name">Food Travelers &amp; Event Seekers</h3>
              <div className="service-card-desc">
                <p>
                  For supra dinners, wine pairing events, and special occasion dining, we target people interested in unique dining experiences, culinary tourism, and group celebrations. These ads promote specific events with urgency-driven creative &mdash; limited seats, specific dates, and the promise of a dining experience they cannot get anywhere else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           EVENT PROMOTION
           ═══════════════════════════════════════════ */}
      <section className="section" id="events">
        <div className="container">
          <div className="section-label reveal">Event Advertising</div>
          <h2 className="section-headline reveal">
            Fill your supra dinners and special events
            <br />
            with targeted event promotion campaigns.
          </h2>
          <p className="section-subheadline reveal">
            The supra is one of the most powerful event concepts in the restaurant industry &mdash; a communal feast with a tamada leading toasts, 20+ dishes on the table, and an experience guests never forget. We build advertising campaigns specifically designed to sell these events.
          </p>

          <div className="services-cards">
            <div className="deliverable-card reveal stagger-1">
              <h3 className="service-card-name">Supra Dinner Campaigns</h3>
              <div className="service-card-desc">
                <p>
                  Multi-platform campaigns that promote supra dinners with video creative showing the full table spread, testimonials from past guests, and urgency-driven copy that emphasizes limited seating. We target both the diaspora audience who knows the tradition and American foodies who will discover it for the first time.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-2">
              <h3 className="service-card-name">Holiday &amp; Seasonal Events</h3>
              <div className="service-card-desc">
                <p>
                  Georgian New Year (Bedoba), Easter, wine harvest celebrations, and other cultural events are perfect opportunities for themed dining experiences. We build campaigns around your event calendar so every seat is filled before the event date arrives.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-3">
              <h3 className="service-card-name">Private Dining &amp; Group Events</h3>
              <div className="service-card-desc">
                <p>
                  We target corporate event planners, birthday and anniversary celebrants, and group dining coordinators with ads that position your restaurant as the most unique private dining option in the city. Georgian hospitality &mdash; the concept of the guest as a gift from God &mdash; is a selling point no other cuisine can match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           RETARGETING
           ═══════════════════════════════════════════ */}
      <section className="section" id="retargeting">
        <div className="container">
          <div className="section-label reveal">Retargeting</div>
          <h2 className="section-headline reveal">
            Stay in front of every person
            <br />
            who almost became a guest.
          </h2>
          <p className="section-subheadline reveal">
            Most restaurant visitors do not convert on the first touch. They visit your website, look at your menu, check your reviews &mdash; and then get distracted. Retargeting brings them back.
          </p>

          <div className="services-cards">
            <div className="deliverable-card reveal stagger-1">
              <h3 className="service-card-name">Website Visitor Retargeting</h3>
              <div className="service-card-desc">
                <p>
                  We install tracking pixels on your website and serve ads to everyone who visited but did not make a reservation. They see your best food photography, your latest event, or a limited-time offer in their Instagram and Facebook feeds &mdash; reminding them to finish what they started.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-2">
              <h3 className="service-card-name">Engagement Retargeting</h3>
              <div className="service-card-desc">
                <p>
                  Anyone who interacted with your social media content, watched your videos, or engaged with a previous ad gets retargeted with the next step &mdash; a reservation link, an event invitation, or a compelling reason to visit this week. We build sequential ad funnels that move people from awareness to action.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-3">
              <h3 className="service-card-name">Lookalike Audiences</h3>
              <div className="service-card-desc">
                <p>
                  We build custom audiences from your best customers and let Meta&apos;s algorithm find thousands of similar people in your area. This is how we scale your advertising beyond your existing audience &mdash; finding new guests who share the same characteristics as the ones who already love your restaurant.
                </p>
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
            <div className="section-label">Ready to Accelerate?</div>
            <h2 className="cta-headline">
              Find out how much it costs to fill
              <br />
              every empty seat in your restaurant.
            </h2>
            <p className="cta-subtext">
              We will audit your current advertising (if any), estimate your cost per new guest, and build a projection showing exactly what a targeted paid advertising campaign can do for your restaurant. Free. No obligation.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary cta-btn">
                Get A Free Ads Audit
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
