import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    document.body.style.overflow = "auto";
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <img src={logo} alt="Andile Mnukwa Logo" className="navbar-logo" />
        
        <img 
          src={menu_open} 
          onClick={openMenu} 
          alt="Open Menu" 
          className="nav-mob-open"
        />
        
        <ul ref={menuRef} className="nav-menu">
          <img 
            src={menu_close} 
            onClick={closeMenu} 
            alt="Close Menu" 
            className="nav-mob-close" 
          />
          
          <li className={menu === "home" ? "active" : ""}>
            <AnchorLink 
              className="anchor-link" 
              href="#home"
              onClick={() => handleMenuClick("home")}
            >
              <p>Home</p>
              {menu === "home" && <img src={underline} alt="" className="menu-underline" />}
            </AnchorLink>
          </li>
          
          <li className={menu === "about" ? "active" : ""}>
            <AnchorLink 
              className="anchor-link" 
              offset={50} 
              href="#about"
              onClick={() => handleMenuClick("about")}
            >
              <p>About Me</p>
              {menu === "about" && <img src={underline} alt="" className="menu-underline" />}
            </AnchorLink>
          </li>
          
          <li className={menu === "services" ? "active" : ""}>
            <AnchorLink 
              className="anchor-link" 
              offset={50} 
              href="#services"
              onClick={() => handleMenuClick("services")}
            >
              <p>Services</p>
              {menu === "services" && <img src={underline} alt="" className="menu-underline" />}
            </AnchorLink>
          </li>
          
          <li className={menu === "work" ? "active" : ""}>
            <AnchorLink 
              className="anchor-link" 
              offset={50} 
              href="#work"
              onClick={() => handleMenuClick("work")}
            >
              <p>Portfolio</p>
              {menu === "work" && <img src={underline} alt="" className="menu-underline" />}
            </AnchorLink>
          </li>
          
          <li className={menu === "contact" ? "active" : ""}>
            <AnchorLink 
              className="anchor-link" 
              offset={50} 
              href="#contact"
              onClick={() => handleMenuClick("contact")}
            >
              <p>Contact</p>
              {menu === "contact" && <img src={underline} alt="" className="menu-underline" />}
            </AnchorLink>
          </li>
        </ul>
        
        <div className="nav-connect">
          <AnchorLink 
            className="anchor-link" 
            offset={50} 
            href="#contact"
          >
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;