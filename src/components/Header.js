import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logovighnavisri.png';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .header-nav {
          width: 100%;
          background: #030812;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 0;
          z-index: 9999;
        }

        /* =========================
           LOGO
        ========================== */

        .logo-link {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-decoration: none;
          flex-shrink: 0;
          height: 100%;
        }

        .logo-wrapper {
          width: 235px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          overflow: hidden;
          flex-shrink: 0;
          background: transparent;
        }

        .logo-image {
          width: 225px;
          height: 76px;
          display: block;
          object-fit: contain;
          object-position: left center;
          max-width: 100%;
          max-height: 100%;
          transition: transform 0.3s ease;
        }

        .logo-link:hover .logo-image {
          transform: scale(1.02);
        }

        /* =========================
           DESKTOP NAVIGATION
        ========================== */

        .desktop-menu {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 38px;
          flex: 1;
        }

        .nav-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 17px;
          font-weight: 600;
          white-space: nowrap;
          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }

        .nav-link:hover {
          color: #00d2c4 !important;
          transform: translateY(-2px);
        }

        /* =========================
           CTA BUTTON
        ========================== */

        .cta-button {
          background: #00d2c4;
          color: #000;
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 25px;
          min-height: 48px;
          border-radius: 28px;
          box-shadow: 0 4px 12px rgba(0, 210, 196, 0.18);
          transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.3s ease;
        }

        .cta-button:hover {
          background: #00b3a6 !important;
          box-shadow: 0 0 18px rgba(0, 210, 196, 0.5);
          transform: translateY(-2px) scale(1.03);
        }

        /* =========================
           MOBILE MENU BUTTON
        ========================== */

        .hamburger-btn {
          width: 44px;
          height: 44px;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          outline: none;
        }

        .hamburger-btn:focus-visible {
          outline: 2px solid #00d2c4;
          outline-offset: 2px;
          border-radius: 6px;
        }

        /* =========================
           MOBILE DRAWER
        ========================== */

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #030812;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.75);

          display: flex;
          flex-direction: column;

          padding: 18px 20px 24px;
          gap: 4px;

          z-index: 9998;

          opacity: 0;
          visibility: hidden;
          transform: translateY(-8px);

          transition:
            opacity 0.25s ease,
            visibility 0.25s ease,
            transform 0.25s ease;
        }

        .mobile-drawer.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .mobile-nav-link {
          width: 100%;
          color: #d1d5db;
          text-decoration: none;
          font-size: 17px;
          font-weight: 600;

          padding: 14px 10px;

          border-bottom: 1px solid rgba(255, 255, 255, 0.06);

          transition:
            color 0.2s ease,
            padding-left 0.2s ease;
        }

        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          color: #00d2c4;
          padding-left: 16px;
        }

        .mobile-cta-wrapper {
          width: 100%;
          margin-top: 14px;
        }

        .mobile-cta {
          width: 100%;
          min-height: 48px;
          padding: 12px 20px;
          font-size: 15px;
        }

        /* =========================
           TABLET
        ========================== */

        @media (max-width: 950px) and (min-width: 769px) {
          .header-nav {
            padding-left: 25px !important;
            padding-right: 25px !important;
          }

          .logo-wrapper {
            width: 190px;
            height: 76px;
          }

          .logo-image {
            width: 185px;
            height: 70px;
          }

          .desktop-menu {
            gap: 22px;
          }

          .nav-link {
            font-size: 15px;
          }

          .cta-button {
            padding: 11px 18px;
            font-size: 14px;
          }
        }

        /* =========================
           MOBILE
        ========================== */

        @media (max-width: 768px) {
          .header-nav {
            min-height: 64px;
            padding: 5px 16px !important;
          }

          .logo-wrapper {
            width: 155px;
            height: 54px;
          }

          .logo-image {
            width: 150px;
            height: 50px;
            object-fit: contain;
            object-position: left center;
          }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .header-nav {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }

          .logo-wrapper {
            width: 140px;
            height: 52px;
          }

          .logo-image {
            width: 136px;
            height: 48px;
          }

          .hamburger-btn {
            width: 40px;
            height: 40px;
          }

          .mobile-drawer {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>

      <nav
        className="header-nav"
        style={{
          padding: isMobile ? '5px 16px' : '6px 42px',
          minHeight: isMobile ? '64px' : '92px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* =========================
            LOGO
        ========================== */}

        <Link
          to="/"
          onClick={closeMenu}
          className="logo-link"
          aria-label="Vighnavi Academy Home"
        >
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Vighnavi Academy Logo"
              className="logo-image"
            />
          </div>
        </Link>

        {/* =========================
            DESKTOP MENU
        ========================== */}

        {!isMobile && (
          <div className="desktop-menu">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/courses" className="nav-link">
              Courses
            </Link>

            <Link to="/about" className="nav-link">
              About Us
            </Link>

            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>
        )}

        {/* =========================
            RIGHT SECTION
        ========================== */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          {/* Desktop CTA */}
          {!isMobile && (
            <Link
              to="/contact"
              onClick={closeMenu}
              className="cta-button"
            >
              Book Consultation&nbsp; →
            </Link>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <button
              type="button"
              className="hamburger-btn"
              onClick={toggleMenu}
              aria-label={
                isMenuOpen
                  ? 'Close navigation menu'
                  : 'Open navigation menu'
              }
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#00D2C4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          )}
        </div>

        {/* =========================
            MOBILE DRAWER
        ========================== */}

        {isMobile && (
          <div
            className={`mobile-drawer ${
              isMenuOpen ? 'open' : ''
            }`}
          >
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Courses
            </Link>

            <Link
              to="/about"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="mobile-nav-link"
              onClick={closeMenu}
            >
              Contact Us
            </Link>

            <div className="mobile-cta-wrapper">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="cta-button mobile-cta"
              >
                Book Consultation&nbsp; →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
