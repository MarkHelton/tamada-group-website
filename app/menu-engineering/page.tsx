import type { Metadata } from 'next';
import Link from 'next/link';
import MenuEngineeringEffects from './MenuEngineeringEffects';

export const metadata: Metadata = {
  title: 'AI Menu Engineering for Restaurants | Increase Average Check | Tamada Group',
  description:
    'AI menu engineering that increases average check by up to 18%. Same methodology as top restaurant chains. Now available for Georgian restaurants across America.',
  keywords:
    'menu engineering, Georgian menu engineering, khachapuri menu optimization, restaurant menu design, increase average check, menu psychology, AI menu optimization, Georgian restaurant profit optimization',
};

export default function MenuEngineeringPage() {
  return (
    <>
      <MenuEngineeringEffects />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg" />
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">AI Menu Engineering</div>
            <h1 className="hero-headline">
              <span className="word" style={{ animationDelay: '0.4s' }}>Your </span>
              <span className="word" style={{ animationDelay: '0.5s' }}>Menu </span>
              <span className="word" style={{ animationDelay: '0.6s' }}>Is </span>
              <span className="word" style={{ animationDelay: '0.7s' }}>Talking </span>
              <span className="word" style={{ animationDelay: '0.8s' }}>To </span>
              <span className="word" style={{ animationDelay: '0.9s' }}>Your </span>
              <span className="word" style={{ animationDelay: '1.0s' }}>Guests </span>
              <span className="word" style={{ animationDelay: '1.1s' }}>Right </span>
              <span className="word" style={{ animationDelay: '1.2s' }}>Now. </span><br />
              <span className="word" style={{ animationDelay: '1.3s' }}>The </span>
              <span className="word" style={{ animationDelay: '1.4s' }}>Question </span>
              <span className="word" style={{ animationDelay: '1.5s' }}>Is </span>
              <span className="word" style={{ animationDelay: '1.6s' }}>Whether </span>
              <span className="word" style={{ animationDelay: '1.7s' }}>It&apos;s </span>
              <span className="word" style={{ animationDelay: '1.8s' }}>Saying </span>
              <span className="word" style={{ animationDelay: '1.9s' }}>The </span>
              <span className="word" style={{ animationDelay: '2.0s' }}>Right </span>
              <span className="word" style={{ animationDelay: '2.1s' }}>Things.</span>
            </h1>
            <div className="hero-gold-line" />
            <p className="hero-subheadline">Every menu is a sales conversation. Most are saying the wrong things to the wrong people at the wrong price.</p>
            <p className="hero-body">The same methodology used by chains generating billions in annual revenue is now available to Georgian restaurants across America. AI-powered analysis of your POS data, guest behavior, and menu psychology — positioning your khachapuri as the hero item, guiding guests from khinkali to chakapuli, and translating your menu into a sales instrument.</p>
            <div className="hero-ctas">
              <Link href="/contact" className="btn-primary">Engineer My Menu</Link>
              <a href="#process" className="btn-secondary">See The Process</a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-indicator-line" />
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           THE PROBLEM SECTION
           ═══════════════════════════════════════════ */}
      <section className="section problem-section">
        <div className="container">
          <div className="reveal">
            <div className="section-label">The Problem You Cannot See</div>
            <h2 className="section-headline">Your Guests Decide What to Order<br />in Under Three Minutes</h2>
            <p className="section-subheadline">That window is your entire sales conversation. And most menus waste it.</p>
          </div>

          <div className="problem-grid">
            <div className="problem-copy reveal stagger-1">
              <p>Here is what happens when a guest opens your menu. Their eyes do not start at the top left and read line by line like a book. Decades of eye-tracking research — the same research that determines where products sit on grocery shelves — has mapped exactly where the human eye travels across a menu. There is a golden triangle. There are dead zones. There are areas that receive twelve times more visual attention than others.</p>

              <p>Your highest-margin dishes may be sitting in a dead zone right now. Your lowest-margin crowd-pleasers may be occupying the most valuable real estate on the page. This is not theory. This is measurable. And in most independent restaurants, it is costing the operator between 8% and 22% of potential profit — every single service, every single day, compounding across months and years into a revenue gap that never gets diagnosed because the restaurant is technically &ldquo;doing fine.&rdquo;</p>

              <p>The problem is subtle, which makes it dangerous. Nobody complains about a menu that underperforms. Guests still order. They still enjoy the meal. They still come back. The menu is not failing. It is simply not performing. The difference between a menu that lists items and a menu that sells them is invisible to the naked eye — but it shows up in your POS data with absolute clarity, once you know where to look.</p>

              <p>Consider this: chain restaurants spend between $200,000 and $500,000 on menu engineering per concept. They employ teams of behavioral psychologists, pricing strategists, and data scientists to optimize every element — from font choices to color theory to the exact dollar amount that triggers a psychological price threshold. They do this because it works. Because every point of average check improvement across hundreds of locations compounds into hundreds of millions in additional revenue.</p>

              <p>Georgian restaurant owners compete against these menus every day. Not with the same tools. Not with the same data. Not with the same understanding of how a menu actually functions as a sales instrument. Your khachapuri, khinkali, and lobiani deserve better than a menu that buries them. Until now.</p>
            </div>

            <div className="problem-insights reveal stagger-2">
              <div className="insight-card">
                <div className="insight-number">3 min</div>
                <div className="insight-label">Average Decision Window</div>
                <div className="insight-desc">The time between opening a menu and deciding what to order. Every design decision either accelerates or derails the path to your highest-margin items.</div>
              </div>
              <div className="insight-card">
                <div className="insight-number">73%</div>
                <div className="insight-label">First Item Viewed</div>
                <div className="insight-desc">Of guests order one of the first three items their eyes land on. Placement is not a design preference — it is a revenue decision.</div>
              </div>
              <div className="insight-card">
                <div className="insight-number">12x</div>
                <div className="insight-label">Attention Variance</div>
                <div className="insight-desc">The difference in visual attention between the highest-traffic zone and the lowest on a standard two-panel menu. Most operators have never mapped this.</div>
              </div>
              <div className="insight-card">
                <div className="insight-number">$0</div>
                <div className="insight-label">Cost of Current Losses</div>
                <div className="insight-desc">The losses from an unengineered menu never appear on a P&amp;L. They manifest as revenue you never knew you could have had.</div>
              </div>
            </div>
          </div>

          <div className="problem-close reveal">
            <p>The most expensive problem in your restaurant is the one that never announces itself. An unengineered menu is that problem.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           WHAT AI MENU ENGINEERING IS
           ═══════════════════════════════════════════ */}
      <section className="section demystify-section" id="demystify">
        <div className="container">
          <div className="reveal">
            <div className="section-label">What This Actually Is</div>
            <h2 className="section-headline">Not Robots. Not Algorithms Replacing Your Chef.<br />Data Making Your Existing Menu Smarter.</h2>
            <p className="section-subheadline">We analyze what your guests already tell you through their orders — then restructure the menu so they see the right items at the right time.</p>
          </div>

          <div className="demystify-content reveal stagger-1">
            <p>Let us be direct about what AI menu engineering is and is not. It is not a robot redesigning your restaurant. It is not an algorithm telling your chef what to cook. It is not a Silicon Valley experiment that ignores the reality of running a kitchen at 200 covers on a Friday night. What it is — and all it is — is the intelligent analysis of data you already produce every single day from your point-of-sale system, combined with behavioral science that has been validated across thousands of restaurant concepts.</p>

            <p>Here is what happens. We take 90 days of your POS data. Every transaction. Every item sold. Every time of day, every day of the week, every combination of items ordered together. We feed this into analytical models that identify patterns no human could detect by scrolling through spreadsheets — which items are ordered frequently but carry low margins, which items carry extraordinary margins but sit in menu positions that suppress their sales, which price points create psychological barriers that cause guests to trade down, and which items are cannibalizing each other because they sit adjacent on the page and compete for the same appetite.</p>

            <p>Then we apply the behavioral science. The eye-tracking research. The pricing psychology. The visual hierarchy principles that determine how a guest&apos;s attention moves across your specific menu format — whether that is a single page, a bi-fold, a tri-fold, a digital display, or a QR-code experience. We map your high-performers to high-visibility positions. We restructure pricing to remove barriers. We adjust descriptions to trigger the specific purchase drivers that your POS data reveals your guests respond to. The result is a menu that looks like your menu, feels like your restaurant, carries your chef&apos;s dishes — and sells <span className="stat-highlight">18% more per guest</span> than the one you have today.</p>

            <p>The reason this works is not complicated. Your guests already want to spend more. Your POS data proves it — there are guests in your data right now who ordered an appetizer, an entree, a dessert, and a cocktail pairing. The question is why more of them do not. The answer, in almost every case, is the menu itself. It is presenting too many choices without guidance, burying the items that create the highest per-guest revenue, and pricing in patterns that trigger unconscious resistance. Fix these structural issues and spending increases — not because you pressured anyone, but because you removed the friction between what guests want and what they order.</p>
          </div>

          <div className="demystify-stats reveal stagger-2">
            <div className="demystify-stat-card">
              <div className="demystify-stat-value" data-count="18">0</div>
              <div className="demystify-stat-label">Average Check Improvement</div>
              <div className="demystify-stat-source">Measured across Tamada Group client implementations, 2024-2026</div>
            </div>
            <div className="demystify-stat-card">
              <div className="demystify-stat-value" data-count="15">0</div>
              <div className="demystify-stat-label">Profit Margin Improvement</div>
              <div className="demystify-stat-source">Through strategic repositioning of high-margin items into high-visibility zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           THE PROCESS
           ═══════════════════════════════════════════ */}
      <section className="section process-section" id="process">
        <div className="container">
          <div className="reveal">
            <div className="section-label">The Process</div>
            <h2 className="section-headline">From POS Data to Performing Menu<br />in Four Weeks</h2>
            <p className="section-subheadline">A structured, transparent process. No mystery. No jargon. No disruption to your kitchen.</p>
          </div>

          <div className="process-timeline reveal stagger-1">
            <div className="process-timeline-line">
              <div className="process-timeline-fill" id="processLineFill" />
            </div>

            <div className="process-step">
              <div className="process-step-marker"><span>1</span></div>
              <div className="process-step-tag">Week 1 — Data Collection</div>
              <h3>We Pull Your POS Data.<br />You Continue Running Your Restaurant.</h3>
              <p>We need 90 days of POS transaction data. Not aggregated summaries — the raw transactions. Item-level detail: what was ordered, when, in what combination, at what price, by which server. Most modern POS systems export this in under ten minutes. We also photograph your current menu, review your pricing structure, and document your physical menu format. This is the only step that requires anything from your team, and it typically takes less than one hour of their time.</p>
              <div className="process-step-detail">Compatible with Toast, Square, Clover, Aloha, Micros, Revel, TouchBistro, Lightspeed, and all major POS platforms.</div>
            </div>

            <div className="process-step">
              <div className="process-step-marker"><span>2</span></div>
              <div className="process-step-tag">Week 2 — Analysis</div>
              <h3>AI Maps Every Pattern<br />Hidden in Your Transaction History</h3>
              <p>This is where the analytical models do their work. We classify every menu item into one of four engineering categories: Stars (high profitability, high popularity), Puzzles (high profitability, low popularity), Plowhorses (low profitability, high popularity), and Dogs (low profitability, low popularity). But we go deeper than the standard Boston Matrix. We analyze daypart performance, pairing frequency, price sensitivity thresholds, server influence patterns, and seasonal variation. We identify which items are cannibalizing each other and which are creating complementary purchase behavior.</p>
              <div className="process-step-detail">Our models process over 40 behavioral variables per menu item — far beyond what manual analysis can detect.</div>
            </div>

            <div className="process-step">
              <div className="process-step-marker"><span>3</span></div>
              <div className="process-step-tag">Week 3 — Engineering</div>
              <h3>We Rebuild the Menu Architecture.<br />Your Dishes. Our Science.</h3>
              <p>Armed with the analysis, we engineer the new menu. This means redesigning item placement based on the eye-tracking sweet spots for your specific menu format. Rewriting descriptions using the linguistic triggers your data reveals your guests respond to. Restructuring pricing to eliminate the psychological barriers that cause trade-downs. Repositioning Stars into prime visual real estate. Elevating Puzzles with design emphasis. Strategically managing Plowhorses to protect their volume while improving their margin. And making clear, data-backed recommendations on Dogs — remove, reformulate, or reposition.</p>
              <div className="process-step-detail">You receive a complete menu blueprint with every change annotated and the data rationale behind it.</div>
            </div>

            <div className="process-step">
              <div className="process-step-marker"><span>4</span></div>
              <div className="process-step-tag">Week 4 — Delivery &amp; Implementation</div>
              <h3>A Complete Deliverable.<br />Not a Deck That Gathers Dust.</h3>
              <p>You receive the engineered menu layout, the full analysis report, implementation guidelines for your printer or digital menu provider, and staff training notes so your servers understand the strategic intent behind the new structure. We walk through every recommendation in a 90-minute presentation. Nothing is abstract. Every change maps to a specific revenue or margin projection, backed by your own data. If you want us to manage the design production with your printer, we do that. If you want to hand it to your existing designer, the specifications are production-ready.</p>
              <div className="process-step-detail">Includes a 60-day post-implementation review to measure actual performance against projections.</div>
            </div>

            <div className="process-step">
              <div className="process-step-marker"><span>5</span></div>
              <div className="process-step-tag">Ongoing — Measurement</div>
              <h3>We Measure. We Refine.<br />The Menu Gets Smarter Over Time.</h3>
              <p>Sixty days after implementation, we pull your POS data again. We compare pre-engineering and post-engineering performance across every metric — average check, item mix, margin percentage, daypart revenue, and per-item sales velocity. We identify what overperformed projections and what underperformed. We make targeted refinements. This is not a one-and-done project. The best-performing menus in the industry are living documents that evolve with data. Your menu should be no different.</p>
              <div className="process-step-detail">Clients with ongoing optimization contracts see an additional 4-7% improvement in year two.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           BEFORE / AFTER CONCEPT
           ═══════════════════════════════════════════ */}
      <section className="section comparison-section" id="comparison">
        <div className="container">
          <div className="reveal">
            <div className="section-label">The Difference</div>
            <h2 className="section-headline">A Menu Built to List<br />vs. A Menu Built to Sell</h2>
            <p className="section-subheadline">Same restaurant. Same chef. Same dishes. Different revenue.</p>
          </div>

          <div className="comparison-grid">
            <div className="comparison-col comparison-col--before reveal stagger-1">
              <div className="comparison-tag">Before Engineering</div>
              <h3>The Menu That Lists</h3>
              <ul className="comparison-list">
                <li>Items organized by course with no strategic intent behind placement</li>
                <li>Pricing aligned in a column — creating a &ldquo;price ladder&rdquo; guests scan to find the cheapest option</li>
                <li>Descriptions written by the chef focused on ingredients rather than experience</li>
                <li>Dollar signs preceding every price, triggering subconscious &ldquo;spending pain&rdquo;</li>
                <li>Highest-margin items buried in the middle of long category lists</li>
                <li>No visual hierarchy — every item given equal weight and space</li>
                <li>Decoy pricing absent, leaving guests no anchor for value perception</li>
                <li>Specials listed on a separate insert that competes with the permanent menu</li>
              </ul>
              <div className="comparison-summary">A complete, accurate, and entirely unoptimized document.</div>
            </div>

            <div className="comparison-col comparison-col--after reveal stagger-2">
              <div className="comparison-tag">After Engineering</div>
              <h3>The Menu That Sells</h3>
              <ul className="comparison-list">
                <li>Items placed according to eye-tracking data — Stars positioned in the golden triangle of visual attention</li>
                <li>Prices embedded within descriptions, breaking the scanning pattern that drives trade-downs</li>
                <li>Descriptions rewritten with sensory language proven to increase selection rates by 27%</li>
                <li>Dollar signs removed; numerals formatted to minimize price sensitivity</li>
                <li>Highest-margin items given visual prominence through boxing, spacing, or typographic emphasis</li>
                <li>Strategic visual hierarchy guiding the eye from high-margin to complementary pairings</li>
                <li>Anchor items positioned to reframe value perception across the entire category</li>
                <li>Specials integrated into the menu architecture with specific margin and upsell objectives</li>
              </ul>
              <div className="comparison-summary">The same dishes, the same heart — presented as a precision revenue instrument.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           OBJECTION HANDLING
           ═══════════════════════════════════════════ */}
      <section className="section objection-section" id="objection">
        <div className="container">
          <div className="reveal">
            <div className="section-label">The Honest Conversation</div>
            <h2 className="section-headline">What You Are Probably Thinking<br />Right Now</h2>
          </div>

          <div className="objection-block">
            <div className="objection-quote reveal stagger-1">
              My menu is fine — customers always say they love it.
            </div>

            <div className="objection-response reveal stagger-2">
              <div className="objection-response-label">Here is what that actually means</div>

              <p>Your customers do love it. We do not doubt that for a moment. They love your food, they love your hospitality, they love the experience of dining in your restaurant. And they will continue to love all of those things after menu engineering — because we do not change what you serve. We change how you present it.</p>

              <p>Customer satisfaction and revenue optimization are not the same metric. They are not even measuring the same thing. Satisfaction measures whether guests enjoyed what they ordered. Optimization measures whether the menu guided them toward the items that generate the highest revenue and margin for your business while still delivering the experience they came for. A guest who orders a $18 khinkali plate and loves it is satisfied. That same guest, guided by a better-structured menu, might order a $32 chakapuli served in a ketsi that costs you $2 less to produce — and love it even more, because the dish is genuinely better. The guest wins. Your margin wins. That is not manipulation. That is alignment.</p>

              <p>The data tells a clear story. Across every Georgian restaurant we have analyzed, there are items on the menu that guests would order more frequently — and enjoy more — if the menu presented them properly. High-margin items like chakapuli and lobiani with exceptional food cost ratios that sit in low-visibility positions. Dishes the chef is proudest of, buried below a familiar adjarian khachapuri that guests default to out of habit, not preference. Appetizers, Saperavi wine pairings, and desserts that would increase per-guest revenue by $8 to $14, never ordered because the menu structure does not create the right moment to consider them.</p>

              <p>Your customers say they love the menu because they enjoy the food. That is a testament to your chef, your sourcing, your execution. It is not a testament to your menu design. Those are different disciplines. The question is not whether your guests are happy — they clearly are. The question is whether your menu is capturing the full revenue potential of that happiness. In our experience, across every Georgian restaurant we have worked with, the answer has been no. Not because the restaurant is doing anything wrong. Because the menu was never engineered to do it right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="section cta-section" id="cta">
        <div className="container">
          <div className="reveal">
            <h2 className="cta-headline">Your Menu Has Untapped Revenue.<br />Let Us Show You Exactly How Much.</h2>
            <p className="cta-subline">A 30-minute conversation. Your POS data. A clear projection of what is possible.</p>
            <p className="cta-body">No cost for the initial consultation. No obligation. We will review your current menu, discuss your revenue goals, and tell you candidly whether menu engineering is the right investment for your operation. If it is not, we will tell you that too.</p>
            <div className="cta-btn-wrap magnetic-wrap">
              <Link href="/contact" className="btn-primary">Engineer My Menu</Link>
            </div>
            <p className="cta-note">Typical engagement: 4 weeks from data to deliverable</p>
          </div>
        </div>
      </section>
    </>
  );
}
