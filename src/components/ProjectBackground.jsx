import "./ProjectBackground.css";
function ProjectBackground({ description }) {
  return (
    <div className="project-background-wrapper">
      <p className="pb-text">Project Background</p>
      <p className="pb-description">{description}</p>
    </div>
  );
}

export default ProjectBackground;
