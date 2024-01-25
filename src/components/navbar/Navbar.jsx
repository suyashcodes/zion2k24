import "./navbar.css";
const Navbar = () => {
  const showSidebar = () => {
    document.querySelector(".sidebar").style.display = "flex";
  };
  const closeSidebar = () => {
    document.querySelector(".sidebar").style.display = "none";
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logoContainer">
          <img className="logoImg" src="assets/Devkrafttrans.png" alt="" />
        </div>
        <nav className="nav-elements">
          <ul className="sidebar">
            <li className="clos-btn">
              <svg
                onClick={closeSidebar}
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Schedule">Schedule</a>
            </li>
            <li>
              <a href="#Prizes">Prizes</a>
            </li>
            <li>
              <a href="#Sponsors">Sponsors</a>
            </li>
            <li>
              <a href="#FAQ">FAQ</a>
            </li>
            <li>
              <a href="#EventTeam">EventTeam</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <ul className="navList">
            <li className="navLinks">
              <a href="#About">About</a>
            </li>
            <li className="navLinks">
              <a href="#Schedule">Schedule</a>
            </li>
            <li className="navLinks">
              <a href="#Prizes">Prizes</a>
            </li>
            <li className="navLinks">
              <a href="#Sponsors">Sponsors</a>
            </li>
            <li className="navLinks">
              <a href="#FAQ">FAQ</a>
            </li>
            <li className="navLinks">
              <a href="#EventTeam">EventTeam</a>
            </li>
            <li className="navLinks">
              <a href="#Contact">Contact</a>
            </li>
            <li className="menu-btn">
              <svg
                onClick={showSidebar}
                xmlns="http://www.w3.org/2000/svg"
                height="30"
                viewBox="0 -960 960 960"
                width="30"
                fill="rgb(255, 255, 255)"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
