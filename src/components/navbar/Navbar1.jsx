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
                href="#domain"
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
                href="#prizes"
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
