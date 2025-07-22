import ProjectCard from "../components/ProjectCard";

function Project({ dataProject }) {
  return (
    <div style={{ margin: "1rem", padding: "1rem" }}>
      <h3 style={{ textAlign: "center", fontSize: "32px" }}>Works</h3>
      <div className="projectContainer">
        {dataProject.map((data, index) => (
          <ProjectCard key={index} dataProject={data} />
        ))}
      </div>
    </div>
  );
}

export default Project;
