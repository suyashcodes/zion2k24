import "./navbar.css";
const Navbar = () => {
  const showSidebar = () => {
    document.querySelector(".sidebar").style.display = 'flex';
  }
  const closeSidebar = () =>{
    document.querySelector(".sidebar").style.display = "none";
  }
  return (
    <div className="navbar">
      <div className="container">
        <div className="logoContainer">
          <img className="logoImg" src="assets/Devkrafttrans.png" alt="" />
        </div>
        <nav className="nav-elements">
          <ul className="sidebar">
<svg onClick = {closeSidebar} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            <li></li>
            <li>About</li>
            <li>Schedule</li>
            <li>Prizes</li>
            <li>Sponsors</li>
            <li>FAQ</li>
            <li>EventTeam</li>
            <li>Contact</li>
          </ul>
          <ul className="navList">
            <li className="navLinks">About</li>
            <li className="navLinks">About</li>
            <li className="navLinks">About</li>
            <li className="navLinks">About</li>
            <li className="navLinks">About</li>
            <li className="navLinks">About</li>
            <li className="menu-btn">
              <svg onClick={showSidebar()}
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
