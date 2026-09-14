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

  return (
    <nav
      style={{
        backgroundColor: "#030812",
        borderBottom: "1px solid rgba(255,255,255,.08)",
        padding: isMobile ? "6px 10px" : "6px 42px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        boxSizing: "border-box",
        minHeight: isMobile ? "72px" : "92px",
        overflow: "hidden",
        gap: isMobile ? "5px" : "20px",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? "10px" : "15px",
          textDecoration: "none",
          flexShrink: 1,
          minWidth: 0,
        }}
      >
        <div
          style={{
            width: isMobile ? "145px" : "300px",
            height: isMobile ? "65px" : "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 1,
            position: "relative",
            backgroundColor: "#030812",
          }}
        >
          <img
            src={logo}
            alt="Vighnavi Academy Logo"
            style={{
              width: isMobile ? "280px" : "210px",
              height: isMobile ? "280px" : "210px",
              maxWidth: "none",
              maxHeight: "none",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block",
              position: "absolute",
              left: "30%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              transformOrigin: "center",
              imageRendering: "auto",
            }}
          />
        </div>
      </Link>

      {!isMobile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "38px",
            fontSize: "17px",
            fontWeight: "600",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              transition: "all .2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D2C4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Home
          </Link>

          <Link
            to="/courses"
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              transition: "all .2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D2C4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Courses
          </Link>

          <Link
            to="/about"
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              transition: "all .2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D2C4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              transition: "all .2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D2C4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Contact Us
          </Link>
        </div>
      )}

      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to="/contact"
          style={{
            backgroundColor: "#00D2C4",
            color: "#000",
            padding: isMobile ? "10px 12px" : "13px 25px",
            borderRadius: "28px",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: isMobile ? "11px" : "16px",
            display: "inline-block",
            transition: "all .3s ease",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,210,196,.18)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#00b3a6";
            e.currentTarget.style.boxShadow =
              "0 0 18px rgba(0,210,196,.5)";
            e.currentTarget.style.transform =
              "translateY(-2px) scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#00D2C4";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(0,210,196,.18)";
            e.currentTarget.style.transform =
              "translateY(0) scale(1)";
          }}
        >
          Book Consultation&nbsp; →
        </Link>
      </div>
    </nav>
  );
}
```
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

  return (
    <nav
      style={{
        backgroundColor: "#030812",
        borderBottom: "1px solid rgba(255,255,255,.08)",
        padding: isMobile ? "6px 10px" : "6px 42px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        boxSizing: "border-box",
        minHeight: isMobile ? "72px" : "92px",
        overflow: "hidden",
        gap: isMobile ? "5px" : "20px",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? "10px" : "15px",
          textDecoration: "none",
          flexShrink: 1,
          minWidth: 0,
        }}
      >
        <div
          style={{
            width: isMobile ? "145px" : "300px",
            height: isMobile ? "65px" : "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 1,
            position: "relative",
            backgroundColor: "#030812",
          }}
        >
          <img
            src={logo}
            alt="Vighnavi Academy Logo"
            style={{
              width: isMobile ? "280px" : "210px",
              height: isMobile ? "280px" : "210px",
              maxWidth: "none",
              maxHeight: "none",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block",
              position: "absolute",
              left: "30%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              transformOrigin: "center",
              imageRendering: "auto",
            }}
          />
        </div>
      </Link>

      {!isMobile && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "38px",
            fontSize: "17px",
            fontWeight: "600",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Link
            to="/"
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              transition: "all .2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D2C4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Home
          </Link>

          <Link
            to="/courses"
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              transition: "all .2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D2C4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Courses
          </Link>

          <Link
            to="/about"
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              transition: "all .2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D2C4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            style={{
              color: "#d1d5db",
              textDecoration: "none",
              transition: "all .2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#00D2C4";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#d1d5db";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Contact Us
          </Link>
        </div>
      )}

      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to="/contact"
          style={{
            backgroundColor: "#00D2C4",
            color: "#000",
            padding: isMobile ? "10px 12px" : "13px 25px",
            borderRadius: "28px",
            textDecoration: "none",
            fontWeight: "700",
            fontSize: isMobile ? "11px" : "16px",
            display: "inline-block",
            transition: "all .3s ease",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(0,210,196,.18)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#00b3a6";
            e.currentTarget.style.boxShadow =
              "0 0 18px rgba(0,210,196,.5)";
            e.currentTarget.style.transform =
              "translateY(-2px) scale(1.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#00D2C4";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(0,210,196,.18)";
            e.currentTarget.style.transform =
              "translateY(0) scale(1)";
          }}
        >
          Book Consultation&nbsp; →
        </Link>
      </div>
    </nav>
  );
}
```
