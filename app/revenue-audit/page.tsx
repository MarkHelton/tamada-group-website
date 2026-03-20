import type { Metadata } from 'next';
import Link from 'next/link';
import RevenueAuditEffects from './RevenueAuditEffects';

export const metadata: Metadata = {
  title: 'Restaurant Revenue Audit | Find Your Hidden Revenue | Tamada Group',
  description:
    'Our restaurant revenue audit finds exactly where your operation is losing money. AI analytics + 20 years of real operations across 40+ Georgian restaurants. Written roadmap delivered in 2 weeks.',
  keywords:
    'restaurant revenue audit, Georgian restaurant audit, restaurant consulting, menu profitability analysis, Georgian restaurant consulting, hospitality consulting',
};

export default function RevenueAuditPage() {
  return (
    <>
      <RevenueAuditEffects />

      {/* ===============================================
           HERO SECTION
           =============================================== */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg" />
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">Revenue Audit &mdash; Tamada Group</div>
            <h1 className="hero-headline">
              <span className="word" style={{ animationDelay: '0.4s' }}>If </span>
              <span className="word" style={{ animationDelay: '0.48s' }}>Your </span>
              <span className="word" style={{ animationDelay: '0.56s' }}>Restaurant </span>
              <span className="word" style={{ animationDelay: '0.64s' }}>Is </span>
              <span className="word" style={{ animationDelay: '0.72s' }}>Doing </span>
              <span className="word" style={{ animationDelay: '0.80s' }}>Solid </span>
              <span className="word" style={{ animationDelay: '0.88s' }}>Volume </span>
              <span className="word" style={{ animationDelay: '0.96s' }}>But </span>
              <span className="word" style={{ animationDelay: '1.04s' }}>The </span>
              <span className="word" style={{ animationDelay: '1.12s' }}>Margins </span>
              <span className="word" style={{ animationDelay: '1.20s' }}>Don&rsquo;t </span>
              <span className="word" style={{ animationDelay: '1.28s' }}>Match </span>
              <span className="word" style={{ animationDelay: '1.36s' }}>&mdash; </span>
              <span className="word" style={{ animationDelay: '1.44s' }}>This </span>
              <span className="word" style={{ animationDelay: '1.52s' }}>Is </span>
              <span className="word" style={{ animationDelay: '1.60s' }}>The </span>
              <span className="word" style={{ animationDelay: '1.68s' }}>First </span>
              <span className="word" style={{ animationDelay: '1.76s' }}>Thing </span>
              <span className="word" style={{ animationDelay: '1.84s' }}>To </span>
              <span className="word" style={{ animationDelay: '1.92s' }}>Do.</span>
            </h1>
            <div className="hero-gold-line" />
            <p className="hero-subheadline">A forensic look at exactly where your operation is leaking revenue &mdash; and a written plan to fix it.</p>
            <p className="hero-body">Before you invest in marketing, before you redesign the menu, before you hire another consultant who hands you a deck full of theory &mdash; you need to know where the money is actually going. That is what this audit gives you.</p>
            <div className="hero-ctas">
              <div className="magnetic-wrap">
                <Link href="/contact" className="btn-primary">Book Your Revenue Audit</Link>
              </div>
              <a href="#what-it-is" className="btn-secondary">See What&rsquo;s Included</a>
            </div>
            <div className="hero-proof">
              <div className="hero-proof-item">
                <div className="hero-proof-icon">20+</div>
                <div className="hero-proof-text">
                  <strong>Years in Operations</strong>
                  Not theory. Real kitchens.
                </div>
              </div>
              <div className="hero-proof-item">
                <div className="hero-proof-icon">$10M+</div>
                <div className="hero-proof-text">
                  <strong>Revenue Generated</strong>
                  Across 40+ Georgian restaurants in America.
                </div>
              </div>
              <div className="hero-proof-item">
                <div className="hero-proof-icon">2W</div>
                <div className="hero-proof-text">
                  <strong>Delivered in 2 Weeks</strong>
                  Written roadmap. Not a slide deck.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-indicator-line" />
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* ===============================================
           WHAT IT IS SECTION
           =============================================== */}
      <section className="section what-section" id="what-it-is">
        <div className="container">
          <div className="reveal">
            <div className="section-label">What This Actually Is</div>
            <h2 className="section-headline">A Complete Diagnostic of Where Your Revenue Goes &mdash; and Where It Should Be Going Instead</h2>
            <div className="section-subheadline">No jargon. No frameworks. No 90-page decks that collect dust.</div>
          </div>

          <div className="what-grid" style={{ marginTop: '60px' }}>
            <div className="what-copy">
              <div className="reveal stagger-1">
                <p>Let us be direct about what this is and what it is not. This is not a strategy engagement. It is not a retainer. It is not a consulting relationship that drags on for months while someone learns your business on your dime. This is a focused, time-bound diagnostic that tells you exactly where your restaurant is losing money and exactly what to do about it.</p>
              </div>
              <div className="reveal stagger-2">
                <p>We built this audit because we kept seeing the same thing. Operators running solid restaurants &mdash; good food, decent traffic, loyal regulars &mdash; but somehow the profit never matched the effort. The margins were thin when they should have been comfortable. The events program was underperforming. The menu was priced on gut feel from three years ago. And nobody had taken the time to actually sit down and diagnose the problem with real data.</p>
              </div>
              <div className="reveal stagger-3">
                <p>That is where we come in. We are not a traditional consulting firm. We are operators who built and ran restaurants for 20+ years before we started advising other operators. We have managed P&amp;Ls across fine dining, fast casual, high-volume nightlife concepts, and multi-property hospitality groups. We have made every mistake, which means we know exactly where to look when something is off.</p>
              </div>
              <div className="reveal stagger-4">
                <p><strong>What we look at:</strong> Your full menu profitability &mdash; every single item analyzed for food cost, contribution margin, and sales velocity. Your pricing architecture &mdash; not just what you charge, but how prices interact across categories. Your event and private dining revenue &mdash; are you leaving six figures on the table? Your guest flow &mdash; from first impression to check close, where does the experience break down? Your labor allocation relative to revenue peaks. Your beverage program margins. Your off-premise and delivery economics.</p>
              </div>
              <div className="reveal stagger-5">
                <p><strong>What we deliver:</strong> A written document. Not a presentation. Not a slide deck designed to justify more consulting hours. A clear, prioritized roadmap that says: here is what is broken, here is why it is costing you money, here is what to fix first, here is the projected revenue impact of each change. We put dollar figures next to every recommendation so you can decide what is worth pursuing and what is not.</p>
              </div>
              <div className="reveal stagger-6">
                <p><strong>What you do with it:</strong> You can implement it yourself. You can hand it to your team. You can bring us on to implement it with you. We do not lock you into anything. The audit stands on its own as a complete, actionable document. Most operators tell us it pays for itself within the first 60 days of implementation &mdash; usually from a single menu pricing adjustment they would never have found on their own.</p>
              </div>
            </div>

            <div className="what-sidebar">
              <div className="reveal stagger-2">
                <div className="what-sidebar-card">
                  <h4>AI-Powered Analysis</h4>
                  <p>We use proprietary AI tools to run pricing simulations, competitive positioning analysis, and demand modeling that would take a human analyst weeks to complete manually.</p>
                </div>
              </div>
              <div className="reveal stagger-3">
                <div className="what-sidebar-card">
                  <h4>14 Years of Pattern Recognition</h4>
                  <p>AI is powerful. But it cannot tell you that your cocktail menu is underperforming because your bar layout creates a bottleneck during the 7-9pm rush. That takes experience. We bring both.</p>
                </div>
              </div>
              <div className="reveal stagger-4">
                <div className="what-sidebar-card">
                  <h4>Written for Operators, Not Boards</h4>
                  <p>Every recommendation is written in plain language with specific action steps. No buzzwords. No consulting theater. Just clear direction on what to do and why.</p>
                </div>
              </div>
              <div className="reveal stagger-5">
                <div className="what-sidebar-card">
                  <h4>Remote or On-Site</h4>
                  <p>We can conduct the full audit remotely using your POS data, photos, and video walkthrough. Or we can come to you. Either way, you get the same depth of analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================
           DELIVERABLES SECTION
           =============================================== */}
      <section className="section" id="deliverables">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <div className="section-label">What You Receive</div>
            <h2 className="section-headline">Eight Deliverables. Two Weeks. Zero Ambiguity.</h2>
            <div className="section-subheadline">Every item below is included in your Revenue Audit &mdash; delivered as a single, comprehensive document.</div>
          </div>

          <div className="deliverables-grid">
            <div className="deliverable-card reveal stagger-1">
              <span className="deliverable-icon">&#9776;</span>
              <h3>Complete Menu Profitability Analysis</h3>
              <p>Every item on your menu analyzed for food cost percentage, contribution margin, sales velocity, and strategic positioning. You will know exactly which items make you money and which ones drain it.</p>
            </div>
            <div className="deliverable-card reveal stagger-2">
              <span className="deliverable-icon">&#9881;</span>
              <h3>AI-Powered Pricing Simulation</h3>
              <p>We model multiple pricing scenarios using AI to show you the revenue impact of specific price adjustments &mdash; before you change a single thing on the menu. Data, not guesswork.</p>
            </div>
            <div className="deliverable-card reveal stagger-3">
              <span className="deliverable-icon">&#9733;</span>
              <h3>Event Revenue Assessment</h3>
              <p>A full evaluation of your private dining and events program &mdash; pricing, packages, inquiry-to-booking conversion, and untapped capacity. Most operators are leaving $100K+ here.</p>
            </div>
            <div className="deliverable-card reveal stagger-4">
              <span className="deliverable-icon">&#10070;</span>
              <h3>Guest Experience Flow Audit</h3>
              <p>From the moment a guest walks in to the moment they close their check, we map every touchpoint that influences spend per head, return frequency, and referral behavior.</p>
            </div>
            <div className="deliverable-card reveal stagger-1">
              <span className="deliverable-icon">&#9998;</span>
              <h3>Written Roadmap with Priorities</h3>
              <p>Not a list of ideas. A sequenced action plan that tells you what to do first, second, and third &mdash; organized by effort required and revenue impact expected.</p>
            </div>
            <div className="deliverable-card reveal stagger-2">
              <span className="deliverable-icon">&#36;</span>
              <h3>Projected Revenue Per Recommendation</h3>
              <p>Every recommendation comes with a dollar figure attached. You will know the projected annual revenue impact of each change so you can make informed decisions about what to prioritize.</p>
            </div>
            <div className="deliverable-card reveal stagger-3">
              <span className="deliverable-icon">&#9200;</span>
              <h3>2-Week Delivery Guarantee</h3>
              <p>From the day we receive your data, you will have the completed audit in your hands within 14 business days. No dragging. No scope creep. No waiting months for answers.</p>
            </div>
            <div className="deliverable-card reveal stagger-4">
              <span className="deliverable-icon">&#9992;</span>
              <h3>Remote or On-Site Flexibility</h3>
              <p>Full remote audit using POS exports, menu documentation, and video walkthrough. Or we fly in and do a 2-day on-site assessment. Same depth of analysis either way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================
           WHO THIS IS FOR / NOT FOR
           =============================================== */}
      <section className="section qualify-section" id="qualify">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <div className="section-label">Before You Apply</div>
            <h2 className="section-headline">This Audit Is Built for a Specific Type of Operator</h2>
            <div className="section-subheadline">We are selective about who we work with &mdash; not to be exclusive, but because this only works when the fit is right.</div>
          </div>

          <div className="qualify-grid">
            <div className="qualify-column right-for-you reveal stagger-1">
              <h3>This Is Right for You If...</h3>
              <ul className="qualify-list">
                <li>You are doing $1M+ in annual revenue but your profit margins feel thinner than they should be given your volume and traffic.</li>
                <li>You have not done a comprehensive menu profitability analysis in the last 12 months &mdash; or you have never done one at all.</li>
                <li>You suspect your pricing is off but you do not have the data to know where, how much, or what to change.</li>
                <li>You have a private dining or events program that is underperforming relative to your space and market position.</li>
                <li>You have been burned by consultants before and you want something concrete &mdash; a written document with real numbers, not a relationship that bills by the hour.</li>
                <li>You are preparing to open a second location and want to make sure your unit economics are dialed in before you scale.</li>
                <li>You are an owner-operator who is good at hospitality but knows the financial side of the business needs sharper attention.</li>
              </ul>
            </div>

            <div className="qualify-column not-for-you reveal stagger-2">
              <h3>This Is NOT Right for You If...</h3>
              <ul className="qualify-list">
                <li>You are in your first year of operation and still figuring out your concept. You need stability before optimization.</li>
                <li>You are looking for someone to run your restaurant for you. This is a diagnostic, not an operational takeover.</li>
                <li>You are not willing to share your POS data, menu costs, and financial information. We cannot diagnose what we cannot see.</li>
                <li>You want a quick fix or a magic bullet. This audit gives you a clear plan, but you still have to execute it.</li>
                <li>You are doing under $500K in annual revenue. At that volume, the audit may not generate enough ROI to justify the investment.</li>
                <li>You are not open to changing things. If the menu, the pricing, and the operations are all sacred cows, there is nothing for us to work with.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================
           THE PROCESS
           =============================================== */}
      <section className="section process-section" id="process">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <div className="section-label">How It Works</div>
            <h2 className="section-headline">Five Steps. Two Weeks. Complete Clarity.</h2>
            <div className="section-subheadline">No long discovery phases. No endless meetings. We move fast because we have done this before.</div>
          </div>

          <div className="process-steps">
            <div className="process-line">
              <div className="process-line-fill" id="processLineFill" />
            </div>

            <div className="process-step reveal stagger-1">
              <div className="process-number">1</div>
              <h3>Strategy Call</h3>
              <p>30-minute conversation to understand your operation, your goals, and your specific pain points. We determine if the audit is the right fit.</p>
            </div>

            <div className="process-step reveal stagger-2">
              <div className="process-number">2</div>
              <h3>Data Collection</h3>
              <p>We send you a secure data request for POS exports, menu documentation, cost sheets, and event history. Takes most operators about 2 hours to compile.</p>
            </div>

            <div className="process-step reveal stagger-3">
              <div className="process-number">3</div>
              <h3>Deep Analysis</h3>
              <p>Our team runs your data through AI-powered modeling alongside manual operational analysis. Every line item, every category, every revenue stream examined.</p>
            </div>

            <div className="process-step reveal stagger-4">
              <div className="process-number">4</div>
              <h3>Roadmap Delivery</h3>
              <p>You receive your complete written audit with prioritized recommendations, projected revenue impact per change, and specific implementation steps.</p>
            </div>

            <div className="process-step reveal stagger-5">
              <div className="process-number">5</div>
              <h3>Walkthrough Call</h3>
              <p>60-minute call to walk through every finding, answer your questions, and help you decide which recommendations to implement first based on your capacity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================
           PROOF — CASE STUDY NARRATIVE
           =============================================== */}
      <section className="section proof-section" id="proof">
        <div className="proof-bg" />
        <div className="proof-overlay" />
        <div className="container">
          <div className="proof-content">
            <div className="reveal" style={{ textAlign: 'center' }}>
              <div className="section-label">Case Study</div>
              <h2 className="section-headline">How a Georgian Restaurant Group Went from $1M to $10M+ in Annual Revenue</h2>
              <div className="section-subheadline">40+ properties. One audit methodology. Everything changed.</div>
            </div>

            <div className="proof-counter-row reveal">
              <div className="proof-counter-box">
                <div className="proof-counter-value" data-target="1000000">$0</div>
                <div className="proof-counter-label">Starting Revenue</div>
              </div>
              <div className="proof-arrow">&rarr;</div>
              <div className="proof-counter-box">
                <div className="proof-counter-value" data-target="10000000">$0</div>
                <div className="proof-counter-label">Revenue After Implementation</div>
              </div>
            </div>

            <div className="proof-narrative">
              <div className="reveal">
                <p>When the ownership group first reached out to us, they were frustrated. They ran a growing network of Georgian restaurants across multiple American cities &mdash; from full-service khachapuri and khinkali houses to upscale supra dining concepts and private event venues. Combined annual revenue was hovering around $1 million. The food was authentic. The locations were solid. The reviews were strong. But the profit was razor thin, and nobody could figure out why.</p>
              </div>
              <div className="reveal">
                <p>They had already hired a consulting firm the year before. That firm spent four months and delivered a 120-page presentation full of industry benchmarks, competitive analysis, and strategic frameworks. The ownership group described it to us as &ldquo;very impressive and completely useless.&rdquo; Nothing in that presentation told them specifically what to change, in what order, or what the financial impact would be.</p>
              </div>
              <div className="reveal">
                <p><strong>What the audit uncovered was not complicated &mdash; but it was invisible without the data.</strong></p>
              </div>
              <div className="reveal">
                <p>The flagship supra dining property had 34 menu items &mdash; from khachapuri variations to chakapuli and lobiani. Our analysis revealed that 11 of those items had negative contribution margins once you factored in prep labor and waste. They were literally losing money every time someone ordered them. But because those items had strong food cost percentages on paper, nobody had flagged them. The difference between food cost percentage and actual contribution margin is where most Georgian restaurant owners get fooled, and it was costing this group over $140,000 per year across those 11 items alone.</p>
              </div>
              <div className="reveal">
                <p>The Saperavi wine and cocktail program across the group was priced 22% below market for its positioning and location. The bar managers had set prices when venues opened and never adjusted them. Our AI pricing simulation showed that a strategic price increase &mdash; not across the board, but targeted to Saperavi pours and 8 specific Georgian-inspired cocktails during peak hours &mdash; would generate an additional $870,000 annually with zero impact on volume. The data showed these items had near-perfect price elasticity at the proposed levels.</p>
              </div>

              <div className="reveal">
                <blockquote>&ldquo;The audit paid for itself in the first month. I am not exaggerating. The Saperavi wine pricing change alone covered the entire cost of the engagement before we even touched the khachapuri menu.&rdquo;</blockquote>
              </div>

              <div className="reveal">
                <p>The supra event venues were the biggest surprise. They were generating about $180,000 per year in combined event revenue. Our analysis revealed that the venues were pricing traditional Georgian feast packages 40% below comparable spaces in the market, the inquiry-to-booking conversion rate was 18% (industry average for comparable venues is 35-40%), and the venues were only being utilized 3 nights per week when the market could support 5. We restructured the supra dinner packages, rewrote the inquiry response sequence, and created a Tuesday/Wednesday corporate supra event offering. Within 8 months, event revenue across the group went from $180,000 to $4.2M.</p>
              </div>
              <div className="reveal">
                <p>The bar and grill had a different problem. Volume was high but average check was stuck at $34. Our guest experience flow audit revealed that the service sequence was not structured to support upselling &mdash; not because the servers were bad, but because the menu layout, table flow, and timing made it structurally difficult. We redesigned the menu architecture, adjusted the service timing, and created a beverage pairing suggestion system. Average check moved to $42 within 90 days. On their volume, that represented over $200,000 in additional annual revenue.</p>
              </div>
              <div className="reveal">
                <p><strong>The total impact across 40+ Georgian restaurants: from $1M to over $10M in annual revenue within 14 months.</strong> Not from a rebrand. Not from a new marketing campaign. From understanding where the money was leaking and systematically closing those gaps with data-driven changes across every location.</p>
              </div>
            </div>

            <div className="proof-stats-grid reveal">
              <div className="proof-stat-card">
                <div className="proof-stat-number">10x</div>
                <div className="proof-stat-label">Revenue Increase</div>
              </div>
              <div className="proof-stat-card">
                <div className="proof-stat-number">$4.2M</div>
                <div className="proof-stat-label">Event Revenue (from $180K)</div>
              </div>
              <div className="proof-stat-card">
                <div className="proof-stat-number">$42</div>
                <div className="proof-stat-label">Avg Check (from $34)</div>
              </div>
              <div className="proof-stat-card">
                <div className="proof-stat-number">14 mo</div>
                <div className="proof-stat-label">Time to Full Implementation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================
           OBJECTION HANDLING
           =============================================== */}
      <section className="section objections-section" id="objections">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <div className="section-label">Straight Answers</div>
            <h2 className="section-headline">Questions You Are Probably Asking Right Now</h2>
            <div className="section-subheadline">We would rather address these directly than have them sit between you and a decision.</div>
          </div>

          <div className="objection-blocks">
            {/* Objection 1 */}
            <div className="objection-block reveal">
              <div className="objection-question">
                <div className="objection-number">01</div>
                <h3>&ldquo;I already hired a consultant and it was a waste of money.&rdquo;</h3>
              </div>
              <div className="objection-answer">
                <p>We hear this constantly, and honestly, we understand. The consulting industry has a well-earned reputation for charging a lot of money to tell you things you already know, packaged in presentations designed to justify more consulting hours. That is exactly why we built this audit the way we did.</p>
                <p>Most restaurant consultants come from corporate backgrounds. They know frameworks. They know theory. They know what the textbook says about food cost targets and labor ratios. What they do not know is what it feels like to be in a kitchen at 8pm on a Saturday with three call-outs, a 90-minute wait, and a private event starting in an hour. <strong>We do.</strong></p>
                <p>We spent 20+ years as operators before we started advising other operators. We managed P&amp;Ls. We built menus. We ran events. We dealt with the same vendors, the same staffing headaches, and the same cash flow pressure you deal with every week. That operational experience is what makes our analysis different &mdash; we are not looking at your numbers from the outside. We are looking at them the way an operator looks at them.</p>
                <div className="highlight-box">
                  <p>The difference is simple: we do not give you a framework to figure it out yourself. We tell you exactly what is broken, exactly what it is costing you, and exactly what to do about it &mdash; with dollar figures attached.</p>
                </div>
              </div>
            </div>

            {/* Objection 2 */}
            <div className="objection-block reveal">
              <div className="objection-question">
                <div className="objection-number">02</div>
                <h3>&ldquo;I cannot afford to invest in consulting right now.&rdquo;</h3>
              </div>
              <div className="objection-answer">
                <p>This is the most common objection we hear, and it is also the one that concerns us the most &mdash; not because it is unreasonable, but because of what it means for your operation.</p>
                <p>If you are doing over $1M in revenue and your margins are thinner than they should be, you are already paying for a revenue audit every single month. You are just paying for it in lost profit instead of in a one-time investment that fixes the problem. The average operator we work with discovers between $150,000 and $400,000 in annual revenue opportunity through the audit process. That is not hypothetical. That is based on real data from real engagements.</p>
                <p><strong>Consider the math.</strong> If your menu is mispriced by even 8% on your highest-margin items, and your events program is converting at half the industry rate, you are leaving $200,000+ per year on the table. Every month that goes by without addressing it costs you roughly $16,000 in revenue you should have captured. In three months, that is nearly $50,000. In a year, it is more than most operators spend on their entire consulting budget over a lifetime.</p>
                <div className="highlight-box">
                  <p>The question is not whether you can afford the audit. The question is how much longer you can afford not to know where your revenue is going.</p>
                </div>
              </div>
            </div>

            {/* Objection 3 */}
            <div className="objection-block reveal">
              <div className="objection-question">
                <div className="objection-number">03</div>
                <h3>&ldquo;I do not have time for a long consulting engagement.&rdquo;</h3>
              </div>
              <div className="objection-answer">
                <p>Neither do we. That is why we designed this as a 2-week process with minimal time required from you.</p>
                <p>Here is your actual time commitment: one 30-minute strategy call at the beginning, approximately 2 hours compiling the data we request (most of which is a POS export your manager can pull in 15 minutes), and one 60-minute walkthrough call at the end when we present the findings. Total time: under 4 hours spread across two weeks.</p>
                <p>We do the heavy lifting. We analyze the data. We run the simulations. We build the roadmap. We write the document. You keep running your restaurant. When it is done, you have a complete plan sitting in your inbox &mdash; ready to implement on your timeline, at your pace, in whatever order makes sense for your operation.</p>
                <p><strong>There are no weekly check-in calls. No status updates. No meetings about meetings.</strong> We disappear into the data for two weeks and come back with answers. That is it.</p>
                <div className="highlight-box">
                  <p>If you can find 4 hours across 2 weeks, you can get a complete revenue roadmap for your operation. Most operators spend more time than that dealing with a single vendor issue.</p>
                </div>
              </div>
            </div>

            {/* Objection 4 */}
            <div className="objection-block reveal">
              <div className="objection-question">
                <div className="objection-number">04</div>
                <h3>&ldquo;How do I know this will work for my specific concept?&rdquo;</h3>
              </div>
              <div className="objection-answer">
                <p>Because the methodology is not concept-specific &mdash; it is data-specific. The principles of menu profitability, pricing architecture, guest flow optimization, and event revenue maximization apply to every full-service restaurant concept. What changes is how those principles are applied, and that is where our operational experience across dozens of different concepts becomes critical.</p>
                <p>We have conducted audits for fine dining establishments doing $5M annually, neighborhood bistros doing $800K, high-volume sports bars, upscale Mexican concepts, Mediterranean restaurants, steakhouses, rooftop lounges, and multi-concept hospitality groups. The revenue leaks show up in different places depending on the concept, but they always show up &mdash; and they are always measurable.</p>
                <p><strong>A few examples of concept-specific findings from recent audits:</strong></p>
                <p>A high-end steakhouse discovered their wine program was generating a 58% margin when comparable concepts averaged 72%. The fix was not raising prices &mdash; it was restructuring the by-the-glass program and adjusting the pour cost on 6 specific bottles. Annual impact: $94,000.</p>
                <p>A fast-casual Mediterranean concept found that their lunch catering program was priced at retail per-plate rates instead of volume-adjusted rates, which was suppressing repeat orders from their 8 highest-value corporate accounts. Restructuring the catering pricing increased catering revenue by 40% in one quarter.</p>
                <div className="highlight-box">
                  <p>We do not apply a template to your business. We analyze your specific data, in your specific market, for your specific concept. The audit is custom from start to finish.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================
           FINAL CTA
           =============================================== */}
      <section className="final-cta-section" id="book">
        <div className="final-cta-bg" />
        <div className="final-cta-overlay" />
        <div className="container">
          <div className="final-cta-content reveal">
            <div className="section-label">Start the Conversation</div>
            <h2>Book Your Revenue Audit</h2>
            <p className="subline">The first step is a 30-minute strategy call. No pitch. No pressure. Just a conversation about your operation and whether this audit is the right fit.</p>
            <p className="body-text">We will ask about your current revenue, your biggest operational challenges, and what you have tried before. If we believe the audit can deliver meaningful ROI for your specific situation, we will walk you through the process and timeline. If we do not think it is the right fit, we will tell you that too &mdash; and we will point you in the right direction.</p>
            <div className="magnetic-wrap">
              <Link href="/contact" className="btn-primary final-cta-btn">Book Your Revenue Audit</Link>
            </div>
            <div className="ps-line">
              <strong>P.S.</strong> &mdash; The Georgian restaurant group in the case study above waited 18 months before reaching out to us. They later told us that delay cost them roughly $750,000 in revenue they could have captured. The audit itself took 2 weeks. The first recommendation &mdash; the Saperavi wine pricing adjustment &mdash; paid for the entire engagement within 30 days. The cost of waiting is always higher than the cost of knowing.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
