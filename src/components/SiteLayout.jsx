// src/components/SiteLayout.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import {
  DONATE_URL,
  LEARN_MORE_URL,
  CONTACT_EMAIL,
  MAILING_ADDRESS,
  PHONE_NUMBER_DISPLAY,
  PHONE_NUMBER_TEL,
} from "../siteConfig";

function NavLinkPill({ to, children, onClick }) {
  const loc = useLocation();
  const isActive =
    to === "/"
      ? loc.pathname === "/"
      : loc.pathname === to || loc.pathname.startsWith(to + "/");

  return (
    <Link className={`navPill ${isActive ? "navPillActive" : ""}`} to={to} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function SiteLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const loc = useLocation();

  const menuBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close the menu when route/hash changes
  useEffect(() => {
    setMenuOpen(false);
  }, [loc.pathname, loc.hash]);

  // Click-away handler (pointerdown works well on mobile)
  useEffect(() => {
    if (!menuOpen) return;

    function onPointerDown(e) {
      const btn = menuBtnRef.current;
      const menu = mobileMenuRef.current;

      // If click is inside the button or the menu, do nothing
      if ((btn && btn.contains(e.target)) || (menu && menu.contains(e.target))) return;

      setMenuOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [menuOpen]);

  return (
    <div className="page" id="top">
      <header className="nav">
        <Link className="brand brandLink" to="/" aria-label="Rural Michigan Defense Fund home">
          <div className="mark" aria-hidden />
          <div className="brandText">
            <div className="brandName">Rural Michigan Defense Fund</div>
            <div className="brandTag">The defense for rural communities</div>
          </div>
        </Link>

        <div className="navRight">
          <button
            ref={menuBtnRef}
            className="menuBtn"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <nav className="navLinks" aria-label="Primary">
            <NavLinkPill to="/">Home</NavLinkPill>
            <NavLinkPill to="/press">Press releases</NavLinkPill>
            <Link className="navPill" to="/#learn-more">
              About
            </Link>
          </nav>

          <a className="btn btnPrimary navDonate" href={DONATE_URL} target="_blank" rel="noreferrer">
            Donate
          </a>
        </div>

        <div
          id="mobile-menu"
          ref={mobileMenuRef}
          className={`mobileMenu ${menuOpen ? "open" : ""}`}
          role="dialog"
          aria-modal="false"
        >
          <div className="mobileMenuInner" aria-label="Mobile navigation">
            <NavLinkPill to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLinkPill>
            <NavLinkPill to="/press" onClick={() => setMenuOpen(false)}>
              Press releases
            </NavLinkPill>
            <Link className="navPill" to="/#learn-more" onClick={() => setMenuOpen(false)}>
              About
            </Link>

            <div className="mobileMenuDivider" />

            <a className="navPill" href={LEARN_MORE_URL} target="_blank" rel="noreferrer">
              Learn more
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="footer">
        <div className="footerInner">
          <div className="footerTop">
            <div className="footerTitle">Rural Michigan Defense Fund (RMDF)</div>
            <div className="footerMeta">
              <div className="footerLinks">
                <a href={DONATE_URL} target="_blank" rel="noreferrer">
                  Donate
                </a>
                <Link to="/press">Press releases</Link>
                <Link to="/#learn-more">About</Link>
                <a href={LEARN_MORE_URL} target="_blank" rel="noreferrer">
                  Learn more
                </a>
              </div>
              <div className="footerSocial" aria-label="Social links">
                <a
                  className="socialLink"
                  href="https://www.facebook.com/ruralmidefense/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Rural Michigan Defense Fund on Facebook"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                    <path d="M13.5 9.2V7.6c0-.7.5-1.1 1.3-1.1h1.9V3.2h-2.6c-2.8 0-4.1 1.6-4.1 4v2H7.6v3h2.4v8h3.5v-8h2.6l.4-3h-3z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="footerGrid" aria-label="Contact information">
            <a className="contactItem" href={`mailto:${CONTACT_EMAIL}`}>
              <div className="contactLabel">Email</div>
              <div className="contactValue">{CONTACT_EMAIL}</div>
            </a>
            <a className="contactItem" href={`tel:${PHONE_NUMBER_TEL}`}>
              <div className="contactLabel">Phone</div>
              <div className="contactValue">{PHONE_NUMBER_DISPLAY}</div>
            </a>
            <div className="contactItem">
              <div className="contactLabel">Mailing address</div>
              <div className="contactValue">{MAILING_ADDRESS}</div>
            </div>
          </div>

          <div className="fineprint">RMDF is volunteer-run. Information on this site is not legal advice.</div>
        </div>
      </footer>
    </div>
  );
}
