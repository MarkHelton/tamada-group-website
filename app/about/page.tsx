import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '../components/Ticker';
import AboutEffects from './AboutEffects';

export const metadata: Metadata = {
  title: 'About Lana Chikhladze & The Tamada Group Team | F&B Revenue Agency',
  description:
    "Meet the team behind Tamada Group. Lana Chikhladze doubled a hospitality group's revenue over 14 years. Now she brings AI-powered F&B strategy to restaurants worldwide.",
  keywords:
    'Lana Chikhladze, Tamada Group team, F&B revenue consultant, restaurant strategy, hospitality consulting team, Georgian hospitality',
};

export default function AboutPage() {
  return (
    <>
      <AboutEffects />

      {/* ═══════════════════════════════════════════
           GEORGIAN TICKER
           ═══════════════════════════════════════════ */}
      <Ticker />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="about-hero">
        <div className="container about-hero-content">
          <div className="about-hero-label">About Tamada Group &middot; The Story Behind The Strategy</div>

          <h1 className="about-hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>We&apos;ve</span>{' '}
            <span className="word" style={{ animationDelay: '0.55s' }}>Stood</span>{' '}
            <span className="word" style={{ animationDelay: '0.7s' }}>Where</span>{' '}
            <span className="word" style={{ animationDelay: '0.85s' }}>You&apos;re</span>{' '}
            <span className="word" style={{ animationDelay: '1.0s' }}>Standing.</span>
          </h1>

          <div className="about-hero-gold-line"></div>

          <p className="about-hero-subheadline">The agency founded on 14 years of real operations, not borrowed frameworks.</p>
        </div>

        <div className="hero-accent"></div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           LANA'S FULL STORY
           ═══════════════════════════════════════════ */}
      <section className="section bio-section">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-image-wrap reveal stagger-1">
              <img src="/lana-photo.jpg" alt="Lana Chikhladze — Founder & Lead Strategist, Tamada Group" className="bio-image" />
              <div className="bio-image-accent"></div>
              <div className="bio-image-tag">Founder &amp; Lead Strategist</div>
            </div>

            <div className="bio-copy">
              <div className="section-label reveal stagger-1">The Full Story</div>
              <h2 className="reveal stagger-2">Lana Chikhladze</h2>

              <p className="bio-lead reveal stagger-3">Doubled a hospitality group&apos;s total revenue across four properties. Same locations. Same teams. No gimmicks. Just operational precision applied day after day for 14 years.</p>

              <p className="reveal stagger-4">That number is where every conversation about Tamada Group begins, and it should be. In an industry saturated with consultants who parachute in, hand you a PDF, and disappear, the only credential that matters is whether someone has actually moved the number. Lana moved it. She moved it across a restaurant, a lounge, a boutique hotel, and a rooftop bar — four distinct F&amp;B operations with four distinct challenges — and she moved it consistently, year over year, for more than a decade.</p>

              <p className="reveal">The work was not glamorous. It started with Lana on the floor, opening the restaurant in the morning, closing it late at night. She learned revenue not from a textbook but from watching a dining room fill and asking why certain tables reordered and others did not. She studied the menu the way a surgeon studies anatomy — every dish had a margin, a prep time, a ticket impact, and a psychological position on the page. Over years, she became fluent in the language between what a guest sees and what the P&amp;L reflects.</p>

              <p className="reveal">She restructured menu architecture to guide the eye toward high-margin items without the guest ever feeling directed. She redesigned service sequences so upsells happened through genuine hospitality rather than scripted prompts. She built event programming that turned slow Tuesday nights into revenue generators. She renegotiated vendor contracts, tightened inventory systems, and trained staff to understand that every interaction at the table is a revenue event — not because the guest is a transaction, but because excellence and profitability are the same thing when you do it right.</p>

              <p className="reveal">The hospitality group grew. Revenue doubled. And the operators kept every property open through seasons that closed competitors down.</p>

              <div className="section-divider reveal"></div>

              <p className="reveal">Lana grew up in Batumi, Georgia — a port city on the Black Sea where international tourists mix with local families, where Soviet-era restaurants sit next to modern waterfront lounges, and where the culture of hospitality is older than most countries. In Georgia, food is not a transaction. It is the center of social life. The supra — the traditional Georgian feast — is a ritual of generosity, storytelling, and human connection. Every guest at a supra is treated as though their presence is a gift. The Tamada, the toastmaster, orchestrates the entire experience — pacing the evening, reading the room, ensuring no glass sits empty and no person feels overlooked.</p>

              <p className="reveal">This is where Lana&apos;s understanding of hospitality was formed. Not in a hospitality management program. Not from a case study. From growing up in a culture where feeding someone well is considered a moral obligation, and where a host&apos;s reputation lives and dies by the experience they create. The diversity of Batumi&apos;s guests — Russian, Turkish, European, Middle Eastern — taught her that great hospitality is not one-size-fits-all. It is reading who is in front of you and responding with precision and warmth.</p>

              <p className="reveal">That sensibility runs through everything Tamada Group does. When we engineer a menu, we are not just optimizing margins. We are designing an experience that makes someone feel taken care of. When we restructure service flow, we are not just increasing ticket averages. We are creating the conditions where a guest wants to stay longer, order more, and come back. The revenue follows because the experience is real.</p>

              <div className="section-divider reveal"></div>

              <p className="reveal">Today, Lana brings 20 years of total hospitality experience and an MBA in Executive Management to every engagement. But what changed the trajectory of Tamada Group was the decision to integrate artificial intelligence into the operational methodology she had spent decades building. AI did not replace her instincts — it confirmed them at scale. Revenue pattern analysis that once took weeks of manual spreadsheet work now surfaces in hours. Menu performance modeling that required months of A/B testing can now be simulated before a single dish is printed. Guest behavior insights that Lana once had to observe table by table are now aggregated across an entire operation in real time.</p>

              <p className="reveal">The foundation is still operational truth — real experience, earned in real dining rooms. But the tools have evolved. And that combination — deep operational knowledge amplified by AI-powered analytics — is what makes Tamada Group different from every other consultancy in the F&amp;B space. We do not sell theory. We sell the methodology that doubled revenue, now accelerated by the most powerful analytical tools available.</p>

              <div className="bio-badges reveal">
                <span className="bio-badge">20 Years Hospitality</span>
                <span className="bio-badge">MBA — Executive Management</span>
                <span className="bio-badge">4 Properties Managed</span>
                <span className="bio-badge">AI-Integrated Strategy</span>
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
            <h2>In Georgia, Hospitality Isn&apos;t A Job. It&apos;s A Philosophy.</h2>

            <p>The supra is the oldest continuous tradition in Georgian culture. It is a feast, but calling it that undersells what it represents. A supra is a structured, intentional gathering where food, wine, toasts, and conversation unfold in a deliberate rhythm. The Tamada — the toastmaster — is not a host in the Western sense. The Tamada is a conductor. They read the energy of the room. They know when to raise a glass, when to let a silence hold, when to draw out a quiet guest, and when to let the loudest voice in the room have its moment. Nothing is left to chance, and yet nothing feels forced. That is the art.</p>

            <p>The belief underneath the supra is simple and non-negotiable: every person at your table deserves an extraordinary experience. Not adequate. Not satisfactory. Extraordinary. This is not a marketing statement in Georgia. It is a cultural expectation passed from generation to generation, embedded in how families raise their children, how neighbors treat each other, and how strangers are welcomed into homes. You do not charge for this generosity, and you do not withhold it based on what someone can pay. You give it because hospitality is who you are.</p>

            <p>This is the belief system that Tamada Group was built on. When we walk into a restaurant, we are not looking at it as consultants. We are looking at it as hosts who have inherited a tradition that demands excellence. Every menu we engineer, every service sequence we redesign, every revenue strategy we implement carries that same standard: does this make the guest feel extraordinary? If it does, the revenue follows. It always has. The supra has been proving that for centuries. We are simply applying its principles to modern restaurant operations — with sharper tools and deeper data, but with the same ancient conviction that taking care of people is the most profitable strategy ever devised.</p>

            <div className="philosophy-signature">— The founding principle of Tamada Group</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           TEAM SECTION
           ═══════════════════════════════════════════ */}
      <section className="section team-section" id="team">
        <div className="container">
          <div className="section-label reveal">The Team</div>
          <h2 className="section-headline reveal stagger-2">You Get Lana. You Get All Of Us.</h2>
          <div className="section-body reveal stagger-3">
            <p>Every engagement is led by Lana directly. There is no handoff to a junior associate, no bait-and-switch where the person you met in the pitch disappears after signing. But behind Lana stands a specialized team that extends the agency&apos;s capabilities far beyond what any single strategist could deliver alone. Each member brings a distinct discipline — analytics, video production, visual design — and each operates with the same standard of precision and craft that defines everything Tamada Group produces.</p>
          </div>

          <div className="team-grid">
            <div className="team-card reveal stagger-1">
              <div className="team-photo-wrap">
                <img src="/lana-photo.jpg" alt="Lana Chikhladze" />
              </div>
              <div className="team-info">
                <div className="team-name">Lana Chikhladze</div>
                <div className="team-title">Founder &amp; Lead Strategist</div>
                <div className="team-subtitle">20 years hospitality operations</div>
              </div>
            </div>

            <div className="team-card reveal stagger-2">
              <div className="team-photo-wrap">
                <div className="team-placeholder">
                  <span className="team-initials">R.I.</span>
                </div>
              </div>
              <div className="team-info">
                <div className="team-name">R.I.</div>
                <div className="team-title">AI &amp; Analytics</div>
                <div className="team-subtitle">Revenue Intelligence Specialist</div>
              </div>
            </div>

            <div className="team-card reveal stagger-3">
              <div className="team-photo-wrap">
                <div className="team-placeholder">
                  <span className="team-initials">V.S.</span>
                </div>
              </div>
              <div className="team-info">
                <div className="team-name">V.S.</div>
                <div className="team-title">AI Video Studio</div>
                <div className="team-subtitle">Menu Video Production</div>
              </div>
            </div>

            <div className="team-card reveal stagger-4">
              <div className="team-photo-wrap">
                <div className="team-placeholder">
                  <span className="team-initials">D.B.</span>
                </div>
              </div>
              <div className="team-info">
                <div className="team-name">D.B.</div>
                <div className="team-title">Design &amp; Brand</div>
                <div className="team-subtitle">Menu Design &amp; Visual Strategy</div>
              </div>
            </div>
          </div>

          {/* Team photo wide */}
          <div className="team-photo-wide reveal">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" alt="Tamada Group team collaboration" />
            <div className="team-photo-wide-overlay"></div>
          </div>

          {/* Quote card */}
          <div className="team-quote reveal">
            <blockquote>Most consultants hand you a report and leave. We stay until the revenue moves.</blockquote>
            <cite>— Lana Chikhladze</cite>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           VALUES SECTION
           ═══════════════════════════════════════════ */}
      <section className="section values-section">
        <div className="container">
          <div className="section-label reveal">What We Stand On</div>
          <h2 className="section-headline reveal stagger-2">Three Pillars. No Compromise.</h2>
          <div className="section-body reveal stagger-3">
            <p>Every strategy, every recommendation, every deliverable passes through these three filters. If it does not meet all three, it does not leave this agency.</p>
          </div>

          <div className="values-grid">
            <div className="value-card reveal stagger-1">
              <span className="value-icon">&#9670;</span>
              <h3>Operational Truth</h3>
              <p>We do not theorize about what might work. Every methodology in our system was tested in a real dining room, on a real P&amp;L, with real staff and real guests. The menu engineering frameworks, the service redesigns, the event programming models — each one earned its place through years of measured, documented results.</p>
              <p>When we tell you a change will move your revenue, it is because we have made that exact change before and watched the number move. There is no speculation in our process. Only precedent.</p>
            </div>

            <div className="value-card reveal stagger-2">
              <span className="value-icon">&#9881;</span>
              <h3>AI-Powered Precision</h3>
              <p>Operational instinct built the foundation. Artificial intelligence made it faster, deeper, and more precise. Our AI tools analyze menu performance, guest behavior patterns, pricing sensitivity, and revenue flow at a speed and granularity that manual analysis cannot match.</p>
              <p>This is not technology for the sake of technology. It is the same methodology Lana used to double revenue — now accelerated by tools that surface insights in hours instead of months. The judgment remains human. The analysis runs at machine speed.</p>
            </div>

            <div className="value-card reveal stagger-3">
              <span className="value-icon">&#10022;</span>
              <h3>Georgian Hospitality</h3>
              <p>The belief that every guest deserves an extraordinary experience is not a tagline. It is the cultural inheritance that shaped this agency&apos;s founder and defines how we approach every engagement. Hospitality-first revenue strategy means we never optimize at the expense of the guest experience.</p>
              <p>We build systems where profitability and generosity are the same thing — where a guest feels more taken care of, not less, as your revenue grows. That is the Georgian way. It has worked for centuries, and it works in every dining room we enter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="container">
          <h2 className="reveal">Work With The Team</h2>
          <p className="reveal stagger-2">Every engagement starts with a conversation. Tell us about your operation, your revenue goals, and where you believe the gaps are. We will tell you honestly whether we can help — and exactly how.</p>
          <div className="reveal stagger-3">
            <Link href="/contact" className="btn-primary magnetic-wrap">Book A Strategy Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
