import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import projects from "./data/project";
import Project from "./pages/Project";
import ProjectPage from "./pages/ProjectPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Project dataProject={projects} />
                <About />
                <Contact />
              </>
            }
          />
          <Route
            path="/projects"
            element={<ProjectPage dataProjects={projects} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
