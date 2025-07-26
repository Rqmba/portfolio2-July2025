import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import projects from "./data/project";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="rootContainer">
      <div className="backgroundEffect" />

      <div className="contentWrapper">
        <div className="layoutContainer">
          {/* LEFT BLOCK (FIXED) */}
          <header className="leftColumn">
            <div>
              {/* Toggle mode */}
              <div
                className="modeToggle"
                onClick={() => setDarkMode(!darkMode)}
              >
                <img
                  src={darkMode ? "/assets/sun.svg" : "/assets/moon.svg"}
                  alt="Toggle dark mode"
                  style={{ width: "24px" }}
                />
              </div>

              {/* Intro / H1 / Description / Links */}
              <Home />
            </div>

            {/* Social Links */}
            <div className="socialWrapper">
              <SocialLinks />
            </div>
          </header>

          {/* RIGHT BLOCK (SCROLLABLE) */}
          <main className="rightContent" id="content">
            <Project dataProject={projects} />
            <About />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
