import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="site-footer">
      {/* GLOW DECORATIONS & BACKGROUND GRID */}
      <div className="footer-glow-top" />
      <div className="footer-glow-bottom" />
      <div className="footer-grid-pattern" />

      {/* TOP DECORATIVE DIVIDER LINE */}
      <div className="footer-top-accent">
        <span className="accent-glow-line" />
      </div>

      <div className="footer-container">
        {/* MAIN 4-COLUMN GRID */}
        <div className="footer-main-grid">
          {/* BRAND COLUMN */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <span className="footer-edition-badge">
                <span className="footer-badge-dot" />
                EDITION 10.0 // 2026
              </span>
              <div className="footer-logo-wrap">
                <img
                  src="/logos/inspirusx.jpeg"
                  alt="Inspirus-X - Make It Happen"
                  className="footer-logo-img"
                />
              </div>
            </div>

            <p className="footer-description">
              The premier annual state-level technical &amp; cultural intercollegiate event
              at Don Bosco College of Engineering, Fatorda, Goa.
            </p>

            <div className="footer-social-links">
              <a
                href="https://instagram.com/inspirusx"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn instagram-btn"
                aria-label="Inspirus on Instagram"
              >
                <i className="ri-instagram-fill" />
                <span>@inspirusx</span>
              </a>

              <a
                href="https://instagram.com/inspirus.reels"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn reels-btn"
                aria-label="Inspirus Reels on Instagram"
              >
                <i className="ri-movie-2-line" />
                <span>@inspirus.reels</span>
              </a>

              <a
                href="https://dbcegoa.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn web-btn"
                aria-label="Don Bosco College of Engineering Website"
              >
                <i className="ri-global-line" />
                <span>dbcegoa.ac.in</span>
              </a>
            </div>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="footer-col">
            <h3 className="footer-heading">
              <i className="ri-compass-3-line" />
              <span>NAVIGATION</span>
            </h3>
            <ul className="footer-nav-list">
              <li>
                <button type="button" onClick={() => handleNavClick("home")}>
                  <i className="ri-arrow-right-s-line" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("about")}>
                  <i className="ri-arrow-right-s-line" />
                  <span>About Event</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("competitions")}>
                  <i className="ri-arrow-right-s-line" />
                  <span>Competitions</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("gallery")}>
                  <i className="ri-arrow-right-s-line" />
                  <span>Gallery Archives</span>
                </button>
              </li>
              <li>
                <button type="button" onClick={() => handleNavClick("teams")}>
                  <i className="ri-arrow-right-s-line" />
                  <span>Meet the Team</span>
                </button>
              </li>
            </ul>
          </div>

          {/* VENUE & LOCATION COLUMN */}
          <div className="footer-col">
            <h3 className="footer-heading">
              <i className="ri-map-pin-2-line" />
              <span>VENUE &amp; DATES</span>
            </h3>
            <div className="footer-info-block">
              <div className="info-item">
                <i className="ri-building-4-line" />
                <div>
                  <strong>Don Bosco College of Engineering</strong>
                  <p>Fatorda, Margao, Goa &mdash; 403602</p>
                </div>
              </div>

              <div className="info-item">
                <i className="ri-calendar-event-line" />
                <div>
                  <strong>Event Dates</strong>
                  <p>15 &amp; 16 October 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & ACTION BAR */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-copy">
            <p className="copy-line">
              &copy; 2026 <strong>INSPIRUS-X</strong>. All rights reserved.
            </p>
            <p className="credits-line">
              <span>Crafted with</span>
              <i className="ri-heart-3-fill heart-icon" />
              <span>by the Inspirus-X Website Team</span>
            </p>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <i className="ri-arrow-up-line" />
          </button>
        </div>
      </div>
    </footer>
  );
}
