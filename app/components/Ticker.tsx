'use client';

import { useEffect, useRef } from 'react';

export default function Ticker() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Duplicate ticker content for seamless infinite scroll
    const track = trackRef.current;
    if (track) {
      const content = track.innerHTML;
      track.innerHTML = content + content;
    }
  }, []);

  return (
    <div className="ticker-wrap">
      <div className="ticker-track" id="tickerTrack" ref={trackRef}>
        <span>
          In Georgian culture, the Tamada is the master of the feast — the one
          who ensures every guest feels extraordinary and every moment is
          intentional.
        </span>
        <span className="ticker-dot">&bull;</span>
        <span>That is what we do for your revenue.</span>
        <span className="ticker-dot">&bull;</span>
        <span>
          Tamada Group — Where Georgian hospitality meets AI-powered restaurant
          revenue.
        </span>
        <span className="ticker-dot">&bull;</span>
      </div>
    </div>
  );
}
