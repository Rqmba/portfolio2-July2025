import ProjectCard from "../components/ProjectCard";

function Project({ dataProject }) {
  return (
    <section id="projects">
      <h2 style={{ textAlign: "center" }}>Works</h2>
      <div className="projectContainer">
        {dataProject.slice(0, 3).map((data, index) => (
          <ProjectCard key={index} dataProject={data} />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <a href="/projects" className="btnSocial">
          View Full Projects
          <img
            alt="arrow up"
            src="/assets/arrow_up.svg"
            style={{ width: "18px", marginLeft: "8px" }}
          />
        </a>
      </div>
    </section>
  );
}

export default Project;
