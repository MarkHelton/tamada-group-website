import type { Metadata } from 'next';
import Link from 'next/link';
import SocialMediaEffects from './SocialMediaEffects';

export const metadata: Metadata = {
  title: 'Social Media for Georgian Restaurants | Instagram & TikTok | Tamada Group',
  description:
    'Social media management for Georgian restaurants. Instagram, TikTok, and Facebook content that reaches the Georgian diaspora and American foodies.',
  keywords:
    'Georgian restaurant social media, restaurant Instagram management, restaurant TikTok marketing',
};

export default function SocialMediaPage() {
  return (
    <>
      <SocialMediaEffects />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-label">Social Media &mdash; Tamada Group</div>

          <h1 className="hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>Georgian</span>{' '}
            <span className="word" style={{ animationDelay: '0.48s' }}>Food</span>{' '}
            <span className="word" style={{ animationDelay: '0.56s' }}>Is</span>{' '}
            <span className="word" style={{ animationDelay: '0.64s' }}>What</span>{' '}
            <span className="word" style={{ animationDelay: '0.72s' }}>Goes</span>{' '}
            <span className="word" style={{ animationDelay: '0.80s' }}>Viral</span>{' '}
            <span className="word" style={{ animationDelay: '0.88s' }}>Right</span>{' '}
            <span className="word" style={{ animationDelay: '0.96s' }}>Now.</span>
            <br />
            <span className="word" style={{ animationDelay: '1.04s' }}>We</span>{' '}
            <span className="word" style={{ animationDelay: '1.12s' }}>Make</span>{' '}
            <span className="word" style={{ animationDelay: '1.20s' }}>Sure</span>{' '}
            <span className="word" style={{ animationDelay: '1.28s' }}>It&apos;s</span>{' '}
            <span className="word" style={{ animationDelay: '1.36s' }}>Your</span>{' '}
            <span className="word" style={{ animationDelay: '1.44s' }}>Georgian</span>{' '}
            <span className="word" style={{ animationDelay: '1.52s' }}>Food.</span>
          </h1>

          <div className="hero-gold-line" />

          <p className="hero-subheadline">
            Social media management built for Georgian restaurants &mdash; content that speaks to the diaspora, stops the American foodie mid-scroll, and fills your dining room.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary">
              Get A Free Social Media Audit
            </Link>
            <a href="#visual-advantage" className="btn-secondary">
              See The Opportunity
            </a>
          </div>
        </div>

        <div className="hero-accent hero-accent-1"></div>
        <div className="hero-accent hero-accent-2"></div>
        <div className="hero-accent hero-accent-3"></div>
      </section>

      {/* ═══════════════════════════════════════════
           THE VISUAL ADVANTAGE
           ═══════════════════════════════════════════ */}
      <section className="section" id="visual-advantage">
        <div className="container">
          <div className="section-label reveal">The Visual Advantage</div>
          <h2 className="section-headline reveal">
            Georgian food was made for social media.
            <br />
            Most Georgian restaurants are not using it.
          </h2>
          <p className="section-subheadline reveal">
            The khachapuri cheese pull. Khinkali being folded by hand. A chacha toast at a supra table surrounded by 30 dishes. The flaming cheese of imeruli. The golden crust of shotis puri pulled from a tone oven. Georgian cuisine is one of the most visually dramatic food traditions in the world &mdash; and social media algorithms reward exactly this kind of content.
          </p>

          <div className="services-cards">
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">01</div>
              <div className="service-card-tag">Visual Drama</div>
              <h3 className="service-card-name">Food That Stops The Scroll</h3>
              <div className="service-card-desc">
                <p>
                  The cheese pull of adjaruli khachapuri has become one of the most-shared food moments on TikTok and Instagram Reels. Khinkali being pleated by hand is mesmerizing process content. A supra table with 30+ dishes is the kind of overhead shot that food media accounts dream about. Your kitchen is already producing viral content &mdash; you just need someone capturing it correctly.
                </p>
              </div>
            </div>

            <div className="service-card reveal stagger-2">
              <div className="service-card-number">02</div>
              <div className="service-card-tag">Cultural Story</div>
              <h3 className="service-card-name">More Than Just Food Photos</h3>
              <div className="service-card-desc">
                <p>
                  Georgian food comes with a story that American diners are hungry for: 8,000 years of winemaking, the supra tradition of toasting and feasting, a cuisine shaped by the Silk Road. This is not just another restaurant posting plate shots. This is a cultural narrative that builds genuine connection and turns followers into guests.
                </p>
              </div>
            </div>

            <div className="service-card reveal stagger-3">
              <div className="service-card-number">03</div>
              <div className="service-card-tag">Algorithm Advantage</div>
              <h3 className="service-card-name">Novelty Drives Reach</h3>
              <div className="service-card-desc">
                <p>
                  Social media algorithms favor content that generates curiosity and engagement. Georgian food is unfamiliar to most Americans, which means your content naturally gets more saves, shares, and comments than yet another pasta or sushi post. &ldquo;What is this?&rdquo; in the comments is the algorithm&apos;s favorite signal.
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
            Full-service social media management
            <br />
            across every platform that matters.
          </h2>
          <p className="section-subheadline reveal">
            We handle everything from content creation to community management so you can focus on running your restaurant.
          </p>

          <div className="services-cards">
            <div className="deliverable-card reveal stagger-1">
              <h3 className="service-card-name">Instagram Management</h3>
              <div className="service-card-desc">
                <p>
                  Feed posts, Stories, Reels, and carousel content designed for the Instagram algorithm. We create a mix of food photography, behind-the-scenes kitchen content, cultural storytelling, guest experience moments, and event promotion. Every post is optimized with hashtags, geotags, and captions that drive engagement and discovery.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-2">
              <h3 className="service-card-name">TikTok Marketing</h3>
              <div className="service-card-desc">
                <p>
                  Short-form video content built for TikTok&apos;s discovery algorithm. Process videos of khinkali being folded, the dramatic cheese pull of khachapuri, supra table reveals, and &ldquo;come dine with me&rdquo; POV content. We know what trends to ride and how to adapt them to Georgian cuisine without losing authenticity.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-3">
              <h3 className="service-card-name">Facebook Management</h3>
              <div className="service-card-desc">
                <p>
                  Facebook remains the primary platform for the Georgian diaspora community and for event promotion. We manage your page with content that resonates with the Georgian community, promotes supra dinners and special events, and targets local Facebook Groups where your potential guests are already active.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-4">
              <h3 className="service-card-name">Content Calendar &amp; Strategy</h3>
              <div className="service-card-desc">
                <p>
                  A monthly content calendar aligned with your operational calendar &mdash; seasonal menus, Georgian holidays, supra dinner dates, and cultural moments. We plan content 30 days in advance so nothing is reactive, every post has a purpose, and your social presence builds momentum instead of sputtering.
                </p>
              </div>
            </div>

            <div className="deliverable-card reveal stagger-1">
              <h3 className="service-card-name">Community Management</h3>
              <div className="service-card-desc">
                <p>
                  We respond to every comment, DM, and mention within hours. We engage with food bloggers, local influencers, and Georgian community accounts. We turn your comment section into a conversation and your followers into a community that advocates for your restaurant organically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           THE DUAL AUDIENCE
           ═══════════════════════════════════════════ */}
      <section className="section" id="dual-audience">
        <div className="container">
          <div className="section-label reveal">The Dual Audience</div>
          <h2 className="section-headline reveal">
            Two audiences. Two strategies.
            <br />
            One social media presence.
          </h2>
          <p className="section-subheadline reveal">
            Every Georgian restaurant serves two distinct audiences &mdash; and your social media needs to speak to both.
          </p>

          <div className="services-cards">
            <div className="service-card reveal stagger-1">
              <div className="service-card-number">01</div>
              <div className="service-card-tag">Community</div>
              <h3 className="service-card-name">The Georgian Diaspora</h3>
              <div className="service-card-desc">
                <p>
                  Georgians in America miss the food from home. They are looking for authentic khinkali, proper khachapuri, and the supra experience they grew up with. They follow Georgian community groups on Facebook, share content in Georgian language, and are fiercely loyal to restaurants that get it right. We create content that speaks their language &mdash; literally and culturally.
                </p>
              </div>
            </div>

            <div className="service-card reveal stagger-2">
              <div className="service-card-number">02</div>
              <div className="service-card-tag">Discovery</div>
              <h3 className="service-card-name">The American Foodie</h3>
              <div className="service-card-desc">
                <p>
                  American food enthusiasts are actively seeking new cuisines. Georgian food is the discovery they did not know they were looking for. For this audience, we create educational content that explains what Georgian food is, why it matters, and what to order first. We use Instagram Reels and TikTok to spark curiosity and turn &ldquo;What is this?&rdquo; into &ldquo;Where is this?&rdquo;
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
            <div className="section-label">Ready to Go Viral?</div>
            <h2 className="cta-headline">
              Your kitchen is already producing content
              <br />
              that could fill your restaurant. Let us capture it.
            </h2>
            <p className="cta-subtext">
              We will audit your current social media presence, identify the biggest content opportunities, and show you what a month of professionally managed Georgian restaurant content looks like. Free. No obligation.
            </p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary cta-btn">
                Get A Free Social Media Audit
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
