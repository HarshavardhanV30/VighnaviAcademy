import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logovighnaviacademy.png';

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
        .nav-link:hover{color:#00D2C4!important;transform:translateY(-2px)}
        .cta-button:hover{background-color:#00b3a6!important;box-shadow:0 0 18px rgba(0,210,196,.5);transform:translateY(-2px) scale(1.03)}
        .logo-brand:hover{color:#00D2C4!important}
        .logo-image{transition:all .3s ease}
        .logo-image:hover{transform:scale(1.03)}
        .logo-image img{image-rendering:auto;-webkit-font-smoothing:antialiased}

        /* Mobile Drawer Dropdown Styles */
        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background-color: #030812;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.9);
          display: flex;
          flex-direction: column;
          padding: 20px 24px 28px;
          gap: 16px;
          z-index: 9999;
          transform: translateY(-10px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease-in-out;
          box-sizing: border-box;
        }

        .mobile-drawer.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 17px;
          font-weight: 600;
          padding: 10px 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: color 0.2s ease, padding-left 0.2s ease;
        }

        .mobile-nav-link:hover, .mobile-nav-link:active {
          color: #00D2C4;
          padding-left: 10px;
        }

        .hamburger-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6px;
          color: #ffffff;
          outline: none;
        }
      `}</style>

      <nav
        style={{
          backgroundColor: '#030812',
          borderBottom: '1px solid rgba(255,255,255,.08)',
          padding: isMobile ? '6px 18px' : '6px 42px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          width: '100%',
          boxSizing: 'border-box',
          minHeight: isMobile ? '64px' : '92px',
        }}
      >
        {/* Logo Section */}
        <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <div
            className="logo-image"
            style={{
              width: isMobile ? '140px' : '300px',
              height: isMobile ? '50px' : '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
              position: 'relative',
              backgroundColor: '#030812',
            }}
          >
            <img
              src={logo}
              alt="Vighnavi Academy Logo"
              style={{
                width: isMobile ? '230px' : '210px',
                height: isMobile ? '230px' : '210px',
                maxWidth: 'none',
                maxHeight: 'none',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                display: 'block',
                position: 'absolute',
                left: '30%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                transformOrigin: 'center',
              }}
            />
          </div>
        </Link>

        {/* Desktop Links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '38px', fontSize: '17px', fontWeight: '600' }}>
            <Link to="/" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>
              Home
            </Link>
            <Link to="/courses" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>
              Courses
            </Link>
            <Link to="/about" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>
              About Us
            </Link>
            <Link to="/contact" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>
              Contact Us
            </Link>
          </div>
        )}

        {/* Right Section */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Desktop CTA Button */}
          {!isMobile && (
            <Link
              to="/contact"
              onClick={closeMenu}
              className="cta-button"
              style={{
                backgroundColor: '#00D2C4',
                color: '#000',
                padding: '13px 25px',
                borderRadius: '28px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '16px',
                display: 'inline-block',
                transition: 'all .3s ease',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,210,196,.18)',
              }}
            >
              Book Consultation&nbsp; →
            </Link>
          )}

          {/* Hamburger Toggle Button (Mobile Only) */}
          {isMobile && (
            <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
              {isMenuOpen ? (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D2C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          )}
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobile && (
          <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/courses" className="mobile-nav-link" onClick={closeMenu}>
              Courses
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>
              Contact Us
            </Link>

            {/* CTA Button placed inside the mobile drawer */}
            <div style={{ marginTop: '8px' }}>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="cta-button"
                style={{
                  backgroundColor: '#00D2C4',
                  color: '#000',
                  padding: '12px 20px',
                  borderRadius: '28px',
                  textDecoration: 'none',
                  fontWeight: '700',
                  fontSize: '15px',
                  display: 'block',
                  textAlign: 'center',
                  transition: 'all .3s ease',
                  boxShadow: '0 4px 12px rgba(0,210,196,.18)',
                }}
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
