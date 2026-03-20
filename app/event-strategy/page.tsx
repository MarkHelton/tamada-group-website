import type { Metadata } from 'next';
import Link from 'next/link';
import EventStrategyEffects from './EventStrategyEffects';

export const metadata: Metadata = {
  title: 'Supra Event Revenue Strategy | Georgian Dinner Event Consulting | Tamada Group',
  description:
    'Turn your supra events and Georgian feasts into your highest-margin revenue line. Tamada Group builds event pricing, upsell architecture, and revenue systems for Georgian restaurants across America.',
  keywords:
    'supra event strategy, Georgian dinner events, Georgian restaurant event consulting, event revenue optimization, Georgian private dining, supra event pricing, event upsell architecture',
};

export default function EventStrategyPage() {
  return (
    <>
      <EventStrategyEffects />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg"></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">Supra Event Revenue Strategy</div>
            <h1 className="hero-headline">
              <span className="word" style={{ animationDelay: '0.4s' }}>Events </span>
              <span className="word" style={{ animationDelay: '0.5s' }}>Are </span>
              <span className="word" style={{ animationDelay: '0.55s' }}>The </span>
              <span className="word" style={{ animationDelay: '0.6s' }}>Highest-Margin </span>
              <span className="word" style={{ animationDelay: '0.65s' }}>Opportunity </span>
              <span className="word" style={{ animationDelay: '0.7s' }}>Most </span>
              <span className="word" style={{ animationDelay: '0.75s' }}>Restaurants </span>
              <span className="word" style={{ animationDelay: '0.8s' }}>Systematically </span>
              <span className="word" style={{ animationDelay: '0.85s' }}>Undercharge </span>
              <span className="word" style={{ animationDelay: '0.9s' }}>For.</span>
            </h1>
            <div className="hero-gold-line"></div>
            <p className="hero-subheadline">Your event program is either a revenue engine or a scheduling headache. There is no middle ground.</p>
            <p className="hero-body">Most Georgian restaurants leave 60-80% of their supra and event revenue potential on the table. Not because the demand is missing &mdash; Americans are hungry for authentic Georgian feasts. Because no one built the system to capture it. Tamada Group builds supra event revenue architecture that transforms every booking into a high-margin transaction.</p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary cta-pulse">Build My Event Revenue System</Link>
              <Link href="/services" className="btn-secondary">View All Services</Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           LANA'S EVENT CREDIBILITY
           ═══════════════════════════════════════════ */}
      <section className="section credibility-section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">The Authority Behind the Strategy</div>
            <h2 className="section-headline">Born in Batumi, Georgia. Built Restaurants in Georgia.<br />Now Building Supra Events Across America.</h2>
            <div className="section-subheadline">Government delegations. International corporate conferences. High-stakes cultural events. 20+ years of experience across 40+ Georgian restaurants. Alone. In contexts where failure was not an option.</div>
          </div>

          <div className="credibility-grid">
            <div className="credibility-copy reveal stagger-1">
              <p>Before Tamada Group existed as a consulting firm, Lana Chikhladze &mdash; born in Batumi, Georgia &mdash; spent 20+ years operating at the highest tier of international event execution and Georgian hospitality. She grew up in the supra tradition, where the tamada leads the feast and every toast carries meaning. She managed events for China&rsquo;s Business Council delegations, where every detail carried diplomatic weight and every misstep carried political consequence. These were not cocktail hours. These were multi-day programs involving government officials, corporate leadership, translators, cultural protocols, and security requirements that most event coordinators have never encountered and would not know how to manage.</p>

              <p>She executed high-stakes weddings in international resort settings where the guest list included public figures and the budget reflected the kind of scrutiny that comes with it. The flower arrangement is not just a centerpiece when the family has a net worth that exceeds your annual revenue. The wine selection is not a suggestion when the table includes a sommelier from Bordeaux. These details matter in a way that most domestic event teams never face, and Lana delivered on every one of them without a department behind her. She was the department.</p>

              <p>International corporate conferences followed. Multi-national firms booking resort properties for executive retreats, leadership offsites, and client-facing showcases. The kind of events where the F&amp;B program is not a side note on the agenda but the centerpiece that determines whether the client books again next year. Lana designed the menus, managed the vendor relationships, choreographed the service flow, and handled the inevitable last-minute changes that come when a C-suite executive decides at 4pm that the dinner format needs to shift from plated to family-style for forty-two guests.</p>

              <p>This is not background noise. This is the foundation of everything Tamada Group builds for your supra event program. When we design your pricing architecture for Georgian feasts, your upsell sequences from standard supra to premium supra with Saperavi wine pairings, and your staff briefing frameworks, we are drawing on operational experience that most consultants cannot claim. Lana has been in the room. She has been the tamada. And she has done it at a level of stakes that makes your Saturday night private dining event feel, respectfully, manageable.</p>
            </div>

            <div className="credibility-stats reveal stagger-2">
              <div className="cred-stat-card">
                <span className="cred-stat-icon">&#9733;</span>
                <div className="cred-stat-title">Government &amp; Diplomatic Events</div>
                <div className="cred-stat-desc">Managed events for China&rsquo;s Business Council and international government delegations with zero margin for error and full diplomatic protocol compliance.</div>
              </div>
              <div className="cred-stat-card">
                <span className="cred-stat-icon">&#9830;</span>
                <div className="cred-stat-title">International Resort Operations</div>
                <div className="cred-stat-desc">Sole event lead for luxury resort properties handling multi-day programs, VIP guest management, and cross-cultural service coordination.</div>
              </div>
              <div className="cred-stat-card">
                <span className="cred-stat-icon">&#9827;</span>
                <div className="cred-stat-title">High-Stakes Wedding Execution</div>
                <div className="cred-stat-desc">Delivered flawless execution for high-net-worth weddings where the F&amp;B program alone exceeded the annual event revenue of most independent restaurants.</div>
              </div>
              <div className="cred-stat-card">
                <span className="cred-stat-icon">&#9824;</span>
                <div className="cred-stat-title">Corporate Conference Programs</div>
                <div className="cred-stat-desc">Designed and executed executive retreat F&amp;B programming for multi-national corporations, turning event dining into a client retention tool.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           THE PROBLEM
           ═══════════════════════════════════════════ */}
      <section className="section problem-section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">The Revenue You Are Missing</div>
            <h2 className="section-headline">Your Events Are Underperforming.<br />And You Probably Don&rsquo;t Know By How Much.</h2>
            <div className="section-subheadline">The gap between what your events generate and what they should generate is almost certainly larger than you think.</div>
          </div>

          <div className="problem-grid">
            <div className="problem-copy reveal stagger-1">
              <p>The typical Georgian restaurant treats events as a side business. Someone calls and asks if you can host a supra for thirty. The manager says yes, pulls a few tables together, maybe offers a set Georgian feast menu or a prix fixe option that was put together three years ago and has not been updated since. The event happens. It goes fine. The check is decent. Everyone moves on. And the operator never realizes that the same event, with the right pricing structure and upsell architecture, could have generated 40-60% more revenue with zero additional effort.</p>

              <p>This is the pattern we see in nearly every restaurant and hotel we audit. The event capability is there. The demand is there. What is missing is the system. There is no tiered pricing by event category. There is no structured upsell sequence that moves a client from a base package to a premium package through a natural, non-pushy progression. There is no revenue target per event type that gives the team a benchmark to hit. There is no follow-up process that turns a one-time booking into a recurring relationship.</p>

              <p>The result is predictable and consistent. Events bring in a fraction of what they should. The operator looks at the event line on the P&amp;L and sees revenue, and that revenue feels like a bonus because it required relatively little marketing spend to generate. But the number is wrong. It is low. And because there is no benchmark, no pricing framework, and no system in place, the operator has no way of knowing how low it actually is.</p>

              <p>We have seen Georgian restaurants where the supra event revenue per cover was less than the regular dining revenue per cover. That should be impossible. A full Georgian supra &mdash; with khachapuri, khinkali, chakapuli, lobiani, and Saperavi wine toasts &mdash; carries a premium. Guests expect to pay more for that experience. They are prepared to pay more. But when you hand them a pricing sheet that was designed by a manager who was afraid of scaring them away, you get exactly what you asked for: the minimum.</p>
            </div>

            <div className="problem-list reveal stagger-2">
              <div className="problem-item">
                <div className="problem-item-text">No tiered pricing structure. One flat rate for every event type, leaving premium revenue uncaptured.</div>
              </div>
              <div className="problem-item">
                <div className="problem-item-text">No upsell sequences. Clients book the base package because no one showed them what the next level looks like.</div>
              </div>
              <div className="problem-item">
                <div className="problem-item-text">No revenue targets per event type. The team has no benchmark, so they celebrate bookings that should have been twice as large.</div>
              </div>
              <div className="problem-item">
                <div className="problem-item-text">No staff briefing frameworks. Servers and managers are improvising the sales conversation for every booking.</div>
              </div>
              <div className="problem-item">
                <div className="problem-item-text">No rebooking system. A successful event ends with a handshake instead of a calendar hold for next year.</div>
              </div>
              <div className="problem-item">
                <div className="problem-item-text">&ldquo;We can do events&rdquo; on the website. Nothing more. No dedicated event landing page, no visual storytelling, no conversion path.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           PULL QUOTE
           ═══════════════════════════════════════════ */}
      <section className="pull-quote-section">
        <div className="container">
          <div className="reveal">
            <blockquote className="pull-quote">
              The difference between a restaurant that does events and a restaurant that has an event revenue system is usually six figures annually.
            </blockquote>
            <div className="pull-quote-attr">Tamada Group Event Strategy Analysis</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           WHAT WE BUILD — DELIVERABLES
           ═══════════════════════════════════════════ */}
      <section className="section deliverables-section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">What We Build For You</div>
            <h2 className="section-headline">A Complete Event Revenue System.<br />Not a Template. Not a Checklist.</h2>
          </div>

          <div className="deliverables-intro reveal stagger-1">
            <p>Every deliverable we produce is built specifically for your property, your market, your capacity, and your competitive position. We do not hand you a generic event planning guide and wish you luck. We build a revenue machine that your team can operate starting the week we deliver it. Each component interlocks with the others to create a system where every event booking moves through a structured path from inquiry to execution to rebooking.</p>
            <p>This is what separates strategy from advice. Advice tells you what to do. Strategy gives you the tools, the scripts, the frameworks, and the benchmarks to do it consistently, profitably, and at scale.</p>
          </div>

          <div className="deliverables-grid">
            <div className="deliverable-card reveal stagger-1">
              <span className="deliverable-icon">&#9670;</span>
              <h3>Event Pricing Structure by Category</h3>
              <p>Tiered pricing architecture for every event type your property can host. Base, premium, and signature tiers with clear value differentiation that makes the upsell feel natural, not forced. Built around your cost structure, your competitive market, and your margin targets.</p>
            </div>
            <div className="deliverable-card reveal stagger-2">
              <span className="deliverable-icon">&#9650;</span>
              <h3>Upsell Sequences for Each Event Type</h3>
              <p>Scripted upsell paths that move clients from the base tier to the premium tier through a logical, benefit-driven conversation. Your team will know exactly what to offer, when to offer it, and how to frame it so the client feels they are upgrading their experience rather than spending more money.</p>
            </div>
            <div className="deliverable-card reveal stagger-3">
              <span className="deliverable-icon">&#9632;</span>
              <h3>Revenue Targets per Event Type</h3>
              <p>Specific, measurable revenue benchmarks for every category of event. Your team will know what a good booking looks like versus a great one. Management will know when the event program is performing and when it needs attention. No more guessing.</p>
            </div>
            <div className="deliverable-card reveal stagger-4">
              <span className="deliverable-icon">&#9733;</span>
              <h3>Staff Briefing Frameworks</h3>
              <p>Pre-event briefing templates that ensure every team member knows the revenue objectives, the upsell opportunities, and the service standards for that specific event. Eliminates improvisation. Creates consistency. Turns your service team into a revenue team.</p>
            </div>
            <div className="deliverable-card reveal stagger-5">
              <span className="deliverable-icon">&#8634;</span>
              <h3>Follow-Up &amp; Rebooking Systems</h3>
              <p>Post-event follow-up sequences that capture feedback, reinforce the experience, and convert one-time clients into annual bookings. Includes email templates, timing frameworks, and rebooking incentive structures that keep your event calendar full twelve months ahead.</p>
            </div>
            <div className="deliverable-card reveal stagger-6">
              <span className="deliverable-icon">&#9878;</span>
              <h3>Event Inquiry Conversion Process</h3>
              <p>A structured response framework for every inbound event inquiry. From the first phone call to the signed contract, your team follows a conversion path designed to close at the highest possible tier. No more lost leads, no more underquoted proposals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           EVENT TYPES COVERED
           ═══════════════════════════════════════════ */}
      <section className="section event-types-section">
        <div className="container">
          <div className="event-types-header reveal">
            <div className="section-label">Event Categories We Optimize</div>
            <h2 className="section-headline">Every Event Type Has Its Own Revenue Architecture.</h2>
            <p>A corporate dinner and a wedding reception have different guest psychology, different spending patterns, and different upsell opportunities. We build category-specific strategies because a one-size-fits-all approach is how you end up undercharging for everything.</p>
          </div>

          <div className="event-types-grid">
            <div className="event-type-card reveal stagger-1">
              <span className="event-type-icon">&#127970;</span>
              <h3>Corporate Events</h3>
              <p>Client dinners, team outings, quarterly celebrations. Corporate budgets are larger than personal budgets. Your pricing should reflect that.</p>
            </div>
            <div className="event-type-card reveal stagger-2">
              <span className="event-type-icon">&#127863;</span>
              <h3>Private Dining</h3>
              <p>Intimate gatherings, milestone celebrations, exclusive tasting experiences. The per-cover revenue potential here is the highest of any event category.</p>
            </div>
            <div className="event-type-card reveal stagger-3">
              <span className="event-type-icon">&#128141;</span>
              <h3>Weddings</h3>
              <p>Rehearsal dinners, receptions, brunch-the-morning-after. Wedding spend is emotional, aspirational, and remarkably price-insensitive when framed correctly.</p>
            </div>
            <div className="event-type-card reveal stagger-4">
              <span className="event-type-icon">&#127963;</span>
              <h3>Government &amp; Diplomatic</h3>
              <p>Protocol-heavy events requiring precision, discretion, and flawless execution. Few operators pursue this segment. Those who do command premium rates.</p>
            </div>
            <div className="event-type-card reveal stagger-5">
              <span className="event-type-icon">&#127775;</span>
              <h3>Product Launches</h3>
              <p>Brand activations, media events, influencer dinners. These clients are spending someone else&rsquo;s marketing budget. Price accordingly.</p>
            </div>
            <div className="event-type-card reveal stagger-6">
              <span className="event-type-icon">&#127878;</span>
              <h3>Large Parties</h3>
              <p>Birthdays, anniversaries, reunions, retirement celebrations. High volume, high emotion, and high upsell potential on beverage and add-ons.</p>
            </div>
            <div className="event-type-card reveal stagger-7">
              <span className="event-type-icon">&#127876;</span>
              <h3>Holiday Programming</h3>
              <p>New Year&rsquo;s Eve, Valentine&rsquo;s Day, Mother&rsquo;s Day, Thanksgiving. These dates sell themselves. The question is whether you are capturing the full premium.</p>
            </div>
            <div className="event-type-card reveal stagger-7">
              <span className="event-type-icon">&#127942;</span>
              <h3>Awards &amp; Galas</h3>
              <p>Charity dinners, industry awards, recognition events. High guest counts, premium bar spend, and clients who need the event to look exceptional.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           PROOF / WHAT THIS MEANS FOR YOU
           ═══════════════════════════════════════════ */}
      <section className="section proof-section">
        <div className="proof-bg"></div>
        <div className="proof-overlay"></div>
        <div className="container">
          <div className="proof-content">
            <div className="reveal">
              <div className="section-label">What International Execution Means For Your Property</div>
              <h2 className="section-headline">The Standards Lana Operated At<br />Are Now The Standards We Build For You.</h2>
              <div className="section-subheadline">When the baseline is diplomatic-level precision, everything else becomes a matter of calibration.</div>
            </div>

            <div className="proof-grid">
              <div className="proof-copy reveal stagger-1">
                <p>When you have managed an event where a miscommunication about the seating arrangement could create an international incident, you develop a particular relationship with detail. When you have coordinated a dinner where the wine selection needed to honor three different cultural traditions simultaneously, you learn to think in systems rather than checklists. This is what Lana brings to every event strategy engagement, and it is why our deliverables function differently than what you will get from a standard hospitality consultant.</p>

                <p>Consider what this translates to for a high-end steakhouse in Las Vegas. The corporate event program is not just a prix fixe menu and a reserved section. It is a tiered experience architecture where the base package positions the restaurant as premium, the signature package positions it as exclusive, and the upsell path between them feels like a natural elevation rather than a sales pitch. The staff briefing is not a five-minute huddle before service. It is a structured document that gives every team member the context they need to deliver the experience and capture the revenue.</p>

                <p>Consider what it means for a hotel restaurant in Miami. The wedding program is not a banquet menu with a per-head price. It is a curated experience that begins at first inquiry and extends through a post-event follow-up sequence designed to generate referrals and rebookings. The pricing is structured to capture the emotional premium that wedding clients are willing to pay, without ever feeling predatory or transactional. The upsell sequences are built around the moments in the planning process when the client is most receptive to enhancement.</p>

                <p>This is not theory. This is pattern recognition from hundreds of high-stakes events, applied to the specific operational context of your property. The gap between what your events generate today and what they could generate with the right system in place is not incremental. For most properties, it is transformational. We have seen operators add six figures to their annual event revenue within the first year of implementing the system we build. Not through more events. Through better architecture around the events they were already hosting.</p>
              </div>

              <div className="proof-badges reveal stagger-2">
                <div className="proof-badge">
                  <div className="proof-badge-icon">&#9650;</div>
                  <div className="proof-badge-text">
                    <h4>Pricing Precision</h4>
                    <p>Tiered pricing structures built from international event benchmarks, calibrated for your local market and competitive position.</p>
                  </div>
                </div>
                <div className="proof-badge">
                  <div className="proof-badge-icon">&#9632;</div>
                  <div className="proof-badge-text">
                    <h4>Service Choreography</h4>
                    <p>Staff frameworks drawn from diplomatic-level service standards. Your team operates with the precision of a property that hosts heads of state.</p>
                  </div>
                </div>
                <div className="proof-badge">
                  <div className="proof-badge-icon">&#9670;</div>
                  <div className="proof-badge-text">
                    <h4>Revenue Architecture</h4>
                    <p>Every touchpoint from inquiry to rebooking is a revenue opportunity. We build the system that ensures none of them are missed.</p>
                  </div>
                </div>
                <div className="proof-badge">
                  <div className="proof-badge-icon">&#9733;</div>
                  <div className="proof-badge-text">
                    <h4>Cultural Intelligence</h4>
                    <p>Experience across dozens of cultural contexts means your event program handles diverse clientele with grace and confidence.</p>
                  </div>
                </div>
                <div className="proof-badge">
                  <div className="proof-badge-icon">&#8634;</div>
                  <div className="proof-badge-text">
                    <h4>Rebooking Engine</h4>
                    <p>Follow-up systems that convert one-time event clients into annual accounts. Your calendar fills itself twelve months ahead.</p>
                  </div>
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
          <div className="reveal">
            <div className="section-label">Start Building</div>
            <h2 className="section-headline">Your Supra Events Should Be Your Highest-Margin Revenue Line. Let&rsquo;s Make Them One.</h2>
            <div className="section-body">
              <p>Every week without a supra event revenue system is a week of Georgian feast bookings priced below their potential. We build the pricing, the upsell architecture from standard supra to premium Saperavi-paired experiences, the staff frameworks, and the rebooking systems that turn your event program into the most profitable part of your operation.</p>
            </div>
            <div className="cta-buttons">
              <Link href="/contact" className="btn-primary cta-pulse">Build My Event Revenue System</Link>
              <Link href="/services" className="btn-secondary">Explore All Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
