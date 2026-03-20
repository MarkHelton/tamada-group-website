import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '../components/Ticker';
import { ContactForm } from '../components/HomeEffects';
import ContactEffects from './ContactEffects';

export const metadata: Metadata = {
  title: 'Contact Tamada Group | Georgian Restaurant Marketing Agency',
  description:
    'Schedule a free 30-minute strategy call with Tamada Group. Marketing and revenue strategy for Georgian restaurants across America. Call 702-766-4304.',
  keywords:
    'Georgian restaurant marketing, Georgian restaurant consulting, contact Tamada Group, restaurant strategy call, Georgian cuisine marketing, khachapuri marketing, khinkali restaurant promotion, Georgian food marketing agency',
};

export default function ContactPage() {
  return (
    <>
      <ContactEffects />

      {/* ═══════════════════════════════════════════
           GEORGIAN TICKER
           ═══════════════════════════════════════════ */}
      <Ticker />

      {/* ═══════════════════════════════════════════
           HERO SECTION
           ═══════════════════════════════════════════ */}
      <section className="hero" id="hero">
        <div className="hero-bg" id="heroBg" />
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">Contact &mdash; Tamada Group</div>
            <h1 className="hero-headline" id="heroHeadline">
              <span className="word" style={{ animationDelay: '0.4s' }}>Let&apos;s</span>{' '}
              <span className="word" style={{ animationDelay: '0.55s' }}>Talk</span>{' '}
              <span className="word" style={{ animationDelay: '0.7s' }}>About</span>{' '}
              <span className="word" style={{ animationDelay: '0.85s' }}>Your</span>{' '}
              <span className="word" style={{ animationDelay: '1.0s' }}>Restaurant</span>
            </h1>
            <div className="hero-gold-line" />
            <p className="hero-subheadline">A free 30-minute conversation about your operation. No pitch. No pressure. Just honest strategy from someone who has been in your shoes.</p>
          </div>
        </div>

        <div className="hero-accent"></div>

        <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll</div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           FREE STRATEGY CALL EXPLANATION
           ═══════════════════════════════════════════ */}
      <section className="section" id="strategy-call">
        <div className="container">
          <div className="section-label reveal stagger-1">The Strategy Call</div>
          <h2 className="section-headline reveal stagger-2">30 Minutes. No Pitch. Just Honest Conversation.</h2>
          <div className="section-subheadline reveal stagger-3">
            <p>Every engagement begins with a conversation &mdash; not a sales call. We set aside 30 minutes to listen to you describe your operation, your challenges, and your goals. Then we tell you honestly what we see, what we think is fixable, and whether Tamada Group is the right fit.</p>
            <p>If we are not the right fit, we will tell you that too. We have turned down engagements when we did not believe we could move the number. That is not a selling point &mdash; it is just how we operate. Your time is worth more than a polite pitch that leads nowhere.</p>
            <p>There is no deck. No generic presentation. Just a real conversation between someone who runs a restaurant and someone who spent 14 years running them.</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           THREE CONTACT OPTIONS
           ═══════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="section-label reveal stagger-1">Get In Touch</div>
          <h2 className="section-headline reveal stagger-2">Three Ways To Start The Conversation</h2>

          <div className="values-grid">
            <div className="value-card reveal stagger-1">
              <span className="value-icon">&#9670;</span>
              <h3>Schedule a Strategy Session</h3>
              <p>Fill out the form below and tell us about your restaurant. We will respond within 24 hours to schedule your free 30-minute strategy call. Come with questions &mdash; we will come with answers.</p>
              <a href="#form" className="btn-primary">Schedule Now</a>
            </div>

            <div className="value-card reveal stagger-2">
              <span className="value-icon">&#9742;</span>
              <h3>Call Directly</h3>
              <p>If you prefer to talk first and fill out forms later, call us directly. Lana or a member of the team will answer. If we are on another call, leave a message and we will call you back the same day.</p>
              <a href="tel:7027664304" className="btn-secondary">702-766-4304</a>
            </div>

            <div className="value-card reveal stagger-3">
              <span className="value-icon">&#10022;</span>
              <h3>What To Expect On The Call</h3>
              <p>We will ask about your current revenue, your covers, your average check, and what you have tried before. Then we will share what we see &mdash; where the gaps likely are, what we would investigate first, and what kind of results are realistic for your operation.</p>
              <p>No jargon. No upsell. Just a clear picture of where you stand and what moving the needle would look like.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CONTACT FORM
           ═══════════════════════════════════════════ */}
      <section className="section" id="form">
        <div className="container">
          <div className="section-label reveal stagger-1">Start Here</div>
          <h2 className="section-headline reveal stagger-2">Tell Us About Your Restaurant</h2>
          <div className="section-subheadline reveal stagger-3">
            <p>The more you share, the more useful our first conversation will be. But if you just want to say hello, that works too.</p>
          </div>

          <div className="reveal stagger-4">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           NATIONWIDE NOTE
           ═══════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="philosophy-card reveal">
            <span className="philosophy-icon">&#x10D0;</span>
            <h2>We Work With Georgian Restaurants Across America.</h2>
            <p>Whether you&apos;re in New York, Los Angeles, Chicago, or anywhere in between &mdash; if you&apos;re running a Georgian restaurant, we understand your operation. We know the challenges of introducing khachapuri and khinkali to American diners. We know the balance between authenticity and accessibility. We know what it takes to build a loyal local following while honoring a cuisine that most of your guests are discovering for the first time.</p>
            <p>Geography is not a barrier. We work remotely with restaurants nationwide, and every engagement is built around your specific market, your specific operation, and your specific revenue goals.</p>
            <div className="philosophy-signature">&mdash; Tamada Group</div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
           CTA SECTION
           ═══════════════════════════════════════════ */}
      <section className="cta-section">
        <div className="container">
          <h2 className="reveal">Ready To Move The Number?</h2>
          <p className="reveal stagger-2">Every successful engagement we have ever had started with a single conversation. This one is free, it is honest, and it might change how you think about your restaurant&apos;s potential.</p>
          <div className="reveal stagger-3">
            <a href="tel:7027664304" className="btn-primary magnetic-wrap">Call 702-766-4304</a>
          </div>
        </div>
      </section>
    </>
  );
}
