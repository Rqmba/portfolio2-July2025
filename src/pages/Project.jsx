import ProjectCard from "../components/ProjectCard";

function Project({ dataProject }) {
  return (
    <>
      <h3>Works</h3>
      <div className="projectContainer">
        {dataProject.map((data, index) => (
          <ProjectCard key={index} dataProject={data} />
        ))}
      </div>
    </>
  );
}

export default Project;
