import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolioData";

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </section>
  );
}

export default Projects;