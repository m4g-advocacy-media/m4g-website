import React, { useState } from 'react';
import './Header.css'; // We'll create this CSS file separately

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="main-header">
      {/* Container 1: Left Decorative Image */}
      <div className="header-container-1">
        <img src="/assets/Journeys-Header-Image.jpg" alt="" aria-hidden="true" />
      </div>
      
      {/* Container 2: Logo + Menu */}
      <div className="header-container-2">
        {/* Logo placeholder - replace with actual logo image */}
        <div className="logo">M4G LOGO</div>
        
        {/* Navigation Menu */}
        <nav className="navigation">
          <a href="/" className="nav-item">Home</a>
          
          <div 
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('journeys')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-item">Journeys Series ▼</a>
            {activeDropdown === 'journeys' && (
              <div className="dropdown-content">
                <a href="#">Dropdown Item 1</a>
                <a href="#">Dropdown Item 2</a>
                <a href="#">Dropdown Item 3</a>
              </div>
            )}
          </div>
          
          <div 
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('surface')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-item">Under The Surface Series ▼</a>
            {activeDropdown === 'surface' && (
              <div className="dropdown-content">
                <a href="#">Dropdown Item 1</a>
                <a href="#">Dropdown Item 2</a>
                <a href="#">Dropdown Item 3</a>
              </div>
            )}
          </div>
          
          <div 
            className="dropdown"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <a href="#" className="nav-item">Resources ▼</a>
            {activeDropdown === 'resources' && (
              <div className="dropdown-content">
                <a href="#">Dropdown Item 1</a>
                <a href="#">Dropdown Item 2</a>
                <a href="#">Dropdown Item 3</a>
              </div>
            )}
          </div>
          
          <a href="/about-scheduling" className="nav-item">About & Scheduling</a>
        </nav>
      </div>
      
      {/* Container 3: Right Image + Red Line */}
      <div className="header-container-3">
        {/* Add right decorative image here when you have the filename */}
        {/* <img src="/assets/right-image.jpg" alt="" aria-hidden="true" /> */}
        
        {/* Red divider line */}
        <div className="red-divider"></div>
      </div>
    </header>
  );
};

export default Header;