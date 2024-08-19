import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import "./HamburgerMenu.css"

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="hamburger-menu">
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <a href="#onas">O nás</a>
          <a href="#sluzby">Služby</a>
          <a href="#tym">Tým</a>
          <a href="#recenzeLink">Recenze</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </div>
    );
  }