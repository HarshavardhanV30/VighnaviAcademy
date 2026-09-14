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
    backgroundColor: "#030812",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    padding: isMobile ? "6px 12px" : "6px 42px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    boxSizing: "border-box",
    minHeight: isMobile ? "64px" : "86px",
    gap: isMobile ? "8px" : "20px",
    overflow: "hidden",
  };

  const logoBoxStyle = {
    width: isMobile ? "145px" : "280px",
    height: isMobile ? "54px" : "76px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    flexShrink: 1,
  };

  const logoStyle = {
    width: isMobile ? "200px" : "225px",
    height: isMobile ? "200px" : "225px",
    maxWidth: "none",
    maxHeight: "none",
    objectFit: "cover",
    objectPosition: "center 30%",
    display: "block",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  const navLinksStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "clamp(20px, 3vw, 40px)",
    flex: 1,
    fontSize: "clamp(14px, 1.2vw, 17px)",
    fontWeight: "600",
  };

  const linkStyle = {
    color: "#d1d5db",
    textDecoration: "none",
    whiteSpace: "nowrap",
    padding: "8px 0",
    transition: "color 0.2s ease",
  };

  const buttonStyle = {
    width: isMobile ? "44px" : "50px",
    height: isMobile ? "44px" : "50px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    fontSize: isMobile ? "22px" : "25px",
    flexShrink: 0,
    boxShadow: "0 5px 18px rgba(37,211,102,0.25)",
    transition: "transform 0.2s ease",
  };

  return (
    <nav style={navStyle}>

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
        <div style={logoBoxStyle}>
          <img
            src={logo}
            alt="Vighnavi Academy Logo"
            style={logoStyle}
          />
        </div>
      </Link>

      {!isMobile && (
        <div style={navLinksStyle}>

          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/courses" style={linkStyle}>
            Courses
          </Link>

          <Link to="/about" style={linkStyle}>
            About Us
          </Link>

          <Link to="/contact" style={linkStyle}>
            Contact Us
          </Link>

        </div>
      )}

      <Link
        to="/contact"
        style={buttonStyle}
        aria-label="Contact Us"
        title="Contact Us"
      >
        📞
      </Link>

    </nav>
  );
}
```
