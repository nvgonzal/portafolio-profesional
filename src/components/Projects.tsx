import { projects } from "@/content/portfolio";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="proyectos" order={6} title="Proyectos personales">
      <ul className="projects">
        {projects.map((project) => (
          <li key={project.name} className="project">
            <h3 className="project__name">
              <a href={project.repositoryUrl}>{project.name}</a>
            </h3>
            <p>{project.description}</p>
            <p className="mono-values">{project.technologies.join(" · ")}</p>
            <p className="project__links">
              <a href={project.repositoryUrl}>Repositorio</a>
              {project.demoUrl ? <a href={project.demoUrl}>Demo</a> : null}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
