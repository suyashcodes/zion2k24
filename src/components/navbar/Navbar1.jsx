import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState("assets/navlogo.png");
  const [logoClass, setlogoClass] = useState("logoImg");
  useEffect(() => {
    const handleScroll = () => {
      // Update the state based on scroll position
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (window.scrollY > 150) {
        setLogoSrc("assets/zionfinal.png");
        setlogoClass("logoImg logoScrolled");
      } else {
        setLogoSrc("assets/navlogo.png");
        setlogoClass("logoImg");
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const showSidebar = () => {
    document.querySelector(".sidebar").style.display = "flex";
  };
  const closeSidebar = () => {
    document.querySelector(".sidebar").style.display = "none";
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-elements">
          <ul className="sidebar">
            <li>
              <svg
                className="close-btn"
                onClick={closeSidebar}
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                fill="white"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            <li>
              <a
                onClick={closeSidebar}
                href="#home"
                className="sideLinks"
                activeClassName="activeLink"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={closeSidebar}
                href="#about"
                className="sideLinks"
                activeClassName="activeLink"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#events"
                onClick={closeSidebar}
                className="sideLinks"
                activeClassName="activeLink"
              >
                Events
              </a>
            </li>
            <li>
              <a
                onClick={closeSidebar}
                href="#team"
                className="sideLinks"
                activeClassName="activeLink"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#faq"
                onClick={closeSidebar}
                className="sideLinks"
                activeClassName="activeLink"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href=".footer-wrapper"
                className="sideLinks"
                onClick={closeSidebar}
                activeClassName="activeLink"
              >
                Contact
              </a>
            </li>
          </ul>
          <ul className={`navList ${scrolled ? "scrolled" : ""}`}>
            <li>
              <a href="#home" className="navLinks" activeClassName="activeLink">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="navLinks"
                activeClassName="activeLink"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#events"
                className="navLinks"
                activeClassName="activeLink"
              >
                Events
              </a>
            </li>
            <li>
              <div className="logoContainer">
                <img className={logoClass} src={logoSrc} alt="" />
              </div>
            </li>
            <li>
              <a
                href="#schedule"
                className="navLinks"
                activeClassName="activeLink"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#footer"
                className="navLinks"
                activeClassName="activeLink"
              >
                Contact
              </a>
            </li>

            <li>
              <a href="#faq" className="navLinks" activeClassName="activeLink">
                FAQ
              </a>
            </li>
            <li className="showSidebar">
              <svg
                onClick={showSidebar}
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                fill="white"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;