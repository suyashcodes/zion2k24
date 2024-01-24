import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logoContainer">
          <img className="logoImg" src="assets/Devkrafttrans.png" alt="" />
        </div>
        <div className="nav-elements">
          <ul className="navList">
            <li>
              <span className="navLinks">About</span>
            </li>
            <li>
              <span className="navLinks">Schedule</span>
            </li>
            <li>
              <span className="navLinks">Prizes</span>
            </li>
            <li>
              <span className="navLinks">Sponsors</span>
            </li>
            <li>
              <span className="navLinks">EventTeam</span>
            </li>
            <li>
              <span className="navLinks">FAQ</span>
            </li>
            <li>
              <span className="navLinks">Contact</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
