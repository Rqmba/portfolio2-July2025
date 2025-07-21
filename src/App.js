import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import projects from "./data/project";
import Project from "./pages/Project";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Project dataProject={projects} />
      </div>
    </>
  );
}

export default App;
