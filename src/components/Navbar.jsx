import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbarTop">
          <div className="modeToggle" onClick={() => setDarkMode(!darkMode)}>
            <img
              src={darkMode ? "/assets/sun.svg" : "/assets/moon.svg"}
              alt="Toggle dark mode"
              style={{ width: "24px" }}
            />
          </div>

          <div className="burger" onClick={() => setIsOpen(!isOpen)}>
            <img
              alt={isOpen ? "close" : "burger"}
              src={
                isOpen ? "/assets/cross_burger.svg" : "/assets/burger_menu.svg"
              }
            />
          </div>
        </div>

        <div className={`navbarContainer ${isOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)} className="btnSocial">
            Home
          </Link>

          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="btnSocial"
          >
            Projects
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="btnSocial"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btnSocial"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
