import Button from "./button";

function ProjectCard({ dataProject }) {
  return (
    <div className="projectCard">
      <a href={dataProject.demo} target="_blank" rel="noopener noreferrer">
        <img src={dataProject.image} alt={dataProject.title} />
      </a>
      <h4
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        {dataProject.title}
      </h4>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "1rem",
          gap: "0.5rem",
        }}
      >
        {dataProject.skills.map((skill, i) => (
          <span key={i} className="skillBtn">
            {skill}
          </span>
        ))}
      </div>

      <Button label="Demo" url={dataProject.demo} />
    </div>
  );
}

export default ProjectCard;
