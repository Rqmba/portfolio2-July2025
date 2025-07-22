import Button from "./button";

function ProjectCard({ dataProject }) {
  return (
    <>
      <div className="projectCard">
        <a href={dataProject.demo} target="_blank" rel="noopener noreferrer">
          <img src={dataProject.image} alt={dataProject.title} />
        </a>
        <h4 style={{ fontWeight: "bold", fontSize: "24px" }}>
          {dataProject.title}
        </h4>
        <Button label="Demo" url={dataProject.demo} />
      </div>
    </>
  );
}

export default ProjectCard;
