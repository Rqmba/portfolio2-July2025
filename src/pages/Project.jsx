import ProjectCard from "../components/ProjectCard";

function Project({ dataProject }) {
  return (
    <div className="sectionWrapper">
      <h2 style={{ textAlign: "center" }}>Works</h2>
      <div className="projectContainer">
        {dataProject.map((data, index) => (
          <ProjectCard key={index} dataProject={data} />
        ))}
      </div>
    </div>
  );
}

export default Project;
