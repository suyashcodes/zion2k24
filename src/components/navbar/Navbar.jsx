import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="container">
        <div className="logoContainer">
          <img className="logoImg" src="assets/Devkrafttrans.png" alt="" />
        </div>
        <div className="nav-elements">
          {/* Toggle Button for Mobile */}
          <div className="toggle-button" onClick={handleToggleMenu}>
            &#9776;
          </div>

          {/* Navigation Links */}
          <ul className={`navList ${isMobileMenuOpen ? "mobile-menu" : ""}`}>
            <li>
              <NavLink
                to="/about"
                className="navLinks"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className="navLinks"
                activeClassName="activeLink"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className="navLinks"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className="navLinks"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className="navLinks"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/home"
                className="navLinks"
                activeClassName="activeLink"
              >
                Home
              </NavLink>
            </li>
            {/* Add other navigation links as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
