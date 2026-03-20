import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Team | Tamada Group — Georgian Restaurant Marketing Agency',
  description:
    'Meet the team behind Tamada Group. Led by Lana Chikhladze — born in Tbilisi, Georgia, 20+ years in hospitality, founder of the only marketing agency built exclusively for Georgian restaurants.',
  keywords:
    'Tamada Group team, Lana Chikhladze, Georgian restaurant marketing team, Georgian hospitality experts',
};

export default function TeamPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <div className="about-hero-label">Our Team &middot; The People Behind The Results</div>

          <h1 className="about-hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>Every</span>{' '}
            <span className="word" style={{ animationDelay: '0.5s' }}>Georgian</span>{' '}
            <span className="word" style={{ animationDelay: '0.6s' }}>Restaurant</span>{' '}
            <span className="word" style={{ animationDelay: '0.7s' }}>Gets</span>{' '}
            <span className="word" style={{ animationDelay: '0.8s' }}>Lana.</span>{' '}
            <span className="word" style={{ animationDelay: '0.95s' }}>And</span>{' '}
            <span className="word" style={{ animationDelay: '1.1s' }}>All</span>{' '}
            <span className="word" style={{ animationDelay: '1.25s' }}>Of</span>{' '}
            <span className="word" style={{ animationDelay: '1.4s' }}>Us.</span>
          </h1>

          <div className="about-hero-gold-line"></div>

          <p className="about-hero-subheadline">
            A small, specialized team. Zero handoffs. Every engagement led by the founder.
          </p>
        </div>

        <div className="hero-accent"></div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           LANA — LEAD BIO
           ═══════════════════════════════════════════ */}
      <section className="section bio-section">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-image-wrap reveal stagger-1">
              <img
                src="/lana-photo.jpg"
                alt="Lana Chikhladze — Founder & Lead Strategist, Tamada Group"
                className="bio-image"
              />
              <div className="bio-image-accent"></div>
              <div className="bio-image-tag">Founder &amp; Lead Strategist</div>
            </div>

            <div className="bio-copy">
              <div className="section-label reveal stagger-1">Founder &amp; Lead Strategist</div>
              <h2 className="reveal stagger-2">Lana Chikhladze</h2>

              <p className="bio-lead reveal stagger-3">
                Born in Tbilisi, Georgia. 20+ years building restaurants, hotels, and nightlife
                across Georgia. MBA in Executive Management. The only person in the agency
                world who has built a supra dinner program, managed diplomatic event catering,
                and run a full-service marketing agency for Georgian cuisine.
              </p>

              <p className="reveal stagger-4">
                Every client engagement at Tamada Group is led by Lana directly. There is no
                account manager between you and the strategist. No junior team member who will
                handle your Instagram while Lana is on another call. When you work with Tamada
                Group, you work with Lana &mdash; and Lana works with you the way a Georgian
                host treats a guest: with full attention, full commitment, and zero shortcuts.
              </p>

              <p className="reveal">
                Her background is unlike any other agency founder in this space. She spent two
                decades inside Georgian hospitality &mdash; not advising from the outside, but
                building from the inside. Restaurants launched from scratch. Hotels managed
                through opening. Government and diplomatic events executed at the highest level
                of protocol. More than $10 million in combined revenue generated across her
                client portfolio. An MBA that turned operational instinct into strategic
                precision. And the AI-powered tools to scale everything she knows.
              </p>

              <div className="bio-badges reveal">
                <span className="bio-badge">Born in Tbilisi, Georgia</span>
                <span className="bio-badge">MBA &mdash; Executive Management</span>
                <span className="bio-badge">$10M+ Revenue Generated</span>
                <span className="bio-badge">20+ Years Hospitality</span>
                <span className="bio-badge">40+ Properties</span>
                <span className="bio-badge">50+ F&amp;B Concepts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           TEAM STRUCTURE
           ═══════════════════════════════════════════ */}
      <section className="section team-section" id="team">
        <div className="container">
          <div className="section-label reveal">The Full Team</div>
          <h2 className="section-headline reveal stagger-2">Small By Design. Specialized By Necessity.</h2>
          <div className="section-body reveal stagger-3">
            <p>
              Tamada Group is intentionally small. Every specialist on this team was chosen
              because they extend Lana&apos;s core capabilities &mdash; not because they
              fill a headcount requirement. Analytics, video production, and design: the
              three capabilities that amplify Georgian hospitality expertise into
              measurable restaurant revenue. Nothing more. Nothing that does not serve
              your bottom line.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card reveal stagger-1">
              <div className="team-photo-wrap">
                <img src="/lana-photo.jpg" alt="Lana Chikhladze" />
              </div>
              <div className="team-info">
                <div className="team-name">Lana Chikhladze</div>
                <div className="team-title">Founder &amp; Lead Strategist</div>
                <div className="team-subtitle">
                  20+ years hospitality &middot; Born in Tbilisi, Georgia &middot; MBA
                </div>
              </div>
            </div>

            <div className="team-card reveal stagger-2">
              <div className="team-photo-wrap">
                <div className="team-placeholder">
                  <span className="team-initials">R.I.</span>
                </div>
              </div>
              <div className="team-info">
                <div className="team-name">Revenue Intelligence</div>
                <div className="team-title">AI &amp; Analytics Specialist</div>
                <div className="team-subtitle">
                  POS data analysis &middot; Menu performance modeling &middot; Growth tracking
                </div>
              </div>
            </div>

            <div className="team-card reveal stagger-3">
              <div className="team-photo-wrap">
                <div className="team-placeholder">
                  <span className="team-initials">V.S.</span>
                </div>
              </div>
              <div className="team-info">
                <div className="team-name">Video Studio</div>
                <div className="team-title">AI Video Production</div>
                <div className="team-subtitle">
                  Georgian dish cinematics &middot; QR menu video &middot; Social content
                </div>
              </div>
            </div>

            <div className="team-card reveal stagger-4">
              <div className="team-photo-wrap">
                <div className="team-placeholder">
                  <span className="team-initials">D.B.</span>
                </div>
              </div>
              <div className="team-info">
                <div className="team-name">Design &amp; Brand</div>
                <div className="team-title">Visual Strategy</div>
                <div className="team-subtitle">
                  Menu design &middot; Brand identity &middot; Georgian visual language
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           GEORGIAN PHILOSOPHY
           ═══════════════════════════════════════════ */}
      <section className="section philosophy-section">
        <div className="container">
          <div className="philosophy-card reveal">
            <span className="philosophy-icon">&#x10D0;</span>
            <h2>The Tamada Leads. Everyone Supports The Tamada.</h2>
            <p>
              In a Georgian feast, the tamada &mdash; the toastmaster &mdash; is the
              center of the table. Every voice matters, every glass is refilled, every
              guest is seen. But the tamada reads the room, sets the tone, and ensures
              that no moment is wasted. At Tamada Group, Lana is the tamada of every
              engagement. The specialists behind her ensure that every technical
              element is handled at the highest level, so that Lana&apos;s focus
              never leaves your restaurant and your revenue.
            </p>
            <p>
              This is the structure that lets us do what no large agency can do: give
              every Georgian restaurant owner the full, undivided attention of the one
              person who actually understands both their food and their business. The
              team is the infrastructure. Lana is the relationship.
            </p>
            <div className="philosophy-signature">— How Tamada Group operates</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           VALUES
           ═══════════════════════════════════════════ */}
      <section className="section values-section">
        <div className="container">
          <div className="section-label reveal">How We Work</div>
          <h2 className="section-headline reveal stagger-2">Our Operating Principles.</h2>

          <div className="values-grid">
            <div className="value-card reveal stagger-1">
              <span className="value-icon">&#9670;</span>
              <h3>No Handoffs</h3>
              <p>
                The person you talk to on the strategy call is the person who builds your
                campaign, writes your content brief, and reviews your results. Lana leads
                every engagement from first conversation to monthly reporting. There is no
                handoff to a team member who was not in the room when we made the plan.
              </p>
            </div>

            <div className="value-card reveal stagger-2">
              <span className="value-icon">&#9881;</span>
              <h3>Georgian First</h3>
              <p>
                Every decision we make is filtered through one question: does this honor
                Georgian hospitality? The food, the culture, the guests &mdash; our work
                exists to amplify what makes Georgian dining extraordinary, not to flatten
                it into something generic that could belong to any cuisine.
              </p>
            </div>

            <div className="value-card reveal stagger-3">
              <span className="value-icon">&#10022;</span>
              <h3>Results, Not Activity</h3>
              <p>
                We do not count posts, impressions, or deliverables as success. We count
                covers, revenue, event bookings, and average check. The question we ask at
                every client review is the same one you ask at the end of every service:
                did we make money tonight? If the answer is yes, we did our job.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="container">
          <h2 className="reveal">Work Directly With The Founder.</h2>
          <p className="reveal stagger-2">
            At Tamada Group, you get Lana &mdash; the Georgian hospitality expert, the revenue
            strategist, and the marketing architect &mdash; on every engagement. No junior team
            member. No handoffs. Just the most qualified person in this industry to grow your
            Georgian restaurant. The first conversation is free.
          </p>
          <div className="reveal stagger-3">
            <Link href="/contact" className="btn-primary magnetic-wrap">
              Book A Strategy Call With Lana
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
