import TextProjectCard from "../components/TextProjectCard";

function ProjectPage({ dataProjects }) {
  return (
    <section className="sectionWrapper">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className="projectContainer">
        {dataProjects.map((data, index) => (
          <TextProjectCard key={index} dataProject={data} />
        ))}
      </div>
    </section>
  );
}

export default ProjectPage;
