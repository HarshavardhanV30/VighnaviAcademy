```jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logovighnaviacademy.png";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = {
    background: "linear-gradient(90deg, #02060d 0%, #030812 50%, #02060d 100%)",
    borderBottom: "1px solid rgba(0,210,196,.15)",
    padding: isMobile ? "7px 12px" : "7px 42px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    minHeight: isMobile ? "64px" : "86px",
    boxSizing: "border-box",
    overflow: "hidden",
    gap: isMobile ? "8px" : "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,.22)",
  };

  const logoBoxStyle = {
    width: isMobile ? "150px" : "280px",
    height: isMobile ? "52px" : "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    flexShrink: 1,
    position: "relative",
    background: "transparent",
  };

  const logoStyle = {
    width: isMobile ? "210px" : "230px",
    height: isMobile ? "210px" : "230px",
    maxWidth: "none",
    maxHeight: "none",
    objectFit: "cover",
    objectPosition: "center 30%",
    display: "block",
    position: "absolute",
    left: isMobile ? "38%" : "30%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transformOrigin: "center",
    imageRendering: "auto",
    WebkitFontSmoothing: "antialiased",
  };

  const navContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "clamp(20px, 3vw, 42px)",
    fontSize: "clamp(14px, 1.2vw, 17px)",
    fontWeight: "600",
    flex: 1,
  };

  const navLinkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
    transition: "all .25s ease",
    whiteSpace: "nowrap",
    padding: "8px 0",
  };

  const consultationStyle = {
    background: "linear-gradient(135deg, #00D2C4, #00b8aa)",
    color: "#001311",
    padding: isMobile ? "10px 13px" : "13px 24px",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: isMobile ? "12px" : "15px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "5px",
    transition: "all .25s ease",
    whiteSpace: "nowrap",
    boxShadow: "0 5px 18px rgba(0,210,196,.18)",
    border: "1px solid rgba(255,255,255,.08)",
    flexShrink: 0,
  };

  return (
    <>
      <style>{`
        .header-nav-link:hover {
          color: #00D2C4 !important;
          transform: translateY(-2px);
          text-shadow: 0 0 12px rgba(0,210,196,.25);
        }

        .header-cta:hover {
          background: linear-gradient(135deg,#00eee0,#00b3a6) !important;
          box-shadow: 0 0 24px rgba(0,210,196,.45) !important;
          transform: translateY(-2px) scale(1.03);
        }

        .header-cta:active {
          transform: scale(.97);
        }

        .header-logo:hover {
          transform: scale(1.025);
        }

        .header-logo {
          transition: transform .3s ease;
        }

        @media (max-width: 480px) {
          .header-nav {
            padding-left: 8px !important;
            padding-right: 8px !important;
          }

          .header-logo-box {
            width: 125px !important;
          }

          .header-logo-img {
            width: 190px !important;
            height: 190px !important;
          }

          .header-cta {
            padding: 9px 11px !important;
            font-size: 11px !important;
          }
        }

        @media (max-width: 360px) {
          .header-logo-box {
            width: 105px !important;
          }

          .header-logo-img {
            width: 175px !important;
            height: 175px !important;
          }

          .header-cta {
            padding: 8px 9px !important;
            font-size: 10px !important;
          }
        }
      `}</style>

      <nav className="header-nav" style={navStyle}>
        {/* LOGO */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 1,
            minWidth: 0,
          }}
        >
          <div
            className="header-logo header-logo-box"
            style={logoBoxStyle}
          >
            <img
              className="header-logo-img"
              src={logo}
              alt="Vighnavi Academy Logo"
              style={logoStyle}
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        {!isMobile && (
          <div style={navContainerStyle}>
            <Link
              to="/"
              className="header-nav-link"
              style={navLinkStyle}
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="header-nav-link"
              style={navLinkStyle}
            >
              Courses
            </Link>

            <Link
              to="/about"
              className="header-nav-link"
              style={navLinkStyle}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="header-nav-link"
              style={navLinkStyle}
            >
              Contact Us
            </Link>
          </div>
        )}

        {/* CONSULTATION BUTTON */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexShrink: 0,
          }}
        >
          <Link
            to="/contact"
            className="header-cta"
            style={consultationStyle}
          >
            <span>Book Consultation</span>
            <span
              style={{
                fontSize: isMobile ? "14px" : "18px",
                lineHeight: 1,
                marginTop: "-1px",
              }}
            >
              →
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
```
