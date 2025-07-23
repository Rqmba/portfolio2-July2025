import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import projects from "./data/project";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);
  return (
    <>
      <div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home />
        <Project dataProject={projects} />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
