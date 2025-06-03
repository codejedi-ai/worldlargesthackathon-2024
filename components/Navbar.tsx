'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background-color: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #374151;
        }
        .navbar-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        .logo-text {
          font-size: 1.875rem;
          font-weight: bold;
          background: linear-gradient(45deg, #fbbf24, #ef4444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: transform 0.3s ease;
        }
        .logo:hover .logo-text {
          transform: scale(1.1);
        }
        .logo-emoji {
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }
        .logo:hover .logo-emoji {
          transform: rotate(12deg);
        }
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
        }
        .nav-link {
          position: relative;
          color: #d1d5db;
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: white;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #fbbf24, #ef4444);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .cta-button {
          background: linear-gradient(45deg, #fbbf24, #ef4444);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease;
          margin-left: 1rem;
        }
        .cta-button:hover {
          transform: scale(1.05);
        }
        .mobile-menu-button {
          display: block;
          padding: 0.5rem;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }
        }
        .mobile-menu-button:hover {
          color: #fbbf24;
        }
        .hamburger-line {
          width: 24px;
          height: 2px;
          background-color: currentColor;
          transition: all 0.3s ease;
          margin: 4px 0;
        }
        .hamburger-line.open:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        .mobile-menu {
          display: block;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .mobile-menu {
            display: none;
          }
        }
        .mobile-menu.closed {
          max-height: 0;
          opacity: 0;
        }
        .mobile-menu.open {
          max-height: 256px;
          opacity: 1;
        }
        .mobile-menu-content {
          padding: 1rem 0;
          border-top: 1px solid #374151;
        }
        .mobile-nav-link {
          display: block;
          color: #d1d5db;
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }
        .mobile-nav-link:hover {
          color: #fbbf24;
        }
        .mobile-cta-button {
          background: linear-gradient(45deg, #fbbf24, #ef4444);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          margin-top: 1rem;
        }
      `}</style>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <Link href="/" className="logo">
            <div className="logo-emoji">
                🎬
              </div>

            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="nav-link"
                >
                  {item}
                </Link>
              ))}
              
              {/* CTA Button */}
              <button className="cta-button">
                Get Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button"
            >
              <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
              <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
            <div className="mobile-menu-content">
              {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <button className="mobile-cta-button">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;