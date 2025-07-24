function TextProjectCard({ dataProject }) {
  return (
    <div className="textProjectCard">
      <h3 className="textProjectTitle">{dataProject.title}</h3>
      <p className="textProjectRole">{dataProject.role}</p>
      <p className="textProjectDescription">{dataProject.description}</p>
      <div className="textProjectSkills">
        {dataProject.skills.map((skill, i) => (
          <span key={i}>{skill}</span>
        ))}
      </div>
      <p className="textProjectPeriod">{dataProject.period}</p>
    </div>
  );
}

export default TextProjectCard;
