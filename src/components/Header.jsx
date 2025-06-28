import React, { useState } from 'react'
import Button from './Button'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
    
        {/* Logo and Navigation */}
        <div className="header-left">
          <span className="logo">Shortly</span>

          <nav className="nav">
            <a href="/">Features</a>
            <a href="/">Pricing</a>
            <a href="/">Resources</a>
          </nav>
        </div>

        {/* Right Side with Login and Sign Up */}
        <div className="header-right">
          <div className="nav-buttons">
            <a href="/">Login</a>
            <Button label="Sign Up" variant="secondary" />
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <AiOutlineCloseSquare /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <a href="/">Features</a>
              <a href="/">Pricing</a>
              <a href="/">Resources</a>
              <div className="mobile-buttons">
                <a href="/">Login</a>
                <Button label="Sign Up" fullWidth variant="secondary"/>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;