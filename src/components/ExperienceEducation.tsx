import {
  education,
  experience,
  spokenLanguages,
} from "@/content/portfolio";
import { Section } from "./Section";

export function ExperienceEducation() {
  return (
    <Section id="trayectoria" order={8} title="Experiencia y formación">
      {experience.map((job) => (
        <article key={job.company} className="entry">
          <h3 className="entry__title">{job.role}</h3>
          <p className="entry__meta">
            {job.company} · {job.location} · {job.period}
          </p>
          <ul className="plain-list">
            {job.duties.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
          <p className="entry__note">{job.note}</p>
        </article>
      ))}

      {education.map((item) => (
        <article key={item.degree} className="entry">
          <h3 className="entry__title">
            {item.logo ? (
              <span
                className="entry__logo"
                style={{
                  maskImage: `url(${item.logo})`,
                  WebkitMaskImage: `url(${item.logo})`,
                }}
                aria-hidden="true"
              />
            ) : null}
            {item.degree}
          </h3>
          <p className="entry__meta">
            {item.institution} · {item.year}
          </p>
        </article>
      ))}

      <article className="entry">
        <h3 className="entry__title">Idiomas</h3>
        <p className="entry__meta">{spokenLanguages.join(" · ")}</p>
      </article>
    </Section>
  );
}
