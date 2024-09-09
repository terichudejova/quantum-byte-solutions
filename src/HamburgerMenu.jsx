import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./HamburgerMenu.css"

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
      setIsOpen(false);
    }

    useEffect(() => {
      const handleClickOutside = (event) => {
          if (navRef.current && !navRef.current.contains(event.target)) {
              setIsOpen(false);
          }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
  
    return (
      <div className="hamburger-menu">
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav ref={navRef} className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="#onas" onClick={handleCloseMenu}>O nás</a>
          <a href="#sluzby" onClick={handleCloseMenu}>Služby</a>
          <a href="#tym" onClick={handleCloseMenu}>Tým</a>
          <a href="#recenzeLink" onClick={handleCloseMenu}>Recenze</a>
          <a href="#kontakt" onClick={handleCloseMenu}>Kontakt</a>
        </nav>
      </div>
    );
  }