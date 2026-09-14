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
        setIsMenuOpen(false); // Close mobile drawer when resizing back to desktop view
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
        .nav-link:hover { color: #00D2C4 !important; transform: translateY(-2px); }
        .cta-button:hover { background-color: #00b3a6 !important; box-shadow: 0 0 18px rgba(0,210,196,.5); transform: translateY(-2px) scale(1.03); }
        .logo-brand:hover { color: #00D2C4 !important; }
        .logo-image { transition: all .3s ease; }
        .logo-image:hover { transform: scale(1.03); }
        .logo-image img { image-rendering: auto; -webkit-font-smoothing: antialiased; }
        
        /* Mobile Drawer Animations & Styles */
        .mobile-drawer {
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          overflow: hidden;
        }
        .mobile-nav-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: block;
          transition: all 0.2s ease;
        }
        .mobile-nav-link:hover {
          color: #00D2C4;
          padding-left: 8px;
        }
        .hamburger-button {
          background: none;
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
          zIndex: 50,
          width: '100%',
          boxSizing: 'border-box',
          minHeight: isMobile ? '72px' : '92px',
          overflow: 'hidden'
        }}
      >
        {/* Logo Section */}
        <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '10px' : '15px', textDecoration: 'none', flexShrink: 0 }}>
          <div
            className="logo-image"
            style={{
              width: isMobile ? '180px' : '300px',
              height: isMobile ? '70px' : '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              flexShrink: 0,
              position: 'relative',
              backgroundColor: '#030812'
            }}
          >
            <img
              src={logo}
              alt="Vighnavi Academy Logo"
              style={{
                width: isMobile ? '330px' : '210px',
                height: isMobile ? '330px' : '210px',
                maxWidth: 'none',
                maxHeight: 'none',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                display: 'block',
                position: 'absolute',
                left: '30%',
                top: '50%',
                transform: 'translate(-50%,-50%)',
                transformOrigin: 'center'
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '38px', fontSize: '17px', fontWeight: '600' }}>
            <Link to="/" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>Home</Link>
            <Link to="/courses" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>Courses</Link>
            <Link to="/about" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>About Us</Link>
            <Link to="/contact" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>Contact Us</Link>
          </div>
        )}

        {/* Action Controls (CTA Button & Hamburger Icon for Mobile) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="cta-button"
            style={{
              backgroundColor: '#00D2C4',
              color: '#000',
              padding: isMobile ? '9px 14px' : '13px 25px',
              borderRadius: '28px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: isMobile ? '12px' : '16px',
              display: 'inline-block',
              transition: 'all .3s ease',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(0,210,196,.18)'
            }}
          >
            Book Consultation&nbsp; →
          </Link>

          {/* Hamburger Toggle Button for Mobile */}
          {isMobile && (
            <button
              className="hamburger-button"
              onClick={toggleMenu}
              aria-label="Toggle Navigation Menu"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00D2C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobile && (
        <div
          className="mobile-drawer"
          style={{
            position: 'sticky',
            top: '72px',
            zIndex: 49,
            backgroundColor: '#030812',
            borderBottom: isMenuOpen ? '1px solid rgba(0,210,196,0.3)' : 'none',
            maxHeight: isMenuOpen ? '320px' : '0px',
            opacity: isMenuOpen ? 1 : 0,
            padding: isMenuOpen ? '16px 24px 24px 24px' : '0px 24px',
            boxShadow: isMenuOpen ? '0 10px 25px rgba(0,0,0,0.8)' : 'none'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/" onClick={closeMenu} className="mobile-nav-link">Home</Link>
            <Link to="/courses" onClick={closeMenu} className="mobile-nav-link">Courses</Link>
            <Link to="/about" onClick={closeMenu} className="mobile-nav-link">About Us</Link>
            <Link to="/contact" onClick={closeMenu} className="mobile-nav-link">Contact Us</Link>
          </div>
        </div>
      )}
    </>
  );
}
