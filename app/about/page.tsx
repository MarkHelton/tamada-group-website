import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '../components/Ticker';
import AboutEffects from './AboutEffects';

export const metadata: Metadata = {
  title: 'About Lana Chikhladze & Tamada Group | Georgian Restaurant Marketing Agency',
  description:
    'Meet Lana Chikhladze — born in Batumi, Georgia. 20+ years in hospitality, $10M+ in revenue generated, 40+ restaurant properties. The only marketing agency built by a Georgian for Georgian restaurants in America.',
  keywords:
    'Lana Chikhladze, Tamada Group, Georgian restaurant marketing, Georgian restaurants America, Georgian hospitality, supra tradition, Batumi Georgia, restaurant marketing agency, F&B marketing, khachapuri, khinkali, Georgian cuisine',
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
          <div className="about-hero-label">About Tamada Group &middot; Born Georgian. Built For Georgian Restaurants.</div>

          <h1 className="about-hero-headline" id="heroHeadline">
            <span className="word" style={{ animationDelay: '0.4s' }}>She</span>{' '}
            <span className="word" style={{ animationDelay: '0.5s' }}>Didn&apos;t</span>{' '}
            <span className="word" style={{ animationDelay: '0.6s' }}>Study</span>{' '}
            <span className="word" style={{ animationDelay: '0.7s' }}>Georgian</span>{' '}
            <span className="word" style={{ animationDelay: '0.8s' }}>Restaurants.</span>{' '}
            <span className="word" style={{ animationDelay: '0.95s' }}>She</span>{' '}
            <span className="word" style={{ animationDelay: '1.1s' }}>Built</span>{' '}
            <span className="word" style={{ animationDelay: '1.25s' }}>Them.</span>
          </h1>

          <div className="about-hero-gold-line"></div>

          <p className="about-hero-subheadline">The only marketing agency founded by a Georgian — for Georgian restaurants in America.</p>
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

              <p className="bio-lead reveal stagger-3">Most marketing agencies don&apos;t understand Georgian restaurants. Lana does — because she IS Georgian. Born in Batumi, raised on the Black Sea, with 20+ years building and running restaurants, hotels, and nightlife venues. She didn&apos;t learn Georgian hospitality from a book. She lived it.</p>

              <p className="reveal stagger-4">Lana grew up in Batumi, Georgia — the jewel of the Black Sea coast, where the smell of freshly baked khachapuri drifts through every neighborhood and the supra table is the center of family life. Hospitality was not a career she chose. It was the air she breathed. In Georgia, feeding someone well is not a business — it is a sacred obligation. The way you host, the way you pour wine, the way you make a stranger feel like family — these things define who you are as a person. Lana understood this before she ever stepped foot in a professional kitchen.</p>

              <p className="reveal">She started young, working in Batumi&apos;s booming hospitality scene as international tourism transformed the city. Over 20+ years, she built and managed restaurants, boutique hotels, rooftop bars, and nightclubs across Georgia. She launched over 30 nightlife and restaurant concepts. She developed more than 50 food and beverage concepts. She consulted for 40+ restaurant properties. She didn&apos;t just manage these operations — she built them from the ground up, from lease negotiations to menu development to staff training to opening night.</p>

              <p className="reveal">The results speak for themselves: more than $10 million in combined revenue generated across her client portfolio. Not from one lucky property. From dozens of operations, each with its own challenges, its own market, its own personality. Lana learned that every restaurant is different, but the principles of Georgian hospitality — generosity, precision, reading the room, making every guest feel extraordinary — are universal.</p>

              <p className="reveal">Then she earned her MBA in Executive Management, combining the operational instincts she had spent two decades sharpening with formal business strategy. She studied revenue modeling, organizational leadership, and financial architecture — and she layered all of it on top of the real-world knowledge that no classroom can teach. The MBA didn&apos;t make her a better operator. It gave her the language and frameworks to scale what she already knew.</p>

              <div className="section-divider reveal"></div>

              <p className="reveal">When Lana came to America, she saw something that broke her heart: Georgian restaurants struggling. Not because the food was bad — Georgian food is extraordinary. Not because the owners didn&apos;t care — Georgian restaurant owners care more than almost anyone in this industry. They were struggling because no one was helping them tell their story. American marketing agencies didn&apos;t understand what a supra was. They didn&apos;t know why the tamada matters. They didn&apos;t understand that a Georgian restaurant isn&apos;t just a place to eat — it&apos;s an embassy of Georgian culture, a gathering place, a piece of home for every Georgian in America.</p>

              <p className="reveal">These agencies would come in with generic restaurant marketing playbooks — the same strategies they use for Italian restaurants, Mexican restaurants, sushi bars. They would miss everything that makes Georgian dining special: the communal nature of the meal, the ritual of the toast, the pride in handmade khinkali, the theater of cheese bread pulled fresh from a tone oven. They didn&apos;t speak the language. They didn&apos;t understand the culture. And they certainly didn&apos;t understand the customers — both the Georgian diaspora longing for a taste of home and the American diners discovering Georgian cuisine for the first time.</p>

              <p className="reveal">Lana decided to fix this. She founded Tamada Group with a single, clear mission: be the marketing agency that Georgian restaurants in America actually deserve. One that speaks Georgian. One that understands the supra. One that knows the difference between Imeretian and Sulguni cheese, that respects the craft behind churchkhela, and that can communicate the magic of Georgian hospitality to an American audience without diluting what makes it special.</p>

              <div className="section-divider reveal"></div>

              <p className="reveal">Today, Tamada Group combines Lana&apos;s 20+ years of hands-on restaurant experience with AI-powered marketing tools that amplify everything she knows. The AI didn&apos;t replace her instincts — it supercharged them. Social media strategies that would take weeks to develop now deploy in days. Menu photography direction informed by engagement data. Content calendars built around Georgian holidays, feast days, and cultural moments that generic agencies don&apos;t even know exist. Digital advertising optimized by machine learning but guided by someone who actually understands what she&apos;s advertising.</p>

              <p className="reveal">The combination is unlike anything else in the market: deep Georgian cultural knowledge, two decades of real restaurant operations, an MBA in Executive Management, and AI-powered marketing precision. No other agency has this. No other agency can have this — because no other agency was founded by someone who grew up in Batumi, built restaurants across Georgia, and then dedicated her career to helping Georgian restaurants succeed in America.</p>

              <div className="bio-badges reveal">
                <span className="bio-badge">20+ Years Hospitality</span>
                <span className="bio-badge">MBA — Executive Management</span>
                <span className="bio-badge">$10M+ Revenue Generated</span>
                <span className="bio-badge">40+ Properties</span>
                <span className="bio-badge">50+ F&amp;B Concepts</span>
                <span className="bio-badge">Born in Batumi, Georgia</span>
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
            <h2>The Supra Is Not Just A Meal. It Is Georgia&apos;s Greatest Export.</h2>

            <p>Every culture has dinner. Georgia has the supra — a feast that is part ceremony, part theater, and part philosophy of life. The table is not just set. It is orchestrated. Dishes arrive in a deliberate sequence. Toasts follow a sacred order — to God, to Georgia, to family, to the departed, to the future. Wine flows not to intoxicate but to open hearts. And at the center of it all stands the Tamada — the toastmaster — whose job is not merely to speak but to conduct the emotional arc of the entire evening. The Tamada reads the room. The Tamada knows when to be serious and when to make the table laugh. The Tamada ensures that no guest is forgotten, no glass sits empty, no moment is wasted.</p>

            <p>This is not folklore. This is a living tradition practiced in Georgian homes and restaurants every single day. And it is the reason Georgian restaurants have something that no other cuisine category can claim: a built-in philosophy of hospitality so profound that it turns a meal into a memory. When an American walks into a Georgian restaurant for the first time and experiences a proper supra — the abundance of food, the warmth of the toasts, the feeling of being genuinely welcomed — they don&apos;t just become a customer. They become an evangelist. They tell everyone they know.</p>

            <p>Tamada Group exists to help Georgian restaurant owners in America unlock this power. Your restaurant is not just a business — it is a cultural ambassador. The supra tradition, the hospitality, the food, the wine — these are Georgia&apos;s gifts to the world. Our job is to make sure America receives them. We market your restaurant not as &quot;another ethnic food option&quot; but as what it truly is: a once-in-a-lifetime dining experience rooted in one of the oldest hospitality traditions on earth. Because when people understand what Georgian dining really is, they don&apos;t just visit once. They come back forever.</p>

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
            <p>Every engagement is led by Lana directly — a Georgian working with Georgian restaurant owners. There is no handoff to someone who doesn&apos;t understand your culture, your food, or your customers. But behind Lana stands a specialized team that extends the agency&apos;s capabilities across analytics, video production, and visual design. Each member operates with the same standard that defines everything Tamada Group produces: nothing leaves this agency unless it would make a Georgian grandmother proud.</p>
          </div>

          <div className="team-grid">
            <div className="team-card reveal stagger-1">
              <div className="team-photo-wrap">
                <img src="/lana-photo.jpg" alt="Lana Chikhladze" />
              </div>
              <div className="team-info">
                <div className="team-name">Lana Chikhladze</div>
                <div className="team-title">Founder &amp; Lead Strategist</div>
                <div className="team-subtitle">20+ years hospitality &middot; Born in Batumi, Georgia</div>
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
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop" alt="Fine dining Georgian restaurant interior" />
            <div className="team-photo-wide-overlay"></div>
          </div>

          {/* Quote card */}
          <div className="team-quote reveal">
            <blockquote>Most marketing agencies don&apos;t understand Georgian restaurants. I do — because I am Georgian. I grew up at the supra table. I know what your restaurant means to our community. And I know how to make America fall in love with it.</blockquote>
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
          <h2 className="section-headline reveal stagger-2">Three Pillars. One Mission.</h2>
          <div className="section-body reveal stagger-3">
            <p>Every strategy, every campaign, every piece of content passes through these three filters. If it does not honor all three, it does not leave this agency.</p>
          </div>

          <div className="values-grid">
            <div className="value-card reveal stagger-1">
              <span className="value-icon">&#9670;</span>
              <h3>Georgian To The Core</h3>
              <p>We are not a generic marketing agency that took on a Georgian restaurant client and Googled &quot;khachapuri&quot; the night before the meeting. Lana is Georgian. She grew up in Batumi. She understands the supra, the tamada tradition, the pride behind every handmade khinkali, and the cultural weight of every dish you serve. This agency was built from the inside — by someone who shares your heritage, speaks your language, and understands what your restaurant means to the Georgian community in America.</p>
              <p>When we market your restaurant, we don&apos;t flatten your culture into something generic. We amplify what makes it extraordinary.</p>
            </div>

            <div className="value-card reveal stagger-2">
              <span className="value-icon">&#9881;</span>
              <h3>AI-Powered, Operator-Led</h3>
              <p>Lana brings 20+ years of hands-on restaurant experience — building, managing, and growing 40+ properties and 50+ F&amp;B concepts. That operational foundation is now amplified by AI-powered marketing tools that analyze social media performance, optimize ad spend, generate content insights, and identify growth opportunities at a speed no human team can match alone.</p>
              <p>The AI handles the data. Lana handles the judgment. The result is marketing that is both culturally authentic and analytically precise — strategies that feel Georgian and perform like Silicon Valley.</p>
            </div>

            <div className="value-card reveal stagger-3">
              <span className="value-icon">&#10022;</span>
              <h3>Hospitality First, Always</h3>
              <p>In Georgia, the guest is a gift from God. That is not a metaphor — it is a deeply held cultural belief that shapes how every Georgian restaurant operates. Tamada Group carries this same principle into our marketing: every campaign we build, every piece of content we create, every strategy we deploy is designed to honor the guest experience, not exploit it.</p>
              <p>We help you fill your dining room with people who genuinely want to be there — who came because they understood what Georgian dining is, not because a clickbait ad tricked them into walking through the door. Real guests. Real loyalty. Real revenue that lasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="container">
          <h2 className="reveal">Your Restaurant Deserves Better Than A Generic Agency.</h2>
          <p className="reveal stagger-2">If you own a Georgian restaurant in America, you already know that most marketing agencies don&apos;t get it. They don&apos;t understand your food, your culture, or your customers. Lana does. Let&apos;s talk about how Tamada Group can help your restaurant become what it was always meant to be — the best-known Georgian dining experience in your city. Call 702-766-4304 or book a strategy call below.</p>
          <div className="reveal stagger-3">
            <Link href="/contact" className="btn-primary magnetic-wrap">Book A Strategy Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
