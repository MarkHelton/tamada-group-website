import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '../components/Ticker';
import ServicesEffects from './ServicesEffects';

export const metadata: Metadata = {
  title: 'F&B Consulting Services | Restaurant Revenue Strategy | Tamada Group',
  description:
    'Four ways Tamada Group finds and fixes revenue leaks in restaurants and hotels. AI menu engineering, revenue audits, event strategy, and AI video menus.',
  keywords:
    'restaurant consulting services, F&B revenue audit, AI menu engineering, event revenue strategy, AI video menus, hospitality consulting',
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
              Four Ways We Find Money You Didn&apos;t Know Was There.
            </h1>

            <div className="services-hero-gold-line"></div>

            <div className="services-hero-body">
              <p>
                Most restaurants leave between 15% and 30% of their potential
                revenue on the table. Not because of bad food or a weak team —
                but because the systems behind the operation were never designed
                to capture every available dollar.
              </p>
              <p>
                We built four distinct services around the revenue leaks we see
                most often. Each one works independently. Together, they form a
                complete revenue architecture. Every engagement starts with
                understanding where you are, what is costing you money, and what
                will move the needle fastest.
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
                data-count="14"
                data-suffix="+"
              >
                14+
              </div>
              <div className="proof-bar-label">Years in F&amp;B Operations</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">$1M &rarr; $2M</div>
              <div className="proof-bar-label">Revenue Doubled</div>
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
              <div className="proof-bar-value" data-count="4">
                4
              </div>
              <div className="proof-bar-label">Properties Transformed</div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE CARDS */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-label reveal">What We Do</div>
          <h2 className="section-headline reveal">
            Four services. One goal:
            <br />
            find the revenue you are missing.
          </h2>
          <p className="section-subheadline reveal">
            Each engagement is scoped to your operation, your numbers, and your
            timeline.
          </p>

          <div className="services-cards">
            {/* Card 1: Revenue Audit */}
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
                  your restaurant or hotel F&amp;B program — from menu pricing
                  and ticket averages to labor scheduling, event capture rates,
                  and per-seat profitability.
                </p>
                <p>
                  Most operators know something is off. They can feel it in the
                  gap between how busy the floor looks and what the P&amp;L
                  actually says. The audit closes that gap with data. We examine
                  your POS reports, menu mix analyses, cost structures, staffing
                  models, and guest flow patterns. We interview your management
                  team. We sit in your dining room during service. And then we
                  build a prioritized roadmap — not a 60-page report that sits
                  in a drawer, but a clear, ranked list of the five to seven
                  changes that will recover the most revenue in the least time.
                </p>
                <p>
                  This is where every engagement should start. You cannot fix
                  what you have not measured, and most operators are making
                  decisions based on instinct when the data is sitting right
                  there in their systems, unread.
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
                  marketing that 100% of your guests interact with, usually for
                  less than 90 seconds. Most menus are designed by chefs who
                  think about food and handed to graphic designers who think
                  about aesthetics. Neither is thinking about margin
                  architecture, visual hierarchy for high-profit items, or the
                  psychology of how a guest&apos;s eye actually moves across a
                  page.
                </p>
                <p>
                  Our AI Menu Engineering service rebuilds your menu from the
                  economics up. We analyze your current menu mix data to identify
                  which items are stars (high margin, high popularity), which are
                  puzzles (high margin, low popularity), which are workhorses
                  (low margin, high popularity), and which are dead weight. Then
                  we restructure descriptions, placement, pricing, and visual
                  anchoring to shift guest behavior toward the items that make
                  you money — without raising prices or removing dishes your
                  regulars love.
                </p>
                <p>
                  The difference between a menu that was &ldquo;designed&rdquo;
                  and a menu that was engineered is typically 12% to 18% in
                  average check size. That is not a projection. That is what we
                  have measured across multiple properties after implementation.
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

            {/* Card 3: Event & F&B Revenue Strategy */}
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
                Event &amp; F&amp;B Revenue Strategy
              </h3>
              <div className="service-card-desc">
                <p>
                  Events are where restaurants and hotels leave the most money on
                  the table — and where the opportunity is largest. Private
                  dining, corporate buyouts, holiday programming, prix-fixe
                  weekends, chef&apos;s table experiences, wine dinners, seasonal
                  activations. Most operations treat events as one-off requests
                  that get handled when they come in. That is not a strategy.
                  That is order-taking.
                </p>
                <p>
                  We build event revenue systems. That means creating a 12-month
                  programming calendar, developing tiered pricing models that
                  protect margin while giving sales teams flexibility, writing
                  the proposals and BEOs that close deals faster, training your
                  team on upselling and package structuring, and building the
                  follow-up sequences that turn a one-time booking into a
                  recurring relationship. We also audit your current event
                  operations to find the gaps — the inquiries that never got
                  responses, the proposals that underpriced the room, the holiday
                  weekends that could have generated three times what they did.
                </p>
                <p>
                  When events go from reactive to systematic, the revenue impact
                  is not incremental. It is transformational. We have seen
                  properties add six figures in annual event revenue within the
                  first quarter of implementation.
                </p>
              </div>
              <div className="service-card-stat">
                <div className="service-card-stat-value">$1M+</div>
                <div className="service-card-stat-text">
                  Annual event revenue generated for a single hospitality group
                  across four properties
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
                  difference between reading about a dish and watching it arrive
                  at the table — the sear, the steam, the pour, the plating.
                  Guests do not order based on rational evaluation. They order
                  based on desire. And video creates desire in a way that no
                  description, no matter how well-written, can replicate.
                </p>
                <p>
                  Our AI Video Menu Production service creates cinematic,
                  short-form video content for your highest-margin items. These
                  are not amateur clips shot on a phone. They are professionally
                  produced, AI-enhanced visual stories that can be embedded in
                  digital menus, displayed on tabletop tablets, featured on your
                  website, and deployed across social channels. Each video is
                  engineered to highlight the sensory qualities that drive
                  ordering decisions — texture, movement, color, and the moment
                  a dish comes together.
                </p>
                <p>
                  The ROI is immediate and measurable. Properties using AI video
                  menus have seen a 22% increase in orders for featured items.
                  When your guest can see the wagyu being torched tableside
                  before they order it, the upsell conversation is already over.
                  They want it.
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

      {/* DECISION GUIDE */}
      <section className="section decision-section" id="decision-guide">
        <div className="container">
          <div className="section-label reveal">Decision Guide</div>
          <h2 className="section-headline reveal">
            Which Service Is Right For You?
          </h2>
          <p className="section-subheadline reveal">
            Start with the situation that sounds most like yours.
          </p>

          <div className="decision-grid">
            <div className="decision-card reveal stagger-1">
              <div className="decision-card-condition">
                We have never had a formal revenue review of our operation
              </div>
              <div className="decision-card-arrow">We recommend &darr;</div>
              <div className="decision-card-recommendation">
                <Link href="/revenue-audit">The Revenue Audit</Link>
              </div>
              <div className="decision-card-desc">
                This is where every engagement should start. Before optimizing
                anything, you need to see where the money is actually going —
                and where it is not. The audit gives you a ranked list of
                opportunities so you know exactly what to fix first and what it
                is worth.
              </div>
            </div>

            <div className="decision-card reveal stagger-2">
              <div className="decision-card-condition">
                Our menu has not been meaningfully updated in two or more years
              </div>
              <div className="decision-card-arrow">We recommend &darr;</div>
              <div className="decision-card-recommendation">
                <Link href="/menu-engineering">AI Menu Engineering</Link>
              </div>
              <div className="decision-card-desc">
                If your menu layout, pricing structure, and item positioning have
                not been reworked based on current sales data, you are almost
                certainly leaving 12% to 18% of potential check average on the
                table. Menu engineering is the highest-ROI change most
                restaurants can make.
              </div>
            </div>

            <div className="decision-card reveal stagger-3">
              <div className="decision-card-condition">
                Our events and private dining are underperforming or feel
                reactive
              </div>
              <div className="decision-card-arrow">We recommend &darr;</div>
              <div className="decision-card-recommendation">
                <Link href="/event-strategy">
                  Event &amp; F&amp;B Revenue Strategy
                </Link>
              </div>
              <div className="decision-card-desc">
                If your event calendar has gaps, if proposals go out late or
                underpriced, or if you do not have a 12-month programming plan,
                there is significant untapped revenue waiting. Events are the
                fastest way to add six-figure revenue to an operation that
                already has the physical space.
              </div>
            </div>

            <div className="decision-card reveal stagger-4">
              <div className="decision-card-condition">
                We want to modernize how guests experience our menu
              </div>
              <div className="decision-card-arrow">We recommend &darr;</div>
              <div className="decision-card-recommendation">
                <Link href="/ai-video-menus">AI Video Menu Production</Link>
              </div>
              <div className="decision-card-desc">
                If you are looking for a way to increase orders on high-margin
                items, differentiate your brand, and give guests a reason to
                share your restaurant on social media, video menus are the most
                forward-looking investment you can make. The visual sell
                outperforms the written sell every time.
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
                  &ldquo;I already tried a consultant and it didn&apos;t
                  work.&rdquo;
                </div>
              </div>
              <div className="objection-answer">
                <p>
                  We hear this more than any other objection, and it is almost
                  always valid. Most hospitality consultants bring frameworks
                  borrowed from other industries — retail playbooks, corporate
                  restructuring templates, MBA case studies — and try to force
                  them onto a restaurant floor. They spend weeks gathering data,
                  produce a dense report full of jargon, and leave you with
                  recommendations that sound smart in a conference room but fall
                  apart during a Friday night rush. The engagement ends, nothing
                  changes, and you are left feeling like you wasted money
                  confirming what you already suspected.
                </p>
                <p>
                  Lana did not study hospitality in a textbook. She ran
                  operations for 14 years. She has been the person managing the
                  floor during a 300-cover night, renegotiating vendor contracts
                  at 6 AM, training a new server section while rewriting the wine
                  program. When she walks into your operation, she is not
                  observing from the outside. She is reading the floor the way an
                  operator reads it — seeing the timing gaps, the menu blind
                  spots, the labor inefficiencies, and the missed upsell moments
                  that only someone who has done the job would recognize.
                </p>
                <div className="answer-highlight">
                  The difference is not the framework. It is the fact that every
                  recommendation comes from someone who has personally executed
                  it in a live operation, under real pressure, with real stakes.
                </div>
                <p>
                  We also do not disappear after delivering a report.
                  Implementation support is built into every engagement because a
                  recommendation without execution is just expensive advice.
                </p>
              </div>
            </div>

            {/* Objection 2 */}
            <div className="objection-item reveal">
              <div className="objection-question">
                <div className="objection-q-mark">Q</div>
                <div className="objection-q-text">
                  &ldquo;I can&apos;t afford a consultant right now.&rdquo;
                </div>
              </div>
              <div className="objection-answer">
                <p>
                  That is a completely understandable concern, and it is one we
                  take seriously. Restaurant margins are thin. Cash flow is
                  unpredictable. The idea of writing a check to a consultant when
                  you are trying to make payroll feels counterintuitive at best
                  and reckless at worst. We would never tell you that concern is
                  not valid.
                </p>
                <p>
                  But here is what we would ask you to consider: what is inaction
                  costing you right now? If your menu is underpriced or poorly
                  structured, you are losing 12% to 18% of potential revenue on
                  every single guest, every single night. If your events are
                  reactive instead of systematic, you are leaving five to six
                  figures of annual revenue uncaptured. If your labor model does
                  not match your revenue patterns, you are paying for hours that
                  are not producing dollars. These are not future costs. They are
                  current costs. They are on your P&amp;L right now, hiding in
                  plain sight.
                </p>
                <div className="answer-highlight">
                  The Revenue Audit is specifically designed to pay for itself
                  within the first month. We identify opportunities that can be
                  acted on immediately — pricing adjustments, menu
                  repositioning, scheduling changes — that generate returns
                  before our invoice is due.
                </div>
                <p>
                  We structure our engagements so the investment is never a leap
                  of faith. It is a calculated decision where the math is visible
                  before you commit. If the numbers do not make sense, we will
                  tell you. We would rather have an honest conversation now than
                  a disappointed client later.
                </p>
              </div>
            </div>

            {/* Objection 3 */}
            <div className="objection-item reveal">
              <div className="objection-question">
                <div className="objection-q-mark">Q</div>
                <div className="objection-q-text">
                  &ldquo;I don&apos;t have time for a big consulting
                  project.&rdquo;
                </div>
              </div>
              <div className="objection-answer">
                <p>
                  Neither do we. And neither does any operator who is actually
                  running a restaurant. The last thing you need is a consultant
                  who schedules three-hour discovery sessions, requests access to
                  every system you own, sends 40-question intake forms, and then
                  takes two months to deliver a 60-page deck that nobody reads.
                  That model exists because it justifies large fees, not because
                  it produces better outcomes.
                </p>
                <p>
                  The Revenue Audit delivers a complete, prioritized roadmap in
                  two weeks. The process requires approximately four to five
                  hours of your time total — a 90-minute walkthrough with your
                  team, access to your POS data (which we pull ourselves), and a
                  final presentation where we walk you through every finding and
                  recommendation. That is it. No ongoing meetings. No weekly
                  check-ins. No deliverables that require you to hire someone to
                  interpret them.
                </p>
                <div className="answer-highlight">
                  We built our process for operators, not for corporate boards.
                  Everything is designed to minimize your time investment and
                  maximize the speed to impact. If a recommendation cannot be
                  explained in plain language and acted on within 30 days, we do
                  not include it.
                </div>
                <p>
                  The reality is that the time you are spending right now
                  managing around revenue problems — adjusting menus by
                  instinct, guessing at event pricing, wondering why the check
                  average will not move — is more time than the audit takes. The
                  difference is that the audit ends with answers. The alternative
                  is another year of the same questions.
                </p>
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
              <div className="proof-bar-value">14 years</div>
              <div className="proof-bar-label">
                Hands-On F&amp;B Experience
              </div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">$1M &rarr; $2M</div>
              <div className="proof-bar-label">Documented Revenue Growth</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">18% AOV</div>
              <div className="proof-bar-label">Average Check Increase</div>
            </div>
            <div className="proof-bar-divider"></div>
            <div className="proof-bar-item">
              <div className="proof-bar-value">2 weeks</div>
              <div className="proof-bar-label">Audit to Roadmap</div>
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
              Not sure where to start?
              <br />
              The first call is free.
            </h2>
            <p className="cta-subtext">
              No pitch deck. No pressure. Just a conversation about where your
              operation is today, where it could be, and which service — if any
              — would get you there fastest.
            </p>
            <Link href="/contact" className="btn-primary cta-btn">
              Book A Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
