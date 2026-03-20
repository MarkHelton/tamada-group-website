import type { Metadata } from 'next';
import Link from 'next/link';
import ResultsEffects from './ResultsEffects';

export const metadata: Metadata = {
  title: 'Results & Case Studies | Georgian Restaurant Marketing | Tamada Group',
  description:
    '$10M+ in combined client revenue generated across 15+ Georgian restaurant properties. See the results of Lana Chikhladze\'s 20+ year methodology for Georgian restaurants worldwide.',
  keywords:
    'Georgian restaurant results, restaurant consulting case studies, Georgian restaurant marketing results',
};

export default function ResultsPage() {
  return (
    <>
      <ResultsEffects />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <div className="about-hero-label">Results &amp; Case Studies &middot; Proof Over Promises</div>

          <h1 className="about-hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>The</span>{' '}
            <span className="word" style={{ animationDelay: '0.5s' }}>Numbers</span>{' '}
            <span className="word" style={{ animationDelay: '0.6s' }}>Don&apos;t</span>{' '}
            <span className="word" style={{ animationDelay: '0.7s' }}>Lie.</span>{' '}
            <span className="word" style={{ animationDelay: '0.8s' }}>The</span>{' '}
            <span className="word" style={{ animationDelay: '0.9s' }}>Restaurants</span>{' '}
            <span className="word" style={{ animationDelay: '1.0s' }}>Don&apos;t</span>{' '}
            <span className="word" style={{ animationDelay: '1.1s' }}>Either.</span>
          </h1>

          <div className="about-hero-gold-line"></div>

          <p className="about-hero-subheadline">$10M+ in combined revenue generated. 15+ properties transformed. 20+ years of proof.</p>
        </div>

        <div className="hero-accent"></div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           BIG PROOF COUNTER SECTION
           ═══════════════════════════════════════════ */}
      <section className="section proof-section">
        <div className="proof-bg"></div>
        <div className="proof-overlay"></div>
        <div className="container proof-content">
          <div className="section-label reveal">The Track Record</div>
          <h2 className="section-headline reveal stagger-2">Two Decades. 15+ Properties. One Methodology.</h2>

          <div className="proof-counter-row reveal">
            <div className="proof-counter-box">
              <div className="proof-counter-value" data-target="10000000" data-prefix="$">$0</div>
              <div className="proof-counter-label">Combined Revenue Generated</div>
            </div>
            <div className="proof-arrow">&rarr;</div>
            <div className="proof-counter-box">
              <div className="proof-counter-value" data-count="15" data-suffix="+">0</div>
              <div className="proof-counter-label">Properties Transformed</div>
            </div>
            <div className="proof-arrow">&rarr;</div>
            <div className="proof-counter-box">
              <div className="proof-counter-value" data-count="20" data-suffix="+">0</div>
              <div className="proof-counter-label">Years of Operations</div>
            </div>
            <div className="proof-arrow">&rarr;</div>
            <div className="proof-counter-box">
              <div className="proof-counter-value" data-count="18" data-suffix="%">0</div>
              <div className="proof-counter-label">Average AOV Increase</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CASE STUDY NARRATIVE
           ═══════════════════════════════════════════ */}
      <section className="section bio-section">
        <div className="container">
          <div className="bio-copy" style={{ maxWidth: '860px', margin: '0 auto' }}>
            <div className="section-label reveal stagger-1">Case Study: Georgian Restaurants Worldwide</div>
            <h2 className="section-headline reveal stagger-2">How One Methodology Transformed an Entire Cuisine&apos;s Market Position</h2>

            <p className="bio-lead reveal stagger-3">Over 20+ years, Lana Chikhladze has worked with more than 15 Georgian restaurant properties across the globe — building, consulting, managing, and launching concepts from Brooklyn to Los Angeles. The pattern she discovered was consistent: extraordinary food, extraordinary hospitality, and revenue that did not reflect either one.</p>

            <div className="section-divider reveal"></div>

            <h3 className="reveal">The Supra Problem: Undercharging for Extraordinary Experiences</h3>

            <p className="reveal">Georgian restaurants were offering some of the most generous dining experiences in America — multi-course supra feasts, tableside bread baking, wine poured from clay qvevri — and charging fast-casual prices for fine-dining experiences. Lana&apos;s audit work across dozens of properties revealed that Georgian restaurants were underpricing supra dinners by 30% to 50% compared to equivalent experiential dining concepts. Special events, private dining buyouts, and holiday feasts were either not offered or priced so low that they barely covered food cost. The cultural instinct toward generosity — beautiful in a home setting — was destroying margins in a commercial kitchen.</p>

            <p className="reveal">The fix was not about raising prices. It was about repositioning the entire value proposition. Supra dinners were repackaged as curated cultural experiences with tiered pricing — the Traditional Supra, the Grand Supra, the Tamada&apos;s Table. Each tier added intentional touches that cost the kitchen very little but communicated enormous value to American diners who had never experienced anything like it. Private event packages were restructured with professional BEOs, sommelier-led wine pairings, and customized toast programming. The result across Lana&apos;s client portfolio: event revenue increased by an average of 45%, and per-guest spending on supra dinners nearly doubled.</p>

            <div className="section-divider reveal"></div>

            <h3 className="reveal">Menu Engineering: Making Georgian Food Irresistible to New Markets</h3>

            <p className="reveal">Khachapuri. Khinkali. Lobio. Churchkhela. Pkhali. These words mean everything to a Georgian — and nothing to the average American diner scanning a menu for 90 seconds. Lana&apos;s menu engineering methodology, applied across 15+ properties, solved this translation problem without diluting authenticity. The approach was surgical: restructure menu descriptions to lead with sensory language and familiar reference points, then follow with the Georgian name. &ldquo;Hand-pulled cheese bread, baked to order with molten sulguni and a farm egg&rdquo; outperforms &ldquo;Adjarian Khachapuri&rdquo; on every metric — orders, satisfaction scores, and social media shares.</p>

            <p className="reveal">But description was only part of it. Menu architecture — the physical layout, visual hierarchy, price anchoring, and strategic placement of high-margin items — was rebuilt from the economics up. Khinkali, traditionally a low-price-point item, was repositioned as a shareable appetizer experience with tableside preparation storytelling. Adjarian khachapuri was moved from the bread section to a standalone feature position with visual emphasis. Wine-by-the-glass programs were restructured to spotlight Georgian wines at premium price points, with staff trained to tell the 8,000-year winemaking story that justifies every dollar. The measured result: an average 18% increase in check size across all properties where the full menu engineering was implemented.</p>

            <div className="section-divider reveal"></div>

            <h3 className="reveal">Local SEO: Owning &ldquo;Restaurants Near Me&rdquo;</h3>

            <p className="reveal">When Lana began auditing the digital presence of Georgian restaurants across their markets, the findings were consistent and alarming. Most had incomplete Google Business profiles, zero review response strategy, no local citation building, and websites that were not optimized for any search term — let alone the high-intent &ldquo;restaurants near me&rdquo; queries that drive 70% of new restaurant discovery. Georgian restaurants were invisible in the exact moment a hungry diner was searching.</p>

            <p className="reveal">The SEO strategy was built around three pillars: Google Business Profile optimization with complete menus, professional photography, and weekly post updates; a systematic review generation and response protocol that increased average review counts by 300%; and local content strategy that targeted both cuisine-specific terms (&ldquo;Georgian restaurant Brooklyn&rdquo;) and broader discovery terms (&ldquo;best date night restaurant Midtown&rdquo;, &ldquo;unique dining experience near me&rdquo;). Within 90 days, Lana&apos;s client properties consistently moved into the Google Maps 3-pack for their target neighborhoods. Within six months, organic search traffic increased by an average of 180% — translating directly to covers, reservations, and revenue.</p>

            <div className="section-divider reveal"></div>

            <h3 className="reveal">Social Media: Making Georgian Food Go Viral</h3>

            <p className="reveal">Georgian food is inherently visual. The cheese pull of an Adjarian khachapuri. The pleated folds of khinkali. The golden crust of a tone-baked shotis puri. The dramatic pour of amber wine from a clay qvevri. This was content waiting to happen — and almost no Georgian restaurant was capturing it. Social media accounts, where they existed, were posting inconsistently with phone photos and no strategic narrative.</p>

            <p className="reveal">Lana&apos;s social strategy turned Georgian restaurants into content machines. Short-form video content — the bread being pulled from the tone oven, the egg cracked into the khachapuri boat, the first bite of a juicy khinkali — was engineered for the algorithms that reward watch time, saves, and shares. Educational content about Georgia&apos;s 8,000-year wine tradition, the cultural meaning of the supra, and the craftsmanship behind each dish gave American foodies the story they needed to become evangelists. User-generated content programs turned every guest into a potential micro-influencer. The results were dramatic: client restaurants saw follower growth of 400% to 800% within the first year, with social-driven reservations becoming a measurable revenue channel for the first time.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           TESTIMONIAL SECTION
           ═══════════════════════════════════════════ */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-card reveal">
            <span className="philosophy-icon">&#10077;</span>
            <h2>What Our Clients Say</h2>

            <blockquote style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.5vw, 28px)', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--gold)', margin: '2rem 0' }}>
              &ldquo;We had the best food on the block and the worst revenue. Lana looked at our menu, our pricing, our Google profile, our event strategy — everything — and within three months we were running a completely different business. Same kitchen. Same team. Thirty percent more revenue. She understood our culture, she understood the food, and she understood what American diners needed to hear to walk through the door. No other consultant could have done what she did because no other consultant has lived in both worlds the way Lana has.&rdquo;
            </blockquote>

            <div className="philosophy-signature">— Georgian Restaurant Owner, New York</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           PROOF STATS GRID
           ═══════════════════════════════════════════ */}
      <section className="section" id="proof-stats">
        <div className="container">
          <div className="section-label reveal">By The Numbers</div>
          <h2 className="section-headline reveal stagger-2">Specific Results Across 15+ Properties</h2>
          <p className="section-subheadline reveal stagger-3">Every number below was measured, documented, and repeated across multiple Georgian restaurant operations.</p>

          <div className="proof-grid">
            <div className="proof-card reveal stagger-1">
              <div className="proof-card-number" data-count="10">0</div>
              <div className="proof-card-label">$10M+ in combined client revenue generated across restaurant, lounge, hotel, and event operations over 20+ years.</div>
            </div>
            <div className="proof-card reveal stagger-2">
              <div className="proof-card-number" data-count="15">0</div>
              <div className="proof-card-label">Georgian restaurant properties worked with — built, managed, consulted, or launched across the globe.</div>
            </div>
            <div className="proof-card reveal stagger-3">
              <div className="proof-card-number" data-count="30">0</div>
              <div className="proof-card-label">Restaurant and nightlife concepts launched from the ground up. Different formats, different markets, same revenue methodology.</div>
            </div>
            <div className="proof-card reveal stagger-4">
              <div className="proof-card-number" data-count="50">0</div>
              <div className="proof-card-label">F&amp;B concepts developed — from Georgian fine dining to fast-casual, wine bars to rooftop lounges, catering to private events.</div>
            </div>
            <div className="proof-card reveal stagger-1">
              <div className="proof-card-number" data-count="20">0</div>
              <div className="proof-card-label">Years in hospitality operations. Not advising from the sidelines. Running kitchens, managing floors, building businesses.</div>
            </div>
            <div className="proof-card reveal stagger-2">
              <div className="proof-card-number">18%</div>
              <div className="proof-card-label">Average order value increase from AI-powered menu engineering — measured across multiple properties after implementation.</div>
            </div>
            <div className="proof-card reveal stagger-3">
              <div className="proof-card-number">MBA</div>
              <div className="proof-card-label">Executive Management degree. The operational instinct is backed by formal business education and strategic rigor.</div>
            </div>
            <div className="proof-card reveal stagger-4">
              <div className="proof-card-number">180%</div>
              <div className="proof-card-label">Average increase in organic search traffic within six months of implementing local SEO strategy for Georgian restaurant clients.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="container">
          <h2 className="reveal">Your Restaurant Could Be Next</h2>
          <p className="reveal stagger-2">Every number on this page started with a single conversation. If your Georgian restaurant is underperforming its potential — or if you are launching a new concept and want to get the revenue right from day one — we should talk.</p>
          <div className="reveal stagger-3" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary magnetic-wrap">Book A Strategy Call</Link>
            <Link href="/services" className="btn-secondary">See Our Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
