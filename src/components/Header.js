import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logovighnaviacademy.png';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobile(false);
        setMobileMenuOpen(false);
      } else {
        setIsMobile(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
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
        
        /* Mobile menu styles */
        .hamburger-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 26px;
          height: 18px;
          padding: 0;
          z-index: 60;
        }
        .hamburger-bar {
          width: 100%;
          height: 2.5px;
          background-color: #ffffff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger-btn.open .bar1 {
          transform: translateY(7.5px) rotate(45deg);
        }
        .hamburger-btn.open .bar2 {
          opacity: 0;
        }
        .hamburger-btn.open .bar3 {
          transform: translateY(-7.5px) rotate(-45deg);
        }
        .mobile-drawer {
          position: fixed;
          top: 72px;
          left: 0;
          width: 100%;
          background-color: #030812;
          border-bottom: 1px solid rgba(255,255,255,.1);
          display: flex;
          flex-direction: column;
          padding: 20px 24px 30px 24px;
          gap: 20px;
          box-sizing: border-box;
          transform: translateY(-150%);
          opacity: 0;
          transition: transform 0.3s ease, opacity 0.3s ease;
          z-index: 49;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
        }
        .mobile-drawer.open {
          transform: translateY(0);
          opacity: 1;
        }
        .mobile-nav-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,.05);
          transition: color 0.2s ease;
        }
        .mobile-nav-link:hover {
          color: #00D2C4;
        }
      `}</style>
      <nav
        style={{
          backgroundColor: '#030812',
          borderBottom: '1px solid rgba(255,255,255,.08)',
          padding: isMobile ? '6px 18px' : '6px 42px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          boxSizing: 'border-box',
          minHeight: isMobile ? '72px' : '92px',
          overflow: 'hidden',
        }}
      >
        <Link
          to="/"
          onClick={closeMenu}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '10px' : '15px',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
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
              backgroundColor: '#030812',
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
                transformOrigin: 'center',
              }}
            />
          </div>
        </Link>

        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '38px', fontSize: '17px', fontWeight: '600' }}>
            <Link to="/" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>Home</Link>
            <Link to="/courses" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>Courses</Link>
            <Link to="/about" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>About Us</Link>
            <Link to="/contact" className="nav-link" style={{ color: '#d1d5db', textDecoration: 'none', transition: 'all .2s ease' }}>Contact Us</Link>
          </div>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
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
              boxShadow: '0 4px 12px rgba(0,210,196,.18)',
            }}
          >
            Book Consultation&nbsp; →
          </Link>

          {isMobile && (
            <button
              className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              <span className="hamburger-bar bar1"></span>
              <span className="hamburger-bar bar2"></span>
              <span className="hamburger-bar bar3"></span>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {isMobile && (
        <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/courses" className="mobile-nav-link" onClick={closeMenu}>Courses</Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>About Us</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact Us</Link>
        </div>
      )}
    </>
  );
}
