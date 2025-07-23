import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div className="navbarTop">
          <div className="burger" onClick={() => setIsOpen(!isOpen)}>
            <img
              alt={isOpen ? "close" : "burger"}
              src={
                isOpen ? "/assets/cross_burger.svg" : "/assets/burger_menu.svg"
              }
            />
          </div>
          <div
            className="modeToggle"
            onClick={() => setDarkMode(!darkMode)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={darkMode ? "/assets/sun.svg" : "/assets/moon.svg"}
              alt="Toggle dark mode"
              style={{ width: "24px" }}
            />
          </div>
        </div>

        <div className={`navbarContainer ${isOpen ? "show" : ""}`}>
          <span onClick={() => setIsOpen(false)}>Projects</span>
          <span onClick={() => setIsOpen(false)}>About</span>
          <span onClick={() => setIsOpen(false)}>Contact</span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
