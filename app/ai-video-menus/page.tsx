import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '../components/Ticker';
import AiVideoMenusEffects from './AiVideoMenusEffects';

export const metadata: Metadata = {
  title:
    'AI Menu Videos for Restaurants | Cinematic Menu Video Production | Tamada Group',
  description:
    'Transform your menu photography into cinematic AI videos that show dishes being prepared. Increase orders of high-margin items. Deployed on QR menus, screens, and social.',
  keywords:
    'AI menu videos, restaurant menu video, cinematic food video, QR menu video, restaurant video production, menu engineering video',
};

export default function AiVideoMenusPage() {
  return (
    <>
      <AiVideoMenusEffects />

      {/* =============================================
           TICKER
           ============================================= */}
      <Ticker />

      {/* =============================================
           HERO SECTION
           ============================================= */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg"></div>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-label">
            AI-Powered Menu Video Production &middot; A Tamada Group Service
          </div>

          <h1 className="hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>
              What
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.5s' }}>
              If
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.6s' }}>
              Your
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.7s' }}>
              Guests
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.8s' }}>
              Could
            </span>{' '}
            <span className="word" style={{ animationDelay: '0.9s' }}>
              See
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.0s' }}>
              Your
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.05s' }}>
              Most
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.1s' }}>
              Profitable
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.15s' }}>
              Dish
            </span>
            <br />
            <span className="word" style={{ animationDelay: '1.2s' }}>
              Come
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.25s' }}>
              To
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.3s' }}>
              Life
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.35s' }}>
              &mdash;
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.4s' }}>
              Before
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.45s' }}>
              They
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.5s' }}>
              Even
            </span>{' '}
            <span className="word" style={{ animationDelay: '1.55s' }}>
              Ordered?
            </span>
          </h1>

          <div className="hero-gold-line"></div>

          <p className="hero-subheadline">
            Cinematic AI video transforms static menu photography into motion
            — and motion transforms what your guests order.
          </p>

          <p className="hero-body">
            We produce short-form cinematic videos of your highest-margin dishes
            using advanced AI generation. Deployed across QR menus, table
            screens, social media, and your website, these videos shift guest
            attention — and guest spending — toward the items that matter most to
            your bottom line.
          </p>

          <div className="hero-ctas">
            <Link href="/contact" className="btn-primary cta-btn-glow">
              Request A Sample Video
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* =============================================
           THE INSIGHT — WHY VISUALS CHANGE ORDERING
           ============================================= */}
      <section className="section insight-section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">The Science Behind The Order</div>
            <h2 className="section-headline">
              Your Guests Decide What To Eat
              <br />
              In Under Three Minutes
            </h2>
            <p className="section-subheadline">
              And in that window, visual information dominates every other input.
            </p>
          </div>

          <div className="insight-grid" style={{ marginTop: '60px' }}>
            <div className="insight-copy reveal stagger-1">
              <p>
                There is a moment in every dining experience that determines your
                revenue for that table. It happens between the time a guest opens
                your menu and the time they close it. For most restaurants, this
                window lasts between 90 seconds and three minutes. Everything
                else — the service, the ambiance, the wine list — is secondary
                to this single decision point.
              </p>

              <p>
                Decades of hospitality research confirm what most operators sense
                intuitively: guests do not read menus the way they read anything
                else. They scan. They look for anchors. They gravitate toward
                items that feel familiar, safe, or visually prominent. A wall of
                text — no matter how carefully your descriptions are written —
                asks the guest to do cognitive work. And under the social
                pressure of a table, most guests default to the easiest decision,
                not the best one for your margins.
              </p>

              <p>
                Visual content short-circuits that process entirely. When a guest
                sees a dish in motion — steam curling off a broth, a knife
                gliding through a seared crust, sauce pooling across a plate —
                their brain processes that information 60,000 times faster than
                text. More importantly, it triggers an involuntary emotional
                response. They do not evaluate the dish. They want it. That is
                the difference between a guest ordering your $18 pasta and your
                $42 short rib.
              </p>

              <p>
                This is not theory. Restaurants that deploy visual menus —
                particularly video-enhanced menus — consistently report
                measurable shifts in ordering patterns. The items guests see in
                motion are the items guests order. Which means, for the first
                time, you have a mechanism to guide the decision that matters
                most: what each table spends.
              </p>
            </div>

            <div className="insight-stats reveal stagger-2">
              <div className="insight-stat">
                <div className="insight-stat-number">60,000x</div>
                <div className="insight-stat-label">
                  Faster Visual Processing
                </div>
                <div className="insight-stat-desc">
                  The human brain processes visual information 60,000 times
                  faster than text — making video the most efficient way to
                  influence a decision.
                </div>
              </div>
              <div className="insight-stat">
                <div className="insight-stat-number">3 min</div>
                <div className="insight-stat-label">The Decision Window</div>
                <div className="insight-stat-desc">
                  Guests typically decide what to order within three minutes of
                  opening the menu. Every second of that window is an opportunity
                  to guide their attention.
                </div>
              </div>
              <div className="insight-stat">
                <div className="insight-stat-number">27%</div>
                <div className="insight-stat-label">
                  Average Check Increase
                </div>
                <div className="insight-stat-desc">
                  Restaurants using video-enhanced menus report an average check
                  increase of 20-35%, driven by guests selecting higher-margin
                  items they can visualize.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
           HOW IT WORKS
           ============================================= */}
      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="process-header reveal">
            <div className="section-label">How It Works</div>
            <h2 className="section-headline">
              From Your Photography To Cinematic Video
              <br />
              In Three Steps
            </h2>
            <p className="section-subheadline">
              No film crew. No production disruption. No six-figure budget.
            </p>
          </div>

          <div className="process-steps reveal">
            <div className="process-line">
              <div className="process-line-fill" id="processLineFill"></div>
            </div>
            <div className="process-step stagger-1">
              <div className="process-step-number">1</div>
              <h3>Send Us Your Menu Photography</h3>
              <p>
                You provide your existing dish photography — the images you
                already use on your menu, website, or social media. If you
                don&apos;t have professional photography, we can coordinate that
                as part of the project. We review each image for composition,
                lighting, and AI-generation suitability, then select the shots
                that will produce the strongest cinematic output.
              </p>
            </div>
            <div className="process-step stagger-2">
              <div className="process-step-number">2</div>
              <h3>We Produce AI Cinematic Videos</h3>
              <p>
                Using advanced AI video generation, we transform each selected
                photograph into a short cinematic clip — typically 3 to 8
                seconds. Each video is individually directed: steam rising,
                sauces flowing, garnishes settling, flames licking. The result is
                not a slideshow or animation. It is photorealistic motion that
                looks like it was captured by a professional film crew in your
                kitchen.
              </p>
            </div>
            <div className="process-step stagger-3">
              <div className="process-step-number">3</div>
              <h3>Deploy Across Every Touchpoint</h3>
              <p>
                We deliver final videos optimized for every deployment channel —
                QR-code menus, in-venue screens, Instagram Reels, TikTok, your
                website, Google Business Profile, and delivery app listings. Each
                format is sized, compressed, and encoded for its platform. We
                provide integration guidance so your team can deploy with
                confidence.
              </p>
            </div>
          </div>

          <div className="process-timeline reveal">
            <p>
              Typical turnaround: 10-14 business days from photography receipt
              to final delivery.
            </p>
            <p className="process-timeline-detail">
              Most restaurants begin with 8-12 hero dishes — the items that
              matter most to margins. Additional videos can be produced as your
              menu evolves, seasonal specials rotate, or you identify new
              high-opportunity items through our ongoing menu engineering
              analysis.
            </p>
          </div>
        </div>
      </section>

      {/* =============================================
           SHOWCASE GRID
           ============================================= */}
      <section className="section showcase-section">
        <div className="container">
          <div className="showcase-header reveal">
            <div className="section-label">Visual Preview</div>
            <h2 className="section-headline">
              See The Difference Motion Makes
            </h2>
            <p className="section-subheadline">
              Static photography tells your guest what a dish looks like. Video
              tells them what it feels like.
            </p>
          </div>

          <div className="video-grid">
            <div className="video-thumb reveal stagger-1">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format&fit=crop"
                alt="Fresh salad dish with vibrant colors — AI video menu sample"
                loading="lazy"
              />
              <div className="video-thumb-overlay">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
              <div className="video-thumb-label">
                <span>Garden Composed Salad</span>
              </div>
            </div>
            <div className="video-thumb reveal stagger-2">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&auto=format&fit=crop"
                alt="Grilled meat dish with rich presentation — AI video menu sample"
                loading="lazy"
              />
              <div className="video-thumb-overlay">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
              <div className="video-thumb-label">
                <span>Wood-Fired Grill Selection</span>
              </div>
            </div>
            <div className="video-thumb reveal stagger-3">
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format&fit=crop"
                alt="Plated breakfast dish — AI video menu sample"
                loading="lazy"
              />
              <div className="video-thumb-overlay">
                <div className="play-btn">
                  <svg viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
              <div className="video-thumb-label">
                <span>Brunch Feature</span>
              </div>
            </div>
          </div>

          <p className="showcase-note reveal">
            Sample visuals — your videos are produced from your actual menu
            photography.
          </p>
        </div>
      </section>

      {/* =============================================
           WHERE IT LIVES — DEPLOYMENT
           ============================================= */}
      <section className="section deploy-section">
        <div className="container">
          <div className="deploy-header reveal">
            <div className="section-label">Deployment Channels</div>
            <h2 className="section-headline">
              Your Videos Work Everywhere
              <br />
              Your Guests Already Are
            </h2>
            <p className="section-subheadline">
              One production. Seven deployment channels. Continuous revenue
              impact.
            </p>
          </div>

          <div className="deploy-grid">
            <div className="deploy-card reveal stagger-1">
              <span className="deploy-icon">&#9744;</span>
              <h3>QR Code Menus</h3>
              <p>
                Guests scan and see your highest-margin dishes come alive. The
                most direct path from video to order — right at the moment of
                decision.
              </p>
            </div>
            <div className="deploy-card reveal stagger-2">
              <span className="deploy-icon">&#9881;</span>
              <h3>Table Screens</h3>
              <p>
                In-venue digital displays and tablet menus loop cinematic clips
                of featured items, guiding attention before the server even
                arrives.
              </p>
            </div>
            <div className="deploy-card reveal stagger-3">
              <span className="deploy-icon">&#9655;</span>
              <h3>Instagram Reels</h3>
              <p>
                Cinematic food video is the highest-performing content category
                on Instagram. Your menu videos double as organic social content
                that drives reservations.
              </p>
            </div>
            <div className="deploy-card reveal stagger-4">
              <span className="deploy-icon">&#9835;</span>
              <h3>TikTok</h3>
              <p>
                Short-form food video dominates TikTok discovery. Your
                AI-produced clips reach potential guests before they have even
                heard of your restaurant.
              </p>
            </div>
            <div className="deploy-card reveal stagger-1">
              <span className="deploy-icon">&#9741;</span>
              <h3>Your Website</h3>
              <p>
                Embed video on your menu page, homepage hero, or reservation
                flow. Guests who see dishes in motion convert to reservations at
                significantly higher rates.
              </p>
            </div>
            <div className="deploy-card reveal stagger-2">
              <span className="deploy-icon">&#9737;</span>
              <h3>Google Business</h3>
              <p>
                Video posts on your Google Business Profile increase engagement
                and click-through. Stand out in local search results with
                cinematic menu content.
              </p>
            </div>
            <div className="deploy-card reveal stagger-3">
              <span className="deploy-icon">&#9992;</span>
              <h3>Delivery Apps</h3>
              <p>
                Platforms that support video listings see dramatically higher
                order rates. Position your highest-margin delivery items with
                motion content.
              </p>
            </div>
            <div className="deploy-card reveal stagger-4">
              <span className="deploy-icon">&#9993;</span>
              <h3>Email &amp; SMS</h3>
              <p>
                Embed video previews in reservation confirmations, loyalty
                campaigns, and seasonal promotions. Give guests a reason to
                anticipate their visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
           STRATEGY CONNECTION
           ============================================= */}
      <section className="section strategy-section">
        <div className="strategy-bg"></div>
        <div className="strategy-overlay"></div>
        <div className="container strategy-content">
          <div className="reveal">
            <div className="section-label">Strategy, Not Just Production</div>
            <h2 className="section-headline">
              We Don&apos;t Just Make Videos.
              <br />
              We Decide Which Ones To Make.
            </h2>
          </div>

          <div className="strategy-grid" style={{ marginTop: '60px' }}>
            <div className="strategy-copy reveal stagger-1">
              <p>
                Any production company can turn a photograph into a video. That
                is not the hard part. The hard part — and the part that actually
                moves your revenue — is knowing which dishes to feature. A
                cinematic video of your lowest-margin pasta does nothing for your
                bottom line. A cinematic video of your highest-margin entree,
                deployed at the exact moment of decision, changes your P&amp;L.
              </p>

              <p>
                This is where Tamada Group is fundamentally different from a
                video production house. Before we produce a single frame, we
                analyze your menu through the lens of menu engineering — the
                discipline of understanding contribution margin, item popularity,
                strategic positioning, and guest psychology. We identify your
                Stars (high-margin, high-popularity), your Puzzles (high-margin,
                low-popularity), and your opportunities for strategic
                repositioning.
              </p>

              <p>
                Your Puzzles are where AI video has the most dramatic impact.
                These are the dishes with exceptional margins that guests are not
                ordering in sufficient volume — often because they lack visual
                cues, prominent placement, or emotional triggers. A cinematic
                video of a Puzzle item, deployed on a QR menu at the moment of
                decision, can shift that item from underperformer to revenue
                driver. That is not production. That is strategy.
              </p>
            </div>

            <div className="strategy-pillars reveal stagger-2">
              <div className="strategy-pillar">
                <h4>Menu Engineering Analysis</h4>
                <p>
                  We map every item by contribution margin and sales volume to
                  identify where video will have the greatest revenue impact.
                </p>
              </div>
              <div className="strategy-pillar">
                <h4>Strategic Item Selection</h4>
                <p>
                  We prioritize high-margin items that are underperforming — the
                  dishes where visual attention directly converts to incremental
                  profit.
                </p>
              </div>
              <div className="strategy-pillar">
                <h4>Deployment Sequencing</h4>
                <p>
                  We determine which channels matter most for your specific guest
                  profile and deploy in the order that drives the fastest
                  measurable return.
                </p>
              </div>
              <div className="strategy-pillar">
                <h4>Performance Measurement</h4>
                <p>
                  We track ordering pattern shifts post-deployment to validate
                  impact and refine which items receive video treatment in
                  subsequent rounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
           OBJECTION HANDLING
           ============================================= */}
      <section className="section objection-section">
        <div className="container">
          <div className="objection-container">
            <div className="reveal">
              <div className="section-label">A Common Concern</div>
              <div className="objection-quote">
                &ldquo;My guests aren&apos;t that tech-forward.&rdquo;
              </div>
            </div>

            <div className="objection-response reveal stagger-1">
              <p>We hear this often. And it made sense five years ago. It no longer does.</p>

              <p>
                QR code menus are no longer a novelty — they are standard
                practice at restaurants across every segment, from fast-casual to
                fine dining. The pandemic permanently shifted guest behavior.
                Today, scanning a QR code to view a menu is as natural as using a
                credit card. Your guests are already doing it. The question is
                whether what they see when they scan is a static PDF of your
                printed menu, or a curated visual experience designed to guide
                their decision.
              </p>

              <p>
                Table screens and digital displays are appearing in an increasing
                number of venues, from hotel restaurants to high-volume concepts.
                But even for restaurants that have not adopted in-venue
                technology, AI video menus deliver impact through the channels
                your guests are already using daily: Instagram, TikTok, Google,
                and your own website. These platforms reach guests before they
                walk through your door — shaping their expectations, their
                cravings, and their willingness to spend before they ever sit
                down.
              </p>

              <p>
                This is not about asking your guests to adopt new technology. It
                is about meeting them where they already are — with content that
                is more compelling than anything your competitors are producing.
              </p>
            </div>

            <div className="objection-facts reveal stagger-2">
              <div className="objection-fact">
                <div className="objection-fact-number">82%</div>
                <div className="objection-fact-label">
                  of diners have used a QR code menu in the past 12 months
                </div>
              </div>
              <div className="objection-fact">
                <div className="objection-fact-number">67%</div>
                <div className="objection-fact-label">
                  of restaurant discovery happens on social media before a visit
                </div>
              </div>
              <div className="objection-fact">
                <div className="objection-fact-number">4.2x</div>
                <div className="objection-fact-label">
                  higher engagement rate for video content vs. static images on
                  Instagram
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
           CTA SECTION
           ============================================= */}
      <section className="section cta-section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">Get Started</div>
            <h2 className="cta-headline">Request A Sample Video</h2>
            <p className="cta-sub">
              Send us one photograph of your signature dish. We will produce a
              sample AI cinematic video — so you can see exactly what this looks
              like for your restaurant.
            </p>
            <p className="cta-body">
              No commitment required. No production fee for the sample. We
              believe the work speaks for itself. If the video doesn&apos;t make
              you rethink how you present your menu, you&apos;ve lost nothing but
              a few minutes.
            </p>
          </div>

          <div className="cta-buttons reveal stagger-1">
            <Link href="/contact" className="btn-primary cta-btn-glow">
              Request A Sample Video
            </Link>
            <Link href="/contact" className="btn-secondary">
              Book A Strategy Call
            </Link>
          </div>

          <p className="cta-note reveal stagger-2">
            Typical response within 24 hours &middot; Sample video delivered
            within 5 business days
          </p>
        </div>
      </section>
    </>
  );
}
